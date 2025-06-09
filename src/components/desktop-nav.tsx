import Link from "next/link";

export function DesktopNav() {
  return (
    <nav className="hidden md:flex text-lg font-medium text-muted-foreground">
      <ul className="flex md:gap-4 lg:gap-8 py-8">
        <li>
          <Link
            href="/"
            className="hover:text-accent-foreground py-8 border-b-4 border-b-transparent hover:border-b-primary"
          >
            Collections
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className="hover:text-accent-foreground py-8 border-b-4 border-b-transparent hover:border-b-primary"
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-accent-foreground py-8 border-b-4 border-b-transparent hover:border-b-primary"
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-foreground py-8 border-b-4 border-b-transparent hover:border-b-primary"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-accent-foreground py-8 border-b-4 border-b-transparent hover:border-b-primary"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}