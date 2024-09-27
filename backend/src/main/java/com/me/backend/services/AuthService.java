package com.me.backend.services;

import com.me.backend.dtos.LoginDTO;
import com.me.backend.dtos.RegisterDTO;
import com.me.backend.dtos.ResponseDTO;

public interface AuthService {
    ResponseDTO login(LoginDTO loginDTO);
    ResponseDTO register(RegisterDTO registerDTO);
} 
