import { Router } from 'express';
import tasks from '../controller/taskController';
import { validateContent, validateStatusId, validateTitle } from '../middleswares/validationMiddlesware';

const router = Router();

router.get(
  '/',
  tasks.getAllTasks,
);

router.post(
  '/',
  validateTitle,
  validateContent,
  validateStatusId,
  tasks.createTask,
);

router.put(
  '/:id',
  validateTitle,
  validateContent,
  validateStatusId,
  tasks.updateTask,
);

router.delete(
  '/:id',
  tasks.deleteTask,
);

export default router;
