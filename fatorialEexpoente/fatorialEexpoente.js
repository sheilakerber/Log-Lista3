/* 3) Fazer um programa que calcule o fatorial de um número.Fatorial é a multiplicação do próprio número por todos
abaixo dele até 1. Exemplo do fatorial de 5 seria:5x4x3x2x1 = 120. Fatorial de 5 é 120.
*/
function calcularFatorial() {
    //pegar elementos do DOM
    var n1_inputFatorial = Number(document.getElementById("numeroFatorial").value)
    var resFatorial = document.getElementById("resultadoFatorial")
    var n1Input = n1_inputFatorial

    //criar n-1 e fatorial de n (n * (n-1))
    var n2_inputFatorial = n1_inputFatorial - 1
    var fatorial = n1_inputFatorial * n2_inputFatorial

    //validar dados de entrada 0 e 1
    if (n1_inputFatorial == 0 || n1_inputFatorial == 1) {
        resFatorial.innerHTML = `${n1_inputFatorial}! = 1.`
    } else {
        //loop para calcular e atualizar o valor fatorial
        while (n1_inputFatorial != 1 && n2_inputFatorial > 1) {
            n1_inputFatorial--
            n2_inputFatorial--
            fatorial = (fatorial * n2_inputFatorial)
        }
        resFatorial.innerHTML = `${n1Input}! = ${fatorial}.`
    }
}

/* 4)Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado.
Programar usando FOR ou WHILE.
*/
function calcularExpoente() {
    //pegar elementos do DOM
    var numBase = document.getElementById("numeroBase").value
    var numExpoente = document.getElementById("expoente").value

    //criar variaveis para o loop
    var resBaseExpoente = numBase * numBase
    var contador = numExpoente

    //calcular e atualizar o resultado
    for (i = contador - 1; i > 1; i--) {
        resBaseExpoente = resBaseExpoente * numBase
    }
    //mostrar o resultado na tela
    document.getElementById("resultadoExponenciacao").innerHTML = `${numBase} elevado a ${numExpoente} = ${resBaseExpoente}.`
}

//funcoes para resetar valores
function resetFatorial() {
    document.getElementById("numeroFatorial").value = ""
    document.getElementById("resultadoFatorial").innerHTML = ""
}

function resetExponenciacao() {
    document.getElementById("numeroBase").value = ""
    document.getElementById("expoente").value = ""
    document.getElementById("resultadoExponenciacao").innerHTML = ""
}