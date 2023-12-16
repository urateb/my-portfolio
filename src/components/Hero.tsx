import Image from 'next/image'
import avatar from 'assets/avatar.svg'

function Hero() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-6xl max-w-[60%] leading-[80px]">
        Uratë Bekaj. <br />
        Front-end developer.
      </div>
      <div className="rounded-full border-[10px] border-violet-blue">
        <Image src={avatar} alt="avatar" />
      </div>
    </div>
  )
}

export default Hero
