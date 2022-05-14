import { Github } from './Icons';

const Project = ({ project }) => (
  <a href={project.link} target="_blank">
    <article className="cursor-pointer rounded-lg overflow-hidden bg-zinc-900/40 h-full flex flex-col group">
      <div className="aspect-[16/8] overflow-hidden flex mx-5 my-4">
        <img
          src={project.images[0]}
          className="object-cover w-full group-hover:scale-110 group-active:scale-110 transition rounded"
          alt={`${project.name} demo`}
        ></img>
      </div>

      <div className="px-5 py-4 text-white flex flex-1 flex-col gap-6">
        <div>
          <header>
            <h2 className="text-2xl">{project.name}</h2>
          </header>
          <div>
            <p className="text-zinc-300 leading-5 whitespace-pre-line mt-2">
              {project.description}
            </p>
            <button
              className="bg-zinc-700 flex items-center px-3 py-2 gap-2 rounded-xl text-sm hover:opacity-70 transition-opacity font-bold mt-3"
              onClick={() => window.open(project.repo, '_blank')}
            >
              <Github className="h-5 w-5 fill-white" />
              Repositorio
            </button>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span className="bg-zinc-700 text-zinc-300 text-sm rounded-xl px-2" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  </a>
);

export default Project;
