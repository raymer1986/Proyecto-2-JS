import { mainMenu } from "../MainMenu.js"
import Menu from "../models/menu.js"
import { mostrar } from "../Mostrardefault.js"
import {character,Elfo,Enano,Humano,nombres} from "./character.js"



// Menu con minuscula y Personaje con Mayuscula

// export const elfo = new Menu (Elfo.nombre,["Vida: "+Elfo.vida,"Defensa: "+Elfo.defensa,"Ataque: "+Elfo.ataque])
// export const enano = new Menu (Enano.nombre,["Vida: "+Enano.vida,"Defensa: "+Enano.defensa,"Ataque: "+Enano.ataque])
// export const humano = new Menu (Humano.nombre,["Vida: "+Humano.vida,"Defensa: "+Humano.defensa,"Ataque: "+Humano.ataque])



mostrar("Personajes",nombres)




// elfo.showMenu()
// enano.showMenu()
// humano.showMenu()