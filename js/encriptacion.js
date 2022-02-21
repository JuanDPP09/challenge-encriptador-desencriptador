function codificacion(textoE){
      textoE = textoE.replace(/e/g,"enter");
      textoE = textoE.replace(/i/g,"imes");
      textoE = textoE.replace(/a/g,"ai");
      textoE = textoE.replace(/o/g,"ober");
      textoE = textoE.replace(/u/g,"ufat");
      return textoE;
  };