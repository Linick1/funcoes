/* 
 Capture 10 itens para compor a lista de um supermercado.

 Após capturar os 10 itens, imprimir, separando por vírgula.

 */

let items = [];

for (let item = 0; item < 10; item++) {
  let itemName = prompt("Digite o item " + (item + 1))

  items[item] = itemName
}

alert(items)