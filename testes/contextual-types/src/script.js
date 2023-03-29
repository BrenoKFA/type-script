"use strict";
let nomes5 = ['breno', 'pedro', 'josé', 'paulo', 90];
nomes5.forEach((nome) => {
    if (typeof nome === 'string') {
        console.log(nome.toUpperCase());
        // outra forma de retornar a string com a primeira letra maiúcula
    }
    else {
        console.log(nome);
    }
});
