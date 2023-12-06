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
      <Image src={signature} alt="signature" width={60} />
      <div className="flex self-end gap-x-6 items-center">
        {props.navItems.map((item) => {
          return (
            <a key={item.url} href={item.url}>
              {item.title}
            </a>
          )
        })}
        <Image src={github} alt="github" width={20} />
        <Image src={linkedin} alt="linkedin" width={20} className="-ml-2" />
      </div>
    </div>
  )
}

export default Header
