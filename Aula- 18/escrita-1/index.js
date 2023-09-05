
/**
 * 
 * Pergunte ao usu�rio quantos bichos de estima��o ele tem e guarde esse dado em uma vari�vel.
 * 
 * Se a quantidade for 0, imprima no console "Que pena! Voc� pode adotar um pet!".
 * 
 * Se a quantidade for maior que 0, solicite que o usu�rio digite os nomes deles, um por um, e guarde esses nomes em um array.
 * Dica: coloque um "prompt" dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usu�rio inseriu. Por exemplo: se o usu�rio tem 4 pets, ele deve conseguir inserir 4 nomes.
 * Por fim, imprima no console o "array" completo, com os nomes dos bichos.
 * 
**/


let quantosBichos = Number(prompt("Qantos bichos de estimação você tem?"))
let listaPets = []

if (quantosBichos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
}

else if (quantosBichos > 0) {
    while (listaPets.length !== quantosBichos) {
        let perguntaPet = prompt("Digite o nome do seu pet:")
        listaPets.push(perguntaPet)
    }
    console.log(listaPets)
}