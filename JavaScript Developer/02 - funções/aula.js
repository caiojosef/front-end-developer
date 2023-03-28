console.log('----------------');
console.log('Funções\n');

// function calcularImc(peso, altura) {
//     return peso / Math.pow(altura, 2); 
// }

// function comparadorPeso(imc) {
//     if (imc < 18.5) {
//         return 'Abaixo do Peso';
//     } else if (imc >= 18.5 && imc < 25) {
//         return 'Peso Normal';
//     } else if (imc >= 25 && imc < 30) {
//         return 'Peso ';
//     } else if (imc >= 30 && imc < 40) {
//         return 'Obeso';
//     } else {
//         return 'Obesidade Morbida'
//     }
// }

// (function Main(){
//     let peso = 80;
//     let altura = 1.80;
//     let imc = calcularImc(peso, altura);
//     console.log(comparadorPeso(imc))

// })();

let precoEtiqueta = 1000;
let formaPagamento = 3;


function aplicarDesconto(valor, desconto){
     let descontoTotal = (valor * desconto) / 100;
    return valor - descontoTotal;
}

function aplicarJuros(valor, juros){
    let jurosTotal = (valor * juros) / 100;
    return valor + jurosTotal;
}
function tipoPagamento(formaPagamento){
    if(formaPagamento === 1){
        console.log(aplicarDesconto(precoEtiqueta, 15))
    }else if(formaPagamento === 2){
        console.log(aplicarDesconto(precoEtiqueta, 10))
    }else if(formaPagamento === 3){
        console.log(precoEtiqueta)
    }else{
        console.log(aplicarJuros(precoEtiqueta, 10))
    }
}

tipoPagamento(formaPagamento);
