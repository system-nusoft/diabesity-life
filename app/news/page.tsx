import NewsClient from "@/components/NewsClient";
import { getAllNewsArticles } from "@/lib/newsContent";

export default function News() {
  const news = getAllNewsArticles();
  return <NewsClient news={news} />;
}
