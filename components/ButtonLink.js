import { forwardRef } from 'react'

const ButtonLink = forwardRef(({ href, children, className, target }, ref) => (
  <a
    href={href}
    ref={ref}
    target={target}
    className={`font-bold bg-white rounded opacity-90 hover:opacity-100 transition shadow-2xl hover:shadow-white/20 ${
      className ? className : ''
    }`}
  >
    {children}
  </a>
))

export default ButtonLink
