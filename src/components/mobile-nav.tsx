// components/mobile-nav.tsx

"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-8 w-10" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col space-y-4 mt-12 ml-6">
            <Link href="/" className="text-lg font-medium">
              Collections
            </Link>
            <Link href="/shop" className="text-lg font-medium">
              Men
            </Link>
            <Link href="/contact" className="text-lg font-medium">
              Women
            </Link>
            <Link href="/about" className="text-lg font-medium">
              About
            </Link>
            <Link href="/contact" className="text-lg font-medium">
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
