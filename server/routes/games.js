import express from "express";
import { getGames, getGame } from "../api/games.js";

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

router.get("/games/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const game = await getGame({ id });
    if (game) res.json(game);  
  } catch (error) {
    console.error("Error retrieving game:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

export default router;