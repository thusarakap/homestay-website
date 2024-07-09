// components/ui/navbar.tsx
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    // absolute top-3 left-10 right-5 z-10 px-4 lg:px-6 h-14 flex items-center text-gray-100 bg-transparent
    <header className="absolute top-1 z-10 flex h-20 w-full items-center px-4 md:px-6 text-gray-100 bg-transparent">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-8 w-8 text-gray-600" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-8 hidden lg:flex" prefetch={false}>
            <MountainIcon className="h-8 w-8" />
            <span className="sr-only">Next to Nature</span>
          </Link>
          <div className="grid gap-4 py-6">
            <Link href="#" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
              About
            </Link>
            <Link href="#" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-8 hidden lg:flex" prefetch={false}>
        <MountainIcon className="h-8 w-8" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-8">
        <Link
          href="#"
          className="group inline-flex h-12 w-max items-center justify-center rounded-lg text-2xl font-semibold transition-colors hover:text-gray-300 focus:text-gray-300 focus:outline"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="group inline-flex h-12 w-max items-center justify-center rounded-lg text-2xl font-semibold transition-colors hover:text-gray-300 focus:text-gray-300 focus:outline"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="group inline-flex h-12 w-max items-center justify-center rounded-lg text-2xl font-semibold transition-colors hover:text-gray-300 focus:text-gray-300 focus:outline"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="#"
          className="group inline-flex h-12 w-max items-center justify-center rounded-lg text-2xl font-semibold transition-colors hover:text-gray-300 focus:text-gray-300 focus:outline"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const MenuIcon: FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};

const MountainIcon: FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};