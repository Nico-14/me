import Link from 'next/link';
import ButtonLink from '../components/ButtonLink';
import Layout from '../components/Layout';
import Project from '../components/Project';
import { getAboutData, getProjects } from '../services/dataService';

export default function About({ data }) {
  return (
    <Layout>
      {data && (
        <article className="flex flex-col items-center">
          <section className="bg-zinc-800 rounded-xl p-8 mt-4 max-w-3xl">
            <div className="flex flex-wrap justify-center">
              <div className="w-full text-center">
                <div className="text-center">
                  <img
                    src={data.about.profileImg}
                    className="rounded-full object-cover w-64 mx-auto aspect-square"
                  ></img>
                </div>
                <h1 className="text-4xl sm:text-5xl mt-6 text-white text-center">Mateo Ledesma</h1>
                <h2 className="text-4xl font-bold mt-2 text-emerald-500 text-center">
                  {data.subheading}
                </h2>
              </div>
              <p className="text-xl sm:text-2xl mt-8 text-zinc-300 whitespace-pre-line lg:flex-[4]">
               {data.about.text}
              </p>
            </div>
          </section>

          <section className="mt-24 w-full flex flex-col p-8 bg-zinc-800 rounded-xl mb-4">
            <h2 className="text-3xl sm:text-4xl text-emerald-500 font-bold">Proyectos destacados</h2>
            <div className="mt-6 grid gap-x-10 gap-y-12 auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.projects
                .filter((project) => project.featured)
                .map((project) => (
                  <Project project={project} key={project.name} />
                ))}
            </div>
            <Link href="/projects" passHref>
              <ButtonLink className="mt-6 self-start py-3 w-full text-center md:w-auto">Ver más proyectos</ButtonLink>
            </Link>
          </section>
        </article>
      )}
    </Layout>
  );
}

function calculateAge(date) {
  const dif = Date.now() - date;
  const age = new Date(dif);
  return Math.abs(age.getUTCFullYear() - 1970);
}

export async function getStaticProps() {
  const [about, projects] = await Promise.all([getAboutData(), getProjects()]);

  about.text = about.text.replace('%YEARS%', calculateAge(new Date(2000, 8, 14)));
  return { props: { data: { about, projects: projects.projects } }, revalidate: 60 };
}
