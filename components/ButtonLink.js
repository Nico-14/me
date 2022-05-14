import { forwardRef } from 'react';

const ButtonLink = forwardRef(({ href, children, className,target }, ref) => (
  <a
    href={href}
    ref={ref}
    target={target}
    className={`font-bold text-sm px-5 py-2 text-white rounded-xl bg-emerald-600 hover:opacity-90 transition-opacity  ${
      className ? className : ''
    }`}
  >
    {children}
  </a>
));

export default ButtonLink;
