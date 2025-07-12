import Todo from "../model/Todo.Model.js";

export const createTodo = async (req, res) => {
  try {
    // const taskCreate =  await Todo.create(req.body);
    // console.log("Todo created:", taskCreate);

    const { taskName, priority, status } = req.body;

    const newTodo = new Todo({
      taskName,
      priority,
      status,
    });

    const taskCreate = await newTodo.save();

    res.status(201).json({
      message: "Todo created successfully",
      data: taskCreate,
    });
  } catch (err) {
    console.error("Error creating todo:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();



    res.status(200).json({
      message: "Todos fetched successfully",
      data: todos,
    });
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    console.log("Todo fetched by ID:", todo);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({
      message: "Todo fetched successfully",
      data: todo,
    });
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({
      message: "Todo deleted successfully",
      data: deletedTodo,
    });
    
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

