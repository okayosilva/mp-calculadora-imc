import { Button } from "./components/button";
import { Input } from "./components/input";
import { Label } from "./components/label";
import { ReferenceTable } from "./components/referenceTable";

export function App() {
  return (
    <main className="max-4xl mx-auto bg-white px-48 py-24">
      <section id="form">
        <form action="">
          <div className="space-y-1">
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input type="text" id="weight" />
          </div>

          <div className="mt-4 space-y-1">
            <Label htmlFor="height">Altura (centímetros)</Label>
            <Input type="text" id="height" />
          </div>

          <Button type="submit">Calcular</Button>
        </form>
      </section>
      <section id="result" className="h-40 px-4 py-10">
        <p className="text-center text-xl text-neutral-400">
          Saiba agora se está no seu <br /> peso ideal!
        </p>
      </section>
      <section id="reference-table">
        <ReferenceTable />
      </section>
    </main>
  );
}

export default App;
