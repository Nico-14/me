import Head from 'next/head';
import Link from 'next/link';
import ButtonLink from '../components/ButtonLink';
import Layout from '../components/Layout';
import Project from '../components/Project';
import { getProjects } from '../services/dataService';

export default function About({ data }) {
  return (
    <Layout>
      <Head>
        <title>Mateo Ledesma - Web Developer</title>
      </Head>
      {data && (
        <div className="my-2 lg:my-14">
          <section>
            <h1 className="text-6xl text-white font-bold text-center">Mateo Ledesma</h1>
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit text-center mx-auto mt-2">
              Web Developer
            </h2>
            <p className="text-2xl mt-10 text-gray-300 whitespace-pre-line">
              {
                'Hola 👋🏻! Me llamo Mateo, tengo 22 años y me dedico al desarrollo web desde 2019, especialmente del lado del Frontend. Me mantengo aprendiendo programación y desarrollo web de manera autodidacta desde el año 2015.'
              }
            </p>
            <p className="text-2xl text-gray-300 whitespace-pre-line">
              {'Te invito a ver los distintos proyectos que he realizado haciendo '}
              <a href="#projects" className="underline hover:opacity-80 transition-opacity">
                click acá
              </a>.
            </p>
          </section>

          <section
            className="pt-24 mt-24 border-t border-gray-500/30"
            id="projects"
          >
            <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline">Proyectos destacados</h3>
            <div className="mt-14 grid gap-x-10 gap-y-12 auto-rows-min grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {data.projects
                .filter(project => project.featured)
                .map(project => (
                  <Project project={project} key={project.name} />
                ))}
            </div>
            <Link href="/projects" passHref>
              <ButtonLink className="block mt-6 px-5 py-3 w-full text-center md:w-max">
                Ver más proyectos
              </ButtonLink>
            </Link>
          </section>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();

  return { props: { data: { projects: projects.projects } }, revalidate: 60 };
}
