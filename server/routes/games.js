import express from "express";
import { getGames, getGame } from "../api/games.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: 200 });
});

router.get("/games", async (req, res) => {
  try {
    const { categories } = req.query;
    const filter = {};
    
    if (categories) filter.categories = { $in: categories.split(",") };

    const games = await getGames(filter);
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