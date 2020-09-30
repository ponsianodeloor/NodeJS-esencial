function saludo(){
    return "hola";
}

let calculos = {
    saludar: saludo(),
    duplicar: function(valor){
        return valor * 2;
    },
    dividir: function(valor){
        return valor / 2;
    }
}
console.log(saludo());
console.log(calculos.saludar);
console.log(calculos.duplicar(5));
console.log(calculos.dividir(4));
