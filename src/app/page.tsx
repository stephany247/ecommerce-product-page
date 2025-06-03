"use client";
import { ImageCarousel } from "@/components/ImageCarousel";
import Navbar from "@/components/navbar/Navbar";
import QuantityInput from "@/components/QuantityInput";
import { Button } from "@/components/ui/button";
import { useQuantity } from "@/context/QuantityContext";
import { ShoppingCartIcon } from "lucide-react";

export default function Home() {
  const { handleAddToCart } = useQuantity();
  return (
    <>
      <Navbar />
      <main className="font-sans text-very-dark-blue pb-12 sm:pt-12 lg:p-16 grid lg:grid-cols-2 items-center gap-4 md:gap-12">
        <ImageCarousel />
        <section className="m-5 space-y-3 md:space-y-6 md:max-w-9/10">
          <h2 className="uppercase font-bold text-sm md:text-lg text-dark-grayish-blue">
            sneaker company
          </h2>
          <h1 className="capitalize font-bold text-3xl md:text-6xl/normal text-balance">
            Fall limited edition sneaker
          </h1>
          <p className="text-dark-grayish-blue md:text-xl">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start gap-4">
            <div className="flex items-center gap-x-4">
              <p className="font-bold text-3xl">$125.00</p>
              <p className="py-1 px-3 bg-very-dark-blue text-white rounded-sm font-bold text-sm">
                50%
              </p>
            </div>
            <p className="line-through text-dark-grayish-blue font-bold text-lg">
              $250.00
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-4">
            <QuantityInput />
            <Button
              className="w-full space-x-2 p-6 text-very-dark-blue text-lg font-bold col-span-2"
              onClick={handleAddToCart}
            >
              <ShoppingCartIcon className="w-10 h-10" /> Add to cart
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
