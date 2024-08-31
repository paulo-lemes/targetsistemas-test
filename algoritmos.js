// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

const INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K++;
  SOMA += K;
}

console.log(SOMA);
// valor da variável soma é igual a 91

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function isInFibonacciSequence(number) {
  const sequenceArray = [0, 1];
  let lastNumber = 1;
  while (lastNumber <= number) {
    lastNumber =
      sequenceArray[sequenceArray.length - 2] +
      sequenceArray[sequenceArray.length - 1];
    sequenceArray.push(lastNumber);
  }
  console.log(sequenceArray);

  return sequenceArray.includes(number);
}

function showMessageIfNumberIsInFibonacciSequence(number){
  const message = isInFibonacciSequence(number) ? "" : "não ";
  console.log(`O número ${number} ${message}pertence à sequência Fibonacci`);
}

showMessageIfNumberIsInFibonacciSequence(542); // número não pertence à sequência
showMessageIfNumberIsInFibonacciSequence(987); // número pertence à sequência

