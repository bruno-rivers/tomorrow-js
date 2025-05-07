// ======= Tarefa 1 ========
const pagarRecompensa = (missoes, recompensas, bonus) => {
    
    for (var i = 0; i < recompensas.length; i++) {
        
      recompensas[i] = recompensas[i]*bonus;
    }
    
    console.log(recompensas);
}

// pagarRecompensa(3, [6,9,12], 4);