import express from "express";
import "dotenv/config";

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, (req, res) => {
  console.log(`The server is running on the port ${PORT}`);
});
