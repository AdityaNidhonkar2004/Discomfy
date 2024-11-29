import { ReactNode } from "react"
import { NavBar } from "./_components/NavBar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
<<<<<<< HEAD
    <div className="bg-accent/5 h-[225vh] md:h-screen w-[130vh] md:w-screen ">
      <NavBar />
      <div className="container py-6 ">{children}</div>
=======
    <div className="bg-accent/5 min-h-screen">
      <NavBar />
      <div className="container py-6">{children}</div>
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
    </div>
  )
}
