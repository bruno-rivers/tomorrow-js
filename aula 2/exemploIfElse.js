const user = {"peso": 0,"altura": 0}

user.peso = 30;
user.altura = 1.70;

let calculoImc = (peso, altura) => {
    let imc = peso/altura**2;
    
    if (imc < 17)
        console.log("muito abaixo do peso")
    else if (imc >= 17 && imc <18.5)
        console.log("abaixo do peso")
    else if (imc >= 18.5 && imc <25)
        console.log("padrão")
    else if (imc >= 25 && imc <30)
        console.log("pré obesidade")
    else if (imc >= 30 && imc <35)
        console.log("obesidade 1")
    else if (imc >= 35 && imc <40)
        console.log("obesidade 2")
    else if (imc > 40)
        console.log("obesidade 3")
    else
        console.log("você é um corpo que possui matéria ou apenas ondas espirituais?")            
}

calculoImc(user.peso, user.altura)
