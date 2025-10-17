import ResearchArticleClient from "@/components/ResearchArticleClient";
import { getResearchArticle } from "@/lib/researchContent";
import { notFound } from "next/navigation";

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResearchArticle(slug);

  if (!article) {
    notFound();
  }

  return <ResearchArticleClient article={article} />;
}
