import Menu from "./models/menu.js"

export const mainMenu = new Menu ("Menú Principal\n",["Iniciar Juego","Configurar","Contraseña"])

export const config= new Menu ("Configuracíon\n",["Cambiar color","Contraseña"])

export const load= new Menu ("Contraseña\n",["Escenarios","Codigo Secreto"])

export const Escenarios= new Menu ("Escenarios",["Isengar","Mordor","Rivendell"])

// Estos codigos desbloquean personajes Ocultos//
export const password = new Menu ("Contraseñas",["erebus","raymer"])









