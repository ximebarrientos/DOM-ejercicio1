let numeroMagico=0;

function empezarJuego(){
    console.log("Desde funcion empezar juego")
    const startJuego=document.getElementById("comenzarJuego")
    if(startJuego.textContent=="Comenzar el juego"){
        startJuego.classList.add("d-none")
    }else{
        startJuego.remove("d-none")
    }
    numeroMagico=Math.floor(Math.random()*100)+1
    console.log(numeroMagico)
}