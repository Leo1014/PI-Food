import { Link } from "react-router-dom"


import style from "./Landing.module.css"



export default function Landing(){
    return(
        <div className={style.container}>
            <div>
                <Link to="/home">
                    <button className={style.btn}>Welcome to Healthy Food</button>
                </Link>
            </div>
           
        </div>
    )
}
