import { BiMailSend } from "react-icons/bi"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { PiReadCvLogoFill } from "react-icons/pi"

const Contact = () => {
  return (
    <div id="contact"className="flex min-h-[70vh] min-w-full items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Ponte en contacto
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          ¿Tienes una oportunidad laboral, un proyecto o simplemente quieres ponerte en contacto? Estaré encantado de conversar contigo.
        </p>
        <ul className="flex flex-wrap gap-5">
          <li className="flex items-center gap-2 cursor-pointer text-lg opacity-70 transition-all duration-300 text-blue-500 hover:opacity-100">
            <a
              href="https://www.linkedin.com/in/jhon-roque-53512b378"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <BsLinkedin />
              Linkedin
            </a>
          </li>
          <li className="flex items-center gap-2 cursor-pointer text-lg opacity-70 transition-all duration-300 text-orange-500 hover:opacity-100">
            <a
              href="https://github.com/jhonRR28"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <BsGithub />
              GitHub
            </a>
          </li>
          <li className="flex items-center gap-2 cursor-pointer text-lg opacity-70 transition-all duration-300 text-sky-500 hover:opacity-100">
            <a
              href="/cv/Jhon_Roque_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <PiReadCvLogoFill />
              Descargar CV
            </a>
          </li>
        </ul>

        <a
          href="mailto:maleshector68@gmail.com"
          className="flex items-center gap-2 rounded-xl border border-sky-500 px-6 py-3 font-medium text-sky-400 transition-all duration-300  hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30"
        >
          <BiMailSend className="text-xl" />
          Enviar correo
        </a>
      </div>
    </div>
  )
}

export default Contact