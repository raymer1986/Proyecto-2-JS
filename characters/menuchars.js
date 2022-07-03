
import { mainMenu } from "../MainMenu.js"
import Menu from "../models/menu.js"

import {character,Elfo,Enano,Humano} from "./character.js"
import { elegirEscenario } from "./escenario.js";



// Menu con minuscula y Personaje con Mayuscula

// export const elfo = new Menu (Elfo.nombre,["Vida: "+Elfo.vida,"Defensa: "+Elfo.defensa,"Ataque: "+Elfo.ataque])
// export const enano = new Menu (Enano.nombre,["Vida: "+Enano.vida,"Defensa: "+Enano.defensa,"Ataque: "+Enano.ataque])
// export const humano = new Menu (Humano.nombre,["Vida: "+Humano.vida,"Defensa: "+Humano.defensa,"Ataque: "+Humano.ataque])





let condition; 

export function elegirchar() 
    
   {
    
    do {  
      
    let option = prompt(">>")
  
     switch (option) {
        case "1":
            console.clear()
            Elfo.showstats
            condition =false
            
            break;
            
        case "2":
                console.clear()
                Enano.showstats
                condition =false
                
             break;
             
        case "3":
                console.clear()
                Humano.showstats
                condition =false
                break;

            default:
                option = prompt("respuesta incorrecta, elija nuevamente")
                condition = true
                break;
            }
        } while (condition); 
    
}

