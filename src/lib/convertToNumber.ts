export function convertToNumber(value: string) {
  return parseFloat(value.replace(",", "."));
}
