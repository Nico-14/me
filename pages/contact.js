import IconLink from '../components/IconLink';
import Layout from '../components/Layout';

export default function contact() {
  return (
    <Layout>
      <section className="self-start py-20 w-full">
        <h1 className="text-4xl sm:text-5xl text-white font-medium">Contacto ✉️</h1>
        <div className="text-gray-300 mt-10 text-2xl sm:text-4xl font-semibold">
          <p>Envíame un mensaje a <a target="_blank" href="https://wa.me/5493435047916" className="text-blue-600 hover:opacity-95">WhatsApp (+54 343 5047916) haciendo click acá</a></p>
          <p className="mt-2">o un mail a <a target="_blank" href="mailto:mateo.14.ledesma@gmail.com" className="text-blue-600 hover:opacity-95">mateo.14.ledesma@gmail.com</a></p>
        </div>
      </section>
    </Layout>
  );
}
