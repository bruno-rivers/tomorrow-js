const matematica = () => {
    let primeiroTermo = 2;
    let razao = 2;
    let valores = [];
    
    for (var p = 0; p < 10; p++) {
        const valorAtual = primeiroTermo + (razao * p);
        valores.push(valorAtual);
        console.log(`${valores.pop()}, `);
    }
};

// matematica();

const anoNovo = () => {
    for (var i = 10; i >= 0; i--) {
        console.log(i);
    }
    
    console.log("FELIZ ANO NOVO");
};

// anoNovo();


const tabuada = (input) => {
    let valorUsuario = input;
    
    if(valorUsuario >= 0)
        for (var i = 0; i < 10; i++) {
            const resultado = valorUsuario*i;
            console.log(`${valorUsuario} x ${i} = ${resultado}`)
        }
    else
        console.log("esse número é negativo?");
}

// tabuada(5);
