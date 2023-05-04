import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

import style from "./Detail.module.css"

import { cleanDetail, getById } from "../../redux/actions";

//import Card from "../../components/card/Card";
import { useParams } from "react-router-dom";


export default function Detail(){

    const { id } = useParams();
    const recipe = useSelector(state=>state.recipeById)
    console.log(recipe);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getById(id));
        return ()=>{
          dispatch(cleanDetail())
        }
    },[id, dispatch])
    
    return (
        <div className={style.container}>
          {recipe.length > 0 ? (
            <>
              <h2>{recipe[0].name}</h2>
              <h5>id: {recipe[0].id}</h5>
              <img className={style.image} src={recipe[0].image} alt={recipe[0].name} /><br/>
              <span><b>Sumary:</b> {recipe[0].summary.replace(/(<([^>]+)>)/gi, "")}</span>
              <h3>Health Score: {recipe[0].healthScore}</h3>
              <span><b>Preparation:</b> {recipe.length!==0 && recipe[0].stepByStep.length > 0 ? recipe[0].stepByStep : "No information about preparation"}</span>
              <h3>Diets Types: { Array.isArray(recipe[0].diets) ?
                                    recipe[0].diets.map(diet => typeof diet === 'string' ? diet : diet.name)
                                    .join(", ")
                                    : "No associeted diets"} </h3>
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      )
}