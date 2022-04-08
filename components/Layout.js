import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import ButtonLink from './ButtonLink';
import IconLink from './IconLink';
import * as Icons from './Icons';

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const [isMenuShowing, setIsMenuShowing] = useState();

  const handleMenuClick = () => {
    setIsMenuShowing(!isMenuShowing);
  };

  return (
    <div className={`flex flex-col min-h-screen bg-black`}>
      <Head>
        <title>Mateo Ledesma</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <header className="flex w-full flex-col sm:flex-row px-4 md:px-14 py-4 sm:pt-4 sticky sm:static top-0 z-10 bg-black">
        <nav
          className={`gap-x-5 ${
            isMenuShowing ? 'flex absolute' : 'hidden'
          } top-full left-0 flex-col w-full pb-4 px-6 sm:static sm:flex sm:flex-row sm:items-center sm:w-auto sm:p-0 mx-auto bg-black text-gray-400`}
        >
          <Link href="/">
            <a
              className={`font-medium hover:text-gray-100 ${
                pathname === '/' ? 'text-white' : ''
              } py-2 sm:py-0`}
            >
              Inicio
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`font-medium hover:text-gray-100 ${
                pathname === '/projects' ? 'text-white' : ''
              } py-2 sm:py-0`}
            >
              Proyectos
            </a>
          </Link>
          <Link href="/cv">
            <a
              className={`font-medium hover:text-gray-100 ${
                pathname === '/cv' ? 'text-white' : ''
              } py-2 sm:py-0`}
              target="_blank"
            >
              CV Online
            </a>
          </Link>
          <a
            href="mailto:mateo.14.ledesma@gmail.com"
            title="Email"
            className={`font-medium hover:text-gray-100 py-2 sm:py-0`}
          >
            Contáctame
          </a>
          <ButtonLink
            href="https://raw.githubusercontent.com/mateo-14/personal-web-data/main/cv.pdf"
            className="mt-2 sm:mt-0"
          >
            Descargar CV
          </ButtonLink>
        </nav>

        <button
          className={`sm:hidden ml-auto text-white ${isMenuShowing ? 'opacity-1' : 'opacity-75'}`}
          onClick={handleMenuClick}
        >
          <Icons.ChevronDown className="h-9 w-9" />
        </button>
      </header>
      <main className="flex-1 px-6 md:px-20 py-12 flex justify-center container mx-auto">
        {children}
      </main>
      <footer className="flex">
        <div className="flex gap-x-3 py-4 px-2 mx-auto">
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
  );
}
