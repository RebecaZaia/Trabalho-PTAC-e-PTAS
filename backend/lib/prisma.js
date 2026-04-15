import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function criarUsuario(dados) {
  return await prisma.usuarios.create({
    data: dados
  });
}

// READ (todos)
async function listarUsuarios() {
  return await prisma.usuarios.findMany();
}

// READ (um)
async function buscarUsuario(id) {
  return await prisma.usuarios.findUnique({
    where: { id_user: id }
  });
}

// UPDATE
async function atualizarUsuario(id, dados) {
  return await prisma.usuarios.update({
    where: { id_user: id },
    data: dados
  });
}

async function criarProjeto(dados) {
  return await prisma.projetos.create({ data: dados });
}

async function listarProjetos() {
  return await prisma.projetos.findMany();
}

async function buscarProjeto(id) {
  return await prisma.projetos.findUnique({
    where: { id_proj: id }
  });
}

async function atualizarProjeto(id, dados) {
  return await prisma.projetos.update({
    where: { id_proj: id },
    data: dados
  });
}

async function criarPost(dados) {
  return await prisma.posts.create({ data: dados });
}

async function listarPosts() {
  return await prisma.posts.findMany({
    include: {
      usuario: true,
      projeto: true
    }
  });
}

async function buscarPost(id) {
  return await prisma.posts.findUnique({
    where: { id_post: id },
    include: {
      usuario: true,
      projeto: true,
      comentarios: true,
      curtidas: true
    }
  });
}

async function atualizarPost(id, dados) {
  return await prisma.posts.update({
    where: { id_post: id },
    data: dados
  });
}

async function criarComentario(dados) {
  return await prisma.comentarios.create({ data: dados });
}

async function listarComentarios() {
  return await prisma.comentarios.findMany();
}

async function curtirPost(dados) {
  return await prisma.curtidas.create({ data: dados });
}

async function listarCurtidas() {
  return await prisma.curtidas.findMany();
}

async function descurtirPost(id_post, id_user) {
  return await prisma.curtidas.delete({
    where: {
      id_post_id_user: {
        id_post,
        id_user
      }
    }
  });
}

export { prisma };