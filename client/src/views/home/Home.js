import CardsContainer from "../../components/cardsContainer/CardsContainer"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";


export default function Home(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllRecipes());
    },[dispatch])


    return(
        <div>
            <h1>Esta es la home</h1>
            <CardsContainer />
        </div>
    )
}