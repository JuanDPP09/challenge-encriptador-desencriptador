function comprobacion(texto){
    var filtro = "abcdefghijklmnñopqrstuvwxyz "
    var salida = ""
    var valido = true
    for(var i = 0; i<texto.length;i++){
        //var comprobando
        if(filtro.indexOf(texto.charAt(i)) != -1){
            salida += texto.charAt(i);
        
        }else{           
            break;
        }
    }
    if(salida.length < texto.length){
        valido = false
    }else{
        valido = true
        }
    return valido;
    
}