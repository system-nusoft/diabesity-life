import BlogPostClient from "@/components/BlogPostClient";
import { getBlogArticle, getAllBlogArticleSlugs } from "@/lib/blogContent";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const blog = getBlogArticle(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return <BlogPostClient blog={blog} />;
}
