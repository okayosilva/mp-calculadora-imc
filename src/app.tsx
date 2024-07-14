import { FormEvent, MouseEvent, useState } from "react";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Label } from "./components/label";
import { ReferenceTable } from "./components/referenceTable";
import { TableImcResult } from "./components/tableImcResult";
import { convertToNumber } from "./lib/convertToNumber";
import { calculateIMC, imcResult } from "./lib/imc";

export type ImcDataProps = {
  weightNumber: number;
  heightNumber: number;
  imc: number;
  imcStringResult: string;
};

export function App() {
  const [imcData, setImcData] = useState<null | ImcDataProps>(null);

  function handleEmptyFields(weight: string, height: string) {
    if (!weight || !height) {
      return alert("Preencha todos os campos!");
    }
  }

  function handleValidation(heightNumber: number, weightNumber: number) {
    if (isNaN(heightNumber) || isNaN(weightNumber)) {
      return alert("Preencha os campos corretamente!");
    }

    if (weightNumber < 2 || weightNumber > 500) {
      return alert("Ops... o peso deve ser entre 2 e 500 kg");
    }
    if (heightNumber < 0.5 || heightNumber > 2.5) {
      return alert("Ops... a altura deve ser entre 50 cm e menor que 2.5 m");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as {
      weight: string;
      height: string;
    };

    const { weight, height } = data;

    handleEmptyFields(weight, height);

    const heightNumber = convertToNumber(height) / 100;
    const weightNumber = convertToNumber(weight);

    handleValidation(heightNumber, weightNumber);

    const imc = calculateIMC(weightNumber, heightNumber);
    const imcStringResult = imcResult(imc);

    setImcData({
      weightNumber,
      heightNumber,
      imc,
      imcStringResult,
    });

    event.currentTarget.reset();
  }

  function handleReset(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setImcData(null);
  }

  return (
    <main className="max-4xl mx-auto bg-white px-48 py-24">
      <section id="form">
        <form onSubmit={handleSubmit}>
          <div className="space-y-1">
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input
              disabled={!!imcData}
              autoComplete="off"
              type="text"
              id="weight"
              name="weight"
            />
          </div>

          <div className="mt-4 space-y-1">
            <Label htmlFor="height">Altura (centímetros)</Label>
            <Input
              disabled={!!imcData}
              autoComplete="off"
              type="text"
              id="height"
              name="height"
            />
          </div>

          {imcData ? (
            <Button onClick={handleReset} type="button">
              Refazer
            </Button>
          ) : (
            <Button type="submit">Calcular</Button>
          )}
        </form>
      </section>
      <section id="result" className="h-40 w-full px-4 py-10">
        {imcData ? (
          <TableImcResult {...imcData} />
        ) : (
          <p className="text-center text-xl text-neutral-400">
            Saiba agora se está no seu <br /> peso ideal!
          </p>
        )}
      </section>
      <section id="reference-table">
        <ReferenceTable />
      </section>
    </main>
  );
}

export default App;
