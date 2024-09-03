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

function showMessageIfNumberIsInFibonacciSequence(number) {
  const message = isInFibonacciSequence(number) ? "" : "não ";
  console.log(`O número ${number} ${message}pertence à sequência Fibonacci`);
}

showMessageIfNumberIsInFibonacciSequence(542); // número não pertence à sequência
showMessageIfNumberIsInFibonacciSequence(987); // número pertence à sequência

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const dados = require("./dados.json");

function getLowestDailyRevenue(revenueJson) {
  const daysWithNoRevenue = [];
  let lowestRevenueDay = revenueJson.find((revenue) => revenue.valor > 0);

  for (const revenue of revenueJson) {
    if (revenue.valor === 0) {
      daysWithNoRevenue.push(revenue);
    } else {
      if (revenue.valor < lowestRevenueDay.valor) lowestRevenueDay = revenue;
    }
  }

  if (daysWithNoRevenue.length) {
    console.log("Dias úteis sem faturamento:");
    daysWithNoRevenue.forEach((item) => console.log(item.dia));
  }

  console.log(
    `Dia com menor faturamento: ${lowestRevenueDay.dia} - Valor: ${lowestRevenueDay.valor}`
  );
  return lowestRevenueDay;
}

function getHighestDailyRevenue(revenueJson) {
  let highestRevenueDay = revenueJson[0];

  for (const revenue of revenueJson) {
    if (revenue.valor > highestRevenueDay.valor) highestRevenueDay = revenue;
  }

  console.log(
    `Dia com maior faturamento: ${highestRevenueDay.dia} - Valor: ${highestRevenueDay.valor}`
  );
  return highestRevenueDay;
}

function getDaysWithAboveAverageRevenue(revenueJson) {
  const averageRevenue =
    revenueJson.reduce((sum, revenue) => sum + revenue.valor, 0) /
    revenueJson.length;
  const filteredRevenues = revenueJson.filter(
    (revenue) => revenue.valor > averageRevenue
  );

  console.log(
    `Dias com faturamento acima da média mensal (R$${averageRevenue.toFixed(
      4
    )}):`
  );
  filteredRevenues.forEach((item) =>
    console.log(`${item.dia} - Valor: ${item.valor}`)
  );

  return filteredRevenues;
}

getLowestDailyRevenue(dados);
getHighestDailyRevenue(dados);
getDaysWithAboveAverageRevenue(dados);

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const monthlyRevenueByState = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function getStateRevenuePercentages(monthlyRevenue) {
  const totalRevenue = Object.values(monthlyRevenue).reduce(
    (sum, value) => sum + value,
    0
  );
  const stateRevenuePercentages = Object.entries(monthlyRevenue).reduce(
    (percentage, [state, value]) => {
      percentage[state] = ((value / totalRevenue) * 100).toFixed(2);
      return percentage;
    },
    {}
  );

  console.log(
    `Porcentagens de faturamento por estado em relação ao total (R$${totalRevenue
      .toString()
      .replace(".", ",")}):`
  );
  for (const [state, value] of Object.entries(stateRevenuePercentages)) {
    console.log(`${state}: ${value.toString().replace(".", ",")}%`);
  }

  return stateRevenuePercentages;
}

getStateRevenuePercentages(monthlyRevenueByState);

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const stringExample = "Olá mundo!";

function getReversedString(string) {
  const char = string.split("");
  const reversedArray = [];

  for (let i = char.length - 1; i >= 0; i--) {
    reversedArray.push(char[i]);
  }

  const reversedString = reversedArray.join("");
  console.log(reversedString);
  return reversedString;
}

getReversedString(stringExample);
getReversedString("!odnum álO");
