import { leaderboardData } from "../models/user.dummyModel.js";

export const getLeaderboard = (req, res) => {
  res.json(leaderboardData);
};