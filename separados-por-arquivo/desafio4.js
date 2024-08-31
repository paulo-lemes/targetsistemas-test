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
