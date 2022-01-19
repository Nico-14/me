import Layout from '../components/Layout';
import { getAboutData } from '../services/dataService';

export default function About({ data }) {
  return (
    <Layout>
      {data && (
        <article>
          <section>
            <h2 className="text-4xl sm:text-5xl text-white font-medium">{data.heading}</h2>
            <div className="flex flex-wrap mt-14">
              <div className="w-full text-center lg:w-auto lg:text-left">
                <div className="text-center">
                  <img
                    src={data.profileImg}
                    className="rounded-full object-cover w-64 mx-auto"
                  ></img>
                </div>
                <h1 className="text-4xl sm:text-5xl mt-6 font-medium text-white">Mateo Ledesma</h1>
                <h2 className="text-xl sm:text-2xl mt-1 text-gray-400">{data.subheading}</h2>
              </div>
              <p className="w-full lg:w-auto text-xl flex-1 sm:text-2xl mt-10 lg:my-auto lg:ml-14 space-y-3 text-gray-300 whitespace-pre-line">
                {data.text}
              </p>
            </div>
          </section>

          <section className="mt-20">
            <h2 className="text-3xl sm:text-4xl text-white font-medium ">Habilidades</h2>
            <div className="mt-6 gap-y-7 gap-x-20 grid grid-cols-1 lg:grid-cols-2">
              {data.skills.map(({ name, progress }) => (
                <div className="w-full" key={name}>
                  <div className="text-xl sm:text-2xl text-gray-300">
                    {name}
                  </div>
                  <div className="w-full relative h-4 mt-2 border-2 border-pink-600 rounded-sm">
                    <div
                      className={`absolute h-full bg-pink-600`}
                      style={{ width: progress + '%' }}
                    ></div>
                  </div>
                </div>
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
  const data = await getAboutData();

  data.text = data.text.replace('%YEARS%', calculateAge(new Date(2000, 8, 14)));

  return { props: { data }, revalidate: 60 };
}
