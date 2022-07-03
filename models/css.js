import { mainMenu,config,Personajes,escenarios, password } from "../MainMenu.js"


export const css= {
    textColor: ["red","blue","orange","yellow","pink"],
    textSpeed: [2000,1000,500],
    colorSelected: "",
    speedSelected:1000
}
let colorSelected

export let colores = css.textColor[colorSelected] 

export function showColors(colores){
    console.clear()
    textConsola("Colores disponibles\n")
    for (let i = 0; i < css.textColor.length; i++) {
    console.log(`%c${i+1}.- ${css.textColor[i]}`,`color: ${css.textColor[i]}`)
} 
    colorSelected = prompt("Seleccione el color :")
    colorSelected = css.textColor[colorSelected-1]  
    console.clear()
    mainMenu.showMenu()
    mainMenu.selectOpt(Personajes,config,password,escenarios)
      
} 
export function textConsola(arg){
   console.log(`%c${arg}`,`color: ${colorSelected}` )
}

export function gameSpeed(){
    let speed= 1000
    console.clear()
    textConsola("Velocidad del Juego\n\n1.-Lento\n2.-Medio\n3.-Rapido")
        
    speed = prompt("Seleccione la velocidad:")
    css.speedSelected = css.textSpeed[speed-1]  
    console.clear()
    mainMenu.showMenu()
    mainMenu.selectOpt(Personajes,config,password)
}
