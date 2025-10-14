import { getAllBlogArticles } from '@/lib/blogContent';
import BlogsClient from '@/components/BlogsClient';

export default function BlogsPage() {
  const blogs = getAllBlogArticles();
  return <BlogsClient blogs={blogs} />;
}
