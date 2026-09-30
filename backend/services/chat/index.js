import "dotenv/config";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/chat.route.js";

const app = express();

app.use(express.json());
app.use("/", router)

app.get("/", (req, res) => {
  res.send("welcome AI from Chat");
});

const port = process.env.PORT || 8002;

app.listen(port, async () => {
  console.log(`Chat started at PORT: ${port}`);

  try {
    await connectDB();
    console.log("Chat DB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
});
