DROP DATABASE IF EXISTS `saep_db`;

CREATE DATABASE IF NOT EXISTS `saep_db`;

USE `saep_db`;


-- Tabela do Professor
CREATE TABLE professor (
    id_professor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_professor VARCHAR(255) NOT NULL,
    email_professor VARCHAR(255) NOT NULL,
    senha_professor VARCHAR(255) NOT NULL
);

-- Tabela das Turmas
CREATE TABLE turmas (
    id_turma INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_turma VARCHAR(255) NOT NULL,
    id_professor INT NOT NULL,
    FOREIGN KEY (id_professor) REFERENCES professor(id_professor)
);

-- Tabela de Atividades das Turmas
CREATE TABLE atividades (
    id_atividade INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_atividade VARCHAR(255) NOT NULL,
    id_turma INT NOT NULL,
    FOREIGN KEY (id_turma) REFERENCES turmas(id_turma)
);

INSERT INTO professor (nome_professor, email_professor, senha_professor)
    VALUES ('Paulo Jorge', 'paulojorge@gmail.com', PASSWORD('123456')),
           ('João Paulo', 'paulojoao@gmail.com', PASSWORD('654321')),
           ('Ana Beatriz', 'anabeatriz@gmail.com', PASSWORD('012345'));


INSERT INTO turmas (nome_turma, id_professor)
    VALUES ('Desenvolvimento de Sistemas SA01', 1),
           ('Redes de Computadores SN02', 2),
           ('Desenvolvimento de Sistemas B402', 3);


INSERT INTO atividades (nome_atividade, id_turma)
    VALUES ('Lógica de Programação - Condicionais', 1),
           ('Lógica de Programação - Laços de Repetição', 1),
           ('Lista de Exercícios 01', 1),
           ('Lista de Exercícios 03',2),
           ('Correção de Avaliação', 2),
           ('Álgebra', 2),
           ('Análise Estruturada de Sistemas', 3),
           ('Estrutura de Dados', 3),
           ('Lista de Exercícios 01', 3);

