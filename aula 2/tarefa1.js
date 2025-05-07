let media = 5;
let nota1 = 2; 
let nota2 = 4;


const calcularMedia = (media, nota1, nota2) => {
    
    const mediaAluno = (nota1 + nota2)/2
    
    if (mediaAluno >= media) {
       console.log(`Aluno aprovado na disciplina! Parabens! A sua media foi: ${mediaAluno}`) 
    }
    else {
        console.log(`Aluno não aprovado, se esforce mais! A sua media foi: ${mediaAluno}`)
    }
    
}

calcularMedia(media, nota1, nota2);