// //crie um programa que imprima os números pares de 2 a 10

// for(let i = 2; i<=10;i++){
//    
//     if( i % 2 == 0 )
//         console.log(i)
// }

//Utilize um loop for para calcular o produto dos números de 1 a 5

// let lista = [1,2,34,5,'e', true]
// console.log((lista[3]))

// let listaNomes = ['Guilherme', 'Oliveira']
// listaNomes[2] = 'teste'
// listaNomes
// console.log(listaNomes)

// let lista = ['Arroz', 'Macarrão', 'carne', 'Óleo', 'sabonete' ]
// lista.push('Biscoito')
// lista.unshift('Feijão')
// lista.splice(4 , 1, 'Manteiga')
// console.log(lista)
// console.log(lista.length)


// let listaNumerica = [3,4,5,1,6,2]
// console.log(listaNumerica.sort());

//atividade 01
//

let vetor1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let vetorPar = []
let vetorImpar = []
console.log(vetor1)
for (num of vetor1){
    if (num % 2 == 0){
        vetorPar.push(num)
    }
    else if((num % 2 != 0)){

    
    vetorImpar.push(num)
    }
}
console.log(vetorPar);
console.log(vetorImpar)

//atividade 03

alert("Responda com S/N")
let pergunta1 = prompt("Telefonou para a vítima?").toUpperCase()
let pergunta2 = prompt("Esteve no local do crime?").toUpperCase()
let pergunta3 = prompt("Mora perto da vítima?").toUpperCase()
let pergunta4 = prompt("Devia para a vítima?").toUpperCase()
let pergunta5 = prompt("Já trabalhou com a vítima?").toUpperCase()


// For (i == 1; )
// if(pergunta1 == 'S'){

// }