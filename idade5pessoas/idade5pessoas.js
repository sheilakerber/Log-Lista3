/*Desenvolva um programa no qual o usuário deve digitar
o nome e a idade de 5 pessoas. Ao final mostrar a média
de idade delas e a menor idade dentre essas pessoas.*/

function enviarDados() {
    //pegar dados da pagina
    var nomeUsuario1 = document.getElementById("nomeUs1").value
    var idadeUsuario1 = document.getElementById("idadeUs1").value
    var nomeUsuario2 = document.getElementById("nomeUs2").value
    var idadeUsuario2 = document.getElementById("idadeUs2").value
    var nomeUsuario3 = document.getElementById("nomeUs3").value
    var idadeUsuario3 = document.getElementById("idadeUs3").value
    var nomeUsuario4 = document.getElementById("nomeUs4").value
    var idadeUsuario4 = document.getElementById("idadeUs4").value
    var nomeUsuario5 = document.getElementById("nomeUs5").value
    var idadeUsuario5 = document.getElementById("idadeUs5").value

    var resultado = document.getElementById("resultadoMedias")

    //validar entrada de dados
    if (nomeUsuario1 == "" || idadeUsuario1 == "" || nomeUsuario2 == "" || idadeUsuario2 == "" || nomeUsuario3 == "" || idadeUsuario3 == "" || nomeUsuario4 == "" || idadeUsuario4 == "" || nomeUsuario5 == "" || idadeUsuario5 == "") {
        window.alert("Complete os campos em branco para continuar.")
            //validar faixa etaria permitida
    } else if ((idadeUsuario1 < 1 || idadeUsuario1 > 120) || (idadeUsuario2 < 1 || idadeUsuario2 > 120) || (idadeUsuario3 < 1 || idadeUsuario3 > 120) || (idadeUsuario4 < 1 || idadeUsuario4 > 120) || (idadeUsuario5 < 1 || idadeUsuario5 > 120)) {
        window.alert("[Erro] A idade informada deve estar entre 1 e 120.")
    } else {
        //cria array 'pessoas'
        let arrayPessoas = [{
                nome: nomeUsuario1,
                idade: idadeUsuario1
            },
            {
                nome: nomeUsuario2,
                idade: idadeUsuario2
            },
            {
                nome: nomeUsuario3,
                idade: idadeUsuario3
            },
            {
                nome: nomeUsuario4,
                idade: idadeUsuario4
            },
            {
                nome: nomeUsuario5,
                idade: idadeUsuario5
            },
        ]

        //loop para calcular a media
        var soma = 0;
        var mediaIdades = 0;
        for (i = 0; i < arrayPessoas.length; i++) {
            soma += Number(arrayPessoas[i].idade)
        }
        mediaIdades = soma / arrayPessoas.length

        //loop para calcular a menor idade
        var menorIdade = 200;
        for (i = 0; i < arrayPessoas.length; i++) {
            if (arrayPessoas[i].idade < menorIdade) {
                menorIdade = Number(arrayPessoas[i].idade)
            } else {
                menorIdade = menorIdade
            }
        }

        //encontrar o nome da pessoa que tem a menor idade
        var usuarioMenorIdade = ""
        for (i = 0; i < arrayPessoas.length; i++) {
            if (arrayPessoas[i].idade == menorIdade) {
                usuarioMenorIdade = arrayPessoas[i].nome
                console.log("arrayPessoas[i].nome", arrayPessoas[i].nome)
            }
        }

        //mostrar resultado
        resultado.innerHTML = `A média das idades é ${mediaIdades}. Dentre as cinco pessoas, a mais jovem é ${usuarioMenorIdade}, a qual tem ${menorIdade} anos.`
    }

}

function limparDados() {
    document.getElementById("nomeUs1").value = ""
    document.getElementById("idadeUs1").value = ""
    document.getElementById("nomeUs2").value = ""
    document.getElementById("idadeUs2").value = ""
    document.getElementById("nomeUs3").value = ""
    document.getElementById("idadeUs3").value = ""
    document.getElementById("nomeUs4").value = ""
    document.getElementById("idadeUs4").value = ""
    document.getElementById("nomeUs5").value = ""
    document.getElementById("idadeUs5").value = ""

    document.getElementById("resultadoMedias").innerHTML = ""
}