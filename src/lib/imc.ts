export function calculateIMC(weight: number, height: number) {
  return parseFloat((weight / (height * height)).toFixed(1));
}

export function imcResult(imc: number): string {
  const ranges = [
    { min: -Infinity, max: 17, result: "Muito abaixo do peso" },
    { min: 17, max: 18.5, result: "Abaixo do peso" },
    { min: 18.5, max: 24.9, result: "Peso normal" },
    { min: 25, max: 29.9, result: "Sobrepeso" },
    { min: 30, max: 34.9, result: "Obesidade grau 1" },
    { min: 35, max: 39.9, result: "Obesidade grau 2" },
    { min: 40, max: Infinity, result: "Obesidade grau 3" },
  ];

  for (const range of ranges) {
    if (imc >= range.min && imc < range.max) {
      return range.result;
    }
  }
  return "IMC inválido";
}
