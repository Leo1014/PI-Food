const axios = require("axios");
const { Recipe, Diet } = require("../db")


const createRecipe = async(name, image, summary, healthScore, stepByStep, diets)=>{
    const newRecipe = await Recipe.create({name, image, summary, healthScore, stepByStep})
    const getDietsDb = await Diet.findAll({
        where:{
            name: diets
        }
    })
    await newRecipe.addDiets(getDietsDb);
    //console.log(getDietsDb);
    return newRecipe;
}


const getAllRecipesApi = async()=>{
    const data = (await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=9bd9403db46a4af6bfaa8961373554b5&addRecipeInformation=true&number=100")).data
  const allRecipes = data.results.map(result =>{
    return{
        id:result.id,
        name:result.title.toLowerCase(),
        image:result.image,
        summary:result.summary,
        healthScore:result.healthScore,
        stepByStep:result.analyzedInstructions.map(instruction => {
            return instruction.steps.map(step => {
              return step.step;
            });
        }).flat(),
        diets:result.diets
    }
  })
  return allRecipes;
}


const getAllDb = async ()=>{
  const allDb = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  return allDb;
}


const getAllRecipes = async ()=>{
  const allDb = await getAllDb();
  const allApi = await getAllRecipesApi();
  
  return [...allDb, ...allApi]
}


const getAllByName = async(name)=>{
  const allRecipes = await getAllRecipes();
  const filterRecipes = allRecipes.filter(recipe=>recipe.name.toLowerCase().includes(name.toLowerCase()));
  console.log(filterRecipes.length);
  return filterRecipes;
}


// const getAllById = async(id)=>{
//   const allRecipes = await getAllRecipes();
//   const filterRecipes = allRecipes.filter(recipe=>recipe.id===id);
//   console.log(filterRecipes);
//   return filterRecipes;
// }


module.exports = {createRecipe, getAllRecipes, getAllByName};

