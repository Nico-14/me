import { Github } from '../components/Icons';
import Layout from '../components/Layout';
import { getProjects } from '../services/dataService';

const Card = ({ project }) => (
  <a href={project.link} target="_blank">
    <article
      className="cursor-pointer border-white/20 border rounded-sm overflow-hidden group hover:border-white/25 active:border-white/25 
    transition h-full flex flex-col"
    >
      <div className="aspect-[16/8] overflow-hidden relative">
        <img
          src={project.images[0]}
          className="object-cover w-full group-hover:scale-110 group-active:scale-110 transition"
          alt={`${project.name} demo`}
        ></img>
      </div>

      <div className="px-3 py-3 text-white flex flex-1 flex-col gap-6">
        <div>
          <header>
            <h2 className="text-2xl">{project.name}</h2>
          </header>
          <div>
            <p className="text-gray-400 leading-5 whitespace-pre-line mt-2">
              {project.description}
            </p>
            <button
              className="bg-white/20 flex items-center p-2 gap-2 rounded text-sm opacity-80 hover:opacity-100 transition font-medium mt-3"
              onClick={() => window.open(project.repo, '_blank')}
            >
              <Github className="h-5 w-5 fill-white" />
              Repositorio
            </button>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span className="bg-white/20 text-gray-400 text-sm rounded px-2" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  </a>
);

export default function Projects({ data }) {
  return (
    <Layout>
      <section className="w-full">
        <h1 className="text-4xl sm:text-5xl text-white font-medium">Proyectos</h1>
        <div className="mt-8 grid gap-x-10 gap-y-12 auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data?.projects?.map((project) => (
            <Card project={project} key={project.name} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getProjects();
  return { props: { data }, revalidate: 60 };
}
