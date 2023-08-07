import gameModel, { userModel } from "../models/Game.js";

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
    const result = await gameModel.find(where).exec();

    if (result) {
      game = result;
    } else {
      throw new Error("Game was not found");
    };

  } catch (error) {
    console.error(error);
    return null;
  }
  return game;
};

export const getUsers = async (where) => {
  let users = [];
  try {
    const results = await userModel.find(where).exec();

    if (results) {
      users = results.map(result => result.toJSON());
    } else {
      throw new Error("Users was not fetched!");
    };

  } catch (error) {
    console.error(error);
    return null;
  }
  return users;
};

export const getUser = async (where) => {
  let user;
  try {
    const result = await userModel.find(where).exec();

    if (result) {
      user = result;
    } else {
      throw new Error("User was not found");
    };

  } catch (error) {
    console.error(error);
    return null;
  }
  return user;
};