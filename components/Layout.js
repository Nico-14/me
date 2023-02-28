import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import ButtonLink from './ButtonLink'
import IconLink from './IconLink'
import * as Icons from './Icons'

const NavLink = ({ children, href }) => (
  <Link href={href} scroll={href[1] !== '#'}>
    <a className={`font-semibold hover:text-zinc-100 transition-colors py-2 lg:py-0`}>{children}</a>
  </Link>
)

function useShowAnimation() {
  const [isShowing, setIsShowing] = useState()
  const [isAnimating, setIsAnimating] = useState(false)

  const show = () => {
    setIsShowing(true)
  }
  
  const hide = () => {
    setIsAnimating(false)
  }

  useEffect(() => {
    if (isShowing) 
      setIsAnimating(true)
  }, [isShowing])


  useEffect(() => {
    if (!isAnimating) 
      setTimeout(() => {
        setIsShowing(false)
      },150);
  },[isAnimating])

  return { isShowing, isAnimating, show, hide }

}

function useClickOutside(cb) {
  const ref = useRef()
  
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) return
      cb()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => { 
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [cb])

  return ref
}

export default function Layout({ children }) {
  const { isShowing, isAnimating, show, hide } = useShowAnimation()
  const { pathname } = useRouter()

  const handleClickLink = e => {
    if (e.target.tagName === 'A') hide()
  }

  const handleMenuClick = () => {
    if (isShowing) {
      hide()
    } else {
      show()
    }
  }

  const ref = useClickOutside(() => {
    if (isShowing) hide()
  })

  return (
    <div className="flex flex-col min-h-screen bg-[#141414]">
      <header className="flex justify-center sticky lg:static top-0 z-10 print:hidden bg-[#141414] py-2 lg:py-0">
        <nav
          className={`gap-x-10 bg-[#141414] shadow-2xl shadow-white/10 lg:shadow-none px-4 lg:px-0 transition-all ${
            isShowing ? 'flex absolute' : 'hidden'
          } 
          ${ isAnimating ? 'left-0' : '-left-full' }
          py-6 text-zinc-400 w-72 top-0 h-screen flex-col lg:h-auto lg:w-auto lg:static lg:flex lg:flex-row lg:items-center lg:rounded-xl transition`}
          onClick={handleClickLink}
          ref={ref}
        >
          <NavLink href="/">Inicio</NavLink>
          <NavLink href={pathname === '/' ? '/#projects' : '/projects'}>Proyectos</NavLink>
          <NavLink href="/resume">Currículum</NavLink>
          <ButtonLink
            href="https://raw.githubusercontent.com/mateo-14/personal-web-data/main/CV Mateo Ledesma.pdf"
            className="mt-2 lg:mt-0 px-6 py-3 text-[#1B1F24]"
          >
            Descargar CV
          </ButtonLink>
        </nav>

        <button
          className={`lg:hidden ml-auto mr-2 text-white transition flex flex-col gap-y-2 p-1 ${
            isShowing ? 'opacity-100' : 'opacity-75 hover:opacity-80'
          }`}
          onClick={handleMenuClick}
          type="button"
          title="Abrir menú"
        >
          <span className={`transition w-7 h-0.5 bg-white rounded-lg ${isShowing ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`transition w-7 h-0.5 bg-white rounded-lg ${isShowing ? 'opacity-0' : ''}`}></span>
          <span className={`transition w-7 h-0.5 bg-white rounded-lg ${isShowing ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </header>
      <main className="flex-1 flex max-w-5xl mx-auto mt-4 lg:mt-0 print:p-0 print:m-0 px-4 lg:px-0">
        {children}
      </main>
      <footer className="flex justify-center print:hidden mt-10">
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
