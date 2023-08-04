import gameModel from "../models/Game.js";

export const getGames = async (where) => {
  let games = [];
  try {
    const results = await gameModel.find(where).exec();

    if (results) {
      games = results.map(result => result.toJSON());
    } else {
      throw new Error("Games was not fetched!");
    };

  } catch (error) {
    console.error(error);
    return null;
  }
  return games;
};