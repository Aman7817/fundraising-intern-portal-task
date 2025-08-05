import express from "express";
import { getLeaderboard } from "../controllers/leaderboardController.js";

const router = express.Router();

router.get("/leaderboard", getLeaderboard); // ✅ Correct

export default router;
