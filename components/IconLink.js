export default function IconLink({ children, href, target = '_blank', title }) {
  return (
    <a
      href={href}
      target={target}
      title={title}
      className="bg-indigo-600 hover:opacity-95 text-white p-2 rounded-full cursor-pointer flex h-9 w-9 items-center justify-center hover:scale-105 transition"
    >
      {children}
    </a>
  );
}
