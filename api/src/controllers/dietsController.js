const axios = require("axios");
const { Diet } = require("../db")

const getDiets = async() => {
  const data = (await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=49c19badc3224ac6973ee0503c52af31&addRecipeInformation=true&number=100")).data


  const allDiets = [];

  const diets = data.results.map(result =>{
    return{
      name:result.diets,
      otherDiet:Object.keys(data.results[0])[0]
    }
  }) 

  diets.forEach(el => allDiets.push(...el.name, el.otherDiet));
 
   const dietObjects = [...new Set(allDiets)].map(diet => ({ name: diet }))

  const saveDb = await Diet.bulkCreate(dietObjects)
  
  return saveDb;
}


module.exports = { getDiets }
