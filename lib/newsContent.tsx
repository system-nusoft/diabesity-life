import { Quote } from "@/components/BlogTemplate";
import Link from "next/link";
import Article1 from "../public/news-article-1.jpg";
import Article2 from "../public/news-article-2.webp";
import Article3 from "../public/news-article-3.jpg";
import Article4 from "../public/news-article-4.webp";
import Article5 from "../public/news-article-5.png";
import Article6 from "../public/news-article-6.jpg";
import Article7 from "../public/news-article-7.webp";
import Article8 from "../public/news-article-8.webp";
import Article9 from "../public/news-article-9.jpg";

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  category: string;
  color: string;
  excerpt: string;
  content: React.ReactNode;
}

export const newsArticles: Record<string, NewsArticle> = {
  "pakistan-diabetes-surge": {
    slug: "pakistan-diabetes-surge",
    title: "DW: What is driving Pakistan's alarming diabetes surge?",
    date: "2025-05-15",
    image: Article1.src,
    imageAlt: "Healthcare in Pakistan",
    category: "Education",
    color: "bg-orange-500",
    excerpt:
      "Pakistan is in the midst of a growing diabetes crisis, a recent report has revealed. Over 33 million adults in the South Asian nation are living with diabetes and the numbers continue to rise.",
    content: (
      <>
        <p>
          <strong>
            Pakistan is in the midst of a growing diabetes crisis, a recent
            report has revealed. Over 33 million adults in the South Asian
            nation are living with diabetes and the numbers continue to rise.
          </strong>
        </p>
        <p className="mt-4">
          Health experts in Pakistan have expressed grave concerns over surging
          cases of diabetes in the South Asian nation, warning that the
          situation could spiral out of control if the government fails to take
          immediate action.
        </p>
        <p className="mt-4">
          A recent report from the International Diabetic Federation (IDF)
          ranking the world’s top countries for number of adults (20–79 years)
          with diabetes in 2021 has put Pakistan in third place with a total of
          33 million, after China and India.
        </p>
        <p className="mt-4">
          For more details, click{" "}
          <Link
            href="https://www.dw.com/en/what-is-driving-pakistans-alarming-diabetes-surge/a-60318409"
            target="_blank"
            className="text-primary underline"
          >
            here
          </Link>
          .
        </p>
      </>
    ),
  },

  "pm-launches-prevention-program": {
    slug: "pm-launches-prevention-program",
    title:
      "ARAB NEWS: PM launches prevention program as over 33 million Pakistanis found to have diabetes",
    date: "2025-06-20",
    image: Article2.src,
    imageAlt: "Prime Minister health initiative",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "ISLAMABAD: Pakistani Prime Minister Shehbaz Sharif said on Thursday, National Diabetes Day, his government was launching a new program for the control and prevention of diabetes in a country where over 33 million people had the chronic disease.",
    content: (
      <>
        <p>
          ISLAMABAD: Pakistani Prime Minister Shehbaz Sharif said on Thursday,
          National Diabetes Day, his government was launching a new program for
          the control and prevention of diabetes in a country where over 33
          million people had the chronic disease.
        </p>
        <p className="mt-4">
          According to a new analysis in The Lancet journal released this week,
          the percentage of adults suffering from diabetes across the world has
          doubled over the past three decades, with the biggest rises coming in
          developing countries.
        </p>
        <p className="mt-4">
          For more details, click{" "}
          <Link
            href="https://www.arabnews.com/node/2579243/pakistan"
            target="_blank"
            className="text-primary underline"
          >
            here
          </Link>
          .
        </p>
      </>
    ),
  },

  "pakistan-diabetes-prevalence": {
    slug: "pakistan-diabetes-prevalence",
    title:
      "HEALTH POLICY WATCH: Pakistan Has the World's Highest Diabetes Prevalence—and Lacks Focus on Prevention",
    date: "2025-07-10",
    image: Article3.src,
    imageAlt: "Diabetes prevention awareness",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "ISLAMABAD – Muhammad Waqas is an engineer at a private telecom company. He still remembers the day six years ago in 2018 when he was diagnosed with diabetes at the age of 30. It completely changed his life.",
    content: (
      <>
        <p>
          ISLAMABAD – Muhammad Waqas is an engineer at a private telecom
          company. He still remembers the day six years ago in 2018 when he was
          diagnosed with diabetes at the age of 30. It completely changed his
          life.
        </p>
        <p className="mt-4">
          The diagnosis was particularly shocking for Waqas as neither of his
          parents had the disease, and he had always been physically fit and
          participated in all kinds of sports since his school days.
        </p>
        <p className="mt-4">
          For more details, click{" "}
          <Link
            href="https://healthpolicy-watch.news/pakistan-has-the-worlds-highest-diabetes-prevalence-and-lacks-focus-on-prevention/#:~:text=World's%20highest%20prevalence%20of%20diabetes&text=Pakistan%20has%20the%20world's%20highest%20adult%20prevalence%20rate.,fourth%20highest%20in%20global%20rankings."
            target="_blank"
            className="text-primary underline"
          >
            here
          </Link>
          .
        </p>
      </>
    ),
  },

  "pakistan-diabetics-undiagnosed": {
    slug: "pakistan-diabetics-undiagnosed",
    title:
      "DAWN: Pakistan has 33m diabetics, 27pc still undiagnosed: PM coordinator",
    date: "2025-08-05",
    image: Article4.src,
    imageAlt: "Medical consultation",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "ISLAMABAD: While World Diabetes Day observed on Thursday, Coordinator to the Prime Minister on Health Dr Malik Mukhtar Ahmed Bharath said that diabetes was a major public health concern in Pakistan, requiring a united approach from all sectors to tackle it.",
    content: (
      <>
        <p>
          <strong>
            ISLAMABAD: While World Diabetes Day observed on Thursday,
            Coordinator to the Prime Minister on Health Dr Malik Mukhtar Ahmed
            Bharath said that diabetes was a major public health concern in
            Pakistan, requiring a united approach from all sectors to tackle it.
          </strong>
        </p>
        <Quote
          author="he said after
          inaugurating a Non-Communicable Diseases (NCDs) Centre in Barri Imam."
        >
          Approximately 33 million individuals in Pakistan live with diabetes,
          with an alarmingly 27pc more, still undiagnosed.
        </Quote>
        <p className="mt-4">
          For more details, click{" "}
          <Link
            href="https://www.dawn.com/news/1872408/pakistan-has-33m-diabetics-27pc-still-undiagnosed-pm-coordinator"
            target="_blank"
            className="text-primary underline"
          >
            here
          </Link>
          .
        </p>
      </>
    ),
  },

  "pakistan-confronts-alarming-diabetes-burden": {
    slug: "pakistan-confronts-alarming-diabetes-burden",
    title:
      "WORLD DIABETES FOUNDATION: Pakistan confronts alarming diabetes burden",
    date: "2025-09-15",
    image: Article5.src,
    imageAlt: "Healthy lifestyle",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "An estimated 6.7 million people live with diabetes in Pakistan. By 2035, this number is estimated to rise to 12.8 million which places Pakistan among the top ten countries of number of people living with diabetes.",
    content: (
      <>
        <p>
          An estimated 6.7 million people live with diabetes in Pakistan. By
          2035, this number is estimated to rise to 12.8 million which places
          Pakistan among the top ten countries of number of people living with
          diabetes.
        </p>
        <p className="mt-4">
          This was stated at the opening session of the Pakistan Diabetes
          Leadership Forum (PDLF), which took place in Islamabad from 1-2 March
          and included international and national speakers, key opinion leaders
          and policy makers from Europe, Middle-East and Pakistan. The inaugural
          session was addressed by Her Excellency, Ms. Saira Afzal Tarar,
          Minister of State for National Health Services, Regulation and
          Coordination, who highlighted the urgency and the scale of the
          challenge presented by diabetes in Pakistan.
        </p>
        <p className="mt-4">
          For more details, click{" "}
          <Link
            href="https://www.worlddiabetesfoundation.org/news/pakistan-confronts-alarming-diabetes-burden/"
            target="_blank"
            className="text-primary underline"
          >
            here
          </Link>
          .
        </p>
      </>
    ),
  },

  "children-living-with-diabetes": {
    slug: "children-living-with-diabetes",
    title:
      "DAWN: Children among 24,000 living with Type 1 diabetes in Pakistan",
    date: "2025-09-28",
    image: Article6.src,
    imageAlt: "Medical research",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "KARACHI: Highlighting the need to raise public awareness about diabetes, a public health specialist at a programme held on Tuesday at the Karachi Press Club (KPC) shared that the latest international data shows that 24,000 Pakistanis — the majority of them children — are living with Type 1 diabetes.",
    content: (
      <>
        <p>
          <strong>
            KARACHI: Highlighting the need to raise public awareness about
            diabetes, a public health specialist at a programme held on Tuesday
            at the Karachi Press Club (KPC) shared that the latest international
            data shows that 24,000 Pakistanis — the majority of them children —
            currently live with Type 1 diabetes, an incurable autoimmune
            disease.
          </strong>
        </p>
        <p className="mt-4">
          Senior consultant diabetes educator Erum Ghaffor has recently been
          elected vice president of the International Diabetes Federation (IDF).
          She is the first Pakistani woman to hold this prestigious position,
          having secured 112 votes from over 270 associations worldwide.
        </p>
        <p className="mt-4">
          For more details, click{" "}
          <Link
            href="https://www.dawn.com/news/1908855/children-among-24000-living-with-type-1-diabetes-in-pakistan"
            target="_blank"
            className="text-primary underline"
          >
            here
          </Link>
          .
        </p>
      </>
    ),
  },
  "increased-diabetic-population-in-pakistan": {
    slug: "increased-diabetic-population-in-pakistan",
    title:
      "VITALSNEWS: Pakistan now has 34.5 million, not 33m people living with diabetes, WHO warns",
    date: "2025-11-17",
    image: Article7.src,
    imageAlt: "Medical research",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "Islamabad: Pakistan now has 34.5 million people living with diabetes, a sharp increase from the International Diabetes Federation’s earlier estimate of 33 million, new WHO figures released on World Diabetes Day 2025 show. Health officials say this confirms that Pakistan continues to carry the highest proportional diabetes burden in the world, with one in three adults already affected.",
    content: (
      <>
        <p>
          Islamabad: Pakistan now has 34.5 million people living with diabetes,
          a sharp increase from the International Diabetes Federation’s earlier
          estimate of 33 million, new WHO figures released on World Diabetes Day
          2025 show. Health officials say this confirms that Pakistan continues
          to carry the highest proportional diabetes burden in the world, with
          one in three adults already affected.
        </p>
        <p className="mt-4">
          WHO and the Ministry of Health warned on Friday that the country now
          accounts for more than 40 percent of all diabetes cases in the Eastern
          Mediterranean Region. They urged people to seek screening and adopt
          preventive lifestyles as the disease continues to rise across all age
          groups.
        </p>
        <p className="mt-4">
          For more details, click{" "}
          <Link
            href="https://vitalsnews.com/top-story/pakistan-sounds-the-alarm-on-explosive-diabetes-crisis-as-who-issues-stark-warning/"
            target="_blank"
            className="text-primary underline"
          >
            here
          </Link>
          .
        </p>
      </>
    ),
  },
  "real-world-effectiveness-of-semaglutide": {
    slug: "real-world-effectiveness-of-semaglutide",
    title:
      "DIABETES RESEARCH AND CLINICAL PRACTICE: Real-world effectiveness of once-weekly Semaglutide in type 2 diabetes: insights from Pak. diabetes effectiveness study",
    date: "2025-11-17",
    image: Article8.src,
    imageAlt: "Medical research",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "Background: Pakistan ranks 3rd globally in the number of people with diabetes and has the highest prevalence rate in the world. Notably, Obesity not only is a major contributing factor in type 2 diabetes but also for Prediabetes.",
    content: (
      <>
        <p>
          <strong>Background:</strong> Pakistan ranks 3rd globally in the number
          of people with diabetes and has the highest prevalence rate in the
          world. Notably, Obesity not only is a major contributing factor in
          type 2 diabetes but also for Prediabetes.
        </p>
        <p className="mt-4">
          <strong>Aim:</strong> The Pakistan Diabetes Effectiveness Study, a
          multicenter, prospective, open-label, observational study, evaluated
          the real-world effectiveness of once-weekly Semaglutide in patients
          with type 2 diabetes (T2D) in Pakistan.
        </p>
        <p className="mt-4">
          <strong>Method:</strong> This study involved adult patients with T2D
          who had at least one glycated hemoglobin (HbA1c) measurement within
          12 weeks prior to initiating Semaglutide.
        </p>
        <p className="mt-4">
          For more details, click{" "}
          <Link
            href="https://www.diabetesresearchclinicalpractice.com/article/S0168-8227(25)00867-8/fulltext"
            target="_blank"
            className="text-primary underline"
          >
            here
          </Link>
          .
        </p>
      </>
    ),
  },
  "impact-of-community-based-support": {
    slug: "impact-of-community-based-support",
    title:
      "DIABETES RESEARCH AND CLINICAL PRACTICE: Impact of community-based peer support on glycemic control & quality of life in Type 1 diabetes: an observational study",
    date: "2025-11-17",
    image: Article9.src,
    imageAlt: "Medical research",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "Background: Peer support is vital for improving diabetes management by offering emotional, educational, & practical assistance specially in Type 1 Diabetes (T1DM) worldwide.",
    content: (
      <>
        <p>
          <strong>Background:</strong> Peer support is vital for improving
          diabetes management by offering emotional, educational, & practical
          assistance specially in Type 1 Diabetes (T1DM) worldwide.
        </p>
        <p className="mt-4">
          <strong>Aim:</strong> The DiaBuddies project aimed to assess the
          influence of community-based peer support, which included educational
          interventions & motivational talks from celebrities with T1DM, on
          glycemic control & quality of life among individuals with T1DM in
          Islamabad, Pakistan.
        </p>
        <p className="mt-4">
          <strong>Method:</strong> This observational cohort study, conducted
          from January 2022 to January 2024, assessed the impact of
          community-based peer support on glycemic control & quality of life in
          378 individuals with T1DM.
        </p>
        <p className="mt-4">
          For more details, click{" "}
          <Link
            href="https://www.diabetesresearchclinicalpractice.com/article/S0168-8227(25)00866-6/fulltext"
            target="_blank"
            className="text-primary underline"
          >
            here
          </Link>
          .
        </p>
      </>
    ),
  },
};

// Helper function to get news article by slug
export function getNewsArticle(slug: string): NewsArticle | null {
  return newsArticles[slug] || null;
}

// Helper function to get all news article slugs
export function getAllNewsArticleSlugs(): string[] {
  return Object.keys(newsArticles);
}

export function getAllNewsArticles(): NewsArticle[] {
  return Object.values(newsArticles);
}
