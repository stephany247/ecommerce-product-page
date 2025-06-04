"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        lightboxRef.current &&
        !lightboxRef.current.contains(event.target as Node)
      ) {
        setIsLightboxOpen(false);
      }
    }

    if (isLightboxOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLightboxOpen]);

  return (
    <div className="mx-auto w-full">
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-very-dark-blue/80 bg-opacity-80 flex items-center justify-center">
          <div ref={lightboxRef} className="relative max-w-2xl w-full">
            <button
              type="button"
              className="absolute -top-8 right-14 text-white text-2xl font-bold z-50 cursor-pointer"
              onClick={() => setIsLightboxOpen(false)}
            >
              {/* &times; */}
              <X />
            </button>
            {/* Lightbox Carousel */}
            <Carousel
              setApi={setApi}
              className="relative w-7/10 max-w-2xl mx-auto"
              opts={{ startIndex: selectedIndex }}
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full">
                      <Image
                        src={src}
                        alt={`Large Product ${index + 1}`}
                        width={700}
                        height={700}
                        className="object-cover w-full h-auto rounded-2xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 size-10 cursor-pointer" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 size-10 cursor-pointer" />
            </Carousel>
            {/* Thumbnails in lightbox (optional) */}
            <div className="flex justify-center gap-4 mt-4">
              {thumbnails.map((thumbnail, index) => (
                <button
                  key={thumbnail}
                  type="button"
                  onClick={() => {
                    setSelectedIndex(index);
                    api?.scrollTo(index);
                  }}
                  className={`border-2 rounded-lg bg-white overflow-hidden transition-all cursor-pointer ${
                    selectedIndex === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  title={`View product image ${index + 1}`}
                  aria-label={`View product image ${index + 1}`}
                >
                  <Image
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    width={70}
                    height={70}
                    // className="object-cover"
                    className={`object-cover md:w-full md:h-auto ${
                      selectedIndex === index
                        ? "opacity-40 hover:opacity-40"
                        : "opacity-100 hover:opacity-60"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

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
                  onClick={() => {
                    setSelectedIndex(index);
                    setIsLightboxOpen(true);
                  }}
                  className="object-cover cursor-pointer w-full h-auto max-h-72 sm:max-w-9/10 sm:max-h-full sm:rounded-2xl mx-auto"
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
