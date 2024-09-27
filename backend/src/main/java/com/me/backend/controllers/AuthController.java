package com.me.backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.me.backend.dtos.LoginDTO;
import com.me.backend.dtos.RegisterDTO;
import com.me.backend.dtos.ResponseDTO;
import com.me.backend.services.AuthService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login (@Valid @RequestBody LoginDTO loginDTO){
        try {
            ResponseDTO responseDTO = authService.login(loginDTO);
            return ResponseEntity.ok(responseDTO);
        } catch (RuntimeException e){
            return ResponseEntity.badRequest().body(new ResponseDTO(e.getMessage(), null));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> register (@RequestBody RegisterDTO registerDTO){
        try {
            ResponseDTO responseDTO = authService.register(registerDTO);
            return ResponseEntity.ok(responseDTO);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new ResponseDTO(e.getMessage(), null));
        }
    }
}
