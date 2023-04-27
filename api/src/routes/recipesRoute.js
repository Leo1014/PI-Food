const { Router } = require("express");
const  {handlerRecipe, handlerAllRecipes} = require("../handlers/handlerRecipes")


const recipesRouter = Router();

recipesRouter.post("/", handlerRecipe);

recipesRouter.get("/", handlerAllRecipes);
//recipesRouter.get("/:id", handlerAllById);


module.exports = recipesRouter;
