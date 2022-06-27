
import {logo} from "../models.js/logo.js";
/* array para almacenar colores */
const color =["#feff99","#ff9a99","#99ff9a","#ff99cb","#99ffcd"] 

/* Promesa que presenta la pantalla de carga del juego */
export const LoadGame = await new Promise (resolve=>{
  let modColor = 0
  let parcial = "."  
  const tiempo = setInterval(() => {
        console.clear()
        console.log(`%cLoading ${parcial}`, `color: ${color[modColor]}`)    
        parcial = parcial + "."
        modColor++
       }, 500);

        setTimeout(() => {
                clearInterval(tiempo)
                resolve(true)
                console.clear() 
        },3000);
    
})

console.clear()
console.log(`%c${logo}`,"color: #99ffcd" )
console.log("%c                               -- Bienvenidos al Juego --\n",`color: ${color[2]}`)

export default LoadGame

