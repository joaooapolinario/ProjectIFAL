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

function exibir(){
    let entrada = document.getElementById('date').value

    const data = entrada.split('-')
    let mes = data[1]
    var mes_numero = parseInt(mes)
    var meses = ['Janeiro', 'Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']



    alert('Dia ' + data[0])

    console.log(meses[mes_numero-1])

    document.getElementById("ano").innerHTML = "Ano: "+data[2]
}
