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

export const getGame = async (where) => {
  let game;
  try {
    const result = await gameModel.find(where);

    if (result) {
      game = result;
    } else {
      throw new Error("Game was not fetched");
    };

  } catch (error) {
    console.error(error);
    return null;
  }
  return game;
};