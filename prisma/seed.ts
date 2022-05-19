import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createStatus() {
  const pendingTask = 'pendente';
  const inProgressTask = 'em andamento';
  const finishedTask = 'finalizada';

  await prisma.status.createMany({
    data: [
      { status: pendingTask },
      { status: inProgressTask },
      { status: finishedTask },
    ],
  });
}

createStatus().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
})
  .finally(async () => {
    await prisma.$disconnect();
  });
