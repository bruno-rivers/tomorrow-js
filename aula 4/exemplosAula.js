// exemplos

const calcular_area_circulo = (raio, pi=3.14) => {
    const area = pi * ( raio ** 2);
    return area;
};

const calcular_area_triangulo = (base, altura) => {
    const area = (base*altura)/2;
    return area;
};

const calcular_area_retangulo = (base, altura) => {
    const area = base*altura;
    return area;
};


// console.log(calcular_area_circulo(10))
// console.log(calcular_area_triangulo(10, 16))
// console.log(calcular_area_triangulo(10, 16))
