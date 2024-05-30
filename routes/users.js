const usersRouter = require('express').Router();
  
const {findAllUsers, findUserById, createUser, updateUser, deleteUser, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, filterPassword, hashPassword} = require('../middlewares/users');
const {sendAllUsers, sendUserById, sendUserCreated, sendUserUpdated, sendUserDeleted, sendMe} = require('../controllers/users');
const { checkAuth } = require("../middlewares/auth.js");

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);
  

usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);
module.exports = usersRouter;
  