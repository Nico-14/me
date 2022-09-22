import Head from 'next/head'
import { useEffect, useMemo, useRef, useState } from 'react'
import Layout from '../components/Layout'
import Project from '../components/Project'
import useOnClickOutside from '../hooks/useClickOutside'
import { getProjects } from '../services/dataService'

function Search({ options, onChange, selectedOptions }) {
  const [value, setValue] = useState('')

  const [isSelectShowing, setIsSelectShowing] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState([])
  const divRef = useRef()
  const inputRef = useRef()

  useOnClickOutside(divRef, () => setIsSelectShowing(false))

  useEffect(() => {
    setFilteredOptions(
      options.filter(
        option =>
          option.toLowerCase().indexOf(value.toLowerCase()) !== -1 &&
          !selectedOptions.includes(option)
      )
    )
  }, [value, options, selectedOptions])

  return (
    <div
      className={`text-white text-lg px-3 py-2 cursor-text flex gap-2 items-center flex-wrap border-b-2 transition ${
        isSelectShowing ? 'border-white/60' : ' border-gray-500/30'
      }`}
      onClick={() => inputRef.current.focus()}
      ref={divRef}
      title="Filtrar por categoría"
    >
      {selectedOptions.map(option => (
        <span
          className="bg-zinc-800 font-semibold text-white text-sm rounded-md px-3 py-1 flex items-center"
          key={option}
        >
          {option}
          <button
            title="Eliminar"
            onClick={() => {
              onChange(selectedOptions.filter(selectedOption => selectedOption !== option))
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-5 w-5 opacity-75 hover:opacity-100 transition"
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
        {isSelectShowing && !!filteredOptions.length && (
          <div
            className="absolute bg-[#161616] rounded w-full mt-4 z-10 py-1 cursor-default max-h-80 overflow-auto shadow-2xl shadow-purple-500/20"
            role="listbox"
          >
            {filteredOptions.map(option => (
              <button
                className="w-full text-left px-3 py-1 hover:opacity-70 transition"
                onClick={() => {
                  onChange([...selectedOptions, option])
                  setValue('')
                }}
                role="option"
                type="button"
                key={option}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects({ data }) {
  const technologies = useMemo(
    () =>
      [...new Set(data.projects.map(project => project.tags).flat())].sort((a, b) =>
        a.localeCompare(b)
      ),
    [data.projects]
  )
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleChange = selectedOptions => {
    setSelectedOptions(selectedOptions)
  }

  return (
    <Layout>
      <Head>
        <title>Mateo Ledesma - Proyectos</title>
      </Head>
      <section className="my-20">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-max mb-6">
          Proyectos
        </h1>
        <Search options={technologies} onChange={handleChange} selectedOptions={selectedOptions} />
        <div className="grid gap-x-10 gap-y-12 auto-rows-min grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-6">
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
  )
}

export async function getStaticProps() {
  const data = await getProjects()
  return { props: { data }, revalidate: 60 }
}
