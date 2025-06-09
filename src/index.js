import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./Db/db.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    app.on("error", (err) => {
      console.error("Server error:", err);
    });
  })
  .catch((err) => {
    console.error("Error starting the server:", err);
    process.exit(1); // Exit the process with failure
  });
