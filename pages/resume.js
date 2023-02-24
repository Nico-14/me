import { marked } from 'marked'
import Head from 'next/head'
import Layout from '../components/Layout'
import { getMarkdown } from '../services/dataService'

export default function Cv({ content }) {
  return (
    <Layout>
      <Head>
        <title>Mateo Ledesma - Currículum</title>
      </Head>
      <div className="flex flex-col lg:my-12 print:my-0 print:w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-max print:hidden">
          Currículum
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="markdown ml-0 mt-10 print:mt-6 max-w-3xl print:max-w-2xl text-white print:bg-white print:text-black print:py-4 print:mx-auto"
        ></div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const markdown = await getMarkdown('cv')
  return { props: { content: marked(markdown) }, revalidate: 60 }
}
