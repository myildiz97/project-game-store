import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  id: Number,
  title: String,
  imgUrl: String,
  description: String,
  categories: Array,
  platform: String,
  publisher: String,
  developer: String,
  releaseDate: String,
  price: String,
});

const gameModel = mongoose.model("Game", gameSchema);

export default gameModel;