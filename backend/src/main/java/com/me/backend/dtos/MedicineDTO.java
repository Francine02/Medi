package com.me.backend.dtos;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;

public record MedicineDTO(
    Long id,
    @NotBlank(message = "Nome não pode ser nulo")
    String name,
    String description,
    @NotBlank(message = "Data não pode ser nulo")
    LocalDateTime dateTime
) {}
