import { LoadGame } from "./config/initialScreen.js";
import { validateName, confirmed } from "./models/users.js";
import { config, mainMenu,load } from "./MainMenu.js";


async function initGame(){
    //pantalla de carga del juego
        await LoadGame
    //validacion y confirmacion del usuario
       
}
        initGame()
        validateName()
        
        //Menú y Selección de opciones     
        mainMenu.showMenu()
        mainMenu.selectOpt(mainMenu,config,load)






