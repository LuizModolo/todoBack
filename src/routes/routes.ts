import { Router } from 'express';
import tasks from '../controller/taskController';

const router = Router();

router.get('/', tasks.getAllTasks);
router.post('/', tasks.createTask);
router.put('/:id', tasks.updateTask);
router.delete('/:id', tasks.deleteTask);

export default router;
