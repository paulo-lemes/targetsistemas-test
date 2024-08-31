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
