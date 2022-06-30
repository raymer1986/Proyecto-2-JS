import { dataUser } from "../config/dataUser.js ";
// Funcion que valida en Nombre de Usuario (Solo String)
export function validateName(callback){
    let name=""
    let regex,stateValue =""
    
    do {   
        name = prompt(`Nombre de Usuario:`)
        regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        if (!regex.test(name) || name==null){
            console.clear()
            stateValue=false
            console.log(`%cDebe indicar un Nombre - VALIDO-` ,`color:white;  background-color: red`)
        }else{
            stateValue=true
        }
    } while (stateValue!=true); 
    
    dataUser[0].name = name
   confirmed()
}
// Funcion que confirma si el usuario esta de acuerdo con el nombre que elegido
export function confirmed (){
    let regex2,confirmed =""
    do {
        console.clear()
        regex2 = /^(?:Y\b|N\b)/
        confirmed = prompt(`Confirme su Nombre ${dataUser[0].name} [Y,N] >>`).toUpperCase()
                
        if(!regex2.test(confirmed) || confirmed==null){
            console.log("Solo se admite [S/N] :")
        }else if(confirmed==="N"){
            validateName()
        }else{
            console.clear()  
            console.log(`%cBienvenido ${dataUser[0].name}\n` , `color:white;  background-color:blue` )

        }
    } while (confirmed!=="Y");
}
