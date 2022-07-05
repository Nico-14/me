import Link from 'next/link'
import { useState } from 'react'
import ButtonLink from './ButtonLink'
import IconLink from './IconLink'
import * as Icons from './Icons'

const NavLink = ({ children, href }) => (
  <Link href={href}>
    <a className={`font-semibold hover:text-zinc-100 transition-colors py-2 sm:py-0`}>{children}</a>
  </Link>
)

export default function Layout({ children }) {
  const [isMenuShowing, setIsMenuShowing] = useState()

  const handleMenuClick = () => {
    setIsMenuShowing(!isMenuShowing)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#141414]">
      <header className="flex justify-center sticky sm:static top-0 z-10 print:hidden bg-[#141414] py-2 sm:py-0">
        <nav
          className={`gap-x-5 bg-[#141414] shadow-none sm:shadow-2xl shadow-white/10 px-4 sm:px-0 ${
            isMenuShowing ? 'flex absolute' : 'hidden'
          } py-6 text-zinc-400 w-full top-full left-0 flex-col sm:w-auto sm:static sm:flex sm:flex-row sm:items-center sm:rounded-xl transition`}
        >
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/#projects">Proyectos</NavLink>
          <NavLink href="/#contact">Contacto</NavLink>
          <NavLink href="/cv">CV Online</NavLink>
          <ButtonLink
            href="https://raw.githubusercontent.com/mateo-14/personal-web-data/main/CV Mateo Ledesma.pdf"
            className="mt-2 sm:mt-0 px-6 py-3 text-[#1B1F24]"
          >
            Descargar CV
          </ButtonLink>
        </nav>

        <button
          className={`sm:hidden ml-auto mr-2 text-white ${
            isMenuShowing ? 'opacity-1' : 'opacity-75'
          }`}
          onClick={handleMenuClick}
        >
          <Icons.ChevronDown className="h-9 w-9" />
        </button>
      </header>
      <main className="flex-1 flex px-6 md:px-20 container mx-auto mt-4 sm:mt-0 print:p-0 print:m-0">
        {children}
      </main>
      <footer className="flex justify-center print:hidden">
        <div className="flex mb-4 mt-6 gap-x-3">
          <IconLink href="https://www.linkedin.com/in/mateo-ledesma/" title="LinkedIn">
            <Icons.Linkedin className="w-4 h-4" />
          </IconLink>
          <IconLink href="https://github.com/mateo-14" title="GitHub">
            <Icons.Github className="w-6 h-6" />
          </IconLink>
          <IconLink href="mailto:mateo.14.ledesma@gmail.com" title="Email">
            <Icons.Mail className="w-6 h-6" />
          </IconLink>
        </div>
      </footer>
    </div>
  )
}
