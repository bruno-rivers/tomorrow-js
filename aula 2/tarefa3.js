let a1 = 63;
let a2 = 27;
let a3 = 90;
let soma = a1+a2+a3;


const classificarTriangulo = (a1, a2, a3) => {
    
    let angulos = [a1,a2,a3]
    let triangulo = "acutangulo";
    
    angulos.forEach(num => {
        if(num > 90)
            triangulo = "obtusângulo"
        else if (num == 90)
            triangulo = "retangulo"
    });
    
    return `triangulo ${triangulo}`
    
}


let verificarAngulos = soma == 180 ? classificarTriangulo(a1, a2, a3) : "não é triangulo";

console.log(verificarAngulos);
