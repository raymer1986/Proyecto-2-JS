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

export const Elfo = new character (100, 12, 8, ["pocion","pocion","pocion"],"Legolas")
export const Enano = new character (200, 8, 12,  ["pocion"],"Grim")
export const Humano = new character (150, 10, 10,  ["pocion","pocion"],"Deckar")

export const nombres = ["Elfo","Enano","Humano"] 

export default character
