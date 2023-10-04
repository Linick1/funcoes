// Manipulando Arrays

// Contar elementos de um Array
// Chamando os elementos da Array com -> [1, 2, 3 . . .] Depende da posição do objeto
console.log(["a", {type: "array"},
function() { return "alo"},][1].type) //Chama o tipo que é Array

console.log(["a", {type: "array"},
function() { return "alo"},][2]()) //Chama a função

console.log(["a", "b", "c"].length) //Mostra quantos elementos tem