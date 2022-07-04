import character, { Elfo, Enano, Humano } from "../characters/character.js"
import { combat } from "../characters/combate.js"
import { elegirEscenario } from "../characters/escenario.js"
import { mainMenu,Personajes,config,password} from "../MainMenu.js"
import { textConsola } from "../models/css.js"
import { dataUser } from "./dataUser.js"


const code= ["erebus", "raymer"]

export function codigo(){
const versus = [Elfo,Enano, Humano]
    let codigo = prompt("Ingrese un codigo y Obten Personaje Mejorado :")

    const codigoValido = code.find( elemento=> elemento===codigo )

    if (codigoValido) {
        
        dataUser[0].personajeOculto = codigoValido

        const Mago  = new character (100, 13, 11, ["pocion","pocion","pocion"],"Saruman")

        console.log(`Codigo Valido\n\nHas desbloquedo a ${Mago.nombre}\n`)
        Mago.showstats
        let option= prompt(`\nDesea Jugar con ${Mago.nombre}? [Y/N]` )
        let condition
        do{
            if (option==="y" ||option==="Y") {
                condition=false
                console.clear()
                console.log("Juguemos")
                const aleatorio = Math.floor(Math.random() * (Math.floor(0) - Math.ceil(2) * -1));
                elegirEscenario()
                combat(Mago,versus[aleatorio])

            }else if(option==="n" ||option==="N"){
                condition=false
                console.clear()
                mainMenu.showMenu()
                mainMenu.selectOpt(Personajes,config,password)
            } else{
                option = prompt("Respuesta incorrecta, elija nuevamente")
                condition = true
            }         
        } while (condition);
        
    
    }else{
        console.clear()
        textConsola("- Codigo Invalido -\n\n")
        mainMenu.showMenu()
        mainMenu.selectOpt(Personajes,config,password)
    } 

}