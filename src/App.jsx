import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      {/* <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-neutral-950 bg-radial-[ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.4),rgba(255,255,255,0)]"></div> */}

      <div className="fixed inset-0 -z-10 min-h-screen w-full bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-gray-200"></div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
