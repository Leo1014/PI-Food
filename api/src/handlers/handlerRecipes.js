const {createRecipe, getAllRecipes, getAllByName}  = require("../controllers/recipesController");


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
    


// const handlerAllById = async(req, res)=>{
//     const { id } = req.params;
//     try {
//         const allById = await getAllById(id);
//         res.status(200).json(allById)
//         console.log(allById);
//     } catch (error) {
//         res.status(400).send("no existe la receta")
//     }
// }


module.exports = {handlerRecipe, handlerAllRecipes};
