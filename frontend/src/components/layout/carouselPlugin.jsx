"use client";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselPlugin() {

  const [index, setIndex] = useState(0);
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

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-5xl mx-auto transition-all duration-500 p-1" //w-full max-w-[10rem] sm:max-w-xs
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="h-30 p-6" //aspect-square
              >
                <div className="ml-10">
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
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
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
    </Carousel>
  );
}