/*

 Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

 Se o aluno passou o bimestre, dar os parabéns.

 Se o aluno não passou no bimestre, 
 motivar o aluno a dar seu melhor na prova de recperação.

 Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.

 A média deve ser no mínimo 6

 */
 
 const studantName = prompt ("Digite seu nome:") 
 
 let noteOne = prompt ("Digite a nota do primeiro bimestre")
 let noteTwo = prompt ("Digite a nota do segundo bimestre")
 let noteThree = prompt ("Digite a nota do terceiro bimestre")
 

 let total = ((Number(noteOne) + Number(noteTwo) + Number(noteThree)) / 5)

 
 
 if (total >= 6 ) {
  alert(" Parabéns " + studantName + ", Você passou de ano! ");
 }else{
  alert(" Sinto muito," + studantName + " tente mais vezes. ");
 }


 


