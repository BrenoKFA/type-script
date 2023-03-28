/* type User = {
    nome: string,
    idade: number
} */
// não pode alterar os itens
interface User {
    nome: string
    string: number
}
// pode alterar os itens

function resumo(usuario: User) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
}

resumo({
    nome: 'Breno',
    idade: 17
})

// forma de simplificar o código