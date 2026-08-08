import {
  FaReact,
  FaJava,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiCisco,
  SiDjango,
} from "react-icons/si";
import { motion } from "motion/react"

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: FaReact, color: "text-sky-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },

  {
    title: "Backend",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-blue-400" },
      { name: "Django", icon: SiDjango, color: "text-green-500" },
      { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
      { name: "Java", icon: FaJava, color: "text-orange-500" },
    ],
  },

  {
    title: "Bases de Datos",
    technologies: [
      { name: "MySQL", icon: SiMysql, color: "text-sky-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
      { name: "SQLite", icon: SiSqlite, color: "text-gray-300" },
    ],
  },

  {
    title: "Infraestructura y Redes",
    technologies: [
      { name: "Cisco", icon: SiCisco, color: "text-sky-500" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
    ],
  },
];

const Tech = () => {
  const variantes = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }
  
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-10 md:gap-18">
      <motion.h1 
      variants={variantes}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}

      className="text-4xl font-normal text-white md:text-6xl">
        Tecnologías
      </motion.h1>
      
      <div className="flex w-full flex-col items-center justify-center  p-5 md:p-14">
        {techCategories.map((category) => (
          <motion.div 
          variants={variantes}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          key={category.title} className="mb-10 md:mb-14">
            <h2 className="mb-4 text-center text-2xl font-light bg-linear-to-r from-sky-300 via-cyan-400 to-blue-800 bg-clip-text text-transparent md:font-semibold">
              {category.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-10">
              {category.technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name} className="group w-32 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-900/40 px-3 py-4 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/20 md:w-38 md:gap-4 md:px-4 md:py-6">
                    <Icon
                      className={`${tech.color} text-4xl transition-transform duration-300 group-hover:scale-110 md:text-5xl`}
                    />
                    <span className="text-center text-sm text-white md:text-base">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Tech