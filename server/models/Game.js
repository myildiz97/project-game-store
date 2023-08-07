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

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);

export default gameModel;
export { userModel };