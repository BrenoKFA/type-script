function firstLetterUpperCase(name4: string): string {
    let firstLetter = name4.charAt(0).toUpperCase
    return ${firstLetter} + name4.substring(1)
}
// retorna o nome com a primeira letra maiúscula
// "(name: string): string" indica que a função recebe uma string e retorna uma string também