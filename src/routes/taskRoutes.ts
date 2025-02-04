import { Router, RequestHandler } from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/taskController';

const router = Router();

router.post('/tasks', createTask as RequestHandler);      
router.get('/tasks', getTasks as RequestHandler);        
router.put('/tasks/:id', updateTask as RequestHandler);  
router.delete('/tasks/:id', deleteTask as RequestHandler); 

export default router;

