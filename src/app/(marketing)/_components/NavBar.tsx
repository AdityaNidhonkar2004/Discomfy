import { BrandLogo } from "@/components/BrandLogo"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import Link from "next/link"

export function NavBar() {
  return (
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
