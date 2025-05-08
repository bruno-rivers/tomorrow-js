# Curso de Programação de Computadores com Javascript

### 1. 
>Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23. Faça um programa JavaScript que encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.

```JS
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
```


### 2. 
> Crie o seguinte array: let numbers = [5, 7, 1, 8, 9]. E exiba de forma decrescente.

```JS
const ordenarArray = () => {
    let numbers = [5, 7, 1, 8, 9]
    return console.log(numbers.sort((a,b) => b-a))
}

// ordenarArray()
// output: [9,8,7,5,1]
```


### 3. 
> Listando os seis primeiros números primos: 2, 3, 5, 7, 11 e 13, podemos ver que o sexto primo é 13. Qual é o 1001o número primo? Faça um programa JavaScript que apresente esse número para o usuário.

```JS

function informarPrimo(posicao) {
    let primo = descobrirPrimos(posicao);
    primo = primo.slice(-1)[0];
    console.log(primo)
}

// informarPrimo(1001);
// output: 997

// observação: a função acima depende da função abaixo para funcionar.
```


### 4. 
> Crie um programa que exiba todos os números primos que estão entre 0 e 200.

```JS
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
```


### 5. 
>Calculo do Delta (Δ) de uma função de segundo grau. Sabendo que: a = 2, b = 8 e c = – 24. O valor de delta é dado pela seguinte expressão: Δ = b2 – 4ac, em que a, b e c são coeficientes da equação e Δ é delta. Crie um programa JavaScript que faça esse cálculo, mostrando o cálculo passo a passo e o resultado final.

```JS
const calcularDelta = (a = 2, b = 8, c = -24) => {
    const delta = (b*b) - (4*a*c);
    console.log(`O valor de delta para a função ax² + bx + c onde a = ${a}, b = ${b} e c = ${c} é: ${delta}. pois b² é ${b*b} que subtraido de -4ac (${-4*a*c}) dá delta = ${delta} `);
}

// calcularDelta();
// outputs: "O valor de delta para a função ax² + bx + c onde a = 2, b = 8 e c = -24 é: 256. pois b² é 64 que subtraido de -4ac (192) dá delta = 256"
```


### 6. 
> Uma loja de tecnologia vende um computador por R$1850,00. Na época da Black Friday, o dono da loja autorizou um desconto de 20% no preço do PC para aumentar as vendas e liberar estoque. Qual será o valor do PC na Black Friday?

```JS
const calcularDesconto = (desconto = 20, valor = 100) => {
    let valorOriginal = valor;
    return valorFinal = valorOriginal - valorOriginal*(desconto/100);
}

// console.log(calcularDesconto())
//output: 1480
```


### 7. 
> José é um ótimo funcionário. Chega sempre na hora certa e quase não falta ao trabalho. Seu salário é de R$3480,00 há 2 anos. No próximo mês, o chefe do José resolveu dar um aumento a ele e disse que seu salário vai subir 13%. Qual será o valor do novo salário do José?

```JS
const calcularAumento = (aumento = 20, salario = 3480) => {
    let valorOriginal = salario;
    return valorFinal = valorOriginal + valorOriginal*(aumento/100);
}

// console.log(calcularAumento())
//output: 3932.4
```


### 8. 
> Dado uma variável que recebe um número inteiro. Calcule o fatorial de um número.

```JS
const calcularFatorial = (numero) => {
    var fatorial = numero;
    for (let i = numero-1; i > 0; i--) {
        fatorial = fatorial*i;
    }

    return fatorial
}

// console.log(calcularFatorial(6))
// output: 720
```