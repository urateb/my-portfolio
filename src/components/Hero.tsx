import Image from 'next/image'
import React from 'react'
import avatar from 'assets/avatar.svg'

interface Props {}

function Hero(props: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-[72px] max-w-[50%] leading-[70px]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <Image src={avatar} alt="avatar" />
    </div>
  )
}

export default Hero
