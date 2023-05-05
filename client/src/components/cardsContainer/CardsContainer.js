import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useState } from "react";

import Card from "../card/Card";
import style from "./Cards.module.css"


// export default function CardsContainer(){
    
//     const allRecipes = useSelector(state => state.allRecipes)
//     //console.log(allRecipes);
    
//     return(
//         <div className={style.container}>
//            {Array.isArray(allRecipes) && allRecipes.map(recipe=>{
//               return( 
//                 <Link to={`/detail/${recipe.id}`} key={recipe.id} style={{ textDecoration: "none" }}>
//                       <Card name = {recipe.name}
//                            image = {recipe.image}
//                            diets = { Array.isArray(recipe.diets) ?
//                                     recipe.diets.map(diet => typeof diet === 'string' ? diet : diet.name)
//                                     : recipe.diets}                           
//                            key = {recipe.id}
//                      />
//                 </Link>
//               )
//             })
            
//            } 
//         </div>
//     ) 
// };
     


export default function CardsContainer() {
  const allRecipes = useSelector((state) => state.allRecipes);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Dividir las recetas en grupos de 9 para la página actual
  const recipesPerPage = 9;
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  console.log(currentRecipes);

  // Función para cambiar de página
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  
  // Renderizar la lista de recetas de la página actual
  return (
    <div className={style.container}>
      {currentRecipes.map((recipe) => (
        <Link to={`/detail/${recipe.id}`} key={recipe.id} style={{ textDecoration: "none" }}>
          <Card 
            name={recipe.name}
            image={recipe.image}
            diets={Array.isArray(recipe.diets) ? recipe.diets.map(diet => typeof diet === 'string' ? diet : diet.name) : recipe.diets}                           
            key={recipe.id}
          />
        </Link>
      ))}
      {/* Renderizar los botones de paginación */}
      {allRecipes.length > recipesPerPage && (
        <div className="pagination">
          {Array.from({ length: Math.ceil(allRecipes.length / recipesPerPage) }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
  
}
              