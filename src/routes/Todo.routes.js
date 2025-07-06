import express from "express";
import { createTodo } from "../Controller/Todo.Controller.js";



const router = express.Router();

router.post("/create",createTodo);


export default router;
