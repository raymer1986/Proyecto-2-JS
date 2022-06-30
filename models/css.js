import { mainMenu,config,load } from "../MainMenu.js"


export const css= {
    textColor: ["red","blue","orange","yellow","pink"],
    textSpeed: ["2000","3000","4000"],
    colorSelected: ""
}
let colorSelected
export let colores = css.textColor[colorSelected] 

export function showColors(colores){
    textConsola("Colores disponibles\n")
    for (let i = 0; i < css.textColor.length; i++) {
    console.log(`%c${i+1}.- ${css.textColor[i]}`,`color: ${css.textColor[i]}`)
} 
    colorSelected = prompt("Seleccione el color :")
    colorSelected = css.textColor[colorSelected-1]  
    console.clear()
    mainMenu.showMenu()
    mainMenu.selectOpt(mainMenu,config,load)
      
} 
export function textConsola(arg){
   console.log(`%c${arg}`,`color: ${colorSelected}` )
}

