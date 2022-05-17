import ButtonLink from './ButtonLink';
import { Github } from './Icons';
import LinkIcon from './Icons/LinkIcon';

const Project = ({ project }) => (
  <article className="rounded-lg overflow-hidden bg-zinc-900/40 h-full flex flex-col">
    <a href={project.link} target="_blank">
      <div className="aspect-[16/8] overflow-hidden flex mx-5 my-4 group">
        <img
          src={project.images[0]}
          className="object-cover w-full group-hover:scale-110 group-active:scale-110 transition rounded"
          alt={`${project.name} demo`}
        ></img>
      </div>
    </a>

    <div className="px-5 text-white flex flex-1 flex-col gap-6">
      <div className="mb-2">
        <a href={project.link} target="_blank">
          <header>
            <h2 className="text-2xl">{project.name}</h2>
          </header>
        </a>
        <div>
          <p className="text-zinc-300 leading-5 whitespace-pre-line mt-2">{project.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-auto">
        {project.repos.map((repo, i) => (
          <ButtonLink className="bg-zinc-700 flex gap-2 px-3" href={repo.url} target="_blank" key={i}>
            <Github className="h-5 w-5 fill-white" />
            {repo.name || 'Repositorio'}
          </ButtonLink>
        ))}

        <ButtonLink className="flex gap-2 px-3" href={project.link} target="_blank">
          <LinkIcon className="h-5 w-5 fill-white" />
          Abrir
        </ButtonLink>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags?.map((tag) => (
          <span className="bg-zinc-700 text-zinc-300 text-sm rounded-xl px-2" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
);

export default Project;
