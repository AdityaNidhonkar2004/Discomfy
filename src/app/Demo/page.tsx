import React from 'react'
import HeroSection from './_components/HeroSection'
import {Steps} from './_components/Steps'
import { SignUpButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'

const page = () => {
  return (
    <div className='md:overflow-x-hidden'>
    <section className='bg-[#ECEEFB] w-[130vh] md:w-screen md:min-h-screen'>
      <HeroSection/>
    </section>
    <section id='steps' className='w-[130vh] md:w-screen'>
      <Steps/>
    </section>
    <div className=' w-[130vh] md:w-screen border border-black  md:mx-60 my-20 rounded-xl'>
      <h1 className='font-bold text-4xl mt-10 mb-2 flex justify-center'>Get Started with Discomfy</h1>
      <h1 className='font-bold text-4xl mb-5 flex justify-center'>1st product is on us</h1>
    <div className="my-10 flex justify-center">
      <SignUpButton>
        <Button className='text-lg p-6 rounded-xl gap-2 bg-black hover:bg-white hover:text-black border border-black mr-2'>
          Get Started for free <ArrowRightIcon className='size-5'/>
        </Button>
      </SignUpButton>
      </div>
    </div>


    </div>
  )
}

export default page