import { forwardRef } from 'react/cjs/react.production.min';

const ButtonLink = forwardRef(({ href, children, className }, ref) => (
  <a
    href={href}
    ref={ref}
    className={`font-medium px-4 py-2 text-white border-2 rounded-sm border-white hover:bg-white hover:text-black ${
      className ? className : ''
    }`}
  >
    {children}
  </a>
));

export default ButtonLink;
