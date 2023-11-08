const caixa = document.querySelector("body")
const cor = document.querySelector('input')

const button = document.querySelector("button")

    const corpadrao = '#fff'
caixa.style.backgroundColor = `${corpadrao}`
    

function altcor() {
    caixa.style.backgroundColor = `${cor.value}`
}
