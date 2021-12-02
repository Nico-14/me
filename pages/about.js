import Layout from '../components/Layout';
import data from '../data.json';

function calculateAge(date) {
  var dif = Date.now() - date;
  var age = new Date(dif);
  return Math.abs(age.getUTCFullYear() - 1970);
}

export default function About() {
  return (
    <Layout>
      <article className="py-10">
        <h1 className="text-indigo-600 text-4xl sm:text-5xl dark:text-indigo-700">Sobre mí</h1>
        <div className="text-gray-600 text-xl sm:text-2xl mt-6 text-left w-full max-w-5xl mx-auto dark:text-gray-300 space-y-3">
          <p>Hola, mi nombre es Mateo Ledesma y tengo {calculateAge(new Date(2000, 8, 14))} años.</p>
          <p>
            Siempre me gustó todo lo relacionado con la ciencia y tecnología, y los videojuegos. Gracias a todo esto, en
            especial a un videojuego, en 2015 conocí la programación y desde ese momento se convirtió en un hobby para
            mí, superando a los videojuegos.
          </p>
          <p>
            Luego, en 2019, me enfoqué en el desarrollo web, comencé con HTML, JavaScript y CSS, y terminé conociendo
            Node.js y React.js ❤️.
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

        <section className="mt-14">
          <h2 className="text-indigo-600 text-3xl sm:text-4xl dark:text-indigo-700">Habilidades</h2>
          <div className="mt-6 flex gap-y-7 flex-wrap max-w-7xl gap-x-16 justify-center">
            {data.skills.map(({ name, progress }) => (
              <div className="w-full lg:w-2/6" key={name}>
                <div className="flex justify-between text-gray-500 text-xl sm:text-2xl dark:text-gray-300">
                  <span>{name}</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full relative bg-indigo-200 h-4 rounded mt-2 dark:bg-gray-400">
                  <div
                    className={`absolute bg-indigo-600 h-full rounded-tl rounded-bl dark:bg-indigo-700 ${
                      progress === 100 ? 'rounded-tr rounded br' : ''
                    }`}
                    style={{ width: progress + '%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </Layout>
  );
}
