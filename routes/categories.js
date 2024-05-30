  // Создаём роут для запросов категорий 
  const categoriesRouter = require('express').Router();
  
  const {findAllCategories, checkIsCategoryExists, checkEmptyName, findCategoryById, createCategory, updateCategory, deleteCategory} = require('../middlewares/categories');
  const {sendAllCategories, sendCategoryById, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
  const { checkAuth } = require("../middlewares/auth.js");
  
  // Обрабатываем GET-запрос с роутом '/categories'
  categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    createCategory,
    sendCategoryCreated
  );
  
  categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    updateCategory,
    sendCategoryUpdated
  );
  categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);


  categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);
  // Экспортируем роут для использования в приложении — app.js
  module.exports = categoriesRouter;
  