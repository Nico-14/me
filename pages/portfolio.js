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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-white"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
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

export default function Portfolio({ data }) {
  return (
    <Layout>
      <section className="w-full">
        <h1 className="text-4xl sm:text-5xl text-white font-medium">Portfolio</h1>
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
