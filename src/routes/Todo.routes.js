import express from "express";
import { createTodo, deleteTodoById, getAllTodos, getTodoById } from "../Controller/Todo.Controller.js";



const router = express.Router();

router.post("/create",createTodo);
router.get("/getAll",getAllTodos);
router.get("/todo/:id",getTodoById);
router.delete("/todo/:id",deleteTodoById);


export default router;
