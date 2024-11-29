"use client";

import { Button } from "@/components/ui/button";
import FlipText from "@/components/ui/flip-text";
import RetroGrid from "@/components/ui/retro-grid";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function HeroBackground() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center rounded-lg mb-28 md:mb-0">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-clip-text text-center text-9xl md:text-7xl font-bold leading-none md:tracking-tighter mb-3 mt-60 md:mt-0">
      Power Your Site's Discount Strategy!
      </span>

      <div className=" my-24 md:my-6">
      <FlipText
      className="text-4xl font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] text-transparent bg-clip-text"
      word="Maximize Discounts, Minimize Effort"
    />
      </div>
     <div className="mt-28 md:mt-5">
      <SignUpButton>
        <Button className=' text-2xl md:text-lg p-10 md:p-6 rounded-xl gap-5 md:gap-2 bg-black hover:bg-white hover:text-black border border-black mr-2'>
          Get Started for free <ArrowRightIcon className='size-5'/>
        </Button>
      </SignUpButton>
      <Link href={"/Demo/#steps"}>
      <Button className='text-2xl p-10 md:text-lg md:p-6 rounded-xl  gap-5 md:gap-2 bg-black hover:bg-white hover:text-black border border-black ml-2'>
          Get started with a Demo<ArrowRightIcon className='size-5'/>
        </Button>
      </Link>
      </div>
      <RetroGrid className="invisible md:visible"/>
    </div>
  );
}
