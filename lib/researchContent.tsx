import Link from "next/link";

export interface ResearchArticle {
  slug: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  authors: string;
  journal: string;
  content: React.ReactNode;
}

export const researchArticles: Record<string, ResearchArticle> = {
  "five-days-junk-food-brain-rewiring": {
    slug: "five-days-junk-food-brain-rewiring",
    title:
      "Just Five Days of Junk Food Can Rewire Your Brain—And the Effects Don't Disappear Quickly",
    date: "2025-02-27",
    image:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2070",
    imageAlt:
      "Fast food and ultra-processed foods affecting brain insulin sensitivity",
    authors: "German Research Team",
    journal: "Neuroscience Research Study (NY Post)",
    content: (
      <>
        <p className="mt-4">
          Think a quick weekend binge on pizza, fries, and soda won&apos;t do
          lasting harm? New German research says otherwise. Scientists found
          that{" "}
          <b>
            just a few days of eating ultra-processed food was enough to blunt
            the brain&apos;s insulin sensitivity
          </b>
          —a crucial function that helps regulate appetite and metabolism.
        </p>

        <p className="mt-4">
          Not only did brain insulin resistance show up quickly, but it was{" "}
          <b>still detectable a full week later</b>, even after participants
          returned to normal eating. Researchers also noted an increase in liver
          fat and disrupted appetite control.
        </p>

        <p className="mt-4">
          &quot;These findings reveal how rapidly diet can impair brain health
          and metabolism,&quot; the study authors warned.
        </p>

        <p className="mt-4">
          The study suggests that junk food harms the body far sooner than most
          people think—and that even short-term indulgences can leave behind a
          metabolic footprint.
        </p>

        <p className="mt-4">
          <b>Read the study summary here:</b>{" "}
          <Link
            href="https://nypost.com/2025/02/27/health/what-just-five-days-of-eating-upfs-can-do-to-your-brain-study/?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            NY Post coverage of German brain-insulin study
          </Link>
        </p>
      </>
    ),
  },

  "childhood-obesity-dna-prediction-south-asians": {
    slug: "childhood-obesity-dna-prediction-south-asians",
    title:
      "Childhood Obesity Risk Can Be Predicted at Age 5 Using DNA—With Double the Accuracy for South Asians",
    date: "2024-12-18",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2070",
    imageAlt:
      "DNA testing and genetic research for childhood obesity prediction",
    authors: "International Genetic Research Team",
    journal: "Nature Medicine",
    content: (
      <>
        <p className="mt-4">
          Could a DNA test in kindergarten predict who will face obesity as an
          adult? A groundbreaking genetic study in Nature Medicine says yes.
          Researchers developed a polygenic risk score that can forecast obesity
          risk in children as young as five.
        </p>

        <p className="mt-4">
          The findings are especially striking for South Asian populations,
          where the test was found to be twice as accurate compared to other
          groups. That’s important, because South Asians face one of the world’s
          highest risks for diabetes and obesity-related complications.
        </p>

        <p className="mt-4">
          Experts say this tool could guide families and doctors toward early
          interventions—diet, lifestyle, and preventive care—long before obesity
          becomes entrenched.
        </p>

        <p className="mt-4">
          <b>Read details:</b>{" "}
          <Link
            href="https://timesofindia.indiatimes.com/city/hyderabad/intl-genetic-study-predicts-childhood-obesity-risk-using-indian-data/articleshow/122865432.cms?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            Times of India on Nature Medicine genetic study
          </Link>
        </p>
      </>
    ),
  },

  "two-cups-mango-insulin-sensitivity": {
    slug: "two-cups-mango-insulin-sensitivity",
    title:
      "Just Two Cups of Mango a Day Can Improve Insulin Sensitivity—Surprisingly",
    date: "2025-03-15",
    image:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=2070",
    imageAlt: "Mango fruit and diabetes prevention research",
    authors: "Nutrition Research Team",
    journal: "Nutrition & Metabolism Study (NY Post)",
    content: (
      <>
        <p className="mt-4">
          It turns out your dessert might also be medicine. A small but
          promising study found that overweight adults who ate{" "}
          <b>two cups of mango every day for four weeks</b> showed{" "}
          <b>measurable improvements in insulin sensitivity</b>, a key factor in
          preventing type 2 diabetes.
        </p>

        <p className="mt-4">
          What’s more surprising? Participants <b>did not gain weight</b>,
          despite the added natural sugar from the fruit. Researchers believe
          mango’s unique blend of fiber, bioactive compounds, and antioxidants
          helps improve how the body processes glucose.
        </p>

        <p className="mt-4">
          While larger studies are needed, this suggests that{" "}
          <b>
            simple, culturally familiar foods could play a role in managing
            blood sugar naturally.
          </b>
        </p>

        <p className="mt-4">
          <b>Read more:</b>{" "}
          <Link
            href="https://nypost.com/2025/03/15/health/scientists-discover-enjoyable-way-to-lower-diabetes-risk/?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            New York Post’s coverage of the mango study
          </Link>
        </p>
      </>
    ),
  },

  "obesity-before-30-early-death-risk": {
    slug: "obesity-before-30-early-death-risk",
    title:
      "Becoming Obese Before 30 Raises Early Death Risk by 75%—Alarming Lifespan Toll",
    date: "2025-05-12",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070",
    imageAlt: "Young adults and obesity mortality risk research",
    authors: "Swedish Research Team",
    journal: "Swedish Longitudinal Health Study (The Guardian)",
    content: (
      <>
        <p className="mt-4">
          Obesity in young adulthood isn’t just a cosmetic concern—it’s a matter
          of life and death. A sweeping Swedish study following over 620,000
          adults has found that{" "}
          <b>
            gaining obesity before age 30 raises the risk of premature death by
            75%.
          </b>
        </p>

        <p className="mt-4">
          The toll was even worse for women, who faced an{" "}
          <b>84% higher risk of early death</b>, compared to 79% for men. The
          leading causes: cardiovascular disease, type 2 diabetes, and
          obesity-related cancers.
        </p>

        <p className="mt-4">
          “The earlier in life obesity develops, the greater the long-term
          risk,” researchers emphasized.
        </p>

        <p className="mt-4">
          This research serves as a wake-up call for policymakers:{" "}
          <b>
            early-life interventions—healthy school meals, sugar regulation, and
            urban planning for physical activity—may be the most effective way
            to save lives and reduce health costs.
          </b>
        </p>

        <p className="mt-4">
          <Link
            href="https://www.theguardian.com/society/2025/may/12/becoming-obese-under-age-of-30-raises-risk-of-early-death-by-at-least-75?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            Read full report on The Guardian
          </Link>
        </p>
      </>
    ),
  },

  "eating-fast-disrupts-glp1-hormones": {
    slug: "eating-fast-disrupts-glp1-hormones",
    title: "Eating Too Fast Disrupts Your Body's Natural Semaglutide Hormones",
    date: "2025-08-22",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2070",
    imageAlt: "Fast eating habits and GLP-1 hormone disruption research",
    authors: "Metabolic Research Team",
    journal: "Metabolic Syndrome Study (NY Post)",
    content: (
      <>
        <p className="mt-4">
          Wolfing down your dinner may be doing more harm than just causing
          indigestion. New research shows that{" "}
          <b>
            fast eating actually suppresses the body’s own GLP-1 hormones—the
            same ones mimicked by blockbuster drugs like Semaglutide.
          </b>
        </p>

        <p className="mt-4">
          These gut hormones play a crucial role in keeping blood sugar under
          control and curbing appetite. When they’re blunted, blood sugar spikes
          higher and longer, pushing people toward a{" "}
          <b>54% greater risk of developing metabolic syndrome</b>—a dangerous
          cluster of conditions that include obesity, type 2 diabetes, and high
          blood pressure.
        </p>

        <p className="mt-4">
          “The speed of eating is often overlooked, but our study shows it may
          be a powerful and affordable diabetes-prevention tool,” researchers
          noted.
        </p>

        <p className="mt-4">
          The good news? Unlike costly injections, this is a fix that doesn’t
          require prescriptions:{" "}
          <b>
            simply slowing down at the table could help your body’s natural
            hormones work properly.
          </b>
        </p>

        <p className="mt-4">
          <Link
            href="https://nypost.com/2025/08/22/health/common-mistake-can-mess-with-bodys-natural-ozempic-hormones-up-diabetes-risk/?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            Full story on NY Post
          </Link>
        </p>
      </>
    ),
  },

  "three-lifestyle-changes-diabetes-risk": {
    slug: "three-lifestyle-changes-diabetes-risk",
    title: "Three Simple Lifestyle Changes Slash Diabetes Risk by 31%",
    date: "2024-11-08",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070",
    imageAlt:
      "Mediterranean diet and lifestyle intervention for diabetes prevention",
    authors: "European Research Consortium",
    journal: "European Diabetes Prevention Trial (The Scottish Sun)",
    content: (
      <>
        <p className="mt-4">
          Here’s some hopeful news: you don’t need extreme measures to protect
          yourself from type 2 diabetes. A major six-year European trial found
          that{" "}
          <b>
            combining three simple changes—following a calorie-restricted
            Mediterranean diet, exercising regularly, and having structured
            weight-loss support—reduced diabetes risk by nearly one-third in
            at-risk adults.
          </b>
        </p>

        <p className="mt-4">
          The study, involving thousands of participants, offers strong evidence
          that lifestyle medicine can be just as powerful as drugs in preventing
          the progression from prediabetes to full-blown type 2 diabetes.
        </p>

        <p className="mt-4">
          “This is a proof-of-concept that achievable lifestyle changes can have
          a profound impact on public health,” researchers said.
        </p>

        <p className="mt-4">
          At a time when diabetes is exploding worldwide, this finding suggests
          a roadmap for communities:{" "}
          <b>
            small, sustainable changes may be our best defense against the
            diabesity epidemic.
          </b>
        </p>

        <p className="mt-4">
          <Link
            href="https://www.thescottishsun.co.uk/health/15256391/lifestyle-changes-slash-risk-type-2-diabetes/?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            Read more on The Scottish Sun
          </Link>
        </p>
      </>
    ),
  },

  "gut-hormone-fgf19-burns-fat": {
    slug: "gut-hormone-fgf19-burns-fat",
    title:
      "Scientists Find Gut Hormone That Talks to the Brain—and Forces the Body to Burn Fat",
    date: "2025-06-10",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070",
    imageAlt: "Gut hormone FGF19 and brain communication for fat burning",
    authors: "Brazilian Research Team, State University of Campinas",
    journal: "Metabolism Research Study (Medical Xpress)",
    content: (
      <>
        <p className="mt-4">
          Imagine a hormone in your gut acting like a secret messenger,
          whispering directly to your brain to flip the body’s “fat-burn”
          switch. That’s exactly what researchers have uncovered in a
          breakthrough study that could change how we fight obesity and type 2
          diabetes.
        </p>

        <p className="mt-4">
          Scientists at Brazil’s State University of Campinas have shown that
          the hormone <b>FGF19</b>, produced in the intestine, doesn’t just help
          with digestion—it{" "}
          <b>
            travels to the brain’s hypothalamus and tells it to start burning
            fat.
          </b>{" "}
          The result? Increased energy expenditure, improved blood sugar
          control, and weight loss—at least in the obese mice they tested.
        </p>

        <p className="mt-4">
          <Link
            href="https://medicalxpress.com/news/2025-06-intestinal-hormone-fat-weight-loss.html?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            Read the full research summary on MedicalXpress
          </Link>
        </p>

        <p>
          <Link
            href="https://agencia.fapesp.br/research-reveals-how-hormone-accelerates-fat-burning-and-promotes-weight-loss-in-obese-mice/55135?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            Agência FAPESP detailed report
          </Link>
        </p>
      </>
    ),
  },

  "gut-microbes-d-lactate-diabetes": {
    slug: "gut-microbes-d-lactate-diabetes",
    title:
      "Researchers Turn Gut Microbes into Diabetes Fighters—By Targeting D-Lactate",
    date: "2024-09-25",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070",
    imageAlt:
      "Gut microbiome and D-lactate metabolite diabetes treatment research",
    authors: "Canadian Research Team",
    journal: "Microbiome & Diabetes Study (Times of India)",
    content: (
      <>
        <p className="mt-4">
          A Canadian team has discovered that targeting a gut microbial
          metabolite, <b>D-lactate</b>, in obese and diabetic mice significantly
          improved blood sugar regulation. The study suggests that{" "}
          <b>harnessing the microbiome</b> could become a novel treatment for
          diabetes—offering a gut-based alternative to traditional injections.
        </p>

        <p className="mt-4">
          <Link
            href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/scientists-discover-new-way-to-fight-diabetes-how-targeting-gut-microbes-could-transform-treatment/articleshow/123541515.cms?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            Read full coverage on <i>Times of India</i>
          </Link>
        </p>
      </>
    ),
  },

  "cord-blood-predicts-diabetes-risk": {
    slug: "cord-blood-predicts-diabetes-risk",
    title: "Your Baby's Cord Blood Can Predict Diabetes Risk at Birth",
    date: "2024-07-22",
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070",
    imageAlt: "Cord blood epigenetic markers predicting diabetes risk at birth",
    authors: "Epigenetics Research Team",
    journal: "Epigenetics & Diabetes Study (Herald Sun)",
    content: (
      <>
        <p className="mt-4">
          In a groundbreaking discovery, scientists have shown that{" "}
          <b>
            epigenetic markers in a newborn’s cord blood can predict their
            lifetime risk of type 2 diabetes
          </b>
          —with nearly <b>80% greater accuracy</b> than standard methods. This
          could revolutionize early screening, identifying at-risk children from
          the moment they’re born.
        </p>

        <p className="mt-4">
          <Link
            href="https://www.heraldsun.com.au/health/conditions/diabetes/the-test-that-can-predict-your-babys-risk-of-type-2-diabetes/news-story/3fb30d447aec14277da60c9d092bf2be?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            Read the story on <i>Herald Sun</i>
          </Link>
        </p>
      </>
    ),
  },
};

// Helper function to get research article by slug
export function getResearchArticle(slug: string): ResearchArticle | null {
  return researchArticles[slug] || null;
}

// Helper function to get all research article slugs
export function getAllResearchArticleSlugs(): string[] {
  return Object.keys(researchArticles);
}

// Helper function to get all research articles
export function getAllResearchArticles(): ResearchArticle[] {
  return Object.values(researchArticles);
}
