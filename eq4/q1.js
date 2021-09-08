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

function calcular(){
    //inputs
    var numero1 = window.document.getElementById('numero1')
    var numero2 = window.document.getElementById('numero2')
    var numero3 = window.document.getElementById('numero3')
    var numero4 = window.document.getElementById('numero4')
    var numero5 = window.document.getElementById('numero5')
    var numero6 = window.document.getElementById('numero6')
    var numero7 = window.document.getElementById('numero7')
    var numero8 = window.document.getElementById('numero8')


    //transformando em números
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var n3 = Number(numero3.value)
    var n4 = Number(numero4.value)
    var n5 = Number(numero5.value)
    var n6 = Number(numero6.value)
    var n7 = Number(numero7.value)
    var n8 = Number(numero8.value)


    //tabela
    var media = window.document.getElementById('tmedia')
    var mediana = window.document.getElementById('tmediana')
    var maximo = window.document.getElementById('tmaximo')
    var desvio = window.document.getElementById('tdesvio')
    var somatoria = window.document.getElementById('tsomatoria')

    if(numero1.value.length==0 || numero2.value.length==0 || numero3.value.length==0 || numero4.value.length==0  
      || numero5.value.length==0 || numero6.value.length==0 || numero7.value.length==0 || numero8.value.length==0 ){
           window.alert('Erro, verifique se todos os valores estão preenchidos e tente novamente')

    }
    else{

   //mediana

    media.innerHTML = ((n1+n2+n3+n4+n5+n6+n7+n8)/8).toFixed(1)

    //mediana
    var total = []
    total.push(n1,n2,n3,n4,n5,n6,n7,n8)
    //https://www.mundojs.com.br/2018/08/31/adicionando-elementos-em-uma-lista-array-javascript/

    var cmediana1 = total[3]
    var cmediana2 = total[4]
    var smediana = (cmediana1+cmediana2)/2
    mediana.innerHTML = smediana

    //desvio padrão
    var m = ((n1+n2+n3+n4+n5+n6+n7+n8)/8)

    for (var i = 0;i < total.length; i++) {
        m += total[i];

    }
    m = m/total.length;
    var varianca = 0;
    for (var i = 0;i < total.length; i++) {
        varianca += (m - total[i]) * (m - total[i])
    }
    varianca = varianca/total.length
    desvio.innerHTML = Math.sqrt(varianca).toFixed(2)

    somatoria.innerHTML = (n1+n2+n3+n4+n5+n6+n7+n8).toFixed(1)

}

//valor maximo
var max = Math.max(n1,n2,n3,n4,n5,n6,n7,n8)
maximo.innerHTML = max

}
