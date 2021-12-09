import { useState } from 'react';
import Layout from '../components/Layout';

export default function contact() {
  const [wspMessage, setWspMessage] = useState('');
  const [mailBody, setMailBody] = useState('');
  const [mailSubject, setMailSubject] = useState('');

  const handleSubmitMail = (e) => {
    e.preventDefault();
    window.open(`mailto:mateo.14.ledesma@gmail.com?subject=${mailSubject}&body=${mailBody}`, '_blank');
  };

  const handleSubmitWsp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/5493435047916?text=${wspMessage}`, '_blank');
  };
  return (
    <Layout>
      <section className="w-full">
        <h1 className="text-4xl sm:text-5xl text-white font-medium">Contacto ✉️</h1>
        <section className="mt-6">
          <h2 className="text-2xl sm:text-3xl text-white font-medium">Contáctame por email</h2>
          <form onSubmit={handleSubmitMail} className="flex flex-col gap-y-5 mt-4">
            <input
              name="subject"
              className="border-pink-600 border-2 text-white bg-black px-3 py-2 outline-none"
              placeholder="Asunto"
              onChange={({ target }) => setMailSubject(target.value)}
            ></input>
            <textarea
              name="body"
              className="border-pink-600 border-2 text-white bg-black px-3 py-2 outline-none resize-none"
              rows={5}
              placeholder="Mensaje"
              onChange={({ target }) => setMailBody(target.value)}
            ></textarea>
            <button className="border-pink-600 border-2 text-white py-2 font-medium hover:bg-pink-600">Enviar</button>
          </form>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl text-white font-medium">
            Mandame un mensaje a WhatsApp (+54 343 5047916)
          </h2>
          <form onSubmit={handleSubmitWsp} className="flex flex-col gap-y-5 mt-4">
            <textarea
              name="body"
              className="border-pink-600 border-2 text-white bg-black px-3 py-2 outline-none resize-none"
              rows={5}
              placeholder="Mensaje"
              onChange={({ target }) => setWspMessage(target.value)}
            ></textarea>
            <button className="border-pink-600 border-2 text-white py-2 font-medium hover:bg-pink-600">Enviar</button>
          </form>
        </section>
      </section>
    </Layout>
  );
}
