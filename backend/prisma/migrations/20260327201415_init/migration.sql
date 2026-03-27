-- CreateTable
CREATE TABLE "usuarios" (
    "id_user" SERIAL NOT NULL,
    "nome" TEXT,
    "cpf" TEXT,
    "foto_perfil" TEXT,
    "email" TEXT,
    "senha" TEXT,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "projetos" (
    "id_proj" SERIAL NOT NULL,
    "nome" TEXT,
    "conteudo" TEXT,
    "data_inicial" TIMESTAMP(3),
    "data_final" TIMESTAMP(3),
    "data_cadastro" TIMESTAMP(3),

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id_proj")
);

-- CreateTable
CREATE TABLE "posts" (
    "id_post" SERIAL NOT NULL,
    "conteudo" TEXT,
    "date_hora" TIMESTAMP(3),
    "id_user" INTEGER,
    "id_proj" INTEGER,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id_post")
);

-- CreateTable
CREATE TABLE "comentarios" (
    "id_post" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "date_hora" TIMESTAMP(3) NOT NULL,
    "comentario" TEXT,

    CONSTRAINT "comentarios_pkey" PRIMARY KEY ("id_post","id_user","date_hora")
);

-- CreateTable
CREATE TABLE "curtidas" (
    "id_post" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_proj" INTEGER,

    CONSTRAINT "curtidas_pkey" PRIMARY KEY ("id_post","id_user")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "usuarios"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_id_proj_fkey" FOREIGN KEY ("id_proj") REFERENCES "projetos"("id_proj") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "posts"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "usuarios"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curtidas" ADD CONSTRAINT "curtidas_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "posts"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curtidas" ADD CONSTRAINT "curtidas_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "usuarios"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curtidas" ADD CONSTRAINT "curtidas_id_proj_fkey" FOREIGN KEY ("id_proj") REFERENCES "projetos"("id_proj") ON DELETE SET NULL ON UPDATE CASCADE;
