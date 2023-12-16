import About from '@/About'
import Header from '@/Header'
import Hero from '@/Hero'
import { useState, useEffect } from 'react'

export default function Home() {
  const navItems = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '#about' },
    { title: 'Tech Stack', url: '/tech' },
    { title: 'Projects', url: '/projects' },
    { title: 'Contact', url: '/contact' },
  ]
  const [theme, setTheme] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') || 'light'
      : '',
  )
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (typeof window !== 'undefined') {
      document.body.className = theme
    }
  }, [theme])
  return (
    <main
      className={`min-h-screen px-32 dark:bg-eerie-black text-eerie-black bg-bright-grey dark:text-bright-grey`}
    >
      <Header navItems={navItems} theme={theme} toggleTheme={toggleTheme} />
      <div className="flex min-h-[calc(100vh_-_72px)] flex-col justify-center">
        <Hero />
      </div>
      <About />
    </main>
  )
}
