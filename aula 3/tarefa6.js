// ======= Tarefa 6 ========

const imprimirTabuada = (input) => {
    let valorUsuario = input;
    
    if(valorUsuario >= 0)
        for (var i = 0; i < 101; i++) {
            const resultado = valorUsuario*i;
            console.log(`${valorUsuario} x ${i} = ${resultado}`)
        }
    else
        console.log("esse número é negativo?");
}

// imprimirTabuada(6);