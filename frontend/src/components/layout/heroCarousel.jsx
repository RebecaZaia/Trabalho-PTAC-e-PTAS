"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  const slides = [
    {
      titulo: "Título 1",
      subtitulo: "Subtitulo 1",
      descricao: "Descrição do slide 1",
    },
    {
      titulo: "Título 2",
      subtitulo: "Subtitulo 2",
      descricao: "Descrição do slide 2",
    },
    {
      titulo: "Título 3",
      subtitulo: "Subtitulo 3",
      descricao: "Descrição do slide 3",
    },
  ];

  const [index, setIndex] = useState(0);

  // 🔥 AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000); // troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-green-100 p-10 relative overflow-hidden">

      {/* Conteúdo */}
      <div className="max-w-5xl mx-auto transition-all duration-500">
        <h1 className="text-3xl font-bold text-green-900">
          {slides[index].titulo}
        </h1>

        <h2 className="text-xl text-green-800">
          {slides[index].subtitulo}
        </h2>

        <p className="text-gray-600">
          {slides[index].descricao}
        </p>
      </div>

      {/* Botões */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2">
        <Button variant="outline" size="icon" onClick={prev}>
          <ChevronLeft />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <Button variant="outline" size="icon" onClick={next}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}