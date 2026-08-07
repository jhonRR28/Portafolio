import { BiLogoDjango, BiLogoDocker, BiLogoGithub, BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoPhp, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"
import { motion } from "motion/react"
import { SiMysql } from "react-icons/si"

const Tech = () => {
  const variantes = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }
  
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1 
      variants={variantes}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}

      className="text-4xl font-light text-white md:text-6xl">Tecnologías</motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variantes}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoPython className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div
          variants={variantes}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoDjango className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div
          variants={variantes}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoPhp className="cursor-pointer text-[80px] text-indigo-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div
          variants={variantes}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoJava className="cursor-pointer text-[80px] text-amber-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div
          variants={variantes}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div
          variants={variantes}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoPostgresql className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div
          variants={variantes}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiMysql className="cursor-pointer text-[80px] text-cyan-800 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div
          variants={variantes}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoGithub className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
      </div>
    </div>
  )
}

export default Tech