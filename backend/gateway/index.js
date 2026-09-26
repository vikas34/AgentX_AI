import express from "express";
import "dotenv/config";
import proxy from "express-http-proxy";
import cookieParser from "cookie-parser";
import cors from "cors";
import protect from "./middlewares/auth.middleware.js";
import { getCurrentUser } from "./controllers/user.controller.js";

const app = express();

const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(cookieParser());

app.use(
  "/api/auth",
  proxy(process.env.AUTH_SERVICE, {
    proxyReqPathResolver: (req) => {
      return req.url;
    },
  })
);

app.get("/api/user", protect, getCurrentUser)
app.get("/", (req, res) => {
  res.send("welcome AI ");
});

app.listen(port, () => {
  console.log(`Gateway started at PORT: ${port}`);
});