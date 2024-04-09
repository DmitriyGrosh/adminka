const gamesRouter = require("express").Router();

const getAllGames = async (req, res) => {
  res.send("This is all games");
};

gamesRouter.get("/games", getAllGames);

module.exports = gamesRouter;