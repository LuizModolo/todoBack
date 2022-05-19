import { PrismaClient } from '@prisma/client';
import TaskData from '../interface/interfaces';

const prisma = new PrismaClient();

const listAllTasks = async () => {
  const allTasks = await prisma.tasks.findMany({
    include: {
      status: true,
    },
  });

  if (!allTasks) return [];

  return allTasks;
};

const createTask = async (data: TaskData) => {
  const createdTask = await prisma.tasks.create({
    data: {
      title: data.title,
      content: data.content,
      statusId: Number(data.statusId),
    },
    include: {
      status: true,
    },
  });

  return createdTask;
};

const updateTask = async (data: TaskData, id: number | undefined) => {
  const updatedTask = await prisma.tasks.update({
    where: { id },
    data: {
      title: data.title,
      content: data.content,
      statusId: Number(data.statusId),
    },
    include: {
      status: true,
    },
  });

  return updatedTask;
};

const deleteTask = async (id: number | undefined) => {
  await prisma.tasks.delete({
    where: { id },
  });

  return { message: 'successfully deleted' };
};

export = {
  listAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
