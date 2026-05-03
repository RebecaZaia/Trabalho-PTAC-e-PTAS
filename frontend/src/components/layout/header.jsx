import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-green-500 flex items-center justify-between px-6 py-3">

      <div className="text-white font-bold">
        IFMS
      </div>

      <ButtonGroup>
        <Input id="input-button-group" className="w-2xl bg-amber-50" placeholder="Digite para pesquisar..." />
        <Button variant="outline">🔍</Button>
      </ButtonGroup>

      <div className="flex items-center gap-4 text-white">
        <span>categ ex1</span>
        <span>categ ex 2</span>
        <span>categ ex 3</span>

        <Bell />

        <Button className="bg-green-700 hover:bg-green-800">
          <a href="/login">
            Entrar
          </a>
        </Button>
      </div>
    </header>
  );
}