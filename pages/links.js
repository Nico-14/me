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
      <nav className="w-full max-w-3xl">
        <ul>
          {data.links.map(({ url, text }) => (
            <li
              key={url}
              className="rounded hover:opacity-95 cursor-pointer my-6 font-medium border-2 border-pink-600 text-pink-500 text-md text-center hover:bg-pink-600 hover:text-black"
            >
              <a href={url.replace('%HOST%', origin)} target="_blank" className="block py-3">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Layout>
  );
}
