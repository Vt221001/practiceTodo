import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/Todo.routes.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api",router);

app.get("/", (req, res) => {
  res.send("Welcome to Todo list API");
});

export default app;
