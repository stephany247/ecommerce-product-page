import { ShoppingCart, Trash2 } from "lucide-react";
import { MobileNav } from "../mobile-nav";
import Image from "next/image";
import { DesktopNav } from "../desktop-nav";
import { useQuantity } from "@/context/QuantityContext";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navbar() {
  const { cartQuantity, reset, resetCart } = useQuantity();
  return (
    <header className="flex items-center justify-between px-4 py-2 md:py-0 border-b">
      <div className="flex gap-4 md:gap-x-8 lg:gap-12 items-center">
        <MobileNav />
        <Image
          src="/logo.svg" // path relative to /public
          alt="User Avatar"
          width={52}
          height={82}
          className="w-32 lg:w-50 md:mb-2"
        />
      <DesktopNav />
      </div>

      <div className="flex gap-2 items-center">
        {/* <Button className="relative">
          <ShoppingCart />
          {cartQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full px-1 py-0.5 text-xs">
              {cartQuantity}
            </span>
          )}
        </Button> */}

        {/* cart & avatar */}
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant='ghost' className="relative cursor-pointer">
                <ShoppingCart className="w-6 h-6 md:w-12 md:h-12" />
                {cartQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-400 text-white rounded-full px-1.5 py-0.5 text-xs">
                    {cartQuantity}
                  </span>
                )}
              </Button>
            </PopoverTrigger>

            <PopoverContent
              align="center"
              sideOffset={12}
              // className="w-screen max-w-95/100 md:w-72 p-5 shadow-lg rounded-lg mt-1 mx-auto"
              className="w-screen max-w-95/100 sm:w-84 sm:max-w-full p-5 shadow-lg rounded-lg mt-1 mx-auto"
            >
              <h4 className="font-semibold border-b pb-4 mb-4">Cart</h4>
              {cartQuantity > 0 ? (
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center gap-3">
                    <Image
                      src="/products/image-product-1-thumbnail.jpg"
                      alt="Product"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                    <div className="text-sm text-muted-foreground">
                      <p>Fall Limited Edition Sneakers</p>
                      <p className="space-x-2">
                        <span>$125.00 × {cartQuantity} </span>

                        <span className="font-bold text-very-dark-blue">
                          ${(125 * cartQuantity).toFixed(2)}
                        </span>
                      </p>
                    </div>
                    {/* Optional delete button */}
                    <Trash2
                      size={16}
                      className="text-grayish-blue cursor-pointer"
                      onClick={resetCart}
                    />
                  </div>
                  <Button className="text-black font-semibold mb-2" onClick={reset}>
                    Checkout
                  </Button>
                </div>
              ) : (
                <p className="text-center text-muted-foreground text-sm p-16">
                  Your cart is empty.
                </p>
              )}
            </PopoverContent>
          </Popover>
        </div>
        <Image
          src="/image-avatar.png" // path relative to /public
          alt="User Avatar"
          width={32}
          height={32}
          className="lg:w-12 lg:h-12 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}
