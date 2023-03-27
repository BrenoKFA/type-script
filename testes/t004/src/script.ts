function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase
    return ${firstLetter} + name.substring(1)
}
// retorna o nome com a primeira letra maiúscula
// "(name: string): string" indica que a função recebe uma string e retorna uma string também