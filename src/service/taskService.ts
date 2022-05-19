import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const listTasksOrderByDate = async () => {
  const orderedTasks = await prisma.tasks.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  if (!orderedTasks) return null;

  return orderedTasks;
};

const listTasksOrderByTitle = async () => {
  const orderedTasks = await prisma.tasks.findMany({
    orderBy: {
      title: 'asc',
    },
  });

  if (!orderedTasks) return null;

  return orderedTasks;
};

const listTasksFilterByStatus = async (status: string) => {
  const filteredTasks = await prisma.tasks.findMany({
    where: {
      status,
    },
    orderBy: {
      title: 'asc',
    },
  });

  if (!filteredTasks) return null;

  return filteredTasks;
};

export = {
  listTasksOrderByDate,
  listTasksOrderByTitle,
  listTasksFilterByStatus,
}
