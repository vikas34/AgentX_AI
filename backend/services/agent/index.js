import "dotenv/config";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome AI Agent" });
});

const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`Agent started at PORT: ${port}`);
  try {
    await connectDB();
    console.log("Agent DB connected");
  } catch (error) {
    console.error("Agent DB connection error:", error);
  }
});
