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



const encontrarPrimos = (max = 100) => {

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
            console.log(primos)
        }
    };
    }
}



encontrarPrimos(19);

