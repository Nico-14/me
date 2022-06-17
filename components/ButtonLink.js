import { forwardRef } from 'react';

const ButtonLink = forwardRef(({ href, children, className, target }, ref) => (
  <a
    href={href}
    ref={ref}
    target={target}
    className={`font-bold text-sm text-white rounded-xl 0 hover:opacity-90 transition-opacity  ${
      className ? className : ''
    }`}
  >
    {children}
  </a>
));

export default ButtonLink;
