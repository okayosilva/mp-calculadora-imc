import { ImcDataProps } from "../app";
import { formatNumber } from "../lib/formatNumber";

export function TableImcResult({
  heightNumber,
  weightNumber,
  imc,
  imcStringResult,
}: ImcDataProps) {
  return (
    <table className="mx-auto w-full text-center text-sm text-neutral-600 md:text-base md:[&>tbody>tr>td]:p-2 md:[&>tbody>tr>td]:px-4 md:[&>thead>tr>td]:p-2 md:[&>thead>tr>td]:px-4">
      <thead className="border-b border-rose-400">
        <tr>
          <th>Peso</th>
          <th>Altura</th>
          <th>IMC</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td>{formatNumber(weightNumber)} kg</td>
          <td>{formatNumber(heightNumber * 100, 0)} cm</td>
          <td>{formatNumber(imc)}</td>
          <td>{imcStringResult}</td>
        </tr>
      </tbody>
    </table>
  );
}
