export function formatNumber(number: number, digits = 2) {
  return number.toLocaleString("pt-BR", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}
