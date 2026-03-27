CREATE TABLE usuarios (
    id_user SERIAL PRIMARY KEY,
    nome TEXT,
    cpf TEXT,
    foto_perfil TEXT,
    email TEXT,
    senha TEXT
);

CREATE TABLE projetos (
    id_proj SERIAL PRIMARY KEY,
    nome TEXT,
    conteudo TEXT,
    data_inicial DATE,
    data_final DATE,
    data_cadastro DATE
);

CREATE TABLE posts (
    id_post SERIAL PRIMARY KEY,
    id_user INTEGER REFERENCES usuarios(id_user),
    id_proj INTEGER REFERENCES projetos(id_proj),
    conteudo TEXT,
    date_hora TIMESTAMP
);

CREATE TABLE comentarios (
    id_post INTEGER REFERENCES posts(id_post),
    id_user INTEGER REFERENCES usuarios(id_user),
    comentario TEXT,
    date_hora TIMESTAMP,
    PRIMARY KEY (id_post, id_user, date_hora)
);

CREATE TABLE curtidas (
    id_post INTEGER REFERENCES posts(id_post),
    id_user INTEGER REFERENCES usuarios(id_user),
    id_proj INTEGER REFERENCES projetos(id_proj),
    PRIMARY KEY (id_post, id_user)
);

INSERT INTO usuarios (nome, email, senha)
VALUES 
('Rebeca', 'rebeca@email.com', '123'),
('João', 'joao@email.com', '123'),
('Maria', 'maria@email.com', '123');

INSERT INTO projetos (nome, conteudo, data_inicial, data_final, data_cadastro)
VALUES
('Plataforma Acadêmica', 'Sistema para divulgar projetos', '2025-01-01', '2025-12-01', NOW()),
('App de Tarefas', 'Aplicativo para organização pessoal', '2025-02-01', '2025-10-01', NOW());

INSERT INTO posts (id_user, id_proj, conteudo, date_hora)
VALUES
(1, 1, 'Iniciando o desenvolvimento da plataforma 🚀', NOW()),
(2, 1, 'Trabalhando no banco de dados', NOW()),
(3, 2, 'Primeira versão do app concluída!', NOW());

INSERT INTO comentarios (id_post, id_user, comentario, date_hora)
VALUES
(1, 2, 'Boa sorte no projeto!', NOW()),
(1, 3, 'Vai ficar top 🔥', NOW()),
(3, 1, 'Parabéns pelo app!', NOW());

INSERT INTO curtidas (id_post, id_user, id_proj)
VALUES
(1, 2, 1),
(1, 3, 1),
(3, 1, 2);

SELECT * FROM usuarios;
SELECT * FROM projetos;
SELECT * FROM posts;
SELECT * FROM comentarios;
SELECT * FROM curtidas;