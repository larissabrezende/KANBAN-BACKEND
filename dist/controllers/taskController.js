"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTasks = exports.createTask = void 0;
const task_1 = __importDefault(require("../models/task"));
// Criar nova tarefa
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, status } = req.body;
        const newTask = new task_1.default({ title, description, status });
        yield newTask.save();
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao criar tarefa', error });
    }
});
exports.createTask = createTask;
// Listar todas as tarefas
const getTasks = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_1.default.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar tarefas', error });
    }
});
exports.getTasks = getTasks;
// Atualizar uma tarefa
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedTask = yield task_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.status(200).json(updatedTask);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar tarefa', error });
    }
});
exports.updateTask = updateTask;
// Deletar uma tarefa
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedTask = yield task_1.default.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao deletar tarefa', error });
    }
});
exports.deleteTask = deleteTask;
