
import { codigo } from "../config/codigos.js";
import { mainMenu } from "../MainMenu.js"
import Menu from "../models/menu.js"
import {character,Elfo,Enano,Humano} from "./character.js"
import { combat } from "./combate.js";
import { elegirEscenario } from "./escenario.js";


let condition;


export function elegirchar()
   {
    const versus = [Elfo,Enano, Humano]
    const aleatorio = Math.floor(Math.random() * (Math.floor(0) - Math.ceil(2) * -1)) 
    
    do {  
      
    let option = prompt(">>")
  
     switch (option) {
        case "1":
            console.clear()
            Elfo.showstats
            condition =false
            combat(Elfo,versus[aleatorio])
            
            break;
            
        case "2":
                console.clear()
                Enano.showstats
                condition =false
                combat(Enano,versus[aleatorio])
             break;
             
        case "3":
                console.clear()
                Humano.showstats
                condition =false
                combat(Humano,versus[aleatorio])
                break;

            default:
                option = prompt("respuesta incorrecta, elija nuevamente")
                condition = true
                break;
            }

        } while (condition);
       
}

