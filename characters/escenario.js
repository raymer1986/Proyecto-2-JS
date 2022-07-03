import { dataUser } from "../config/dataUser.js";
import {escenarios}  from "../MainMenu.js";
import { textConsola } from "../models/css.js";

let condition
export function elegirEscenario(){
    escenarios.showMenu()
   
    do {  
        let option = prompt(">>")
        dataUser[0].escenario = escenarios.opt[option-1]
        console.clear()
        textConsola(`Campo de Batalla ${dataUser[0].escenario}\n`) 
    } while (condition);
}
