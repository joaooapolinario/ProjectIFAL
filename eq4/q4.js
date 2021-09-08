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

function verificarIdades() {
    var idades = []
    var votar = 0;
    var preso = 0;
    var menores = 0;
    var aposentar= 0;
    var prio = 0;
    
  for (var i = 0; i < 9; i++) {
      idades.push(document.getElementById('I'+i).value)
  }
  
 
    for (var pos in idades) {
        var idade = idades[pos]
    
      if (idade >= 16 && idade < 18) {
        votar +=1;
      } else if (idade >= 18 && idade < 65) {
        preso +=1;
      } else if (idade >= 65 && idade < 80) {
        aposentar +=1;
      } else if (idade >= 80) {
        prio +=1;
      } else {
        menores +=1;
      }
    }
   document.getElementById("m").innerHTML = ("<strong>Pessoas com idade menor que 16 anos: </strong>" +menores );
   document.getElementById("o").innerHTML = ("<strong>Pessoas que já podem votar maiores de 16 e menores 18: </strong>" +votar );
   document.getElementById("r").innerHTML = ("<strong>Pessoas que já podem ser presas: </strong>" +preso );
      document.getElementById("a").innerHTML = ("<strong>Pessoas que já podem se aposentar: </strong>" +aposentar );
         document.getElementById("i").innerHTML = ("<strong>Pessoas que possuem alta prioridade em filas: </strong>" +prio );

 
}