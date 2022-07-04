import { LoadGame } from "./models/initialScreen.js";
import { validateName } from "./config/users.js";
import { config, mainMenu, Personajes, password} from "./models/MainMenu.js";




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


 



    
