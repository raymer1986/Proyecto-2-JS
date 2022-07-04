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

    console.log(this.nombre+":"+" \nvida "+this.vida+" \nataque "+this.ataque +" \ndefensa " + this.defensa)
}

get showInv(){
    console.log (this.inventario)
}

get atacar(){
    return this.ataque+Math.round(Math.random()*6)
   }
get curarse(){this.inventario.splice(0,1)
if (this.inventario.length===0) {
    "No tienes mas pociones"
    
}
else {
    console.log ("haz tomado una posion")
    return this.vida += 20
}   
  }
get restart(){
    return this.vida = vida
}

}

export const Elfo = new character (100, 11, 9, ["pocion","pocion","pocion"],"Legolas")
export const Enano = new character (100, 9, 11,  ["pocion"],"Grim")
export const Humano = new character (100, 10, 10,  ["pocion","pocion"],"Deckar")
export default character
