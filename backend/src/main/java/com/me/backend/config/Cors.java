package com.me.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Cors implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/**")
                .allowedOrigins(
                        "http://localhost:8080",
                        "https://medi-f3fk.onrender.com",
                        "https://medi-five-fawn.vercel.app/")
                .allowedMethods("GET", "POST", "DELETE", "PUT");
    }
}
