// ======= Tarefa 3 ========

const alunosMatriculados = {
    Aluminia: {
        nota: 3.5,
        nota: 8,
        nota: 7,
    },
    Bromo: {
        nota: 6.5,
        nota: 9.2,
        nota: 10
    },
    Carbono: {
        nota: 5,
        nota: 7.8,
        nota: 8.1
    },
    Dubnia: {
        nota: 9.3,
        nota: 5.5,
        nota: 3.9,
    },
    Einstenia: {
        nota: 3.5,
        nota: 4.2,
        nota: 1.7
    },
}

const calcularMedia = (nome) => {
    let notas = [];
    let media;
    if(nome){
        notas = alunosMatriculados[aluno];
        media = (notas.nota1 + notas.nota2 + notas.nota3)/3;
    }else {
        console.log("informe um nome de aluno")
    }
    
    console.log(media)
}

// calcularMedia()