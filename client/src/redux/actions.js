import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_BY_ID = "GET_BY_ID";


export const getAllRecipes = ()=>{
    return async function(dispatch){
        const allRecipes = (await axios.get("http://localhost:3001/recipes")).data
        //console.log(allRecipes);
        dispatch({
            type:GET_ALL_RECIPES,
            payload:allRecipes
        })
    }
}


export const getById = (id)=>{
    return async function(dispatch){
        const recipesById = (await axios.get(`hhp/localhost:3001/recipes/${id}`)).data
        dispatch({
            type:GET_BY_ID,
            payload:recipesById
        })
    }
}
