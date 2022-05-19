import { useEffect, useState, useReducer } from 'react';
import { flushSync } from 'react-dom';
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

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(null);
    sendMail({ email, name, message })
      .then(() => {
        flushSync(() => dispatch({ type: 'clear' })); // Clear first. Avoid batching update.
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
      <section className="flex flex-col max-w-3xl w-full self-center bg-zinc-800 px-4 py-6 sm:p-8 rounded-xl">
        <p className="text-white mb-6 text-xl">
          Envíame un{' '}
          <a
            className="text-emerald-500"
            href="https://wa.me/5493435047916?text=Hola!%20Cómo%20estás?"
            target="_blank"
          >
            WhatsApp a +54 9 343-5047916
          </a>{' '}
          o un mail con el siguiente formulario 👇🏻
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
          <TextInput
            placeholder="Nombre"
            value={name}
            disabled={isLoading}
            onChange={e => dispatch({ type: 'name/change', payload: e.target.value })}
            maxLength={50}
          />

          <TextInput
            placeholder="Email"
            type="email"
            value={email}
            disabled={isLoading}
            onChange={e => dispatch({ type: 'email/change', payload: e.target.value })}
            maxLength={254}
          />
          <TextArea
            placeholder="Mensaje"
            value={message}
            rows={8}
            disabled={isLoading}
            onChange={e => dispatch({ type: 'message/change', payload: e.target.value })}
            maxLength={2140}
          />
          <button
            className={`text-white py-2 font-bold bg-emerald-500 rounded-xl mt-2 ${
              isLoading ? 'animate-pulse opacity-90' : 'disabled:opacity-75'
            }`}
            disabled={!isValid || isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
          {isSuccess && (
            <>
              <p className="text-white text-xl lg:text-3xl mt-2">Mail enviado ✅</p>
            </>
          )}
          {isSuccess === false && (
            <p className="text-white text-xl lg:text-3xl mt-2">
              😵 Ha ocurrido un error, vuelve a intentarlo en los próximos minutos!
            </p>
          )}
        </form>
      </section>
    </Layout>
  );
}
