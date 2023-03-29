"use strict";
function mostrarTexto(texto, alinhamento
// type literal, só aceita essas declarações
) {
    return `<div style="text-align": ${alinhamento}>${texto}</div>`;
}
mostrarTexto('Breno', 'left');
