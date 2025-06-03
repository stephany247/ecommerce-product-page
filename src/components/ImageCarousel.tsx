"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/products/image-product-1.jpg",
  "/products/image-product-2.jpg",
  "/products/image-product-3.jpg",
  "/products/image-product-4.jpg",
];

const thumbnails = [
  "/products/image-product-1-thumbnail.jpg",
  "/products/image-product-2-thumbnail.jpg",
  "/products/image-product-3-thumbnail.jpg",
  "/products/image-product-4-thumbnail.jpg",
];

export function ImageCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(images.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto w-full">
      <Carousel setApi={setApi} className="w-full max-w-3xl mx-auto">
        <CarouselContent className="">
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full">
                <Image
                  src={src}
                  alt={`Product ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto max-h-72 sm:max-w-9/10 sm:max-h-full sm:rounded-2xl mx-auto"
                />
                {/* Previous button - overlays image */}
                <div className="md:hidden absolute left-14 top-1/2 -translate-y-1/2 z-10">
                  <CarouselPrevious />
                </div>

                {/* Next button - overlays image */}
                <div className="md:hidden absolute right-14 top-1/2 translate-y-1/2 z-10">
                  <CarouselNext />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>

      {/* Thumbnails */}
      <div className="hidden md:flex justify-center gap-4 mt-4">
        {thumbnails.map((thumbnail, index) => (
          <button
            key={thumbnail}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={`border-3 cursor-pointer rounded-lg overflow-hidden transition-all hover:opacity-60 ${
              current - 1 === index ? "border-primary" : "border-transparent"
            }`}
            title={`View product image ${index + 1}`}
            aria-label={`View product image ${index + 1}`}
          >
            <Image
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              width={70}
              height={70}
              className={`object-cover md:w-full md:h-auto ${
                current - 1 === index
                  ? "border-primary opacity-30 hover:opacity-40"
                  : "border-transparent opacity-100"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
