import Layout from '../components/Layout';
import { getAboutData } from '../services/dataService';
import SkillsCarousel from "../components/SkillsCarousel";

export default function About({ data }) {
  return (
    <Layout>
      {data && (
        <article className="w-full">
          <section>
            <h2 className="text-4xl sm:text-5xl text-white font-medium">{data.heading}</h2>
            <div className="flex flex-wrap mt-14">
              <div className="w-full text-center lg:w-auto lg:text-left lg:flex-[2]">
                <div className="text-center">
                  <img
                    src={data.profileImg}
                    className="rounded-full object-cover w-64 mx-auto aspect-square"
                  ></img>
                </div>
                <h1 className="text-4xl sm:text-5xl mt-6 font-medium text-white text-center">
                  Mateo Ledesma
                </h1>
                <h2 className="text-xl sm:text-2xl mt-1 text-gray-400 text-center">
                  {data.subheading}
                </h2>
              </div>
              <p className="w-full lg:w-auto text-xl sm:text-2xl mt-10 lg:my-auto lg:ml-14 space-y-3 text-gray-300 whitespace-pre-line lg:flex-[4]">
                {data.text}
              </p>
            </div>
          </section>

          <section className="mt-20 w-full">
            <h2 className="text-3xl sm:text-4xl text-white font-medium">Mis habilidades</h2>
            <SkillsCarousel skills={data.skills} assetsUrl={data.assetsURL} />
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
  const data = await getAboutData();
  data.text = data.text.replace('%YEARS%', calculateAge(new Date(2000, 8, 14)));

  return { props: { data }, revalidate: 60 };
}
