# Usa uma imagem do Maven com JDK para o build
FROM maven:3.8.5-openjdk-17-slim AS build

# Copia os arquivos do backend para a imagem
COPY . .

# Usa uma imagem mais leve do JDK para a aplicação final
FROM openjdk:17-jdk-slim

# Expõe a porta 8080
EXPOSE 8080

# Copia o JAR gerado para a nova imagem
COPY --from=build Medi.jar medi.jar

ENTRYPOINT ["java", "-jar", "/medi.jar"]