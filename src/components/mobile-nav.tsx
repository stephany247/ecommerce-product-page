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
          <nav className="mt-12 ml-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" className="text-lg font-medium">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-medium">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-medium">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}