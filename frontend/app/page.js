import Navbar from '../components/Navbar';
import AgencyPage from '../components/AgencyPage';
import { defaultBlogs, defaultFaqs } from '../data/mockData';

async function getContent(type, fallback) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/${type}`, {
      cache: 'no-store'
    });
    if (!response.ok) return fallback;
    return await response.json();
  } catch {
    return fallback;
  }
}

export default async function HomePage() {
  const [blogs, faqs] = await Promise.all([
    getContent('blogs', defaultBlogs),
    getContent('faqs', defaultFaqs)
  ]);

  return (
    <>
      <Navbar />
      <AgencyPage blogs={blogs} faqs={faqs} />
    </>
  );
}
