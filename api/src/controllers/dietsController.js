const axios = require("axios");
const { Diet } = require("../db")

const getDiets = async() => {
  const data = (await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=2fbebe603fee4666ad623518af67b357&addRecipeInformation=true&number=100")).data


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
