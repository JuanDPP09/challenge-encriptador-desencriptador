function descodificacion(textoD){
        textoD = textoD.replace(/enter/g,"e");
        textoD = textoD.replace(/imes/g,"i");
        textoD = textoD.replace(/ai/g,"a");
        textoD = textoD.replace(/ober/g,"o");
        textoD = textoD.replace(/ufat/g,"u");
        return textoD;
  };