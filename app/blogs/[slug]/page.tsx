import BlogPostClient from "@/components/BlogPostClient";
import { getBlogContent } from "@/lib/blogContent";
import { GET_POST_BY_SLUG } from "@/lib/queries";
import { fetchAPI, PostResponse } from "@/lib/wordpress";
import { notFound } from "next/navigation";

export const revalidate = 60;

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  try {
    const data = await fetchAPI<PostResponse>(GET_POST_BY_SLUG, {
      slug: resolvedParams.slug,
    });

    if (!data.post) {
      notFound();
    }

    const content = getBlogContent(resolvedParams.slug);

    return <BlogPostClient post={data.post} content={content} />;
  } catch (error) {
    notFound();
  }
}
