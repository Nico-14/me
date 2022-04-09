import Layout from '../components/Layout';
import { getAboutData, getProjects } from '../services/dataService';
import Project from '../components/Project';
import Link from 'next/link';
import Skill from '../components/Skill';

export default function About({ data }) {
  return (
    <Layout>
      {data && (
        <article className="w-full">
          <section>
            <h2 className="text-4xl sm:text-5xl text-white font-medium">{data.about.heading}</h2>
            <div className="flex flex-wrap mt-14">
              <div className="w-full text-center lg:w-auto lg:text-left lg:flex-[2]">
                <div className="text-center">
                  <img
                    src={data.about.profileImg}
                    className="rounded-full object-cover w-64 mx-auto aspect-square"
                  ></img>
                </div>
                <h1 className="text-4xl sm:text-5xl mt-6 font-medium text-white text-center">
                  Mateo Ledesma
                </h1>
                <h2 className="text-xl sm:text-2xl mt-1 text-gray-400 text-center">
                  {data.about.subheading}
                </h2>
              </div>
              <p className="w-full lg:w-auto text-xl sm:text-2xl mt-10 lg:my-auto lg:ml-14 space-y-3 text-gray-300 whitespace-pre-line lg:flex-[4]">
                {data.about.text}
              </p>
            </div>
          </section>

          <section className="mt-20 w-full flex flex-col">
            <h2 className="text-3xl sm:text-4xl text-white font-medium">Proyectos destacados</h2>
            <div className="mt-10 grid gap-x-10 gap-y-12 auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.projects
                .filter((project) => project.featured)
                .map((project) => (
                  <Project project={project} key={project.name} />
                ))}
            </div>
            <Link href="/projects" passHref>
              <a className="text-white py-2 px-4 font-medium bg-blue-500 rounded-sm mt-4 self-start">
                Ver más proyectos
              </a>
            </Link>
          </section>
          <section className="mt-14 w-full">
            <h2 className="text-3xl sm:text-4xl text-white font-medium">Habilidades</h2>
            <div className={`w-full mt-10 gap-16 flex flex-wrap justify-center`}>
              {data.about.skills.map(({ name, icon }) => (
                <Skill name={name} icon={`${data.about.assetsURL}/icons/${icon}`} key={name} />
              ))}
            </div>
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
