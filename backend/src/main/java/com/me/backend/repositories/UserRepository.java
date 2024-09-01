package com.me.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.me.backend.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
