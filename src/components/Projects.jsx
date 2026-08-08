import { div } from 'motion/react-client'
import image1 from '/public/facturacion.png'
import image2 from '/public/cuidarnos.png'
import image3 from '/public/finu.png'
import image4 from '/public/image4.jpg'
import image5 from '/public/image5.jpg'
import { motion } from "motion/react"
import { BsGithub } from 'react-icons/bs'

const projectsData = [
  {
    image: image1,
    title: "Sistema Integral de Gestión de Clientes y Facturación",
    description: "Sistema web desarrollado para optimizar la gestión de clientes, consumos y facturación de un acueducto comunitario. Participé en el desarrollo de funcionalidades, mantenimiento y mejoras del sistema, contribuyendo a automatizar procesos administrativos.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    repository: "https://github.com/gabrieljimenezc01/Facturacion_Aranda/tree/jhon"
  },
  {
    image: image2,
    title: "Aplicación para la Coordinación del Cuidado de Pacientes",
    description: "Proyecto personal orientado a mejorar la organización del cuidado de pacientes mediante la centralización de información médica, medicamentos y responsabilidades familiares. Actualmente se encuentra en desarrollo.",
    technologies: ["Flutter", "Django", "PostgresSQL"],
    repository: "#home"
  },
  {
    image: image3,
    title: "FinU",
    description: "Aplicación enfocada en la gestión de gastos personales, diseñada para facilitar el registro y seguimiento de ingresos y egresos mediante una interfaz sencilla e intuitiva.",
    technologies: ["Flutter", "SQLite"],
    repository: "https://github.com/gabrieljimenezc01/FinU"
  },
  // {
  //   image: image4,
  //   title: "Project 4",
  //   description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   technologies: ["React", "Tailwind CSS", "Node.js"],
  //   repository: "https://example.com/project4"
  // },
  // {
  //   image: image5,
  //   title: "Project 5",
  //   description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   technologies: ["React", "Tailwind CSS", "Node.js"],
  //   repository: "https://example.com/project5"
  // }
]

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}
const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
        <img src={project.image} alt="" className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-75' />

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <div className='text-xl font-semibold'>{project.title}</div>
            <p className='text-gray-400'>{project.description}</p>
          </div>

          <div className="grid grid-cols-[1fr_auto] items-start gap-4">

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-lg border border-sky-500/30 bg-sky-400/5 p-1.5 text-sm text-sky-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-400/5 p-1.5 text-xl text-white transition-all duration-300 hover:border-sky-400 hover:bg-sky-400/10 hover:text-white hover:shadow-lg hover:shadow-sky-500/20"
              aria-label={`Ver código de ${project.title}`}
            >
              <BsGithub />
            </a>

          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="projects" className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24:'>

      <ScrollReveal>
        <h1 className='text-4xl font-normal text-white md:text-6xl'>Mis Proyectos</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-250 flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects