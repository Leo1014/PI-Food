import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_BY_ID = "GET_BY_ID";
export const CLEAN_DETAIL = "CLEAN_DETAIL";


export const getAllRecipes = ()=>{
    return async function(dispatch){
        const allRecipes = (await axios.get("http://localhost:3001/recipes")).data
        dispatch({
            type:GET_ALL_RECIPES,
            payload:allRecipes
        })
    }
}


export const getById = (id)=>{
    return async function(dispatch){
        const recipeById = (await axios.get(`http://localhost:3001/recipes/${id}`)).data
        //console.log(recipeById);
        dispatch({
            type:GET_BY_ID,
            payload:recipeById
        })
    }
}

export const cleanDetail = ()=>{
    return function(dispatch){
        dispatch({
            type:CLEAN_DETAIL,
        })
    }
}