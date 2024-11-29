import Image from "next/image"
import Logo from "./Logo.png"
export function BrandLogo() {
  return (
    <div className="mt-2">
      <Image src={Logo} alt="DiscomfyLogo" className=""></Image>

    </div>
  )
}
