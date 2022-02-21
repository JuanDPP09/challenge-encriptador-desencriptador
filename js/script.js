//DEFINICION DE LOS BOTONES
const contenido=document.querySelector("#msg");    
const btn= document.querySelector("#btn-copiar");
const encriptar = document.querySelector("#encriptar");
const desencriptar = document.querySelector("#desencriptar");
const textoCapturado = document.querySelector("#texto");
const prohi = document.querySelector("#prohibido")
//EVENTOS
btn.addEventListener("click", function(){
    alert("Acabas de copiar el texto encriptado/desencriptado");
    contenido.select();
    document.execCommand("copy")
    contenido.value = ""
});
encriptar.addEventListener("click", function(){
    event.preventDefault();
    contenido.value="";
    var textoEncriptado = textoCapturado.value;
    if(!comprobacion(textoEncriptado)){
        prohi.classList.remove("invisible");

    }else{
        prohi.classList.add("invisible");
        contenido.value = codificacion(textoEncriptado);
        textoCapturado.value = "";
    };

});
desencriptar.addEventListener("click",function(){
    event.preventDefault();
    contenido.value="";
    var textoDesencriptado = textoCapturado.value;
    if(!comprobacion(textoDesencriptado)){
        prohi.classList.remove("invisible");
        console.log(prohi.value);

    }else{
        prohi.classList.add("invisible");
        contenido.value = descodificacion(textoDesencriptado);
        textoCapturado.value = "";
    };
});
