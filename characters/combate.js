
import {Menu} from "../models/menu.js"
import { dataUser,statsPlayer } from "../config/dataUser.js";
import { mainMenu,config, Personajes, password } from "../MainMenu.js";
import { css} from "../models/css.js";
import {character,Elfo,Enano, Humano}from "./character.js"





export async function combat(propio,enemigo) {
 const promesa =new Promise((resolve) =>{
     let intervalo = setInterval(() => {
      
    let decicion = Math.round(Math.random()*6)
  if (decicion > 5){
    propio.curarse
  }

  else {
      if(propio.atacar>enemigo.atacar){
        enemigo.vida-=propio.atacar+enemigo.defensa
       
     if (enemigo.vida<=0){
          enemigo.vida=0
          dataUser[0].victorias +=1
          console.log("Victoria!!!")

     }
        console.log(`%c Tu vida: ${propio.vida}`,`color:blue`)
        console.log(`%c Rival: ${enemigo.vida}`,`color:red`)

   }
   

    else if(enemigo.atacar>propio.atacar ){
     propio.vida-=enemigo.atacar+propio.defensa

     if (propio.vida<=0){
          propio.vida=0
          dataUser[0].derrotas += 1
          console.log("Haz sido derrotado")
        
     }
  
     console.log(`%c Tu vida: ${propio.vida}`,`color:blue`)
     console.log(`%c Rival: ${enemigo.vida}`,`color:red`)
    }
    
  }
  
    if(propio.vida<=0 || enemigo.vida <= 0){
        clearInterval(intervalo)
        resolve(console.log("%c Fin de la pelea","color:orange"))
        propio.vida = 150
        enemigo.vida = 150

    }
}, css.speedSelected);
      
}).then(() => {
  statsPlayer()
  mainMenu.showMenu()
  mainMenu.selectOpt(Personajes,config,password)
});
}
