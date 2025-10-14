import { getAllBlogArticles } from '@/lib/blogContent';
import { getAllNewsArticles } from '@/lib/newsContent';
import HomeClient from '@/components/HomeClient';

export default function Home() {
  const blogs = getAllBlogArticles();
  const news = getAllNewsArticles();
  return <HomeClient blogs={blogs} news={news} />;
}