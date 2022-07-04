export function showBar(nombre,vida, actual){
    
        const bar = nombre+": "+"▓".repeat(
            parseInt(vida*50/actual)) 
            console.log(bar)
       
    }

export function vidaRestante(vidaPlayer, vidaEnemiga){
    
        showBar(`Vida Player ${vidaPlayer} `,vidaPlayer,150)
        showBar(`Vida Enemigo ${vidaEnemiga} `,vidaEnemiga,150)
        
        vidaPlayer -=parseInt( Math.random()*19)
        vidaEnemiga -=parseInt( Math.random()*19)          
}
