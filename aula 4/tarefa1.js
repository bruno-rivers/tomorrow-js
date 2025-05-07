// ======= Tarefa 1 ========
const calcularPotencia = (base, expoente) => {
    if (expoente >= 0) {
        return Math.pow(base, expoente);
    }else {
        return console.log("informe um expoente não negativo")
    }
    
};


// console.log(calcularPotencia(10,10));