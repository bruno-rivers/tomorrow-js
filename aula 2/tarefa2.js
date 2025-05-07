let opcaoUsuario = 2;

let cardapio = {
    vegano: "HAMBURGUER VEGANO, CHURRASCO VEGANO E COXINHA VEGANA",
    naoVegano: "HAMBURGUER, CHURRASCO E COXINHA"
}

switch (opcaoUsuario) {
    case 1:
        console.log(cardapio.vegano);
        break;
    case  2:
        console.log(cardapio.naoVegano);
        break;
    case 3:
        console.log(`${cardapio.vegano} \n ${cardapio.naoVegano}`);
        break;
    default:
        console.log("por favor selecione entre as opções: 1, 2 ou 3");
}
