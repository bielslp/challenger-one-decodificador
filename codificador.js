
/* let textoOriginal = document.getElementById("inputUm").value;
let textoModificado;


function codificarTexto(textoModificado){
 textoModificado = textoOriginal.replace(/a/g, "ai");
 textoModificado = textoOriginal.replace(/e/g, "enter");
 textoModificado = textoOriginal.replace(/i/g, "imes");
 textoModificado = textoOriginal.replace(/o/g, "ober");
 textoModificado = textoOriginal.replace(/u/g, "ufat");
 
 return  textoModificado;

}

function decodificarTexto() {
    let textoModificado = textoOriginal;
}



function decodificarTexto(){
    let textoOriginal = document.getElementById("inputDois").value;
    let textoModificado = textoOriginal.replace(/ai/g, "a");
    console.log(textoModificado);
} */

function codificar(texto) {
    // Substituindo as vogais pelas palavras correspondentes
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

function decodificar(texto) {
    // Substituindo as palavras codificadas pelas vogais correspondentes
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

document.getElementById("codificarBtn").addEventListener("click", function() {
    var textoInput = document.getElementById("textoInput").value;
    var textoCodificado = codificar(textoInput);
    document.getElementById("resultado").innerText = "Texto codificado: " + textoCodificado;
});

document.getElementById("decodificarBtn").addEventListener("click", function() {
    var textoInput = document.getElementById("textoInput").value;
    var textoDecodificado = decodificar(textoInput);
    document.getElementById("resultado").innerText = "Texto decodificado: " + textoDecodificado;
});

function recarregar(){
    location.reload();
}








