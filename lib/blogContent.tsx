import Semaglutide from "../public/how-semaglutide-changes-lives.jpg";
import ObesityChallenge from "../public/getting-rid-of-obesity-the-real-challenge.jpg";
import SilentEpidemic from "../public/diabetes-is-a-silent-epidemic-sweeping-pakistan.jpg"
import { TextImageSection, Heading, Paragraph, List, Quote } from "@/components/BlogTemplate";

export interface BlogArticle {
  slug: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  category: string;
  content: React.ReactNode;
  relatedBlogs?: string[];
}

export const blogArticles: Record<string, BlogArticle> = {
  "how-semaglutide-changes-lives": {
    slug: "how-semaglutide-changes-lives",
    title: "How Semaglutide Changes Lives",
    date: "2025-05-12",
    image:
      Semaglutide.src,
    imageAlt: "Semaglutide medication",
    category: "Medication",
    content: (
      <>
        <Paragraph>
          Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist that
          has revolutionized the treatment of type 2 diabetes and obesity. This
          medication works by mimicking the effects of the natural GLP-1 hormone,
          which helps regulate blood sugar levels and appetite.
        </Paragraph>

        <Heading level={2}>How Semaglutide Works</Heading>
        <Paragraph>
          Semaglutide functions through multiple mechanisms to improve metabolic
          health. It stimulates insulin secretion when blood glucose levels are
          elevated, suppresses glucagon release, slows gastric emptying, and
          reduces appetite by acting on brain centers that regulate hunger.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>The Science Behind It</Heading>
              <Paragraph>
                When you take semaglutide, it activates GLP-1 receptors throughout
                your body, particularly in the pancreas and brain. This activation
                triggers a cascade of beneficial effects that help manage both
                diabetes and weight.
              </Paragraph>
              <Paragraph>
                The medication is administered once weekly via a simple injection,
                making it convenient for most patients to incorporate into their
                routine.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079"
          imageAlt="Medical science research"
        />

        <Heading level={2}>Life-Changing Benefits</Heading>
        <List
          items={[
            "Significant weight loss (10-15% of body weight on average)",
            "Improved blood sugar control and lower A1C levels",
            "Reduced cardiovascular risk factors",
            "Enhanced quality of life and increased energy",
            "Better management of diabesity symptoms",
          ]}
        />

        <Quote author="Dr. Sarah Ahmed, Endocrinologist">
          Semaglutide represents a paradigm shift in how we approach diabesity
          treatment. It addresses both the metabolic and weight components
          simultaneously, giving patients a real chance at long-term success.
        </Quote>

        <TextImageSection
          text={
            <>
              <Heading level={3}>Real Patient Success Stories</Heading>
              <Paragraph>
                For many Pakistanis struggling with diabesity, semaglutide has
                provided hope and tangible results. Patients report not only
                weight loss but also improved mobility, better sleep, and renewed
                confidence in managing their health condition.
              </Paragraph>
              <Paragraph>
                Ahmed, a 45-year-old from Karachi, lost 18kg in 6 months and
                reduced his A1C from 9.2% to 6.5%. "I finally feel like I have
                control over my health again," he shares.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
          imageAlt="Happy healthy person"
          reverse
        />

        <Paragraph>
          While semaglutide is a powerful tool, it works best when combined with
          lifestyle modifications including a balanced diet and regular physical
          activity. Consult your healthcare provider to see if semaglutide is
          right for you.
        </Paragraph>
      </>
    ),
    relatedBlogs: [
      "getting-rid-of-obesity-the-real-challenge",
      "understanding-diabesity-in-pakistan",
    ],
  },

  "getting-rid-of-obesity-the-real-challenge": {
    slug: "getting-rid-of-obesity-the-real-challenge",
    title: "Getting Rid of Obesity: The Real Challenge",
    date: "2025-06-15",
    image:
      ObesityChallenge.src,
    imageAlt: "Weight management",
    category: "Weight Loss",
    content: (
      <>
        <p>
          Obesity is a complex condition with multiple contributing factors,
          including genetics, environment, metabolism, and behavior. Understanding
          these factors is crucial for developing effective and sustainable weight
          loss strategies.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">The Complexity of Obesity</h2>
        <p>
          Unlike simple calorie mathematics, obesity involves hormonal imbalances,
          genetic predisposition, psychological factors, and environmental
          influences. The traditional "eat less, move more" approach oversimplifies
          a condition that requires comprehensive, personalized treatment.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Key Challenges</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Metabolic adaptation and weight loss plateaus</li>
          <li>Emotional and stress eating patterns</li>
          <li>Limited access to healthy food options</li>
          <li>Cultural pressures and social eating habits</li>
          <li>Lack of sustainable support systems</li>
        </ul>
        <p className="mt-6">
          Successful obesity management requires a multifaceted approach combining
          medical intervention, dietary changes, physical activity, psychological
          support, and long-term lifestyle modifications tailored to individual
          circumstances.
        </p>
      </>
    ),
    relatedBlogs: [
      "how-semaglutide-changes-lives",
      "diabetes-is-a-slient-epidemic-sweeping-pakistan",
    ],
  },

  "diabetes-is-a-slient-epidemic-sweeping-pakistan": {
    slug: "diabetes-is-a-slient-epidemic-sweeping-pakistan",
    title: "Diabetes is a silent epidemic sweeping Pakistan",
    date: "2025-08-10",
    image:
      SilentEpidemic.src,
    imageAlt: "Silent Epidemic",
    category: "Diet",
    content: (
      <>
        <p>
          Managing diabetes through diet doesn't mean giving up delicious food. By
          making smart choices and understanding how different foods affect blood
          sugar, diabetics can enjoy satisfying meals while maintaining healthy
          glucose levels.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Essential Eating Principles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Choose whole grains over refined carbohydrates</li>
          <li>Include protein with every meal to stabilize blood sugar</li>
          <li>Load up on non-starchy vegetables</li>
          <li>Control portion sizes, especially for carbohydrates</li>
          <li>Stay hydrated with water instead of sugary drinks</li>
          <li>Space meals evenly throughout the day</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Pakistani-Friendly Options</h2>
        <p>
          Diabetics can enjoy modified versions of traditional Pakistani dishes:
          whole wheat chapati instead of naan, baked samosas instead of fried,
          daal with brown rice, grilled chicken tikka, and vegetable-based curries
          with minimal oil.
        </p>
        <p className="mt-6">
          The key is planning ahead, reading food labels, monitoring blood sugar
          responses to different foods, and working with a nutritionist familiar
          with Pakistani cuisine to create a sustainable eating plan.
        </p>
      </>
    ),
    relatedBlogs: [
      "understanding-diabesity-in-pakistan",
      "getting-rid-of-obesity-the-real-challenge",
    ],
  },

  "understanding-diabesity-in-pakistan": {
    slug: "understanding-diabesity-in-pakistan",
    title: "Understanding Diabesity in Pakistan",
    date: "2025-07-20",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2074",
    imageAlt: "Healthcare in Pakistan",
    category: "Education",
    content: (
      <>
        <p>
          Diabesity, the combination of diabetes and obesity, has become a major
          health crisis in Pakistan. With 26.7% of adults affected by diabetes and
          rising obesity rates, understanding this dual epidemic is essential for
          effective prevention and management.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">The Pakistani Context</h2>
        <p>
          Pakistan's rapid urbanization, changing dietary patterns, and
          increasingly sedentary lifestyles have contributed to the rise of
          diabesity. Traditional diets high in refined carbohydrates, the
          popularity of sugary beverages, and reduced physical activity have
          created a perfect storm for this health crisis.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Risk Factors in Pakistan</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Genetic predisposition in South Asian populations</li>
          <li>High consumption of white rice and refined wheat products</li>
          <li>Prevalence of deep-fried foods and sweets</li>
          <li>Limited access to healthcare in rural areas</li>
          <li>Cultural stigma around discussing health conditions</li>
        </ul>
        <p className="mt-6">
          Addressing diabesity in Pakistan requires culturally sensitive approaches
          that consider local food preferences, religious practices, and social
          dynamics while providing accessible healthcare and education.
        </p>
      </>
    ),
    relatedBlogs: [
      "how-semaglutide-changes-lives",
      "diabetes-is-a-slient-epidemic-sweeping-pakistan",
    ],
  },
};

// Helper function to get blog article by slug
export function getBlogArticle(slug: string): BlogArticle | null {
  return blogArticles[slug] || null;
}

// Helper function to get all blog article slugs
export function getAllBlogArticleSlugs(): string[] {
  return Object.keys(blogArticles);
}

export function getAllBlogArticles(): BlogArticle[] {
  return Object.values(blogArticles);
}
