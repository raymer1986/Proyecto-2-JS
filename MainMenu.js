import Menu from "./models/menu.js"

export const mainMenu = new Menu ("Menú Principal\n",["Iniciar Juego","Configurar","Contraseña"])

export const Personajes= new Menu ("Selecciona tu personaje\n",["Elfo","Enano","Humano"])

export const config= new Menu ("Configuracíon\n",["Cambiar color","Velocidad del Combate"])

// Estos codigos desbloquean personajes Ocultos//
export const password = new Menu ("Contraseñas",["erebus","raymer"])

//export const load= new Menu ("Contraseña\n",["Escenarios","Codigo Secreto"])

export const escenarios= new Menu ("Escenarios\n",["Isengar","Mordor","Rivendell"])











