
import {character,Elfo,Enano}from "./character.js"

 function combat(propio,enemigo) {
   new Promise((resolve) =>{
     let intervalo = setInterval(() => {
    let decicion = Math.round(Math.random()*6)
  if (decicion > 5){
    propio.curarse
  }

  else {
      if(propio.atacar>enemigo.atacar){
        enemigo.vida-=propio.atacar+enemigo.defensa
        console.log(`%c Tu vida:\n${propio.vida}`,`color:blue`)
        console.log(`%c Rival:\n${enemigo.vida}`,`color:red`)

   }
   
    

    else if(enemigo.atacar>propio.atacar ){
     propio.vida-=enemigo.atacar+propio.defensa
     
     console.log(`%c Tu vida:\n${propio.vida}`,`color:blue`)
     console.log(`%c Rival:\n${enemigo.vida}`,`color:red`)
    }
    
  }
    if(propio.vida<=0 || enemigo.vida <= 0){
        clearInterval(intervalo)
        resolve(console.log("%c Fin de la pelea","color:orange"))
   ; 
    }
}, 1000);

    
})

}


