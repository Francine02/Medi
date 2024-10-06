package com.me.backend.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.me.backend.entities.Medicine;
import com.me.backend.entities.User;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
    Optional <Medicine> findByName(String name);
    List<Medicine> findByUser(User user);
}