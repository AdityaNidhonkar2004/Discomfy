import { ReactNode } from "react"
import { NavBar } from "./_components/NavBar"

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
<<<<<<< HEAD
    <div className="">
=======
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
      <NavBar />
      {children}
    </div>
  )
}
