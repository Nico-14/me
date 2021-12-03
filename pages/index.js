import Layout from '../components/Layout';
import data from '../data.json';
import Image from 'next/image';
import foto from '../public/foto.jpg';

function calculateAge(date) {
  var dif = Date.now() - date;
  var age = new Date(dif);
  return Math.abs(age.getUTCFullYear() - 1970);
}

export default function About() {
  return (
    <Layout>
      <article className="py-20">
        <section>
          <h2 className="text-4xl sm:text-5xl text-white font-medium">Un poco de mí...</h2>
          <div className="flex flex-wrap mt-14">
            <div className="w-full text-center lg:w-auto lg:text-left">
              <div className="text-center">
                <Image src={foto} className="rounded-full " objectFit="cover" width="248" height="248"></Image>
              </div>
              <h1 className="text-4xl sm:text-5xl mt-6 font-medium text-white">Mateo Ledesma</h1>
              <h2 className="text-xl sm:text-2xl mt-1 text-gray-400">Desarrollador Full Stack JavaScript</h2>
            </div>
            <div className="w-full lg:w-auto text-xl flex-1 sm:text-2xl mt-10 lg:my-auto lg:ml-14 text-left space-y-3 text-gray-300">
              <p>Hola 👋🏻, mi nombre es Mateo Ledesma, tengo {calculateAge(new Date(2000, 8, 14))} años y soy programador 🧑🏻‍💻.</p>
              <p>
                Siempre me gustó todo lo relacionado con la ciencia y tecnología, y los videojuegos. Gracias a todo
                esto, en especial a un videojuego, en 2015 conocí la programación ❤️, y desde ese momento se convirtió en un
                hobby para mí, superando a los videojuegos.
              </p>
              <p>
                Luego, en 2019, me enfoqué en el desarrollo web, comencé con HTML, JavaScript y CSS, y terminé
                conociendo Node.js y React.js ❤️.
              </p>
              <p>
                Además de lo comentado anteriormente, he probado otros lenguajes y tecnologías, por simple curiosidad y
                porque me gusta aprender.
              </p>
              <p>
                Actualmente estoy estudiando la Tecnicatura Universitaria en Programación y buscando empleo como
                desarrollador full stack JavaScript.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-28">
          <h2 className="text-3xl sm:text-4xl text-white font-medium ">Habilidades</h2>
          <div className="mt-6 gap-y-7 gap-x-20 grid grid-cols-1 lg:grid-cols-2">
            {data.skills.map(({ name, progress }) => (
              <div className="w-full" key={name}>
                <div className="flex justify-between text-xl sm:text-2xl text-gray-300">
                  <span>{name}</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full relative h-4 mt-2 border-2 border-pink-600">
                  <div className={`absolute h-full bg-pink-600`} style={{ width: progress + '%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </Layout>
  );
}
