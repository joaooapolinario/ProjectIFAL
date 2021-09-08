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

var Alt = new Array();
var pes = new Array();
var sex = new Array();
var AN = new Array();
var IMC = new Array();
var situacao = new Array();
function adicionar(){  
        const A =  document.getElementById("altura").value;
        const P = document.getElementById("peso").value;
        const S = document.getElementById("sexo").value;
        const Ano = document.getElementById("nasc").value; 
        Alt.push(Number.parseFloat(A));
        pes.push( Number.parseFloat(P));
        sex.push(S) ;
        AN.push(Number.parseInt(Ano));
        if (Alt.length==12){
            alert("Cadastro finalizado, clique em ENVIAR")
        }
}

function ENVIAR(){
    var AltMais = 0;
    var SexMais = NaN;
    var Maior = 0;
    var Menor = 0;
    var table = "";
    for (var d = 0;d<AN.length;d++){
        Id = 2021 - AN[d];
        if(Id>=18){
            Maior++;
        }
        else{
            Menor++;
        }
    }
    for (var c =0;c<Alt.length;c++){
        if (Alt[c]>=AltMais){
            AltMais = Alt[c];
            SexMais = sex[c];
        }
    
    }    
    for (var i = 0;i<pes.length;i++){
        IMC.push(pes[i]/Math.pow(Alt[i],2));
        if (IMC[i]<=16){
            situacao.push("Magreza Grave");
        }
        else if(IMC[i]<=17){
            situacao.push("Magresa Moderada");
        }
        else if(IMC[i]<=18.5){
            situacao.push("magreza Leve");
        }
        else if(IMC[i]<=25){
            situacao.push("Saudável");
        }
        else if(IMC[i]<=30){
            situacao.push("Sobreopeso")
        }
        else if(IMC[i]<=35){
            situacao.push("Obesidade Grau I");
        }
        else if(IMC[i]<=40){
            situacao.push("Obesidade Grau II");
        }
        else if(IMC[i]>40){
            situacao.push("Obesidade Grau III");
        }
    }
    for(var g = 0 ;g<Alt.length;g++){
        table = table + "<tr><td>"+sex[g]+"</td><td>"+pes[g]+"</td><td>"+Alt[g].toFixed(2)+"</td><td>"+IMC[g].toFixed(1)+"</td><td>"+situacao[g]+"</td></tr>";
        document.getElementById("tbody").innerHTML = table;
    }
    document.getElementById("maiores").innerHTML= Maior+" Pessoas são maiores de Idade!";
    document.getElementById("menores").innerHTML = Menor + " Pesoas são menores de Idade!";
    document.getElementById("maioralt").innerHTML = AltMais + " Metros";
    document.getElementById("sexo-altura").innerHTML = SexMais;
}
