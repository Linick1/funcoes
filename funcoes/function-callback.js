// Callback function

function sayMyName(name) {
  console.log('Antes de executar a função')

  name()

  console.log('Depois de executar a função callback')
}

sayMyName(
  () => {
    console.log('Estou em uma callback')
  }
)