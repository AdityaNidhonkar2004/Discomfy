import { ReactNode } from "react"
import { NavBar } from "./_components/NavBar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-accent/5 h-[225vh] md:h-screen w-[130vh] md:w-screen ">
      <NavBar />
      <div className="container py-6 ">{children}</div>
    </div>
  )
}
