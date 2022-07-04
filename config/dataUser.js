import { textConsola } from "./css.js"

export const dataUser= [{
    name:"",
    escenario:"",
    victorias:0,
    derrotas:0,
    personajeOculto:""
}]


export function statsPlayer(){
    textConsola("Estadisticas Actuales:\n")

        let claves = Object.keys(dataUser[0])
        let value = Object.values(dataUser[0])
        for (let i = 0; i < Object.keys(dataUser[0]).length; i++) {
            textConsola(` [${claves[i]}] - ${(value[i])}`)
        } 
    prompt("\n Presione una tecla para continuar...")
    console.clear()
}
