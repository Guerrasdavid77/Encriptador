
const textarea = document.querySelector(".mensaje");
textarea.addEventListener("keyup", e =>{
    textarea.style.height = "350px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});


/* 
a ---> ai
e ---> enter
i ---> imes
o ---> ober
u ---> ufat

-> "En este orden no codificara mal" <-

La letra "e" es convertida para "enter"
La letra "o" es convertida para "ober"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "u" es convertida para "ufat"

"gato" => "gaitober"
gaitober" => "gato"

*/

function encriptar(){
    //querySelector nos sirve para poder capturar el mensaje
    //value.toloweCase nos sirve para cuando capturamos el mensaje lo pase a minusculas
    let texto = document.getElementById("mensaje").value.toLowerCase();
    //El argumento de "/ /" hace que busca si la palabra se repite para cambiar asi no cambia solo una.
    //La letra "i" sirve para que afecte a mayusculas o minusculas por ejemplo e o E
    //La letra "g" es para que afecte a toda la oracion
    //La letra m sirve para que afecte a multiples lineas o parrafo

    let textoCifrado = texto.replace(/e/igm,"enter");
    textoCifrado = textoCifrado.replace(/o/igm,"ober");
    textoCifrado = textoCifrado.replace(/i/igm,"imes");
    textoCifrado = textoCifrado.replace(/a/igm,"ai");
    textoCifrado = textoCifrado.replace(/u/igm,"ufat");


    document.getElementById("muñeco").style.display = "none";
    document.getElementById("text-ocult2").style.display = "none";
    document.getElementById("text-ocult1").innerText = textoCifrado;
    //Esto sirve para esconder el botton
    document.getElementById("buttoncopy").style.display = "inline";
}

function desencriptar(){
    //querySelector nos sirve para poder capturar el mensaje
    //value.toloweCase nos sirve para cuando capturamos el mensaje lo pase a minusculas
    let texto = document.getElementById("mensaje").value.toLowerCase();
    //El argumento de "/ /" hace que busca si la palabra se repite para cambiar asi no cambia solo una.
    //La letra "i" sirve para que afecte a mayusculas o minusculas por ejemplo e o E
    //La letra "g" es para que afecte a toda la oracion
    //La letra m sirve para que afecte a multiples lineas o parrafo

    let textoCifrado = texto.replace(/enter/igm,"e");
    textoCifrado = textoCifrado.replace(/ober/igm,"o");
    textoCifrado = textoCifrado.replace(/imes/igm,"i");
    textoCifrado = textoCifrado.replace(/ai/igm,"a");
    textoCifrado = textoCifrado.replace(/ufat/igm,"u");

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("text-ocult2").style.display = "none";
    document.getElementById("text-ocult1").innerText = textoCifrado;
    //Esto sirve para esconder el botton
    document.getElementById("buttoncopy").style.display = "inline";
}

function buttonCopy(){
    var from = document.getElementById("text-ocult1");
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}




