import Layout from '../components/Layout';
import data from '../data.json';

export default function Links() {
  return (
    <Layout>
      <nav className="w-full max-w-3xl">
        <ul>
          {data.links.map(({ url, text }) => (
            <li
              key={url}
              className="rounded bg-indigo-600 hover:opacity-95 cursor-pointer text-white my-6 font-medium dark:text-gray-300 dark:bg-indigo-700"
            >
              <a href={url} target="_blank" className="block py-3">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Layout>
  );
}
