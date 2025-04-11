function cliqueNoBotao(numero) {
    const valorTela = document.querySelector(".display").value

    document.querySelector(".display").value = valorTela + numero
}

function limpar() {
    document.querySelector(".display").value = ""

}

function resultado() {
    const valorTela = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorTela)
}

function sinal() {
    const valorTela = document.querySelector(".display").value

    document.querySelector(".display").value = valorTela * -1
}

