// Файл routes/games.js

const gamesRouter = require('express').Router();

const {findAllGames, findGameById, checkEmptyFields, checkIsGameExists, createGame, updateGame, deleteGame, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsVoteRequest} = require('../middlewares/games');
const {sendAllGames, sendGameById, sendGameCreated, sendGameUpdated, sendGameDeleted} = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");


gamesRouter.get("/games/:id", findGameById, sendGameById); 
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated
  );

  // Файл routes/games.js

gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    deleteGame,
    sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
  );

module.exports = gamesRouter;
