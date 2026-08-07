import image from '/public/image.png'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={image} alt="" className="w-75 aspect-square object-cover rounded-full cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-87.5" />
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex max-w-150 flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-5xl font-light md:text-7xl">Jhon Roque</h1>
          <h3 className="bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent  text-2xl md:text-3xl">Ingeniero de sistemas</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            Soy Ingeniero de Sistemas con interés en el desarrollo backend y la construcción de soluciones que resuelvan problemas reales. He participado en proyectos de software y soporte de infraestructura, y disfruto aprender nuevas tecnologías y mejorar continuamente mis habilidades.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero