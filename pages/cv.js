import { marked } from 'marked'
import Head from 'next/head'
import Link from 'next/link'
import { getMarkdown } from '../services/dataService'

export default function Cv({ content }) {
  return (
    <div className="bg-white flex items-center justify-center py-4">
      <Head>
        <title>CV Mateo Ledesma</title>
      </Head>

      <div className="grid gap-y-4">
        <div className="print:hidden flex gap-4">
          <Link href="/">
            <a className="bg-blue-500 text-white font-semibold gap-x-2 py-2 px-4 rounded-sm">
              Inicio
            </a>
          </Link>
          <a
            href="https://raw.githubusercontent.com/mateo-14/personal-web-data/main/CV Mateo Ledesma.pdf"
            className="bg-blue-500 text-white font-semibold gap-x-2 py-2 px-4 rounded-sm"
          >
            Descargar
          </a>
        </div>
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
