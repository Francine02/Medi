package com.me.backend.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    @Value("${my-email}")
    private String secretEmail;
    
    public void sendEmail (String to, String subject, String body){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(secretEmail);
        message.setTo(to);
        message.setText(body);
        message.setSubject(subject);

        mailSender.send(message);
    }
}
