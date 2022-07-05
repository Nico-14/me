import Link from 'next/link'
import ButtonLink from '../components/ButtonLink'
import Layout from '../components/Layout'
import Project from '../components/Project'
import { getAboutData, getProjects } from '../services/dataService'

export default function About({ data }) {
  return (
    <Layout>
      {data && (
        <div className="flex flex-col items-center my-10 sm:my-20">
          <section className="flex items-center gap-x-10 flex-wrap lg:flex-nowrap">
            <img
              src={data.about.profileImg}
              className="rounded-full object-cover w-64 mx-auto aspect-square mb-6 lg:mb-0"
            ></img>

            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-6xl xl:text-7xl text-white font-bold">
                Mateo Ledesma
              </h1>
              <h2 className="text-2xl sm:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:mt-2 lg:mt-0 mx-auto max-w-max lg:mx-0">
                {data.about.subheading}
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl mt-4 text-gray-300 whitespace-pre-line max-w-3xl text-left">
                {data.about.text}
              </p>
            </div>
          </section>

          <section
            className="w-full flex flex-col pt-16 mt-16 sm:pt-28 sm:mt-28 border-t border-gray-500/30"
            id="projects"
          >
            <h2 className="text-2xl sm:text-5xl xl:text-6xl text-white font-bold text-center">
              Proyectos destacados
            </h2>
            <div className="mt-5 sm:mt-14 grid gap-x-10 gap-y-12 auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.projects
                .filter(project => project.featured)
                .map(project => (
                  <Project project={project} key={project.name} />
                ))}
            </div>
            <Link href="/projects" passHref>
              <ButtonLink className="mt-6 self-start px-5 py-3 w-full text-center md:w-auto">
                Ver más proyectos
              </ButtonLink>
            </Link>
          </section>

          <section
            className="w-full flex flex-col pt-16 mt-16 sm:pt-28 sm:mt-28 border-t border-gray-500/30"
            id="contact"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-max">
              Contáctame
            </h2>
            <p className="text-white mt-2 sm:mt-6 text-lg sm:text-3xl xl:text-4xl max-w-3xl">
              Mandame un WhatsApp a{' '}
              <a
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                href="https://wa.me/5493435047916?text=Hola!%20Cómo%20estás?"
                target="_blank"
              >
                +54 9 343 5047916
              </a>{' '}
              o un mail a{' '}
              <a
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                href="mailto:mateo.14.ledesma@gmail.com"
              >
                mateo.14.ledesma@gmail.com
              </a>
            </p>
          </section>
        </div>
      )}
    </Layout>
  )
}

function calculateAge(date) {
  const dif = Date.now() - date
  const age = new Date(dif)
  return Math.abs(age.getUTCFullYear() - 1970)
}

export async function getStaticProps() {
  const [about, projects] = await Promise.all([getAboutData(), getProjects()])

  about.text = about.text.replace('%YEARS%', calculateAge(new Date(2000, 8, 14)))
  return { props: { data: { about, projects: projects.projects } }, revalidate: 60 }
}
