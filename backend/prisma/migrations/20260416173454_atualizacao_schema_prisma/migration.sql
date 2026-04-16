/*
  Warnings:

  - Made the column `comentario` on table `comentarios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_proj` on table `curtidas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `conteudo` on table `posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date_hora` on table `posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_user` on table `posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_proj` on table `posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `projetos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `conteudo` on table `projetos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `data_inicial` on table `projetos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `data_final` on table `projetos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `data_cadastro` on table `projetos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `usuarios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cpf` on table `usuarios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `usuarios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `senha` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "curtidas" DROP CONSTRAINT "curtidas_id_proj_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_id_proj_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_id_user_fkey";

-- AlterTable
ALTER TABLE "comentarios" ALTER COLUMN "comentario" SET NOT NULL;

-- AlterTable
ALTER TABLE "curtidas" ALTER COLUMN "id_proj" SET NOT NULL;

-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "conteudo" SET NOT NULL,
ALTER COLUMN "date_hora" SET NOT NULL,
ALTER COLUMN "id_user" SET NOT NULL,
ALTER COLUMN "id_proj" SET NOT NULL;

-- AlterTable
ALTER TABLE "projetos" ALTER COLUMN "nome" SET NOT NULL,
ALTER COLUMN "conteudo" SET NOT NULL,
ALTER COLUMN "data_inicial" SET NOT NULL,
ALTER COLUMN "data_final" SET NOT NULL,
ALTER COLUMN "data_cadastro" SET NOT NULL;

-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "nome" SET NOT NULL,
ALTER COLUMN "cpf" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "senha" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "usuarios"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_id_proj_fkey" FOREIGN KEY ("id_proj") REFERENCES "projetos"("id_proj") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curtidas" ADD CONSTRAINT "curtidas_id_proj_fkey" FOREIGN KEY ("id_proj") REFERENCES "projetos"("id_proj") ON DELETE RESTRICT ON UPDATE CASCADE;
