import { Button } from "@/components/ui/button";

export default function Filters() {
  const filtros = [
    "Novo",
    "Seguindo",
    "Exatas",
    "Ciências da Natureza",
    "Exemplo 5",
  ];

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {filtros.map((filtro, i) => (
        <Button
          key={i}
          variant={i === 0 ? "default" : "outline"}
          className="rounded-full"
        >
          {filtro}
        </Button>
      ))}
    </div>
  );
}