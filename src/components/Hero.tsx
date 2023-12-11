import Image from 'next/image'
import React from 'react'
import avatar from 'assets/avatar.svg'

interface Props {}

function Hero(props: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-6xl max-w-[60%] leading-[80px]">
        Front-end developer.
      </div>
      <Image src={avatar} alt="avatar" />
    </div>
  )
}

export default Hero
