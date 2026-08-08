import { BiMailSend } from "react-icons/bi"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { PiReadCvLogoFill } from "react-icons/pi"

const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] w-full items-center justify-center px-4 py-20">
      <div className="flex w-full max-w-5xl flex-col items-center gap-10">

        {/* Título */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="bg-linear-to-r from-sky-300 via-cyan-400 to-blue-500 bg-clip-text text-4xl font-light text-transparent md:text-6xl">
            Ponte en contacto
          </h1>

          <p className="max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            ¿Tienes una oportunidad laboral, un proyecto o simplemente quieres
            ponerte en contacto? Estaré encantado de conversar contigo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 justify-items-center gap-5 md:grid-cols-3">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jhon-roque-53512b378"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-3xs flex-col items-center justify-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-sky-500/10"
          >
            <BsLinkedin className="text-4xl text-sky-400 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <h3 className="text-lg font-semibold text-white">
                LinkedIn
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Conecta conmigo
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jhonRR28"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-3xs flex-col items-center justify-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-sky-500/10"
          >
            <BsGithub className="text-4xl text-white transition-transform duration-300 group-hover:scale-110" />

            <div>
              <h3 className="text-lg font-semibold text-white">
                GitHub
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Mira mis proyectos
              </p>
            </div>
          </a>

          {/* Correo */}
          <a
            href="mailto:maleshector68@gmail.com"
            className="group flex w-full max-w-3xs flex-col items-center justify-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-sky-500/10"
          >
            <BiMailSend className="text-4xl text-cyan-400 transition-transform duration-300 group-hover:scale-110" />

            <div>
              <h3 className="text-lg font-semibold text-white">
                Correo
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Escríbeme directamente
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact