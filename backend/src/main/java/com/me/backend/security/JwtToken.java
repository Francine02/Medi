package com.me.backend.security;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

@Service
public class JwtToken {
    @Value("${api.token.secret}")
    private String secretKey;
    
    // Geração de token JWT usando UserDetails
    public String generateToken(UserDetails userDetails) {
        Algorithm algorithm = Algorithm.HMAC256(secretKey); 
        return JWT.create()
                .withSubject(userDetails.getUsername()) // Identificar o dono do token
                .withIssuedAt(new Date()) // Quando o token foi emitido
                .withExpiresAt(Date.from(LocalDateTime.now().plusHours(10)
                        .atZone(ZoneId.systemDefault()).toInstant()))
                .sign(algorithm);
    }

    // Verifica se o token é válido e retorna o DecodedJWT
    public DecodedJWT verifyToken(String token) {
        Algorithm algorithm = Algorithm.HMAC256(secretKey); 

        return JWT.require(algorithm)
                .build()
                .verify(token);
    }

    // Responsável por validar se o token fornecido é válido para o usuário e se ainda não expirou
    public Boolean validateToken(DecodedJWT decodedJWT, UserDetails userDetails) {
        final String username = decodedJWT.getSubject();
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(decodedJWT));
    }

    // Verifica se o token está expirado
    private boolean isTokenExpired(DecodedJWT decodedJWT) {
        Date expiration = decodedJWT.getExpiresAt();
        return expiration.before(new Date());
    }
}
