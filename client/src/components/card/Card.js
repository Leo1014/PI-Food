import style from "./card.module.css"

export default function Card({name, image, diets}){
    return(
        <div className={style.container}>
            <h3>Plato: {name}</h3>
            <img src={image} alt={name} className={style.img} />
            <p><b>Diets:</b> {Array.isArray(diets) ? diets.join(", ") : diets}</p>
        </div>
    )
}