var copiar = document.querySelector("#btn_copy"); // boton copiar
var texto_edesencriptado = document.querySelector("#txt_desencriptar"); // textbox que copiara
var texto_Encriptado = document.querySelector("#txt_encriptado"); //textbox que encripta/desencripta
var enc = document.querySelector("#btn_encriptar"); //boton para encriptar
var desenc = document.querySelector("#btn_encriptado"); //boton para desencriptar

function copiard(){

  texto_edesencriptado.select();
  document.execCommand("copy");

}

function encriptar() {
    // he movido la "a" al medio para que no interfiera con la "i" al momento de leer el texto y no convierta la "i" de la a encriptada en una "i" encriptada ejemplo madre maimesmdrenter
    var te = texto_Encriptado.value.replace(/[e]/g, "enter").replace(/[i]/g,"imes").replace(/[a]/g,"ai").replace(/[o]/g,"ober").replace(/[u]/g,"ufat");
    texto_edesencriptado.value = te;
    texto_Encriptado.value="";

}

function desencriptar(){
    
    var te = texto_Encriptado.value.replace(/enter/g, "e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    texto_edesencriptado.value = te;
    texto_Encriptado.value="";

}

copiar.onclick = copiard;
enc.onclick = encriptar;
desenc.onclick = desencriptar;
