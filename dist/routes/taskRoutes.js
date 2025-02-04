"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
router.post('/tasks', taskController_1.createTask); // Criar tarefa
router.get('/tasks', taskController_1.getTasks); // Listar tarefas
router.put('/tasks/:id', taskController_1.updateTask); // Atualizar tarefa
router.delete('/tasks/:id', taskController_1.deleteTask); // Deletar tarefa
exports.default = router;
