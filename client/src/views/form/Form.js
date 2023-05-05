import style from "./Form.module.css"


export default function Form(){
    return(
        <div>
            <form className={style.container}>
               <h3>Crea tu Receta!!!</h3> <br/>
              
               <label>Nombre: </label>
               <input type="text" />

               <label>Imagen: </label>
               <input type="text" />

               <label>Resumen del plato: </label>
               <textarea></textarea>

               <label>Nivel de Salubilidad: </label>
               <input type="number" />

              
               <label>Paso a paso: </label>
               <textarea></textarea>

                <button>Crear Receta </button>
            </form>
        </div>
    )
}



// Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

// Nombre.
// Resumen del plato.
// Nivel de comida saludable (health score).
// Paso a paso.
// Imagen.
// Posibilidad de seleccionar/agregar varios tipos de dieta en simultáneo.
// Botón para crear la receta.
// [IMPORANTE]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre de la receta no pueda contener números, o que el health score no pueda exceder determinado valor, etc.