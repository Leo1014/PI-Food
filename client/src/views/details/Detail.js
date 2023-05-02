import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

import { getById } from "../../redux/actions";

import Card from "../../components/card/Card";


export default function Detail({id}){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getById(id))
    })
    
    const recipe = useSelector(state => state.reccipesById);


    return(
        <div>
            Este es detalle
            <Card data={recipe} />
        </div>
    )
}