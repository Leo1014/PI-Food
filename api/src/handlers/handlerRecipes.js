const {createRecipe, getAllRecipes, getAllByName, getAllById}  = require("../controllers/recipesController");


const handlerRecipe = async(req, res)=>{
    const {name, image, summary, healthScore, stepByStep, diets} = req.body;
    try {
        const newRecipe = await createRecipe(name, image, summary, healthScore, stepByStep, diets);
        res.status(200).json(newRecipe)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
    //console.log(name, image, summary, healthScore, stepByStep, diets);
}


const handlerAllRecipes = async(req, res)=>{
    const { name } = req.query;
    try {
        if(name){
            const result = await getAllByName(name);
            result.length ? res.status(200).json(result) : res.status(404).send("Your recipe does not exist.")  
        } else{
            const allRecipes = await getAllRecipes();
            console.log(allRecipes.length);
            res.status(200).json(allRecipes)
        }
    } catch (error) {
        res.status(400).send({error:error.message})
    }
} 
    


const handlerAllById = async(req, res)=>{
    const { id } = req.params;
    try {
        if(id){
            const result = await getAllById(id);
            result.length ? res.status(200).json(result) : res.status(404).send("There is not information for this ID")
            console.log(result.length); 
        } 
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}


module.exports = {handlerRecipe, handlerAllRecipes, handlerAllById};
