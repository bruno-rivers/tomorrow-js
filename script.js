const verificarDiv = () => {
    const mmc = [];
    var soma = 0;
    for (var i = 1; i < 1000; i++) {
        if(i%5 == 0 || i%3 == 0){
            mmc.push(i);
            soma += i;
            // console.log(`${soma}`);
        }
    }
    
    return console.log(`soma total: ${soma}`);
};

// verificarDiv();
// Outputs: soma total: 233168

const ordenarArray = () => {
    let numbers = [5, 7, 1, 8, 9]
    return console.log(numbers.sort((a,b) => b-a))
}

// ordenarArray()
// output: [9,8,7,5,1]


const descobrirPrimos = (max = 100) => {

const primos = [2, 3, 5, 7, 11, 13];
    if(max >= 17){
        for (let i = 14; i <= max; i++) {
            let isPrime = true;
            for (const e of primos) {
                if (i % e == 0) {
                    isPrime = false;
                    break;
                }
            }

            if(isPrime){
                primos.push(i);
            }
        };
    }
    
    return primos;
}

// console.log(descobrirPrimos(200));
// outputs: [2,   3,   5,   7,  11,  13,  17,  19,  23,  29, 31,  37,  41,  43,  47,  53,  59,  61,  67,  71, 73,  79,  83,  89,  97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]


function informarPrimo(posicao) {
    let primo = descobrirPrimos(posicao);
    primo = primo.slice(-1)[0];
    console.log(primo)
}

// informarPrimo(1001);
// output: 997


const calcularDelta = (a = 2, b = 8, c = -24) => {
    const delta = (b*b) - (4*a*c);
    console.log(`O valor de delta para a função ax² + bx + c onde a = ${a}, b = ${b} e c = ${c} é: ${delta}. pois b² é ${b*b} que subtraido de -4ac (${-4*a*c}) dá delta = ${delta} `);
}

// calcularDelta();
// outputs: "O valor de delta para a função ax² + bx + c onde a = 2, b = 8 e c = -24 é: 256. pois b² é 64 que subtraido de -4ac (192) dá delta = 256"


const calcularDesconto = (desconto = 20, valor = 100) => {
    let valorOriginal = valor;
    return valorFinal = valorOriginal - valorOriginal*(desconto/100);
}

// console.log(calcularDesconto())
//output: 1480

const calcularAumento = (aumento = 13, salario = 3480) => {
    let valorOriginal = salario;
    return valorFinal = valorOriginal + valorOriginal*(aumento/100);
}

// console.log(calcularAumento())
//output: 3932.4

const calcularFatorial = (numero) => {
    var fatorial = numero;
    for (let i = numero-1; i > 0; i--) {
        fatorial = fatorial*i;
    }

    return fatorial
}

// console.log(calcularFatorial(6))
// output: 720