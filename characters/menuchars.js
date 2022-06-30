import Menu from "../models/menu.js"



const Elfo = new Menu ("Legolas\n",["Stats: vida 20 defensa 20 ataque 20"])
const Enano = new Menu ("Grim\n",["Stats: vida 20 defensa 20 ataque 20"])
const Humano = new Menu ("Carlos\n",["Stats: vida 20 defensa 20 ataque 20"])

const menuChars = new Menu ("Seleccion de personajes\n",["Elfo","Enano","Humano"])
menuChars.showMenu()
menuChars.selectOpt(Elfo,Enano,Humano)

Elfo.showMenu()
Enano.showMenu()
Humano.showMenu()