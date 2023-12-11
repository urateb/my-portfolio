import About from '@/About'
import Header from '@/Header'
import Hero from '@/Hero'
export default function Home() {
  const navItems = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Tech Stack', url: '/tech' },
    { title: 'Projects', url: '/projects' },
    { title: 'Contact', url: '/contact' },
  ]
  return (
    <main className={`min-h-screen px-32 bg-eerie-black text-bright-grey`}>
      <Header navItems={navItems} />
      <div className="flex min-h-[calc(100vh_-_72px)] flex-col justify-center">
        <Hero />
      </div>
      <About />
    </main>
  )
}
