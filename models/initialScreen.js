import {css, textConsola } from "../config/css.js";
import {logo} from "./logo.js";

/* Promesa que presenta la pantalla de carga del juego */
export const LoadGame = await new Promise (resolve=>{
  let modColor = 0
  let parcial = "."  
  const tiempo = setInterval(() => {
        console.clear()
        console.log(`%cLoading ${parcial}`, `color: ${css.textColor[modColor]}; font-style: italic`)    
        parcial = parcial + "."
        modColor++
       }, 500);

        setTimeout(() => {
                clearInterval(tiempo)
                resolve(true)
                console.clear() 
        },2000);
    
})

console.clear()
textConsola(logo)
textConsola("\t\t\t\t-- Bienvenidos al Juego --\n")
export default LoadGame



