import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useState } from 'react';
import ButtonLink from './ButtonLink';
import IconLink from './IconLink';
import * as Icons from './Icons';

function NavLink({ children, href }) {
  const { pathname } = useRouter();

  return (
    <Link href={href}>
      <a
        className={`font-bold hover:text-zinc-100 transition-colors ${
          pathname === href ? 'text-white' : ''
        } py-2 sm:py-0`}
      >
        {children}
      </a>
    </Link>
  );
}

export default function Layout({ children }) {
  const [isMenuShowing, setIsMenuShowing] = useState();

  const handleMenuClick = () => {
    setIsMenuShowing(!isMenuShowing);
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <header className="flex justify-center sticky sm:static top-0 z-10 py-2 sm:p-0 bg-zinc-800 sm:bg-transparent">
        <nav
          className={`gap-x-5 ${
            isMenuShowing ? 'flex absolute' : 'hidden'
          } text-zinc-400 bg-zinc-800 px-6 pb-4 w-full top-full left-0 flex-col sm:w-auto sm:static sm:flex sm:flex-row sm:items-center sm:py-3 sm:my-6 sm:rounded-xl transition`}
        >
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/projects">Proyectos</NavLink>
          <NavLink href="/contact">Contacto</NavLink>
          <NavLink href="/cv">CV Online</NavLink>
          <ButtonLink
            href="https://raw.githubusercontent.com/mateo-14/personal-web-data/main/CV Mateo Ledesma.pdf"
            className="mt-2 sm:mt-0 px-5 py-2 bg-emerald-600"
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
      <main className="flex-1 px-6 md:px-20 flex justify-center container mx-auto mt-4 sm:mt-0">
        {children}
      </main>
      <footer className="flex justify-center">
        <div className="flex mb-4 mt-6 gap-x-3 ">
          <IconLink href="https://www.linkedin.com/in/mateo-ledesma/" title="LinkedIn">
            <Icons.Linkedin className="w-4 h-4 " />
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
  );
}
