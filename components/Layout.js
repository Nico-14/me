import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import IconLink from './IconLink';
import * as Icons from './Icons';

const navLinks = [
  { href: '/', text: 'Inicio' },
  { href: '/contact', text: 'Contacto' },
  { href: '/portfolio', text: 'Portfolio' },
];

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
          {navLinks.map(({ href, text }) => (
            <Link href={href} key={href}>
              <a
                className={`font-medium hover:text-gray-100 ${
                  pathname === href ? 'text-white' : ''
                } py-2 sm:py-0`}
              >
                {text}
              </a>
            </Link>
          ))}
          <a
            href="https://raw.githubusercontent.com/mateo-14/personal-web-data/main/cv.pdf"
            download="CV Mateo Ledesma.pdf"
            className="font-medium px-4 py-2 mt-2 sm:mt-0 text-white border-2 rounded-sm border-white hover:bg-white hover:text-black"
          >
            Descargar CV
          </a>
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
          <IconLink href="https://wa.me/5493435047916" title="WhatsApp">
            <Icons.Whatsapp className="w-6 h-6" />
          </IconLink>
          <IconLink href="mailto:mateo.14.ledesma@gmail.com" title="Email">
            <Icons.Mail className="w-6 h-6" />
          </IconLink>
          <IconLink href="https://instagram.com/null14__" title="Instagram">
            <Icons.Instagram className="w-6 h-6" />
          </IconLink>
        </div>
      </footer>
    </div>
  );
}
