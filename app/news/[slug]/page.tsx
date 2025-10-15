import NewsArticleClient from "@/components/NewsArticleClient";
import { getNewsArticle } from "@/lib/newsContent";
import { notFound } from "next/navigation";

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return <NewsArticleClient article={article} />;
}
