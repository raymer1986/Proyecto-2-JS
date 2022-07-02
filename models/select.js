export function selectopcion(opcion1,opcion2,opcion3){
do {
        
      
    let option = prompt(">>")
  
     switch (option) {
        case "1":
            console.clear()
            opcion1.showMenu()
            option = prompt(">>")
            condition =false
            
            break;
            
            case "2":
                console.clear()
                opcion2.showMenu()
                option = prompt(">>")
                condition =false
            
             break;
             
        case "3":
                console.clear()
                opcion3.showMenu()
                option = prompt(">>")
                condition =false
               
                break;
        
        case "3":
                console.clear()
                opcion3.showMenu()
                option = prompt(">>")
                condition =false
            
                  break;        
       
            default:
                option = prompt("respuesta incorrecta, elija nuevamente")
                condition = true
                break;
            }
        } while (condition); }