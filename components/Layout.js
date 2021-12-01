import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const navLinks = [
  { href: '/', text: 'Inicio' },
  { href: '/about', text: 'Sobre mí' },
  { href: '/links', text: 'Links' },
];

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const [isMenuShowing, setIsMenuShowing] = useState();
  const { isDarkModeEnabled, toggleDarkMode } = useDarkMode();

  const handleMenuClick = () => {
    setIsMenuShowing(!isMenuShowing);
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkModeEnabled ? 'dark' : ''}`}>
      <Head>
        <title>Mateo Ledesma</title>
      </Head>
      <header className="flex w-full flex-col sm:flex-row px-4 md:px-14 py-2 sm:pt-4 bg-white sticky sm:static top-0 z-10 drop-shadow-2xl sm:drop-shadow-none dark:bg-gray-800">
        <nav
          className={`gap-x-5 ${
            isMenuShowing ? 'flex absolute' : 'hidden'
          } top-full left-0 bg-white flex-col w-full pb-4 px-6 sm:static sm:flex sm:flex-row sm:items-center sm:w-auto sm:p-0 dark:bg-gray-800 mx-auto`}
        >
          {navLinks.map(({ href, text }) => (
            <Link href={href} key={href}>
              <a
                className={`font-medium hover:text-gray-600 dark:hover:text-gray-200 ${
                  pathname === href ? 'text-gray-900 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'
                } py-2 sm:py-0`}
              >
                {text}
              </a>
            </Link>
          ))}
          <a
            href="/cv.pdf"
            download="CV Mateo Ledesma.pdf"
            className="bg-indigo-600 hover:opacity-95 text-white rounded px-4 py-2 mt-2 sm:mt-0 dark:text-gray-300 dark:bg-indigo-700"
          >
            Descargar CV
          </a>
        </nav>
        <div className="flex justify-between items-center">
          <button onClick={toggleDarkMode} className="text-indigo-600 dark:text-gray-200 h-8 w-8">
            {isDarkModeEnabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 m-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 m-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
          <button
            className={`sm:hidden ml-auto ${
              isMenuShowing ? 'text-indigo-700 dark:text-gray-100' : 'text-indigo-600 dark:text-gray-300'
            }`}
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
        </div>
      </header>
      <main className="flex-1 px-6 md:px-20 py-4 flex justify-center items-center text-center dark:bg-gray-800">
        {children}
      </main>
    </div>
  );
}
