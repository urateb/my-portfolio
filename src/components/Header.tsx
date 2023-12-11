import Image from 'next/image'
import React from 'react'
import signature from 'assets/signature.svg'
import github from 'assets/icons/github-logo.svg'
import linkedin from 'assets/icons/linkedin-logo.svg'

interface Props {
  navItems: NavItem[]
}

interface NavItem {
  title: string
  url: string
}

function Header(props: Props) {
  return (
    <div className="py-6 flex items-center justify-between">
      <a href="/">
        <Image src={signature} alt="signature" width={60} />
      </a>
      <div className="flex self-end gap-x-6 items-center">
        {props.navItems.map((item) => {
          return (
            <a key={item.url} href={item.url} className="hover:text-white">
              {item.title}
            </a>
          )
        })}
        <a href="https://github.com/urateb/">
          <Image
            src={github}
            alt="github"
            width={20}
            className="hover:scale-125 transform transition-transform duration-300 ease-in-out"
          />
        </a>
        <a href="https://www.linkedin.com/in/urate-bekaj/">
          <Image
            src={linkedin}
            alt="linkedin"
            className="-ml-2 hover:scale-125 transform transition-transform duration-300 ease-in-out"
          />
        </a>
      </div>
    </div>
  )
}

export default Header
