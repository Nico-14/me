export default function IconLink({ children, href, target = '_blank', title }) {
  return (
    <a
      href={href}
      target={target}
      title={title}
      className="bg-indigo-500 hover:opacity-95 text-white p-2 rounded-full cursor-pointer flex h-9 w-9 items-center justify-center"
    >
      {children}
    </a>
  );
}
