// ======= Tarefa 4 ========

const encontrarPares = (min, max) => {
    const pares = [];
    for (var i = min-1; i <= max; i++) {
        if (i%2 == 0) {
            pares.push(i)
            
        }
    }
    return console.log(`${pares.slice('')} \n ${pares.length}`);
};

// encontrarPares(2,10);
