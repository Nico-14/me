import Image from "next/image"
import ButtonLink from './ButtonLink'
import { Github } from './Icons'
import LinkIcon from './Icons/LinkIcon'

const Project = ({ project }) => (
  <article className="rounded overflow-hidden border border-gray-500/30 h-full flex flex-col hover:border-gray-500/50 transition group shadow-2xl hover:shadow-white/5">
    <a href={project.link} target="_blank">
      <div className="aspect-[16/8] overflow-hidden flex relative">
        {project.images ? (
          <Image
            src={project.images[0]}
            className="object-cover w-full"
            alt={`${project.name} demo`}
            fill
          ></Image>
        ) : (
          <div className="bg-[#141414] p-2 flex flex-col justify-center border-b border-gray-500/30">
            <span className="text-3xl font-bold text-white">{project.altName || project.name}</span>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 self-start">
              {project.subheading}
            </span>
          </div>
        )}
      </div>
    </a>

    <div className="px-3 mt-2 text-white flex flex-1 flex-col gap-6">
      <div className="mb-1">
        <a href={project.link} target="_blank">
          <header className="flex items-center gap-x-2">
            <h4 className="text-2xl font-semibold flex-1">{project.name}</h4>
            <LinkIcon className="h-6 w-6 opacity-0 group-hover:opacity-100 transition" />
          </header>
          <p className="text-gray-300 leading-5 whitespace-pre-line mt-2">{project.description}</p>
        </a>
      </div>
      <div className="flex flex-wrap gap-3 mt-auto">
        {project.repos?.map((repo, i) => (
          <ButtonLink
            className="text-[#141414] flex items-center gap-2 px-4 py-2"
            href={repo.url}
            target="_blank"
            key={i}
          >
            <Github className="h-5 w-5" />
            {repo.name || 'Repositorio'}
          </ButtonLink>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags?.map(tag => (
          <span className="bg-zinc-800 font-semibold text-white text-sm rounded-md px-2" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
)

export default Project
