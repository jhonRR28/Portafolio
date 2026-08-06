import { div } from 'motion/react-client'
import image1 from '/public/image1.jpg'
import image2 from '/public/image2.jpg'
import image3 from '/public/image3.jpg'
import image4 from '/public/image4.jpg'
import image5 from '/public/image5.jpg'
import { motion } from "motion/react"

const projectsData = [
  {
    image: image1,
    title: "Project 1",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    link: "https://example.com/project1"
  },
  {
    image: image2,
    title: "Project 2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    link: "https://example.com/project2"
  },
  {
    image: image3,
    title: "Project 3",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    link: "https://example.com/project3"
  },
  {
    image: image4,
    title: "Project 4",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    link: "https://example.com/project4"
  },
  {
    image: image5,
    title: "Project 5",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    link: "https://example.com/project5"
  }
]

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8}}
    >
      {children}
    </motion.div>
  )
}
const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={project.image} alt="" className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-75'/>

      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <div className='text-xl font-semibold'>{project.title}</div>
          <p className='text-gray-400'>{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {
            project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))
          }
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
      <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>
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