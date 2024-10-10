package com.me.backend.repositories;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.me.backend.entities.Medicine;
import com.me.backend.entities.User;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
    Optional <Medicine> findByName(String name);
    List<Medicine> findByUser(User user);
    @Query("SELECT m FROM Medicine m WHERE m.dateTime BETWEEN :start AND :end AND m.emailSent = false")
    List<Medicine> findByDateTimeBetweenAndEmailSentFalse(@Param("start") LocalDateTime start, @Param("end") LocalDateTime end);

}