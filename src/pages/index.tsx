import Header from '@/Header'

export default function Home() {
  const navItems = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
  ]
  return (
    <main className={`min-h-screen bg-eerie-black text-bright-grey`}>
      <Header navItems={navItems} />
    </main>
  )
}
