console.log("Tipos de Variáveis\n")
let etanol = 3.20, gasolina = 5.79, b = 12, c = 100;
let tipoCombustivel = 'Gasolina'
let soma = 0;
if (tipoCombustivel === 'Etanol') {
    soma = (b / c) * etanol;
    console.log('Preço do Etanol: ', soma.toFixed(2));
} else {
    soma = (b / c) * gasolina;
    console.log('Preço da Gasolina: ', soma.toFixed(2));
}


console.log("-----------------------------");
console.log("Estruturas condicionais\n");

let numero = 5;

let numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O numero é inválido');
} else if (numero === 5) {
    console.log('Sim');
} else if (numeroDivisivelPor5) {
    console.log('Não');
}
console.log("-----------------------------");
console.log("Média\n");


let nota1 = 2, nota2 = 2, nota3 = 6;
let media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log('A media do aluno é: ', media.toFixed(2), 'Reprovado');
}else if(media >= 5 && media <= 7){
    console.log('A media do aluno é: ', media.toFixed(2), 'Recuperação')
}else {
    console.log('A media do aluno é: ', media.toFixed(2), 'Aprovado')
}

console.log("-----------------------------");
console.log("IMC\n");

let peso = 80, altura = 1.80;
let imc = peso / Math.pow(altura,2);
console.log(imc.toFixed(2));

if(imc < 18.5){
    console.log('Abaixo do peso');
}else if(imc >= 18.5 && imc <= 25){
    console.log('Peso normal',);
}else if(imc >= 25 && imc <= 30){
    console.log('Acima do peso');
}else if(imc >= 30 && imc <= 40){
    console.log('Obeso');
}else{
    console.log('Obesidade Grave')
}

console.log("-----------------------------");
console.log("Valor do desconto\n");


let valorProduto = 1300;
let descontoPix = 15;
let descontoDebito = 10;
let valorDesconto = 0;
let valorTotal = 0;
let formaPagamento = 'mais vezes';
let jurosEmCima = 10;

if(formaPagamento === 'pix'){
    valorDesconto = (valorProduto * descontoPix) / 100;
    valorTotal = valorProduto - valorDesconto;
    console.log('Valor a ser pago: ', valorTotal);
}else if(formaPagamento === 'debito'){
    valorDesconto = (valorProduto * descontoDebito) / 100;
    valorTotal = valorProduto - valorDesconto;
    console.log('Valor a ser pago: ', valorTotal);
}else if(formaPagamento === 'duas vezes'){
    console.log('Valor a ser pago: ', valorProduto)
}else {
    valorDesconto = (valorProduto * jurosEmCima) / 100;
    valorTotal = valorProduto + valorDesconto;
    console.log('Valor do Produto: ', valorTotal)

}

numero = 10;
const numeroEmTexto = '10';
console.log(numero === numeroEmTexto);




