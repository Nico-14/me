import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', text: 'Inicio' },
  { href: '/about', text: 'Sobre mí' },
  { href: '/links', text: 'Links' },
];

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const [isMenuShowing, setIsMenuShowing] = useState();

  const handleMenuClick = () => {
    setIsMenuShowing(!isMenuShowing);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Mateo Ledesma</title>
      </Head>
      <header className="flex w-full justify-center px-4 md:px-14 pt-4 bg-white sticky sm:static top-0 z-10">
        <button
          className={`sm:hidden ml-auto ${isMenuShowing ? 'text-indigo-700' : 'text-indigo-600'}`}
          onClick={handleMenuClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav
          className={`gap-x-5 ${
            isMenuShowing ? 'absolute flex' : 'hidden'
          } bg-white flex-col w-full pb-4 px-6 top-full sm:flex sm:static sm:flex-row sm:items-center sm:w-auto sm:p-0 drop-shadow-2xl sm:drop-shadow-none`}
        >
          {navLinks.map(({ href, text }) => (
            <Link href={href} key={href}>
              <a
                className={`font-medium hover:text-gray-600 ${
                  pathname === href ? 'text-gray-900' : 'text-gray-500'
                } py-2 sm:py-0`}
              >
                {text}
              </a>
            </Link>
          ))}
          <button className="bg-indigo-600 hover:opacity-95 text-white rounded px-4 py-2 mt-2 sm:mt-0">
            <a href="/cv.pdf" download="CV Mateo Ledesma.pdf">
              Descargar CV
            </a>
          </button>
        </nav>
      </header>
      <main className="flex-1 px-6 md:px-20 py-4 flex justify-center items-center text-center">{children}</main>
    </div>
  );
}
