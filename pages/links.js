import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import data from '../data.json';

export default function Links() {
  const [origin, setOrigin] = useState();

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <Layout>
      <ul className="w-full max-w-3xl my-auto">
        {data.links.map(({ url, text }) => (
          <li
            key={url}
            className="hover:opacity-95 cursor-pointer my-6 font-medium border-2 border-pink-600 text-white text-md text-center hover:bg-pink-600"
          >
            <a href={url.replace('%HOST%', origin)} target="_blank" className="block py-3">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
