export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  content: React.ReactNode;
}

export const newsArticles: Record<string, NewsArticle> = {
  "pakistan-diabetes-surge": {
    slug: "pakistan-diabetes-surge",
    title: "What is driving Pakistan's alarming diabetes surge?",
    date: "2025-05-15",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    imageAlt: "Healthcare in Pakistan",
    content: (
      <>
        <p>
          Pakistan is facing an unprecedented health crisis as diabetes rates
          continue to surge across the nation. With over 33 million Pakistanis
          living with diabetes, the country now has one of the highest prevalence
          rates globally.
        </p>
        <p>
          Multiple factors contribute to this alarming trend, including rapid
          urbanization, sedentary lifestyles, dietary changes, and genetic
          predisposition. The shift from traditional diets to processed foods high
          in sugar and unhealthy fats has played a significant role.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Key Contributing Factors</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Urbanization and increasingly sedentary work environments
          </li>
          <li>
            Dietary changes favoring processed and fast foods
          </li>
          <li>Lack of awareness about diabetes prevention</li>
          <li>Limited access to healthcare in rural areas</li>
          <li>Genetic predisposition among South Asian populations</li>
        </ul>
        <p className="mt-6">
          Healthcare experts emphasize the urgent need for comprehensive prevention
          programs, increased public awareness, and better access to diabetes
          screening and management services across Pakistan.
        </p>
      </>
    ),
  },

  "pm-launches-prevention-program": {
    slug: "pm-launches-prevention-program",
    title:
      "PM launches prevention program as over 33 million Pakistanis found to have diabetes",
    date: "2025-06-20",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
    imageAlt: "Prime Minister health initiative",
    content: (
      <>
        <p>
          The Prime Minister of Pakistan has launched a nationwide diabetes
          prevention and management program in response to alarming statistics
          showing that over 33 million Pakistanis are living with diabetes.
        </p>
        <p>
          The comprehensive program includes free diabetes screening in government
          hospitals, subsidized medications for low-income patients, and nationwide
          awareness campaigns about healthy lifestyle choices.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Program Highlights</h2>
        <p>
          The initiative focuses on early detection, prevention through lifestyle
          modifications, and improved access to treatment. Special emphasis is
          being placed on rural areas where healthcare facilities are limited.
        </p>
        <p className="mt-6">
          Public health officials hope this program will help reverse the growing
          diabetes epidemic and improve the overall health outcomes for millions of
          Pakistanis.
        </p>
      </>
    ),
  },

  "pakistan-diabetes-prevalence": {
    slug: "pakistan-diabetes-prevalence",
    title:
      "Pakistan Has the World's Highest Diabetes Prevalence—and Lacks Focus on Prevention",
    date: "2025-07-10",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
    imageAlt: "Diabetes prevention awareness",
    content: (
      <>
        <p>
          Pakistan has emerged as having one of the world's highest diabetes
          prevalence rates, with approximately 26.7% of the adult population
          affected by the condition. Despite these alarming statistics, the
          country continues to struggle with a lack of focused prevention
          strategies.
        </p>
        <p>
          The healthcare system's emphasis remains largely on treatment rather
          than prevention, leaving millions at risk of developing this chronic
          condition. Experts argue that a paradigm shift is urgently needed to
          address this growing crisis.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">The Prevention Gap</h2>
        <p>
          Current healthcare policies allocate minimal resources to preventive
          measures such as public education campaigns, early screening programs,
          and community-based interventions. This reactive approach has proven
          insufficient in curbing the diabetes epidemic.
        </p>
      </>
    ),
  },

  "pakistan-diabetics-undiagnosed": {
    slug: "pakistan-diabetics-undiagnosed",
    title: "Pakistan has 33m diabetics, 27pc still undiagnosed: PM coordinator",
    date: "2025-08-05",
    image:
      "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?q=80&w=2071",
    imageAlt: "Medical consultation",
    content: (
      <>
        <p>
          According to the Prime Minister's coordinator on health, Pakistan is
          home to 33 million diabetics, with a staggering 27% remaining
          undiagnosed. This hidden epidemic poses serious risks to public health
          and places an enormous burden on the healthcare system.
        </p>
        <p>
          The lack of diagnosis means millions of Pakistanis are living with
          diabetes without receiving the necessary treatment and lifestyle
          guidance, putting them at risk of severe complications.
        </p>
        <p className="mt-6">
          Health officials are calling for nationwide screening initiatives to
          identify undiagnosed cases and provide timely interventions.
        </p>
      </>
    ),
  },

  "lifestyle-changes-prediabetes": {
    slug: "lifestyle-changes-prediabetes",
    title: "New study reveals lifestyle changes can reverse prediabetes",
    date: "2025-09-15",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
    imageAlt: "Healthy lifestyle",
    content: (
      <>
        <p>
          A groundbreaking new study has demonstrated that targeted lifestyle
          modifications can effectively reverse prediabetes, offering hope to
          millions at risk of developing type 2 diabetes. The research shows that
          diet, exercise, and weight management can significantly improve blood
          sugar levels.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Key Findings</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Regular physical activity for 150 minutes per week</li>
          <li>7-10% body weight reduction</li>
          <li>Mediterranean-style diet rich in whole foods</li>
          <li>Consistent sleep patterns</li>
        </ul>
        <p className="mt-6">
          Researchers emphasize that early intervention is crucial for preventing
          the progression from prediabetes to full-blown diabetes.
        </p>
      </>
    ),
  },

  "diabetes-medication-breakthrough": {
    slug: "diabetes-medication-breakthrough",
    title: "Breakthrough in diabetes medication shows promising results",
    date: "2025-09-28",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2074",
    imageAlt: "Medical research",
    content: (
      <>
        <p>
          Scientists have announced a major breakthrough in diabetes medication
          development, with a new class of drugs showing exceptional promise in
          clinical trials. The medication works by targeting multiple pathways
          involved in blood sugar regulation.
        </p>
        <p>
          Initial results indicate significant improvements in glycemic control
          with fewer side effects compared to existing treatments. Patients in the
          trial experienced better A1C levels and improved quality of life.
        </p>
        <p className="mt-6">
          While still pending final regulatory approval, this development
          represents a significant advance in diabetes care and management.
        </p>
      </>
    ),
  },

  "pakistani-foods-blood-sugar": {
    slug: "pakistani-foods-blood-sugar",
    title: "Traditional Pakistani foods that help manage blood sugar",
    date: "2025-10-05",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053",
    imageAlt: "Pakistani cuisine",
    content: (
      <>
        <p>
          Traditional Pakistani cuisine offers numerous options that can help
          manage blood sugar levels effectively. Nutritionists are increasingly
          recognizing the value of indigenous foods in diabetes management,
          moving away from the notion that diabetics must abandon their cultural
          diet.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Diabetes-Friendly Pakistani Foods</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Daal (lentils) - High in protein and fiber</li>
          <li>Karela (bitter gourd) - Known for blood sugar lowering properties</li>
          <li>Methi (fenugreek) - Helps improve insulin sensitivity</li>
          <li>Whole wheat roti instead of white flour</li>
          <li>Yogurt-based raita without added sugar</li>
        </ul>
        <p className="mt-6">
          By making simple modifications to traditional recipes, diabetics can
          enjoy their cultural cuisine while maintaining healthy blood sugar
          levels.
        </p>
      </>
    ),
  },

  "support-groups-diabesity": {
    slug: "support-groups-diabesity",
    title: "Support groups helping thousands cope with diabesity",
    date: "2025-10-12",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070",
    imageAlt: "Support group meeting",
    content: (
      <>
        <p>
          Community support groups are proving to be a vital resource for
          thousands of Pakistanis struggling with diabesity. These groups provide
          emotional support, practical advice, and a sense of community for
          individuals navigating the challenges of managing both diabetes and
          obesity.
        </p>
        <p>
          Members share their experiences, exchange healthy recipes, organize
          group exercise activities, and provide encouragement during difficult
          times. The psychological benefits of these support networks have been
          shown to improve health outcomes significantly.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Benefits of Support Groups</h2>
        <p>
          Research indicates that individuals who participate in support groups
          show better adherence to treatment plans, improved mental health, and
          more sustainable lifestyle changes compared to those managing their
          condition in isolation.
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
