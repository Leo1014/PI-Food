import CardsContainer from "../../components/cardsContainer/CardsContainer"
import Search from "../../components/searchComponent/search";

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
            <Search />
            <CardsContainer />
        </div>
    )
}