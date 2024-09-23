package com.me.backend.security;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtToken {
    @Value("${api.token.secret}")
    private String secretKey;

    // Geração de token JWT usando UserDetails
    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
                .setSubject(userDetails.getUsername()) // Identificar o dono do token
                .setIssuedAt(new Date()) // Quando o token foi emitido
                .setExpiration(Date.from(LocalDateTime.now().plusHours(10)
                        .atZone(ZoneId.systemDefault()).toInstant()))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // Responsável por validar se o token fornecido é válido para o usuário e se ainda não expirou
    public Boolean validateToken(String token, UserDetails userDetails){
        final String username = extractClaim(token, Claims::getSubject);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    // Extração de claims(informação) de um token
    protected <T> T extractClaim(String token, java.util.function.Function<Claims, T> claimsResolver) {
        Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
        return claimsResolver.apply(claims);
    }

    // Verifica se o token está expirado
    private boolean isTokenExpired(String token) {
        Date expiration = extractClaim(token, Claims::getExpiration);
        return expiration.before(new Date());
    }
}
