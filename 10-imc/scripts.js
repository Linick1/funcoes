/*

Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

"Paciente X possui o IMC de: Y"

Onde X é o nome do paciente e Y é o IMC desse paciente

Crie uma função para fazer o calculo de IMC

*/

// Peso / (altura*altura)

const patiensts = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Sandra",
    age: 16,
    weight: 70 , 
    height: 180
  },
  {
    name: "Pedro",
    age: 19,
    weight: 100,
    height: 180 
  }
]




function printPatientIMC (patient) {
  
  return ` 
  Paciente ${patient.name} possui o IMC de
  ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
  `
}

for  (let patient of patiensts) {
  let IMCmessage = printPatientIMC(patient) 
  alert(IMCmessage)
}