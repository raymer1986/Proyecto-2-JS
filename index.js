import { LoadGame } from "./config/initialScreen.js";
import { validateName, confirmed } from "./models/users.js";
import { config, mainMenu, Personajes, password, escenarios } from "./MainMenu.js";
import { showColors } from "./models/css.js";
import { elegirchar } from "./characters/menuchars.js";
//import { menuChars, humano,elfo,enano} from "./characters/menuchars.js";
let condition;

async function initGame(){
    //pantalla de carga del juego
        await LoadGame
       
        //validacion y confirmacion del usuario
        
    }
    initGame()
    validateName()
    
    //Menú y Selección de opciones     
    
    mainMenu.showMenu()
    mainMenu.selectOpt(Personajes,config,password)


 




