import express from "express";
import "dotenv/config";
import users from "./routes/users.js";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", users);

app.listen(PORT, (req, res) => {
  console.log(`The server is running on the port ${PORT}`);
});
