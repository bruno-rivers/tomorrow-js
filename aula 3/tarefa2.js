// ======= Tarefa 2 ========

const verificaPrimo = (numero) => {
    let divisores = [];
    for (var i = 0; i <= numero; i++) {
        if (numero%i == 0) {
            divisores.push(i);
            console.log("divide por " + i);
        }
    }
    
    if(divisores.length != 2)
        return console.log(numero + "não é primo");
    else
        console.log(numero + " é primo");
};

// verificaPrimo(11);
