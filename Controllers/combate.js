
import { dataUser,statsPlayer } from "../config/dataUser.js";
import { mainMenu,config, Personajes, password } from "../models/MainMenu.js";
import { css} from "../config/css.js";
import {showBar } from "../models/bars.js";


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
        if(enemigo.vida>0){
             //barra de vida
          showBar(`Vida Player ${propio.vida} `,propio.vida,150,"#","color:blue")
          showBar(`Vida Enemigo ${enemigo.vida} `,enemigo.vida,150,"#","color:red")

         }
       
     if (enemigo.vida<=0){
          enemigo.vida=0
             //barra de vida
          showBar(`Vida Player ${propio.vida} `,propio.vida,150,"#","color:blue")
          showBar(`Vida Enemigo ${enemigo.vida} `,enemigo.vida,150,"#","color:red")
          dataUser[0].victorias +=1
          console.log("Victoria!!!")

     }
     
      console.log("")
       
   }
   

    else if(enemigo.atacar>propio.atacar ){
     propio.vida-=enemigo.atacar+propio.defensa
     if(propio.vida>0){
         //barra de vida
     showBar(`Vida Player ${propio.vida} `,propio.vida,150,"#","color:blue")
     showBar(`Vida Enemigo ${enemigo.vida} `,enemigo.vida,150,"#","color:red")
    }
     if (propio.vida<=0){
          propio.vida=0
          //barra de vida
          showBar(`Vida Player ${propio.vida} `,propio.vida,150,"#","color:blue")
          showBar(`Vida Enemigo ${enemigo.vida} `,enemigo.vida,150,"#","color:red")
         dataUser[0].derrotas +=1
          console.log("Haz sido derrotado")
        
     }    

   else if(propio.ataque = enemigo.ataque){
    console.log("%cAtaque bloqueado","color:orange")
   }

    }
    
  }    
       
  
    
    if(propio.vida<=0 || enemigo.vida <= 0){
     
        clearInterval(intervalo)
        
        resolve(console.log("%c Fin de la pelea","color:orange"))
         propio.vida = 150
         enemigo.vida = 150
    }

}, css.speedSelected);

})
.then(() => {
  statsPlayer()
  mainMenu.showMenu()
  mainMenu.selectOpt(Personajes,config,password)
});
}
