import { BrandLogo } from "@/components/BrandLogo"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import Link from "next/link"

export function NavBar() {
  return (
<<<<<<< HEAD
    <header className="flex py-12 md:py-6 shadow-xl  md:top-0 w-[130vh] md:w-full md:z-100 bg-white">
      <nav className="flex justify-end md:items-center gap-4 md:gap-10 md:container font-semibold">
        <Link href="/" className="ml-5 md:ml-0  mr-32 md:mr-auto">
          <BrandLogo />
        </Link>
        <Link className="text-2xl  md:text-lg" href="/#features">
          Features
        </Link>
        <Link className="text-2xl  md:text-lg" href="/#pricing">
          Pricing
        </Link>
        <Link className="text-2xl  md:text-lg" href="/Demo">
          About
        </Link>
        <span className="text-2xl  md:text-lg">
=======
    <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link className="text-lg" href="#">
          Features
        </Link>
        <Link className="text-lg" href="/#pricing">
          Pricing
        </Link>
        <Link className="text-lg" href="#">
          About
        </Link>
        <span className="text-lg">
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  )
}
