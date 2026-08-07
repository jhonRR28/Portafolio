import { div } from 'motion/react-client';
import { BiMailSend, BiMenu, BiX } from 'react-icons/bi';
import { BsYoutube, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { useState } from "react";
import { IoIosMail, IoMdMail, IoMdMailUnread } from 'react-icons/io';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home"className="bg-linear-to-r from-sky-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-4xl font-semibold opacity-90 transition-all duration-300 hover:brightness-110">
        Jhon
      </a>
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Inicio</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Tecnologías</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Proyectos</li>
        </a>
        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contacto</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a
            href="https://www.linkedin.com/in/jhon-roque-53512b378"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>

        <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <a
            href="https://github.com/jhonRR28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </li>

        <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <a
            href="mailto:maleshector68@gmail.com"
          >
            <IoMdMail />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div className={`fixed right-0 top-21 flex h-screen w-1/2 flex-col items-center justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-8 ">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Inicio</li>
            </a>
            <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Tecnologías</li>
            </a>
            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Proyectos</li>
            </a>
            <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Contacto</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-lg opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <a
                href="https://www.linkedin.com/in/jhon-roque-53512b378"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>

            <li className="cursor-pointer text-lg opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <a
                href="https://github.com/jhonRR28"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </li>

            <li className="cursor-pointer text-lg opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
              <a
                href="mailto:maleshector68@gmail.com"
              >
                <IoMdMail />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar