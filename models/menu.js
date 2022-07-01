import {Elfo}from "../characters/character.js"
import { Escenarios, password } from "../MainMenu.js"
import { textConsola, showColors } from "./css.js"

//import { dataUser, userInfo } from "../config/dataUser.js"

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
        if (option==="1"){
            do{
            let option 
            console.clear()
            opcion1.showMenu()
            option = prompt(">>")
           
            } 
            while (option > this.opt.length);
            }
            
            if (option==="2"){
                do{ 
                    console.clear()
                    opcion2.showMenu()
                    option = prompt(">>")
                    showColors()
                }while (option > this.opt.length);
            }    
            
                if (option==="3"){
                    do{
                    console.clear()
                    opcion3.showMenu()
                    option = prompt(">>")
                        switch (option) {
                            case "1":
                                console.clear()
                                Escenarios.showMenu()
                                break;
                            case "2":
                                console.clear()
                                password.showMenu()
                                break;
                            default:
                                opcion3.showMenu()
                                break;
                        }
                    } 
                    while (option > this.opt.length);
                    }

        }
    }

export default Menu