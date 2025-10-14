import NewsClient from "@/components/NewsClient";

const newsArticles = [
  {
    category: "Education",
    title: "What is driving Pakistan's alarming diabetes surge?",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    color: "bg-orange-500",
    slug: "pakistan-diabetes-surge",
  },
  {
    category: "Health",
    title:
      "PM launches prevention program as over 33 million Pakistanis found to have diabetes",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
    color: "bg-yellow-500",
    slug: "pm-launches-prevention-program",
  },
  {
    category: "Diet",
    title:
      "Pakistan Has the World's Highest Diabetes Prevalence—and Lacks Focus on Prevention",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
    color: "bg-green-500",
    slug: "pakistan-diabetes-prevalence",
  },
  {
    category: "Recipes",
    title: "Pakistan has 33m diabetics, 27pc still undiagnosed: PM coordinator",
    image:
      "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?q=80&w=2071",
    color: "bg-blue-500",
    slug: "pakistan-diabetics-undiagnosed",
  },
  {
    category: "Education",
    title: "New study reveals lifestyle changes can reverse prediabetes",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
    color: "bg-orange-500",
    slug: "lifestyle-changes-prediabetes",
  },
  {
    category: "Health",
    title: "Breakthrough in diabetes medication shows promising results",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2074",
    color: "bg-yellow-500",
    slug: "diabetes-medication-breakthrough",
  },
  {
    category: "Diet",
    title: "Traditional Pakistani foods that help manage blood sugar",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053",
    color: "bg-green-500",
    slug: "pakistani-foods-blood-sugar",
  },
  {
    category: "Recipes",
    title: "Support groups helping thousands cope with diabesity",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070",
    color: "bg-blue-500",
    slug: "support-groups-diabesity",
  },
];

export default async function News() {
  return <NewsClient news={newsArticles} />;
}
