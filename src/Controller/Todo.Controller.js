import Todo from "../model/Todo.Model.js";

export const createTodo = async (req, res) => {
  try {
    const taskCreate =  await Todo.create(req.body);
    console.log("Todo created:", taskCreate);
    res.status(201).json({
      message: "Todo created successfully",
      data: taskCreate,
    });
  } catch (err) {
    console.error("Error creating todo:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


