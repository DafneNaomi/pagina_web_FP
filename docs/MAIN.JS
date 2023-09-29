const arregloBotones = document.querySelectorAll("button")

const numeroHTML = document.querySelector(".flex>h2")



let numeroReal = 0

numeroHTML.innerText=numeroReal



function sumar(sumando){
    numeroReal=numeroReal + sumando
    numeroHTML.innerText=numeroReal
}


arregloBotones.forEach((boton) =>{
    boton.addEventListener("click" , (evento)=>{
        let numero= Number(evento.target.innerText)
        console.log(numero)
        sumar(numero)
        
    })

        
        
    
})