import { useState } from 'react';
import Layout from '../components/Layout';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
export default function contact() {
  const [wspMessage, setWspMessage] = useState('');
  const [mailBody, setMailBody] = useState('');
  const [mailSubject, setMailSubject] = useState('');

  const handleSubmitMail = (e) => {
    e.preventDefault();
    window.open(
      `mailto:mateo.14.ledesma@gmail.com?subject=${mailSubject}&body=${mailBody}`,
      '_blank'
    );
  };

  const handleSubmitWsp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/5493435047916?text=${wspMessage}`, '_blank');
  };

  const handleSubjectChange = ({ currentTarget }) => setMailSubject(currentTarget.value);
  const handleBodyChange = ({ currentTarget }) => setMailBody(currentTarget.value);
  const handleMessageChange = ({ currentTarget }) => setWspMessage(currentTarget.value);

  return (
    <Layout>
      <section className="w-full">
        <h1 className="text-4xl sm:text-5xl text-white font-medium">Contacto ✉️</h1>
        <section className="mt-6">
          <h2 className="text-2xl sm:text-3xl text-white font-medium">Contáctame por email</h2>
          <form onSubmit={handleSubmitMail} className="flex flex-col gap-y-5 mt-4">
            <TextInput placeholder="Asunto" onChange={handleSubjectChange} value={mailSubject} />
            <TextArea
              rows={5}
              placeholder="Mensaje"
              onChange={handleBodyChange}
              value={mailBody}
            ></TextArea>
            <button className="text-white py-2 px-4 font-medium bg-blue-500 rounded-sm mr-auto">
              Enviar
            </button>
          </form>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl text-white font-medium">
            Mandame un mensaje a WhatsApp (+54 343 5047916)
          </h2>
          <form onSubmit={handleSubmitWsp} className="flex flex-col gap-y-5 mt-4">
            <TextArea
              placeholder="Mensaje"
              rows={5}
              onChange={handleMessageChange}
              value={wspMessage}
            ></TextArea>
            <button className="text-white py-2 px-4 font-medium bg-blue-500 rounded-sm mr-auto">
              Enviar
            </button>
          </form>
        </section>
      </section>
    </Layout>
  );
}
