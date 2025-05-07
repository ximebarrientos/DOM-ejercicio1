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

function chequearNumeroIngresado(){
    console.log("Desde funcion chequear numero ingresado")
    let numeroIngresado=document.getElementById("numero")
    if(numeroIngresado===numeroMagico){
        alert("GANASTEEE! 🍾🍻🙌🎊😎")
    } else if(numeroIngresado<numeroMagico) {
        alert("El número mágico es mayor al que ingresaste")
    } else {
        alert("El número mágico es menor al que ingresaste")
    }
}