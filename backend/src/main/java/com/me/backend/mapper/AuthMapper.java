package com.me.backend.mapper;

import com.me.backend.dtos.LoginDTO;
import com.me.backend.dtos.RegisterDTO;
import com.me.backend.dtos.ResponseDTO;
import com.me.backend.entities.User;

public class AuthMapper {
    public static User toEntity(LoginDTO loginDTO){// Converter LoginDTO para User
        User user = new User();
        user.setEmail(loginDTO.email());
        user.setPassword(loginDTO.password());
        return user;
    }

    public static User toEntity(RegisterDTO registerDTO){// Converter RegisterDTO para User
        User user = new User();
        user.setEmail(registerDTO.email());
        user.setName(registerDTO.name());
        user.setPassword(registerDTO.password());
        return user;
    }

    public static ResponseDTO toResponseDTO(User user, String token){     // Converter User para ResponseDTO
        return new ResponseDTO(user.getName(), token);
    }
}
