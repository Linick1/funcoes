// let valueA = prompt ("Entre com o valor de A:")
// let valueB = prompt ("Entre com o valor de B:")
// let valueC = prompt ("Entre com o valor de C:")

// let result = valueB**2 - 4 * valueA * valueC 

// alert ("O resultado de delta é: " + result)

function calculateDelta(a, b, c) { 
  const delta = b**2 - 4 * a * c

  return delta
}

console.log(calculateDelta(1, 2, -15))
console.log(calculateDelta(2, -8, 1))  
 