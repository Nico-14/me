export default function IconLink({ children, href, target = '_blank', title }) {
  return (
    <a
      href={href}
      target={target}
      title={title}
      className="h-10 w-10 p-2 rounded-full cursor-pointer flex items-center justify-center hover:scale-105 transition bg-white text-black"
    >
      {children}
    </a>
  );
}
