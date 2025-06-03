// components/desktop-nav.tsx

import Link from "next/link";

export function DesktopNav() {
  return (
    <nav className="hidden md:flex md:gap-4 lg:gap-8 text-lg font-medium text-muted-foreground">
      <Link
        href="/"
        className="hover:text-accent-foreground py-8 border-b-4 border-b-transparent hover:border-b-primary"
      >
        Collections
      </Link>
      <Link href="/shop" className="hover:text-accent-foreground py-8 border-b-4 border-b-transparent hover:border-b-primary">
        Men
      </Link>
      <Link href="/contact" className="hover:text-accent-foreground py-8 border-b-4 border-b-transparent hover:border-b-primary">
        Women
      </Link>
      <Link href="/about" className="hover:text-accent-foreground py-8 border-b-4 border-b-transparent hover:border-b-primary">
        About
      </Link>
      <Link href="/contact" className="hover:text-accent-foreground py-8 border-b-4 border-b-transparent hover:border-b-primary">
        Contact
      </Link>
    </nav>
  );
}
