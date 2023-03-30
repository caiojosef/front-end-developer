// let listaDeNomes = ['Caio', 'João', 'Henrique']
// console.log(listaDeNomes[2]);
// listaDeNomes.push('Ingrid') // insere no final
// listaDeNomes[4] = 'Ernesto'
// console.log(listaDeNomes)


// console.log(listaDeNomes.pop());
// console.log(listaDeNomes)
// console.log(listaDeNomes.shift())
// console.log(listaDeNomes)

// let notas = [];

// notas.push(5);
// notas.push(6);
// notas.push(8);
// notas.push(9);


// console.log(notas.length);
// let soma = 0;
// for (let i = 0; i < notas.length; i++) {
//     const nota = notas[i];
//     soma = soma + nota;
// }
// console.log(soma / notas.length);

// tabuada
// let numero = 4;
// for (let i = 0; i <= 10; i++) {
//     console.log(i * numero)
// }

//
let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeroPar = 0;

for (let i = 0; i < vet.length; i++) {
    const numero = vet[i];
    if(numero % 2 === 0){
        console.log(numero)
    }
}

const numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

    console.log(numerosPares);


