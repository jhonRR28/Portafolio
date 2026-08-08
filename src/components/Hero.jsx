import image from '/public/image.png'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id="home" className="px-14 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={image} alt="Jhon Roque" className="w-75 aspect-square borderborder-sky-400/30 object-cover rounded-full cursor-pointer shadow-xl shadow-blue-600/40 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-sky-300/50 md:w-87.5"/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-150 flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-linear-to-r from-sky-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-5xl font-semibold  md:text-7xl">
            Jhon Roque
          </h1>
          <h3 className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-lg md:text-3xl">
            Ingeniero de Sistemas
          </h3>
          <p className="text-sm font-light text-sky-500 text-shadow text-shadow-sky-300">
            Backend • Desarrollo Web • Redes
          </p>
          <p className="leading-6 text-pretty text-sm text-gray-400 md:text-base">
            Soy Ingeniero de Sistemas con interés en el desarrollo backend, aplicaciones web y redes. Disfruto construir soluciones que resuelvan problemas reales, aprender nuevas tecnologías y mejorar continuamente mis habilidades.
          </p>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-2 flex flex-wrap items-center justify-center px-2 py-2 text-xs gap-3 md:gap-4 md:px-6 md:py-3 md:text-base">
          <a
            href="/cv/Jhon_Roque_CV.pdf"
            target="_blank"
            className="rounded-xl border border-sky-500 px-6 py-3 font-medium text-sky-400 transition-all duration-300  hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30"
          >
            Descargar CV
          </a>
          <a
            href="#projects"
            className="rounded-xl border border-sky-500 px-6 py-3 font-medium text-sky-400 transition-all duration-300  hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30"
          >
            Ver proyectos
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero