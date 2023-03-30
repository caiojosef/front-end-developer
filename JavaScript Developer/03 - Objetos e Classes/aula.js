// let pessoa = {
//     nome: 'Caio Josef',
//     idade: 25,
//     descrever: function(){
//     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.idade);
// pessoa.descrever();

// pessoa.descrever = function(){
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoa.descrever();
// let atributo2 = 'idade'
// let atributo = 'nome'
// console.log(pessoa[atributo2]);
// console.log(pessoa['nome']);

// pessoa['nome'] = 'teste'
// console.log(pessoa.nome);

// class Pessoa {
//     nome;
//     idade;
//     anoDeNascimento;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//         this.anoDeNascimento = 2022 - idade;
//     }
//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }

// function compararPessoa(p1, p2) {
//     if (p1.idade > p2.idade) {
//         console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
//     } else if (p2.idade > p1.idade) {
//         console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
//     } else {
//         console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
//     }
// }

// let caio = new Pessoa('Caio', 30);
// let ingrid = new Pessoa('Ingrid', 25);

// compararPessoa(caio, ingrid);


// class Carro{
//     marca;
//     cor;
//     gastoMedioPorKm;

//     constructor(marca, cor, gastoMedioPorKm ){
//         this.marca = marca;
//         this.cor = cor;
//         this.gastoMedioPorKm = gastoMedioPorKm;
//     }

//     calcularGastos(distancia, valorCombustivel){
//         return distancia * this.gastoMedioPorKm * valorCombustivel
//     }

// };

// let uno = new Carro('Fiat', 'Prata', 1/12)

// console.log(uno)
// uno.calcularGastos(70, 5);
// console.log(uno.calcularGastos(70,5))

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = Math.pow(altura, 2);
    }
    calcularImc(peso, altura) {
        return this.peso / this.altura;
    }
    calcularImcs(peso, altura) {
        return peso / altura;
    }

    classificarImc() {
        let imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do Peso'
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal'
        } else if (imc >= 25 && imc < 30){
            return 'Acima do Peso'
        } else if (imc >= 30 && imc < 40){
            return 'Obeso';
        } else {
            return 'Obesidade Grave'
        } 

    }
}
let caio = new Pessoa('Caio Josef', 80, 1.80)
console.log(caio);
console.log(caio.calcularImc());
console.log(caio.classificarImc());
let henrique = new Pessoa('Henrique', 65, 1.45)
console.log(henrique);
console.log(henrique.calcularImcs(henrique.peso, henrique.altura));
console.log(henrique.classificarImc());









