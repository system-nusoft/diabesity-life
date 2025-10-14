import { fetchAPI } from '@/lib/wordpress';
import { GET_HOMEPAGE_DATA } from '@/lib/queries';
import { PostsResponse } from '@/lib/wordpress';
import BlogsClient from '@/components/BlogsClient';

export const revalidate = 60;

export default async function BlogsPage() {
  const data = await fetchAPI<PostsResponse>(GET_HOMEPAGE_DATA);
  const posts = data.posts.nodes;

  return <BlogsClient posts={posts} />;
}
