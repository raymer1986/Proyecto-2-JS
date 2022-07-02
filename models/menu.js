import {Elfo}from "../characters/character.js"
import { elegirchar } from "../characters/menuchars.js";
import { Escenarios, mainMenu, password } from "../MainMenu.js"
import { textConsola, showColors } from "./css.js"

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
     selectOpt(opcion1,opcion2,opcion3,){
        
            
      
        do {
        
      
        let option = prompt(">>")
      
         switch (option) {
            case "1":
                console.clear()
                opcion1.showMenu()
                elegirchar()
                condition =false
                
                break;
                
                case "2":
                    console.clear()
                    opcion2.showMenu()
                    option = prompt(">>")
                    if(option = 1){
                        showColors()
                    }
                    condition =false
                
                 break;
                 
            case "3":
                    console.clear()
                    opcion3.showMenu()
                    option = prompt(">>")
                    condition =false
                   
                    break;
            
            case "4":
                    console.clear()
                    opcion3.showMenu()
                    option = prompt(">>")
                    condition =false
                
                      break;        
           
                default:
                    option = prompt("respuesta incorrecta, elija nuevamente")
                    condition = true
                    break;
                }
            } while (condition); 
                
                  
        
     }
}

export default Menu