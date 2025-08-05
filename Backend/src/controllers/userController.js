import { userData } from "../models/user.dummyModel.js";

export const getUser = (req, res) => {
  res.json(userData);
};