import { useEffect, useState, useReducer } from 'react';
import Layout from '../components/Layout';
import TextArea from '../components/TextArea';
import TextInput from '../components/TextInput';
import { sendMail } from '../services/contactService';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function reducer(state, action) {
  switch (action.type) {
    case 'name/change':
      return { ...state, name: action.payload };
    case 'email/change':
      return { ...state, email: action.payload };
    case 'message/change':
      return { ...state, message: action.payload };
    case 'clear':
      return initialState;
    default:
      return state;
  }
}

export default function Contact() {
  const [{ name, email, message }, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const isValid = name.trim() && message.trim() && emailIsValid(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(null);
    sendMail({ email, name, message })
      .then(() => {
        dispatch({ type: 'clear' });
        setIsSuccess(true);
      })
      .catch(() => setIsSuccess(false))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (typeof isSuccess === 'boolean') setIsSuccess(null);
  }, [name, email, message]);

  return (
    <Layout>
      <section className="flex flex-col max-w-3xl w-full">
        <h1 className="text-4xl sm:text-5xl text-white font-medium mb-4">Contacto</h1>
        <p className="text-white mb-3 text-xl">
          Envíame un{' '}
          <a
            className="text-blue-500"
            href="https://wa.me/5493435047916?text=Hola!%20Cómo%20estás?"
            target="_blank"
          >
            WhatsApp a +54 9 343-5047916
          </a>{' '}
          o un mensaje con el siguiente formulario 👇🏻
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
          <TextInput
            placeholder="Nombre"
            value={name}
            disabled={isLoading}
            onChange={(e) => dispatch({ type: 'name/change', payload: e.target.value })}
            maxLength={50}
          />

          <TextInput
            placeholder="Email"
            type="email"
            value={email}
            disabled={isLoading}
            onChange={(e) => dispatch({ type: 'email/change', payload: e.target.value })}
            maxLength={254}
          />
          <TextArea
            placeholder="Mensaje"
            value={message}
            rows={8}
            disabled={isLoading}
            onChange={(e) => dispatch({ type: 'message/change', payload: e.target.value })}
            maxLength={2140}
          />
          <button
            className={`text-white py-2 font-medium bg-blue-500 rounded-sm mt-2 ${
              isLoading ? 'animate-pulse opacity-90' : 'disabled:opacity-75'
            }`}
            disabled={!isValid || isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
          {isSuccess === true && (
            <>
              <p className="text-white text-3xl mt-2">📩 Mensaje enviado!</p>
              <p className="text-white text-2xl">
                Te responderé en las próximas horas al email ingresado 😎
              </p>
            </>
          )}
          {isSuccess === false && (
            <p className="text-white text-3xl mt-2">
              😵 Ha ocurrido un error, vuelve a intentarlo en los próximos minutos!
            </p>
          )}
        </form>
      </section>
    </Layout>
  );
}
