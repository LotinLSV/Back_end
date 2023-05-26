//comparação implicita
const num1 = 5;
const num2 = '5';

console.log(num1 == num2)

//comparação explicita
console.log(num1 === num2)

console.log(typeof(num1))
console.log(typeof(num2))

//comparador tenario

const idadeMininima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMininima){
    console.log('Pode beber')
} else {
    console.log('Não pode beber')
}
                //consição                      //true          //false
console.log(idadeCliente >= idadeMininima ? 'Pode beber' : 'Não pode beber')

// template de strings

const n1 = 'lucas';
const n2 = '28';
const n3 = 'Campo belo'

const ap = `meu nome é ${n1}, minha idade é ${n2}, moro em ${n3}`;

console.log(ap)