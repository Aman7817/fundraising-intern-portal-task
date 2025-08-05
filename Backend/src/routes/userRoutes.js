import express from "express";
import { getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUser); // ✅ Yaha handler pass kiya gaya hai

export default router;
