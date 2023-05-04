import { CLEAN_DETAIL, GET_ALL_RECIPES, GET_BY_ID } from "./actions";


const initialState = {
    allRecipes:[],
    recipeById:[]
};
// console.log(initialState.allRecipes);

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
                recipeById:action.payload
            }
            case CLEAN_DETAIL:
                return{
                    ...state,
                    recipeById:[]
                }
            
        default:
            return {...state}
    }
}

export default rootReducer;