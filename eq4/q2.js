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
var prom1 = Number(window.prompt('Digite um número'))
var prom2 = Number(window.prompt('Digite um número'))
var prom3 = Number(window.prompt('Digite um número'))
var prom4 = Number(window.prompt('Digite um número'))
var prom5 = Number(window.prompt('Digite um número'))
var prom6 = Number(window.prompt('Digite um número'))
var prom7 = Number(window.prompt('Digite um número'))
var prom8 = Number(window.prompt('Digite um número'))
var prom9 = Number(window.prompt('Digite um número'))
var prom10 = Number(window.prompt('Digite um número'))
var prom11 = Number(window.prompt('Digite um número'))
var prom12 = Number(window.prompt('Digite um número'))
var prom13 = Number(window.prompt('Digite um número'))
var prom14 = Number(window.prompt('Digite um número'))
var prom15 = Number(window.prompt('Digite um número'))


//tabela
var numerosdigitados = window.document.getElementById('numerosdigitados')
var quadrado = window.document.getElementById('quadrado')
var fatorial = window.document.getElementById('fatorial')
var cubo = window.document.getElementById('cubo')
var raiz = window.document.getElementById('raiz')
var res = window.document.getElementById('res')

//array
var promtotal = []

//adicionando inputs dentro do array
promtotal.push(prom1,prom2,prom3,prom4,prom5,prom6,prom7,prom8,prom9,prom10,prom11,prom12,prom13,prom14,prom15)

//posição de cada valor dentro dos arrays
var p1 = promtotal[0]
var p2 = promtotal[1]
var p3 = promtotal[2]
var p4 = promtotal[3]
var p5 = promtotal[4]
var p6 = promtotal[5]
var p7 = promtotal[6]
var p8 = promtotal[7]
var p9 = promtotal[8]
var p10 = promtotal[9]
var p11 = promtotal[10]
var p12 = promtotal[11]
var p13 = promtotal[12]
var p14 = promtotal[13]
var p15 = promtotal[14]

var pn = []
pn.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15) 


//numeros digitados
//numerosdigitados.innerHTML = promtotal
//numerosdigitados.innerHTML = `${promtotal[0]} <br> ${promtotal[1]} <br> ${promtotal[2]} <br> ${promtotal[3]} <br> ${promtotal[4]} <br> ${promtotal[5]} <br> ${promtotal[6]} <br> ${promtotal[7]} <br> ${promtotal[8]} <br> ${promtotal[9]} <br> ${promtotal[10]} <br> ${promtotal[11]} <br> ${promtotal[12]} <br> ${promtotal[13]} <br> ${promtotal[14]} <br>` 
//numerosdigitados.innerHTML = `isso mesmo eu coloquei p0 e deu erro ja que nao tem nenhuma variavel p0${p0}<br> ${p1}<br> ${p2}<br> ${p3}<br> ${p4}<br> ${p5}<br> ${p6}<br> ${p7}<br> ${p8}<br> ${p9}<br> ${p10}<br> ${p11}<br> ${p12}<br> ${p13}<br> ${p14}<br> `
numerosdigitados.innerHTML = `${p1}<br> ${p2}<br> ${p3}<br> ${p4}<br> ${p5}<br> ${p6}<br> ${p7}<br> ${p8}<br> ${p9}<br> ${p10}<br> ${p11}<br> ${p12}<br> ${p13}<br> ${p14}<br> ${p15}<br> `


//quadrado dos numeros
quadrado.innerHTML = `${p1**2}<br> ${p2**2} <br> ${p3**2} <br>${p4**2} <br>${p5**2} <br>${p6**2} <br>${p7**2} <br>${p8**2} <br>${p9**2} <br>${p10**2} <br>${p11**2}
<br>${p12**2} <br>${p13**2} <br>${p14**2} <br>${p15**2}`

//cubo dos numeros
cubo.innerHTML = `${p1**3}<br> ${p2**3} <br> ${p3**3} <br>${p4**3} <br>${p5**3} <br>${p6**3} <br>${p7**3} <br>${p8**3} <br>${p9**3} <br>${p10**3} <br>${p11**3}
<br>${p12**3} <br>${p13**3} <br>${p14**3} <br>${p15**3}`

raiz.innerHTML = `${Math.sqrt(p1).toFixed(4)} <br >${Math.sqrt(p2).toFixed(4)} <br> ${Math.sqrt(p3).toFixed(4)} <br>${Math.sqrt(p4).toFixed(4)} <br>${Math.sqrt(p5).toFixed(4)} <br>${Math.sqrt(p6).toFixed(4)} <br>${Math.sqrt(p7).toFixed(4)} <br>
${Math.sqrt(p8).toFixed(4)} <br>${Math.sqrt(p9).toFixed(4)} <br>${Math.sqrt(p10).toFixed(4)} <br>${Math.sqrt(p11).toFixed(4)} <br> ${Math.sqrt(p12).toFixed(4)} <br>${Math.sqrt(p13).toFixed(4)} <br>${Math.sqrt(p14).toFixed(4)} <br>${Math.sqrt(p15).toFixed(4)} `



function f(n){
    if(n==1){
        return 1

    } else{
        return n * f(n-1)
    }
    
} 

fatorial.innerHTML = `${f(pn[0])}<br>${f(pn[1])}<br>${f(pn[2])}<br>${f(pn[3])}<br>${f(pn[4])}<br>${f(pn[5])}<br>${f(pn[6])}<br>${f(pn[7])}<br>${f(pn[8])}<br>${f(pn[9])}<br>${f(pn[10])}<br>${f(pn[11])}<br>${f(pn[12])}<br>${f(pn[13])}<br>${f(pn[14])}`


 