import { GET_ALL_RECIPES, GET_BY_ID } from "./actions";


const initialState = {
    allRecipes:[],
    recipesById:[]
};


const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_ALL_RECIPES:
            return {
                ...state,
                allRecipes:action.payload
            }
        case GET_BY_ID:
            return{
                ...state,
                recipesById:action.payload
            }
        
        default:
            return {...state}
    }
}

export default rootReducer;