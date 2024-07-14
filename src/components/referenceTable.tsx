export function ReferenceTable() {
  return (
    <table className="mx-auto text-left text-neutral-600 shadow-sm">
      <thead className="bg-zinc-100 text-rose-400">
        <tr>
          <th className="px-6 py-2">IMC</th>
          <th className="px-6 py-2">Classificação</th>
        </tr>
      </thead>
      <tbody className="[&>tr:nth-child(even)]:bg-zinc-100 [&>tr:nth-child(odd)]:bg-white [&>tr>td]:px-6 [&>tr>td]:py-1">
        <tr>
          <td>Menos de 17</td>
          <td>Muito abaixo do peso</td>
        </tr>
        <tr>
          <td>Entre 17 e 18,49</td>
          <td>Abaixo do peso</td>
        </tr>
        <tr>
          <td>Entre 18,5 e 24,9</td>
          <td>Peso normal</td>
        </tr>
        <tr>
          <td>Entre 25,0 e 29,9</td>
          <td>Sobrepeso</td>
        </tr>
        <tr>
          <td>Entre 30 e 34,99</td>
          <td>Obesidade I</td>
        </tr>
        <tr>
          <td>Entre 35 e 39,99</td>
          <td>Obesidade II (severa)</td>
        </tr>
        <tr>
          <td>Acima de 40</td>
          <td>Obesidade III (mórbida)</td>
        </tr>
      </tbody>
    </table>
  );
}
