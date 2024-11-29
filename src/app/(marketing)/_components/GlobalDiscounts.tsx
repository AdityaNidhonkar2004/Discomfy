import WordPullUp from '@/components/ui/word-pull-up'
import Image from 'next/image'
import React from 'react'
import GlobalDiscountImage from "../../../components/GlobalSubscriptionImage.png"
const GlobalDiscounts = () => {
  return (
    <>
    <WordPullUp
      className="text-7xl md:text-6xl font-bold tracking-[-0.02em] text-black dark:text-white  md:leading-[5rem]"
      words="Price your product on each market willingness to pay"
    />
    <Image src={GlobalDiscountImage} alt="GlobalSubscriptionImage" className='md:ml-32 my-10'></Image>
    </>
  )
}

export default GlobalDiscounts