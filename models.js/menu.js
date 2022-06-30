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
    selectOpt(){
        let status=0
        let option = prompt(">>")
        if (option==="1"){
            status=1
            console.clear()
            //textConsola( dataUser.values[0])
        }
          
        if (option==="2"){
            let option2 
            status=2
            console.clear()
            config.showMenu()
            option2 = prompt(">>")
            if(option2==="1"){
                showColors()
            }
   
        }

        if (option==="3"){
            status=3
            console.clear()
            load.showMenu()
            option = prompt(">>")
        }
        if(option > this.opt.length ) {
            console.clear()
            textConsola(">> Entrada invalida")
            if (status==0,1){
                do {
                    console.clear()
                    mainMenu.showMenu()
                    option = prompt(">>")
                } while (option > this.opt.length);
            }
            if (status==2){
                do {
                    console.clear()
                    config.showMenu()
                    option = prompt(">>")
                } while (option > this.opt.length);
            }
            if (status==3){
                do {
                    console.clear()
                    load.showMenu()
                    option = prompt(">>")
                } while (option > this.opt.length);
            }

        }   
    }
}
export const mainMenu = new Menu ("Menú Principal\n",["Iniciar Juego","Configurar","Contraseña"])

const config= new Menu ("Configuracíon\n",["Cambiar color","Contraseña"])

const load= new Menu ("Contraseña\n",["Secretos","Escenarios"])

export default Menu