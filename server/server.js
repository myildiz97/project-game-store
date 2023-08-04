import express from "express";
import mongoose from "mongoose";
import router from "./routes/games.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const mongoDbUri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(mongoDbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use("/", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
