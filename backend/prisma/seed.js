import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  // Criar usuários
  await prisma.usuarios.createMany({
    data: [
      { nome: 'Rebeca', email: 'rebeca@email.com', senha: '123' },
      { nome: 'João', email: 'joao@email.com', senha: '123' },
      { nome: 'Maria', email: 'maria@email.com', senha: '123' }
    ],
    skipDuplicates: true
  });

  // Criar projetos
  await prisma.projetos.createMany({
    data: [
      {
        nome: 'Plataforma Acadêmica',
        conteudo: 'Sistema para divulgar projetos',
        data_inicial: new Date('2025-01-01'),
        data_final: new Date('2025-12-01'),
        data_cadastro: new Date()
      },
      {
        nome: 'App de Tarefas',
        conteudo: 'Aplicativo de organização',
        data_inicial: new Date('2025-02-01'),
        data_final: new Date('2025-10-01'),
        data_cadastro: new Date()
      }
    ],
    skipDuplicates: true
  });

  // Criar posts
  await prisma.posts.createMany({
    data: [
      {
        id_user: 1,
        id_proj: 1,
        conteudo: 'Iniciando o desenvolvimento 🚀',
        date_hora: new Date()
      },
      {
        id_user: 2,
        id_proj: 1,
        conteudo: 'Modelando o banco de dados',
        date_hora: new Date()
      },
      {
        id_user: 3,
        id_proj: 2,
        conteudo: 'Primeira versão pronta!',
        date_hora: new Date()
      }
    ]
  });

  // Comentários
  await prisma.comentarios.createMany({
    data: [
      {
        id_post: 1,
        id_user: 2,
        comentario: 'Boa sorte!',
        date_hora: new Date()
      },
      {
        id_post: 1,
        id_user: 3,
        comentario: 'Vai ficar top 🔥',
        date_hora: new Date()
      }
    ]
  });

  // Curtidas
  await prisma.curtidas.createMany({
    data: [
      { id_post: 1, id_user: 2, id_proj: 1 },
      { id_post: 1, id_user: 3, id_proj: 1 },
      { id_post: 3, id_user: 1, id_proj: 2 }
    ]
  });

  console.log('Banco populado com sucesso!');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });