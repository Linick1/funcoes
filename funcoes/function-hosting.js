// Function hosting

// Sofre elevação
sayMyName();

function sayMyName(){
  console.log('Linick');

}

// Não sofre elevação
// Com var também não
const sayMyName = function sayMyName(){
  console.log('Linick');

}