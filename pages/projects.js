import Layout from '../components/Layout';
import Project from "../components/Project";
import { getProjects } from '../services/dataService';

export default function Projects({ data }) {
  return (
    <Layout>
      <section className="w-full">
        <h1 className="text-4xl sm:text-5xl text-white font-medium">Proyectos</h1>
        <div className="mt-8 grid gap-x-10 gap-y-12 auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data?.projects?.map((project) => (
            <Project project={project} key={project.name} />
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
