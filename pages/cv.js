import { marked } from 'marked';
import { getAboutData, getMarkdown } from '../services/dataService';
import Head from 'next/head';

export default function Cv({ content, skills }) {
  return (
    <div className="bg-white flex items-center justify-center py-4">
      <Head>
        <title>CV Mateo Ledesma</title>
      </Head>

      <div dangerouslySetInnerHTML={{ __html: content }} className="markdown max-w-2xl px-2"></div>
    </div>
  );
}

export async function getStaticProps() {
  const [about, markdown] = await Promise.all([getAboutData(), getMarkdown('cv')]);
  return { props: { content: marked(markdown), skills: about.skills }, revalidate: 60 };
}
