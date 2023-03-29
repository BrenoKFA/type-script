"use strict";
function resumo(usuario) {
    if (usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.nome} anos`;
    }
    else {
        return `Olá ${usuario.nome}, tudo bem?`;
    }
}
// "(usuario: {nome: string, idade: number})" serve para especificar o type que chega na função, garantindo que não dê erro
// "idade?" diz que essa propiedade é opcional
let u = {
    nome: 'Breno',
    idade: 17
};
resumo(u);
