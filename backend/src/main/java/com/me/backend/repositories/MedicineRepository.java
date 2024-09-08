package com.me.backend.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.me.backend.entities.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
    Optional <Medicine> findByName(String name);
}