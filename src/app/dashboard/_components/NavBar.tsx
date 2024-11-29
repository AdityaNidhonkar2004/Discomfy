import { BrandLogo } from "@/components/BrandLogo"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

export function NavBar() {
  return (
<<<<<<< HEAD
    <header className="flex py-4 shadow bg-background w-[130vh] md:w-screen">
      <nav className="flex items-center gap-10 container">
        <Link className="mr-auto" href="/">
          <BrandLogo />
        </Link>
        <Link href="/dashboard/products" className="font-semibold text-lg">Products</Link>
        <Link href="/dashboard/analytics" className="font-semibold text-lg cursor-not-allowed text-gray-400">Analytics</Link>
        <Link href="/dashboard/subscription" className="font-semibold text-lg">Subscription</Link>
=======
    <header className="flex py-4 shadow bg-background">
      <nav className="flex items-center gap-10 container">
        <Link className="mr-auto" href="/dashboard">
          <BrandLogo />
        </Link>
        <Link href="/dashboard/products">Products</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/subscription">Subscription</Link>
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
        <UserButton />
      </nav>
    </header>
  )
}
