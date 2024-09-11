CREATE TABLE tb_medicines(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    dateTime DATE NOT NULL,
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES tb_users(id)
);