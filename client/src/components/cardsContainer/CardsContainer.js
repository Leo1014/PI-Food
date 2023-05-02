import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

import Card from "../card/Card";
import style from "./Cards.module.css"


export default function CardsContainer(){
    
    const allRecipes = useSelector(state => state.allRecipes)
    //console.log(allRecipes);
    
    return(
        <div className={style.container}>
           {Array.isArray(allRecipes) && allRecipes.map(recipe=>{
              return( 
                <Link to={`/detail/${recipe.id}`} key={recipe.id} style={{ textDecoration: "none" }}>
                      <Card name = {recipe.name}
                           image = {recipe.image}
                           diets = { Array.isArray(recipe.diets) ?
                                    recipe.diets.map(diet => typeof diet === 'string' ? diet : diet.name)
                                    : recipe.diets}                           
                           key = {recipe.id}
                     />
                </Link>
              )
            })
            
           } 
        </div>
    ) 
};
                
              