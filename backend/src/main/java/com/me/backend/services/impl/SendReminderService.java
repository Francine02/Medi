package com.me.backend.services.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.me.backend.entities.Medicine;
import com.me.backend.repositories.MedicineRepository;

@Service
@EnableScheduling
public class SendReminderService {
    @Autowired
    private EmailService emailService;

    @Autowired
    private MedicineRepository medicineRepository;

    @Scheduled(fixedRate = 60000)
    public void sendReminderEmails() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startWindow = now.minusMinutes(1);
        LocalDateTime endWindow = now.plusMinutes(1);

        List<Medicine> medicines = medicineRepository.findByDateTimeBetweenAndEmailSentFalse(startWindow, endWindow);

        for (Medicine medicine : medicines) {
            String subject = "Lembrete: Medicamento a ser tomado";
            String body = "Lembre-se de tomar o seu medicamento " + medicine.getName() + " agora!";
            emailService.sendEmail(medicine.getEmailToSend(), subject, body);

            medicine.setEmailSent(true);
            medicineRepository.save(medicine); 
        }
    }

}
