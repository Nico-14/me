export default function IconLink({ children, href, target = '_blank', title }) {
  return (
    <a
      href={href}
      target={target}
      title={title}
      className="h-9 w-9 p-2 rounded-xl cursor-pointer flex items-center justify-center hover:scale-105 transition bg-emerald-600 hover:opacity-90 text-white"
    >
      {children}
    </a>
  );
}
