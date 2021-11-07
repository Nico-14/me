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
        <h1 className="text-indigo-600 text-4xl sm:text-5xl">Sobre mí</h1>
        <p className="text-gray-600 text-xl sm:text-2xl mt-6 text-left w-full max-w-5xl mx-auto">
          Tengo {calculateAge(new Date(2000, 8, 14))} años y empecé a programar a los 15 años de forma autodidacta. En
          2019 comencé a aprender a programar con JavaScrit, conocí Node.js y distintos frameworks y librerías frontend.
          Durante esos años también aprendí otros lenguajes de programación como Lua, C#, Java, Go, C++.
          <br />
          Actualmente estoy terminando el primer año de la Tecnicatura Universitaria en Programación y buscando un
          empleo como desarrollador full stack Javascript.
          <br />
          Utilizo React en el frontend y express (o framework similar) en el backend, generalmente usando MongoDB con
          mongoose como database.
          <br />
          También estoy dispuesto a capacitarme y trabajar con otros lenguajes para backend, como Java, C# o Go.
        </p>
        <section className="mt-14">
          <h2 className="text-indigo-600 text-3xl sm:text-4xl">Habilidades</h2>
          <div className="mt-6 flex gap-y-7 flex-wrap max-w-7xl gap-x-16 justify-center">
            {data.skills.map(({ name, progress }) => (
              <div className="w-full lg:w-2/6" key={name}>
                <div className="flex justify-between text-gray-500 text-xl sm:text-2xl">
                  <span>{name}</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full relative bg-indigo-200 h-4 rounded mt-2">
                  <div
                    className={`absolute bg-indigo-600 h-full rounded-tl rounded-bl ${
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
