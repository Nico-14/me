import { forwardRef } from 'react'

const ButtonLink = forwardRef(({ href, children, className, target }, ref) => (
  <a
    href={href}
    ref={ref}
    target={target}
    className={`font-bold bg-white rounded opacity-90 hover:opacity-95 active:opacity-100 transition shadow-2xl hover:shadow-white/20 active:hover:shadow-white/40 ${
      className ? className : ''
    }`}
  >
    {children}
  </a>
))

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink
