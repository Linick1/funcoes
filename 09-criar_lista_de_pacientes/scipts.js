/* 
  
 Crie uma lista de pacientes

 Cada paciente dentro da lista, deverá conter
  NOME
  IDADE
  PESO
  ALTURA

Escreva uma lista contendo  o nome dos pacientes sua idades. alturas, e pesos

*/

/* let acess = prompt ("Digite o número do paciente que deseja acessar (Digite de 0 até 2 para acessar os dados):")

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Maria",
    age: 28,
    weight: 70,
    height: 170
  },
  {
    name: "Sandra",
    age: 16,
    weight: 55,
    height: 165
  },
]

if (acess <=0){

  alert("Nome: " + patients[0].name + " Idade: " + patients[0].age + " Peso: " + patients[0].weight + " Altura: " + patients[0].height)
  
}else if (acess == 1) {

  alert("Nome: " + patients[1].name + " Idade: " + patients[1].age + " Peso: " + patients[1].weight + " Altura: " + patients[1].height)

}else if (acess == 2) {

  alert("Nome: " + patients[2].name + " Idade: " + patients[2].age + " Peso: " + patients[2].weight + " Altura: " + patients[2].height)

}else if (acess >= 3){
  alert("Erro, tente novamente.")

}

*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Maria",
    age: 28,
    weight: 70,
    height: 170
  },
  {
    name: "Sandra",
    age: 16,
    weight: 55,
    height: 165
  },
]

let patientsNames = []

for (let patient of patients) {
  patientsNames.push(patient.name)
}

alert(patientsNames)