import Navbar from './components/Navbar'
import Heron from './components/Heron'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-neutral-950 bg-radial-[ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.4),rgba(255,255,255,0)]"></div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Heron />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
