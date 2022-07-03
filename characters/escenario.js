import { dataUser } from "../config/dataUser.js";
import {escenarios}  from "../MainMenu.js";
import { textConsola } from "../models/css.js";

let condition
export function elegirEscenario(){
    
    escenarios.showMenu()
    do { 
        const max = Object.keys(escenarios.opt)
        let option = prompt(">>") 
        
        if (option <= max.length){
            condition = false
            dataUser[0].escenario = escenarios.opt[option-1]
            console.clear()
            textConsola(`Campo de Batalla ${dataUser[0].escenario}\n`) 
        }else{ 
            condition=true
            textConsola("- Opcion no valida -")          
        }
    } while (condition);
}


