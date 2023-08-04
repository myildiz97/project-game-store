import express from "express";
// import gameModel from "../models/Game.js";
import { getGames } from "../api/games.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: 200 });
});

router.get("/games", async (req, res) => {
  try {
    const games = await getGames({});
    if (games) res.json(games);
  } catch (error) {
    console.error("Error retrieving games:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

export default router;