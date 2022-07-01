

import {character, Elfo, nombres } from "./characters/character.js"
import { css } from "./models/css.js"
import Menu from "./models/menu.js"

export function mostrar(titulo,objeto){
    
    let input
    console.log(titulo)
    for (let i = 0; i <objeto.length; i++){
        console.log(`${i+1}. ${objeto[i]}`)
    }
    input = prompt(`Seleccione ${titulo}`)

    if (input==="1"){
        do{
         
        
            console.clear();
             console.log()
       input = prompt(">>")
       
        } 
        while (input > objeto.length);
        }
 
 
}

