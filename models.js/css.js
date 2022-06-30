import {mainMenu, Menu } from "./menu.js"
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
    switch (colorSelected) {
        case "1":
            colorSelected = css.textColor[0]
            break;
        case "2":
            colorSelected = css.textColor[1]
            break;
        case "3":
            colorSelected = css.textColor[2]
            break;
        case "4":
            colorSelected = css.textColor[3]
            break;
        case "5":
            colorSelected = css.textColor[4]
            break;
    }   
    console.clear()
    mainMenu.showMenu()
    mainMenu.selectOpt()
      
} 
export function textConsola(arg){
   console.log(`%c${arg}`,`color: ${colorSelected}` )
}

