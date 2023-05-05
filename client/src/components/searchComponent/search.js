import { useSelector } from "react-redux"


export default function Search(){

    const allRecipes = useSelector(state=>state.allRecipes)
    console.log(allRecipes);
    return(
        <div>
            <h3>Search component</h3>
        </div>
    )
}