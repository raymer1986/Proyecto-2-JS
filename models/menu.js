import {Elfo}from "../characters/character.js"
import { elegirEscenario } from "../characters/escenario.js";
import { elegirchar } from "../characters/menuchars.js";
import { codigo } from "../config/codigos.js";
//import { escenarios, mainMenu, password } from "../MainMenu.js"
import { textConsola, showColors,gameSpeed } from "./css.js"
 
//import { dataUser, userInfo } from "../config/dataUser.js"


let condition;

export class Menu{
    constructor(title, opt){
        this.title = title
        this.opt = opt
    }
    //Muestra el Menu
    showMenu() {
        textConsola(this.title)
        for (let i = 0; i < this.opt.length; i++) {
            textConsola(`${i+1}.- ${this.opt[i]}`)
        } 
    }
    // Selecciona el Menu y se Instancia la clase
     selectOpt(opcion1,opcion2,opcion3){
        
        let option = prompt(">>")        
      
        do {
         
            switch (option) {
            case "1":
                //primero se muestra el escenario a jugar
                console.clear()
                elegirEscenario()   
                opcion1.showMenu()
                elegirchar()
                condition =false
                
                break;
                
                case "2":
                    console.clear()
                    condition=false
                    opcion2.showMenu()
                    option = prompt(">>")
                    do{
                        switch (option) {
                            case "1":
                                showColors()
                                break;
                            case "2":
                                gameSpeed()
                                break;
                        
                            default:
                            option = prompt("- Opcion Invalida -")
                            condition = true
                                break;
                        }
                    }while(condition)
            
                 break;
                 
            case "3":
                    console.clear()
                    codigo()
                    condition =false
                   
                    break;
            
                    default:
                    option = prompt("- Opcion Invalida -")
                    condition = true
                    break;
                }
            } while (condition); 

     }
}

export default Menu