import React from 'react'

interface Props {
  navItems: NavItem[]
}

interface NavItem {
  title: string
  url: string
}

function Header(props: Props) {
  return (
    <div className="px-12 py-6 flex gap-x-6">
      {props.navItems.map((item) => {
        return (
          <a key={item.url} href={item.url}>
            {item.title}
          </a>
        )
      })}
    </div>
  )
}

export default Header
