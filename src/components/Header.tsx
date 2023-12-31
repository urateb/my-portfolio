import Image from 'next/image'
import signature from 'assets/signature.svg'
import '@theme-toggles/react/css/Around.css'
import { Around } from '@theme-toggles/react'

interface Props {
  navItems: NavItem[]
  theme: string
  toggleTheme: (...args: any[]) => any
}

interface NavItem {
  title: string
  url: string
}

function GithubIcon({ theme }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-125 transform transition-transform duration-300 ease-in-out -mr-4"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={` ${
          theme === 'light' ? 'bg-eerie-black' : 'bg-bright-grey'
        }`}
        d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
        fill="currentColor"
      />
    </svg>
  )
}
function LinkedinIcon({ theme }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-125 transform transition-transform duration-300 ease-in-out"
    >
      <path
        d="M15.0001 0.599976C7.0471 0.599976 0.600098 7.04698 0.600098 15C0.600098 22.953 7.0471 29.4 15.0001 29.4C22.9531 29.4 29.4001 22.953 29.4001 15C29.4001 7.04698 22.9531 0.599976 15.0001 0.599976ZM11.4751 20.9685H8.5591V11.5845H11.4751V20.9685ZM9.9991 10.4325C9.0781 10.4325 8.4826 9.77997 8.4826 8.97297C8.4826 8.14948 9.0961 7.51648 10.0366 7.51648C10.9771 7.51648 11.5531 8.14948 11.5711 8.97297C11.5711 9.77997 10.9771 10.4325 9.9991 10.4325ZM22.1251 20.9685H19.2091V15.768C19.2091 14.5575 18.7861 13.7355 17.7316 13.7355C16.9261 13.7355 16.4476 14.292 16.2361 14.8275C16.1581 15.018 16.1386 15.288 16.1386 15.5565V20.967H13.2211V14.577C13.2211 13.4055 13.1836 12.426 13.1446 11.583H15.6781L15.8116 12.8865H15.8701C16.2541 12.2745 17.1946 11.3715 18.7681 11.3715C20.6866 11.3715 22.1251 12.657 22.1251 15.42V20.9685Z"
        fill="currentColor"
        className={` ${
          theme === 'light' ? 'bg-eerie-black' : 'bg-bright-grey'
        }`}
      />
    </svg>
  )
}
function Header(props: Props) {
  return (
    <div className="py-6 flex items-center justify-between relative">
      <a href="/">
        <Image src={signature} alt="signature" width={60} />
      </a>
      <div className="flex self-end gap-x-6 items-center">
        {props.navItems.map((item) => {
          return (
            <a key={item.url} href={item.url}>
              {item.title}
            </a>
          )
        })}
        <a href="https://github.com/urateb/">
          <GithubIcon
            theme={props.theme}
            toggleTheme={() => {}}
            navItems={[]}
          />
        </a>
        <a href="https://www.linkedin.com/in/urate-bekaj/">
          <LinkedinIcon
            theme={props.theme}
            toggleTheme={() => {}}
            navItems={[]}
          />
        </a>
      </div>
      <div className="absolute -right-24 top-[24px] text-2xl text-teal-600">
        <Around duration={500} onToggle={() => props.toggleTheme()} />
      </div>
    </div>
  )
}

export default Header
