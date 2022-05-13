import Layout from '../components/Layout';
import Project from '../components/Project';
import { getProjects } from '../services/dataService';

export default function Projects({ data }) {
  return (
    <Layout>
      <section className="w-full my-4 bg-zinc-800 p-8 rounded-xl">
        <div className="grid gap-x-10 gap-y-12 auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
