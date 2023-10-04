// Manipulando Strings e Arrays

/* Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. 
Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ") // Substitui as coisas que é colocada ali, exemplo O
let phraseWithUnderscore = myArray.join("_") // Escolhe o separador 
console.log(phraseWithUnderscore.toLowerCase()) 
console.log(phraseWithUnderscore)