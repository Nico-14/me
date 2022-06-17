import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import Project from '../components/Project';
import useOnClickOutside from '../hooks/useClickOutside';
import { getProjects } from '../services/dataService';

function Search({ options, onChange, selectedOptions }) {
  const [value, setValue] = useState('');

  const [isSelectShowing, setIsSelectShowing] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const divRef = useRef();
  const inputRef = useRef();

  useOnClickOutside(divRef, () => setIsSelectShowing(false));

  useEffect(() => {
    setFilteredOptions(
      options.filter(
        option =>
          option.toLowerCase().indexOf(value.toLowerCase()) !== -1 &&
          !selectedOptions.includes(option)
      )
    );
  }, [value, options, selectedOptions]);

  return (
    <div
      className="text-white bg-zinc-900 px-3 py-2 rounded-xl cursor-text mb-4 flex gap-1 items-center flex-wrap"
      onClick={() => inputRef.current.focus()}
      ref={divRef}
    >
      {selectedOptions.map(option => (
        <span
          className="bg-zinc-700 text-zinc-300 text-sm rounded-xl px-2 flex items-center"
          key={option}
        >
          {option}
          <button
            title="Eliminar"
            onClick={() => {
              onChange(selectedOptions.filter(selectedOption => selectedOption !== option));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      ))}
      <div className="relative">
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={!selectedOptions.length ? 'Filtrar por tecnología' : ''}
          ref={inputRef}
          onFocus={() => setIsSelectShowing(true)}
          className="bg-transparent outline-none w-full"
        ></input>
        {isSelectShowing && !!value.length && !!filteredOptions.length && (
          <ul className="absolute bg-zinc-900 rounded-xl w-full mt-4 z-10 py-1 cursor-default">
            {filteredOptions.map(option => (
              <li key={option}>
                <button
                  className="w-full text-left px-3 py-1 hover:opacity-75 transition-opacity"
                  onClick={() => {
                    onChange([...selectedOptions, option]);
                    setValue('');
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Projects({ data }) {
  const technologies = [...new Set(data.projects.map(project => project.tags).flat())];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = selectedOptions => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <Layout>
      <section className="w-full my-4 bg-zinc-800 px-4 py-6 sm:p-8 rounded-xl">
        <Search options={technologies} onChange={handleChange} selectedOptions={selectedOptions} />
        <div className="grid gap-x-10 gap-y-12 auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data.projects
            .filter(
              project =>
                !selectedOptions.length || project.tags.some(tag => selectedOptions.includes(tag))
            )
            .map(project => (
              <Project project={project} key={project.name} />
            ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getProjects();
  return { props: { data }, revalidate: 60 };
}
