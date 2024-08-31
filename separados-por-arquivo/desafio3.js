// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamento = require("./faturamento.json");
const weekendDays = ["Sábado", "Domingo"];

function getBusinessDaysRevenues(revenueJson) {
  return revenueJson.filter(
    (revenue) =>
      !weekendDays.includes(revenue.dia_da_semana) && !revenue.feriado
  );
}

function getLowestDailyRevenue(revenueJson) {
  const filteredRevenueJson = getBusinessDaysRevenues(revenueJson);
  const daysWithNoRevenue = [];
  let lowestRevenueDay = revenueJson.find((revenue) => revenue.valor > 0);

  for (const revenue of filteredRevenueJson) {
    if (revenue.valor === 0) {
      daysWithNoRevenue.push(revenue);
    } else {
      if (revenue.valor < lowestRevenueDay.valor) lowestRevenueDay = revenue;
    }
  }

  if (daysWithNoRevenue.length) {
    console.log("Dias úteis sem faturamento:");
    daysWithNoRevenue.forEach((item) => {
      console.log(`${item.dia} - ${item.dia_da_semana}`);
    });
  }

  console.log(
    `Dia com menor faturamento: ${lowestRevenueDay.dia} - ${lowestRevenueDay.dia_da_semana} - Faturamento: ${lowestRevenueDay.valor}`
  );
  return lowestRevenueDay;
}

function getHighestDailyRevenue(revenueJson) {
  let highestRevenueDay = revenueJson[0];

  for (const revenue of revenueJson) {
    if (revenue.valor > highestRevenueDay.valor) highestRevenueDay = revenue;
  }

  console.log(
    `Dia com maior faturamento: ${highestRevenueDay.dia} - ${highestRevenueDay.dia_da_semana} - Faturamento: ${highestRevenueDay.valor}`
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
      2
    )}):`
  );
  filteredRevenues.forEach((item) => {
    console.log(
      `${item.dia} - ${item.dia_da_semana} - Faturamento: ${item.valor}`
    );
  });

  return filteredRevenues;
}

getLowestDailyRevenue(faturamento.diario);
getHighestDailyRevenue(faturamento.diario);
getDaysWithAboveAverageRevenue(faturamento.diario);
