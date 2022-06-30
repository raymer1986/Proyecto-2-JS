export class character {
    constructor(vida,ataque,defensa,inventario,nombre,barradevida){
        this.vida = vida
        this.ataque = ataque
        this.defensa= defensa
        this.inventario = inventario
        this.nombre = nombre
        this.barradevida = barradevida
    }

 
    
get showstats(){

    console.log(this.nombre+":"+"vida "+this.vida+" ataque "+this.ataque +" defensa " + this.defensa)
}

get showInv(){
    console.log (this.inventario)
}

get atacar(){
    return this.ataque+Math.round(Math.random()*6)
   }
get curarse(){this.inventario.splice(1,1)
return this.vida += 20
   
  }

}

export const elfo = new character (100, 10, 10, ["pocion","pocion"],"Legolas")



console.log(elfo.inventario)