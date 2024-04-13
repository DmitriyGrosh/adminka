const gamesRouter = require("express").Router();

const { getAllGames, createGame, deleteGame } = require("../controllers/games");
const { getCurrentGame } = require("../middelware/games");

gamesRouter.get("/games", getCurrentGame, getAllGames);

gamesRouter.post("/games", getCurrentGame, createGame);

gamesRouter.delete("/games/:id", getCurrentGame, deleteGame);

module.exports = gamesRouter;