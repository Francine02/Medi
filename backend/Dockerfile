# Usa uma imagem do Maven com JDK para o build
FROM maven:3.8.5-openjdk-17-slim AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários para o build
COPY pom.xml .
COPY src ./src

# Executa o Maven para compilar o projeto
RUN mvn clean package -DskipTests

# Usa uma imagem mais leve do JDK para a aplicação final
FROM openjdk:17-jdk-slim

# Expõe a porta 8080
EXPOSE 8080

# Variáveis de ambiente
ENV SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/medi
ENV SPRING_DATASOURCE_USERNAME=postgres
ENV SPRING_DATASOURCE_PASSWORD=1234567
ENV SERVER_PORT=8080
ENV SPRING_APPLICATION_NAME=backend
ENV API_TOKEN_SECRET=120987re

# Copia o JAR gerado para a nova imagem
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar medi.jar

# Comando para executar o JAR
ENTRYPOINT ["java", "-jar", "/medi.jar"]