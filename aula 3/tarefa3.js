// ======= Tarefa 3 ========

const apresentarFibonacci = (posicao) => {
    var fib = [0, 1];
    
    for (let i = 2; i <= posicao; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    //   console.log(fib[i]);
    }
    
    return console.log(fib.pop());
}

// apresentarFibonacci(8)