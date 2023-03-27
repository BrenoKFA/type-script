let n1 = document.getElementById('n1') as HTMLInputElement
let n2 = document.getElementById('n2') as HTMLInputElement
let botao = document.getElementById('calcular') as HTMLButtonElement
let res = document.getElementById('res') as HTMLDivElement

function calc(n1: number, n2: number) {
    return n1 + n2
}

botao.addEventListener('click', () => {
    res.innerHTML = calc(+n1.value, +n2.value).toString()
})