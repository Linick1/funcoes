// if...else if = se / else = senao

let temperature = 36.9
let heightTemperature = temperature >= 37.5
let mediumTemperature = temperature < temperature < 37.5 && temperature >= 37
/*
if(temperature >= 37){
  console.log('febre');
} else {
  console.log('bem');
}
*/

if(heightTemperature){
  console.log('febre alta');
} else if(mediumTemperature){
  console.log('febre moderada');
}else{
  console.log('saudavel');
}