import Image from 'next/image'
import React from 'react'
import discountGif from "../../../components/discountGif.gif"
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
const HeroSection = () => {
  return (
    <section className='md:flex md:justify-evenly md:p-20 pt-20 overflow-x-hidden'>
        <Link href={"/"} ><ArrowLeft className="size-16 md:size-10 ml-5 md:ml-10 hover:scale-125 duration-150 rounded-full"/></Link>
        <div className='mt-20 md:mt-48'> 
        <header className='flex items-center text-8xl md:text-6xl font-bold mx-10'>
        Activate localized pricing with Discomfy
        </header>
        <div>
        <p className='font-semibold text-3xl md:text-2xl mx-10 my-20 md:my-5'>Seamlessly connect your accounts and set up region-specific pricing and promotions for your products in a few simple steps.</p>
        </div>
        <Link href={"/#steps"}>
        <button className='text-3xl font-bold md:text-xl md:font-semibold bg-[#4C62D8] p-12 md:p-5 mx-10 text-white rounded-2xl border hover:bg-blue-800 '>
            Get Started
        </button>
        </Link>
        </div>
          <Image src={discountGif} alt='DiscountImage' className='ml-64 md:ml-0 object-contain'></Image>
    </section>
  )
}

export default HeroSection