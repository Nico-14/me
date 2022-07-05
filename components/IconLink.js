export default function IconLink({ children, href, target = '_blank', title }) {
  return (
    <a
      href={href}
      target={target}
      title={title}
      className="h-10 w-10 flex rounded-full items-center justify-center hover:scale-125 transition text-white"
    >
      {children}
    </a>
  )
}
