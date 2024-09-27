package com.me.backend.services.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.me.backend.dtos.LoginDTO;
import com.me.backend.dtos.RegisterDTO;
import com.me.backend.dtos.ResponseDTO;
import com.me.backend.entities.User;
import com.me.backend.mapper.AuthMapper;
import com.me.backend.repositories.UserRepository;
import com.me.backend.security.JwtToken;
import com.me.backend.services.AuthService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtToken jwtToken;

    @Override
    public ResponseDTO login(LoginDTO loginDTO) {
        User user = AuthMapper.toEntity(loginDTO);
        User foundUser = this.userRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        if (isPasswordValid(loginDTO.password(), foundUser.getPassword())) {
            String token = jwtToken.generateToken(foundUser);
            return AuthMapper.toResponseDTO(foundUser, token);
        }
        throw new RuntimeException("Senha incorreta!");
    }

    @Override
    public ResponseDTO register(RegisterDTO registerDTO) {
        User newUser = AuthMapper.toEntity(registerDTO);

        if (userRepository.findByEmail(newUser.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email já está em uso.");
        }

        newUser.setPassword(encodePassword(newUser.getPassword()));
        this.userRepository.save(newUser);

        String token = jwtToken.generateToken(newUser);
        return AuthMapper.toResponseDTO(newUser, token);
    }

    private String encodePassword(String password) {
        return passwordEncoder.encode(password);
    }

    private boolean isPasswordValid(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
}
