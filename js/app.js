let numeroMagico=0;

function empezarJuego(){
    console.log("Desde funcion empezar juego")
    const startJuego=document.getElementById("comenzarJuego")
    numeroMagico=Math.floor(Math.random()*100)+1
    console.log(numeroMagico)
    if(startJuego.textContent=="Comenzar el juego"){
        startJuego.classList.add("d-none")
    }else{
        startJuego.remove("d-none")
    }

}

function chequearNumeroIngresado(e){
    e.preventDefault()
    console.log("Desde funcion chequear numero ingresado",numeroMagico)
    let numeroIngresado=parseInt(document.getElementById("numero").value)
    if(numeroIngresado===numeroMagico){
        alert("GANASTEEE! 🍾🍻🙌🎊😎"+numeroMagico)
    } else if(numeroIngresado<numeroMagico) {
        alert("El número mágico es mayor al que ingresaste")
    } else {
        alert("El número mágico es menor al que ingresaste")
    }
}