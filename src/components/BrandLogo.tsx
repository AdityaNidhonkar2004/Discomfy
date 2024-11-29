<<<<<<< HEAD
import Image from "next/image"
import Logo from "./Logo.png"
export function BrandLogo() {
  return (
    <div className="mt-2">
      <Image src={Logo} alt="DiscomfyLogo" className=""></Image>

    </div>
=======
import { Globe2Icon } from "lucide-react"

export function BrandLogo() {
  return (
    <span className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg">
      <Globe2Icon className="size-8" />
      <span>Easy PPP</span>
    </span>
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
  )
}
