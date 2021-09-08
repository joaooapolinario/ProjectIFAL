/*
------Lista de Exercício------
Curso: Informática
Disciplina: programação Web I
Equipe: 4
Nome/Matricula: Jônatas Lucas Alves de Brito Freitas => 2018320578
                João Gabriel Freitas Euzébio => 2019322586
                Matheus Carlos Tenório de Albuquerque => 2019321794
                João Pedro Apolinário => 2019322906
*/

const valores = []

function GO() {
    var numero = document.getElementById("numero").value;

    valores.push(parseInt(numero))

    var tabela = "";
    var s = "";
    for (var k = 0; k < valores.length; k++) {
        s = sigArray(valores[k])
        tabela = tabela + "<tr><td>" + s + "</td><td>" + valores[k] + "</td></tr>"
    }
    
    for (var k = valores.length; k > 0; k--) {
        if (valores[k] < valores[k - 1]) {
            var b2 = valores[k]
            valores[k] = valores[k - 1]
            valores[k - 1] = b2
        }
    }

    
    if (valores.length === 11) {
        document.getElementById('resultado').innerHTML = "Menor número = " + valores[0] + "<br>Número do meio = " + valores[4] + "<br>Maior número = " + valores[10]
    }


    function sigArray(valores) {
        if (valores > 0 && valores < 13) {
            if (valores === 1) {
                return "Rato"
            } else if (valores === 2) {
                return "Boi"
            } else if (valores === 3) {
                return "Tigre"
            } else if (valores === 4) {
                return "Coelho"
            } else if (valores === 5) {
                return "Dragão"
            } else if (valores === 6) {
                return "Serpente"
            } else if (valores === 7) {
                return "Cavalo"
            } else if (valores === 8) {
                return "Cabra"
            } else if (valores === 9) {
                return "Macaco"
            } else if (valores === 10) {
                return "Galo"
            } else if (valores === 11) {
                return "Cão"
            } else if (valores === 12) {
                return "Porco"
            }
        } else {
            return "Dormir"
        }
    }
    document.getElementById('tb').innerHTML = tabela
}