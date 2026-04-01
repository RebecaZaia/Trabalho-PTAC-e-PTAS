import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Star } from "lucide-react";

export default function PostCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm flex overflow-hidden mb-6">

      <div className="w-1/2 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">Imagem</span>
      </div>

      <div className="w-1/2 p-4 flex flex-col justify-between">

        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-green-300 w-8 h-8 rounded-full flex items-center justify-center">
                A
              </div>
              <span className="text-sm font-medium">
                Nome do Usuário
              </span>
            </div>

            <Button size="sm" variant="outline">
              Seguir
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Data e horário da postagem
          </p>

          <h3 className="font-semibold mt-3">
            Nome do Projeto
          </h3>

          <p className="text-sm text-gray-600">
            Atualização/Ação recente
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Descrição...
          </p>
        </div>

        {/* Ações */}
        <div className="flex items-center justify-between mt-4">

          <div className="flex gap-4 text-gray-600">
            <Heart size={18} />
            <MessageCircle size={18} />
            <Star size={18} />
          </div>

          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            + Seguir
          </Button>
        </div>
      </div>
    </div>
  );
}