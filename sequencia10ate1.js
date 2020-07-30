/*Faça um programa no qual o usuário deve digitar a
sequência de números de 1 a 10, invertida. Caso digite
algum número fora da sequência, interromper e mostrar
uma mensagem &quot;Você errou a sequência&quot;. Do contrário,
mostrar uma mensagem &quot;Você terminou a sequência
corretamente&quot;. Programar usando FOR.*/

for (let i = 10; i >= 0; i--) {
    numero = window.prompt("Próximo número")

    if (numero != i) {
        window.alert("Você errou a sequência")
        break
    } else if (numero == 1) {
        window.alert("Você ACERTOU a sequência!")
        break
    }
}