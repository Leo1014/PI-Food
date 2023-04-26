const axios = require("axios");
require("dotenv").config();
const {API_KEY} = process.env

const { Diet } = require("../db")

const getDiets = async ()=>{
    const data = (await axios.get
        ("https://api.spoonacular.com/recipes/complexSearch?apiKey=9bd9403db46a4af6bfaa8961373554b5&addRecipeInformation=true&number=100")).data
    const results = data.results.map(result=>result.diets).flat();
    const resultados = results.map(result => {
        return Object.keys(result)
      });

    //console.log(resultados[0][0]);
    
    const uniqueDiets = new Set(results);
    const dietsUnique = [...uniqueDiets].map((diet) => ({ name: diet }));

    const saveDb = await Diet.bulkCreate(dietsUnique)
    console.log(saveDb);
    return saveDb;
}

//getDiets().then(results => console.log(results));