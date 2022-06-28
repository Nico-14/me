import { marked } from 'marked'
import { getAboutData, getMarkdown } from '../services/dataService'
import Head from 'next/head'
import { useRouter } from "next/router"

export default function Cv({ content }) {
  const router = useRouter()
  return (
    <div className="bg-white flex items-center justify-center py-4">
      <Head>
        <title>CV Mateo Ledesma</title>
      </Head>

      <div className="grid gap-y-4">
        <button className="bg-blue-500 text-white font-semibold flex items-center gap-x-2 py-2 px-3 rounded-sm place-self-start print:hidden" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Volver
        </button>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="markdown max-w-2xl px-2"
        ></div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const markdown = await getMarkdown('cv')
  return { props: { content: marked(markdown) }, revalidate: 60 }
}
