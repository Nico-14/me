import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';

const navLinks = [
  { href: '/', text: 'Inicio' },
  { href: '/about', text: 'Sobre mí' },
  { href: '/links', text: 'Links' },
  { href: '/contact', text: 'Contacto' },
];

export default function Layout({ children }) {
  const { pathname } = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full justify-center px-4 md:px-14 mt-4">
        <nav className="flex gap-x-5 items-center">
          {navLinks.map(({ href, text }) => (
            <Link href={href} key={href}>
              <a className={`font-medium hover:text-gray-600 ${pathname === href ? 'text-gray-600' : 'text-gray-500'}`}>
                {text}
              </a>
            </Link>
          ))}
          <button className="bg-indigo-600 hover:opacity-95 text-white rounded px-4 py-2">
            <a href="/cv.pdf" download="CV Mateo Ledesma.pdf">
              Descarga CV
            </a>
          </button>
        </nav>
      </header>
      <main className="flex-1 px-6 md:px-20 py-4 flex justify-center items-center text-center">{children}</main>
    </div>
  );
}
