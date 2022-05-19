import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { TaskData } from '../interface/interfaces';
import tasks from '../service/taskService';

const getAllTasks = async (_req: Request, res: Response) => {
  const allTasks = await tasks.listAllTasks();
  return res.status(StatusCodes.OK).json(allTasks);
};

const createTask = async (req: Request, res: Response) => {
  const taskData: TaskData = req.body;

  const createdTask = await tasks.createTask(taskData);
  return res.status(StatusCodes.CREATED).json(createdTask);
};

const updateTask = async (req: Request, res: Response) => {
  const taskData: TaskData = req.body;
  const { id } = req.params;

  const updatedTask = await tasks.updateTask(taskData, Number(id));
  return res.status(StatusCodes.OK)
    .json({ updatedTask, message: 'successfully updated' });
};

const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedTask = await tasks.deleteTask(Number(id));
  return res.status(StatusCodes.OK).json(deletedTask);
};

export = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
