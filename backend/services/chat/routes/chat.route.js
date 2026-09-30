import express from "express";
import {
  createConveration,
  getConverations,
  getMessages,
  saveMessage,
  updateConversation,
} from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/create-conversation", createConveration);
router.get("/get-conversation", getConverations);
router.patch("/update-conversation", updateConversation);
router.post("/save-message", saveMessage);
router.get("/get-messages/:conversationId", getMessages);

export default router;
