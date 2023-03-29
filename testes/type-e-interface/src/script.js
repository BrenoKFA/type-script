"use strict";
// pode alterar os itens
function resumo(usuario) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}
resumo({
    nome: 'Breno',
    idade: 17
});
// forma de simplificar o código
