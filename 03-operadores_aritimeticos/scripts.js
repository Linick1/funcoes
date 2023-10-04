/* Capturar 2 números 
e fazer as operações matemáticas 
de soma, subtração, multiplicação,
divisão e resto da divisão

E para cada operação, mostrar um alerta com o resultado
*/

alert ("Informe dois números.")

let numberOne = prompt ("Digite o primeiro número:")
let numberTwo = prompt ("Digite o segundo número")
let resultSum = (Number(numberOne) + Number(numberTwo))
let resultMultiplication = (Number(numberOne) * Number(numberTwo))
let resultSubtraction = (Number(numberOne) - Number(numberTwo))
let resultDivision = (Number(numberOne) / Number(numberTwo))
let resultRestDivision = (Number(numberOne) % Number(numberTwo))
alert (" Resultado da soma: " + resultSum + " Resultado da subtração: " + resultSubtraction + " Resultado da divisão: " + resultDivision + " Resultado da multiplicação: " + resultMultiplication + " Resultado do resto da divisão: " + resultRestDivision)