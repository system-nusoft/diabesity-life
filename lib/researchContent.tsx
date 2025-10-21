import Link from "next/link";
import Obesity from "../public/obesity-cardiovascular-crisis.jpg";
import Ozempic from "../public/ozempic-new-indications-jan-2025.jpg";
import Wegovy from "../public/wegovy-mash-approval-aug-2025.jpg";
import Segalutide from "../public/seglutide-product-profile-clinical-overview.jpg";
import Semaglutide from "../public/semaglutide-kidney-protection-diabetes.jpg";
import FlowTrial from "../public/flow-trial-semaglutide-kidney-disease.jpg";
import EssenceTrial from "../public/essence-trial-semaglutide-in-metabolic-dysfunction.jpg";


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
            epigenetic markers in a newborn&apos;s cord blood can predict their
            lifetime risk of type 2 diabetes
          </b>
          —with nearly <b>80% greater accuracy</b> than standard methods. This
          could revolutionize early screening, identifying at-risk children from
          the moment they&apos;re born.
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

  "obesity-chronic-disease-not-overeating": {
    slug: "obesity-chronic-disease-not-overeating",
    title:
      "By 2030, nearly half of all adults will live with obesity – but new science shows it's not just about overeating.",
    date: "2025-01-15",
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=2070",
    imageAlt: "Obesity as a chronic disease affecting metabolism and hormones",
    authors: "Health Research Team",
    journal: "Obesity Science Research",
    content: (
      <>
        <p className="mt-4">
          For many years, weight gain was attributed to bad decisions — too many
          calories and too little exercise. But researchers now see obesity as a
          chronic, relapsing disease with deep biological roots, rather than
          merely behavior. Body fat that is not needed does much more than alter
          looks; it messes with hormones, derails metabolism, feeds
          inflammation, and puts huge pressure on joints, organs, and even the
          mind.
        </p>

        <p className="mt-4">
          Health experts break its impact into two groups. &quot;Sick fat disease&quot;
          happens when fat tissue itself goes haywire and pumps out bad hormones
          that push conditions such as diabetes, hypertension, and fatty liver
          disease. &quot;Fat mass disease&quot; arises from the physical strain of excess
          weight — pressure on the heart, pressure on the lungs, sleep apnea,
          and reduced mobility. Together, these pressures are responsible for
          why obesity is associated with hundreds of medical complications.
        </p>

        <p className="mt-4">
          Worse still is the body&apos;s own defense mechanism. As people reduce
          calories, survival mechanisms are triggered: hunger hormones spike,
          satiety signals plummet, and metabolism decreases to preserve energy.
          That&apos;s metabolic adaptation, and it accounts for why diets almost
          inevitably fail and why maintenance of weight loss is much more
          difficult than losing weight initially.
        </p>

        <p className="mt-4">
          Scientists point out that for successful treatment, it is necessary to
          transcend &quot;eat less, move more.&quot; Long-term management can involve
          nutritional interventions, exercise, behavioral therapy, drugs, and
          even surgery. The word is out: obesity is not a straightforward
          failure of willpower but a multifaceted disease that needs integrated
          solutions.
        </p>

        <p className="mt-4">
          <b>
            Interested in finding out why weight keeps coming back after
            treatment is stopped—and what it implies about managing obesity in
            the long run?{" "}
            <Link
              href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-025-04200-0"
              target="_blank"
              className="text-primary underline"
            >
              Click here to find out.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "weight-rebound-after-obesity-drugs": {
    slug: "weight-rebound-after-obesity-drugs",
    title:
      "New Study Shows Weight Starts Returning Within Weeks After Stopping Obesity Drugs",
    date: "2025-02-10",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=2070",
    imageAlt: "Weight rebound after stopping GLP-1 obesity medications",
    authors: "Clinical Trials Research Team",
    journal: "Obesity Medicine Study",
    content: (
      <>
        <p className="mt-4">
          New evaluation of worldwide clinical trials shows that weight lost on
          anti-obesity drugs returns in weeks after treatment stops. Indeed,
          subjects started to regain weight in Week 8, and this rebounding
          persisted until Week 20. Some regained a large percentage of the lost
          kilos within a few months.
        </p>

        <p className="mt-4">
          The rebound effect was particularly significant with GLP-1 receptor
          agonists—a class that encompasses commonly prescribed medications such
          as semaglutide and tirzepatide.
        </p>

        <p className="mt-4">
          Interestingly, more initial weight loss at the time of treatment and
          continued lifestyle interventions were associated with even more
          intense rebound patterns.
        </p>

        <p className="mt-4">
          This trend isn&apos;t merely a clinical aside—it&apos;s a real-world issue.
          Example: patients who received 36 weeks of tirzepatide regained almost
          as much as half the weight lost after stopping.
        </p>

        <p className="mt-4">
          Experts caution the implications are not just the size. Weight gain
          can also undo gains in metabolism, blood pressure, lipids, and glucose
          control.
        </p>

        <p className="mt-4">
          And whereas weight rebound is recognized in other therapies—such as
          bariatric surgery and lifestyle modification—this meta-analysis
          provides a quantitative and systematic image for anti-obesity
          medications.
        </p>

        <p className="mt-4">
          <b>
            Interested in finding out why weight keeps coming back after
            treatment is stopped—and what it implies about managing obesity in
            the long run?{" "}
            <Link
              href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-025-04200-0"
              target="_blank"
              className="text-primary underline"
            >
              Click here to find out.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "quitting-weight-loss-injections-risks": {
    slug: "quitting-weight-loss-injections-risks",
    title:
      "The hidden danger of quitting weight-loss injections: Less weight lost, more risk gained",
    date: "2025-03-05",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070",
    imageAlt: "Dangers of discontinuing GLP-1 weight loss medications",
    authors: "Cleveland Clinic Research Team",
    journal: "Clinical Obesity Study",
    content: (
      <>
        <p className="mt-4">
          When employed in clinics instead of clinical trials, injectable GLP-1
          drugs such as semaglutide and tirzepatide also produce less
          sensational outcomes. According to a big Cleveland Clinic study that
          included close to 8,000 adults undergoing obesity treatment, more than
          50% dropped out within one year, depriving many of the benefits
          realized within the trial environment.
        </p>

        <p className="mt-4">
          This is what the loss of discontinuation did to outcomes:
        </p>

        <p className="mt-4">
          Early dropouts (in 3 months) lost only 3.6% of their body weight.
        </p>

        <p className="mt-4">
          Those who dropped out later lost 6.8%, whereas patients who remained
          on therapy for a year maintained a mean of 11.9% loss of weight.
        </p>

        <p className="mt-4">
          Increased maintenance doses boosted outcomes—patients on maximum doses
          of semaglutide lost as much as 13.7%, and those on tirzepatide lost as
          much as 18.0%.
        </p>

        <p className="mt-4">
          Women, tirzepatide patients, and those with higher doses were more
          likely to lose at least 10% weight—a cutoff associated with major
          health wins.
        </p>

        <p className="mt-4">
          Among those with prediabetes, remaining on treatment was truly
          life-changing: 67.9% of them achieved normal blood glucose levels,
          compared to only 33–41% of those who dropped out. The early dropout
          group had the highest risk of developing type 2 diabetes.
        </p>

        <p className="mt-4">
          Short version: it does matter to stick with it—keeping up the meds and
          taking the correct dosage has a significant boost to weight loss and
          metabolic effect over dropping treatment early.
        </p>

        <p className="mt-4">
          <b>
            Interested in learning how this translates to the everyday practice
            of obesity care, and how sticking to it can pay off?{" "}
            <Link
              href="https://onlinelibrary.wiley.com/doi/10.1002/oby.24331"
              target="_blank"
              className="text-primary underline"
            >
              Read more here.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "adiponectin-colon-cancer-protection": {
    slug: "adiponectin-colon-cancer-protection",
    title:
      "Could a hormone from your fat protect you from colon cancer? The surprising link we didn't know.",
    date: "2024-12-20",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070",
    imageAlt: "Adiponectin hormone and colorectal cancer prevention research",
    authors: "Cancer Research Team",
    journal: "Oncology & Metabolism Study",
    content: (
      <>
        <p className="mt-4">
          When we hear the term body fat, defense is not usually the first word
          that occurs. Yet recent findings indicate one hormone derived from
          fat—adiponectin—could have an unexpected role in reducing the
          incidence of colorectal cancer, one of the leading causes of cancer
          deaths in the world.
        </p>

        <p className="mt-4">
          Adiponectin, a hormone that aids in governing inflammation and insulin
          sensitivity, is generally lower among individuals with obesity. But
          this hormone works like a protective shield. In a massive pooled
          analysis of research, scientists saw that those with higher levels of
          adiponectin had a significantly lower risk of colorectal cancer, with
          the effect particularly pronounced among men. Even after controlling
          for body mass index and lifestyle factors, the protective relationship
          remained steady.
        </p>

        <p className="mt-4">
          On the opposite side of the balance sheet is leptin, another hormone
          derived from fat. Unlike adiponectin, leptin levels are generally high
          in obesity and have been suspected of nourishing tumors. To the
          surprise of the researchers, no strong association was found between
          leptin and overall risk of colorectal cancer. Leptin, however, did
          demonstrate a significant association with colorectal adenomas—the
          benign but precancerous polyps that often represent the initial step
          on the path toward cancer.
        </p>

        <p className="mt-4">
          Together, these results dispute the notion of fat as purely
          detrimental. Rather, the levels of fat hormones could determine
          whether fat tissue defends or encourages cancer. For men specifically,
          restoring more healthy levels of adiponectin might be an important
          aspect of prevention, and leptin&apos;s association with adenomas
          reinforces the need to track early-stage risk.
        </p>

        <p className="mt-4">
          <b>
            Is your very own fat shaping your cancer risk in ways you can&apos;t even
            imagine?{" "}
            <Link
              href="https://bmccancer.biomedcentral.com/articles/10.1186/s12885-025-14362-y"
              target="_blank"
              className="text-primary underline"
            >
              Click here to learn about the science behind the surprising
              connections.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "four-diets-rewrite-diabetes-care": {
    slug: "four-diets-rewrite-diabetes-care",
    title: "Four Diets That Could Rewrite Diabetes Care",
    date: "2025-01-25",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070",
    imageAlt: "Evidence-based diets for diabetes management and prevention",
    authors: "Nutrition Research Team",
    journal: "Diabetes & Nutrition Study",
    content: (
      <>
        <p className="mt-4">
          Type 2 diabetes is ravaging hundreds of millions around the globe, but
          treatment too often concentrates in a narrow way on drugs. Now,
          researchers insist that diet should take center stage in care—and four
          diets stand out from the din as genuinely evidence-based choices.
        </p>

        <p className="mt-4">
          The Mediterranean diet, high in olive oil, fish, vegetables, and whole
          grains, reliably enhances heart health and blood sugar control. The
          low-carbohydrate diet, controversial for so long, demonstrates
          powerful effects on decreasing HbA1c and facilitating weight
          reduction, albeit with long-term compliance as an issue.
          Simultaneously, whole plant-based diets rich in fruits, legumes, and
          fiber-rich foods increase insulin sensitivity and decrease
          cardiovascular risk. Last but not least, the DASH diet, which was
          initially formulated to reduce blood pressure, serves as a type of
          diabetes-friendly diet by reducing sodium and increasing nutrient-rich
          foods.
        </p>

        <p className="mt-4">
          What is appealing about these strategies is their versatility. Rather
          than a single &quot;ideal&quot; diet, practitioners may guide patients toward
          the choice that suits their tastes, cultural patterns, and health
          objectives—thus, making it more likely to stick in the long term.
          Research indicates that no matter what plan is utilized, patients
          experience improvements in glycemic control, body weight, and
          cardiometabolic risk factors when diets are maintained consistently.
        </p>

        <p className="mt-4">
          The takeaway? Nutrition is not an afterthought in diabetes
          treatment—it is a strong, versatile therapy.
        </p>

        <p className="mt-4">
          <b>
            Interested in learning which diet may revolutionize diabetes
            care—and why food might be medicine&apos;s most overlooked prescription?{" "}
            <Link
              href="https://academic.oup.com/jcem/article/110/Supplement_2/S112/8042170"
              target="_blank"
              className="text-primary underline"
            >
              Click here to find out more.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "nhs-rethinking-obesity-care": {
    slug: "nhs-rethinking-obesity-care",
    title:
      "The NHS Is Rethinking Obesity Care—Here's What Patients Need to Know",
    date: "2024-11-30",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2070",
    imageAlt: "NHS new guidance on treating obesity as chronic condition",
    authors: "National Institute for Health and Care Excellence (NICE)",
    journal: "NICE Clinical Guidelines",
    content: (
      <>
        <p className="mt-4">
          The UK&apos;s health guardian has published sweeping new advice that has
          the potential to revolutionize how obesity is treated throughout the
          NHS. For the first time, the National Institute for Health and Care
          Excellence (NICE) is encouraging clinicians to treat overweight and
          obesity as chronic long-term conditions that need long-term
          assistance, not short-term solutions.
        </p>

        <p className="mt-4">
          The change isn&apos;t only medical—it&apos;s cultural. Doctors are encouraged to
          seek consent before bringing up the issue of weight, not to use
          stigmatising language, and to think about the individual&apos;s broader
          life background—from poverty to early trauma—before they can talk
          about treatment. NICE underlines the fact that insensitive management
          can drive individuals away from care, making both physical and mental
          health even worse.
        </p>

        <p className="mt-4">
          Diagnosis is also more subtle. Physicians are now encouraged to take
          both BMI and waist-to-height ratio, particularly because certain
          ethnic minorities are at increased risk at lower levels of BMI. Goals
          must be individualized and realistic—such as being able to climb
          stairs without effort or play with the grandchildren—instead of being
          sighted on the scale.
        </p>

        <p className="mt-4">
          In terms of treatment, the advice is to be flexible with diet and
          lifestyle measures, recognising that no one plan suits all. Increased
          physical activity and diet with balanced nutrition are still key
          recommendations, more recent drugs like tirzepatide, semaglutide, and
          liraglutide are added under certain conditions as part of treatment.
          Surgery is also still on the agenda for the most extreme cases.
        </p>

        <p className="mt-4">
          Most notably, prevention has now been flipped to encompass children
          and families, with a focus on sustained support and creating healthy
          environments from an early age.
        </p>

        <p className="mt-4">
          The word is out: obesity care must go beyond &quot;eat less, move more&quot; and
          adopt compassion, choice, and long-term support.
        </p>

        <p className="mt-4">
          The word is out: obesity care must go beyond &quot;eat less, move more&quot; and
          adopt compassion, choice, and long-term support.{" "}
          <Link
            href="Find out how the new NHS guidance might transform obesity care in the UK here."
            target="_blank"
            className="text-primary underline"
          >
            Find out how the new NHS guidance might transform obesity care in
            the UK here.
          </Link>
        </p>
      </>
    ),
  },

  "ckm-syndrome-heart-kidney-disease": {
    slug: "ckm-syndrome-heart-kidney-disease",
    title:
      "A Radical Shift: Heart and Kidney Disease Are Now Viewed as One Syndrome",
    date: "2024-10-18",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=2070",
    imageAlt:
      "CKM Syndrome linking cardiovascular, kidney, and metabolic disease",
    authors: "American Heart Association",
    journal: "AHA Clinical Guidelines",
    content: (
      <>
        <p className="mt-4">
          For years, we have seen medicine separately address heart disease,
          diabetes, and kidney disease as individual wars. But a new initiative
          from the American Heart Association is dissolving those walls, saying
          they are manifestations of the same condition: Cardiovascular–Kidney–
          Metabolic (CKM) Syndrome.
        </p>

        <p className="mt-4">
          This revolution can turn care around for millions. Why? Because
          obesity, insulin resistance, and high blood pressure tend to hit at
          the same time, quietly impairing blood vessels, kidneys, and the heart
          years before a heart attack or kidney disease. Rather than responding
          too late, the new system encourages physicians to respond early—
          screening young adults for risk, considering waist circumference in
          addition to blood sugar, and incorporating social determinants such as
          diet, stress, and access to care in the community.
        </p>

        <p className="mt-4">
          The model establishes five stages, from risk-free prevention (Stage 0)
          through full-blown disease (Stage 4). Those with excess belly fat or
          prediabetes are identified as early as Stage 1, so that intervention
          occurs before the onset of the first warning signs.
        </p>

        <p className="mt-4">
          Treatment also evolves. The guidance points out medications that cross
          diseases: SGLT-2 inhibitors to guard the heart and kidneys, GLP-1
          receptor agonists to aid in weight and blood sugar, and lifestyle
          changes that lower all three risks simultaneously. Most importantly,
          it demands coordinated, team-delivered care—so patients aren&apos;t
          shuffled among specialists, but guided by a single, integrative plan.
        </p>

        <p className="mt-4">
          The bottom line: CKM Syndrome transforms the way we view chronic
          illness. Rather than isolated issues, it&apos;s a single interrelated
          crisis—and one that can be slowed or prevented if addressed early and
          as a team.
        </p>

        <p className="mt-4">
          <b>
            Might this &quot;one-disease&quot; strategy shift the way your doctor works
            with you to manage your health?{" "}
            <Link
              href="https://www.ahajournals.org/doi/10.1161/cir.0000000000001184"
              target="_blank"
              className="text-primary underline"
            >
              Learn more here.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "fatty-liver-diabetes-masld": {
    slug: "fatty-liver-diabetes-masld",
    title:
      "Two-Thirds of People with Diabetes Have Fatty Liver—and Most Don't Know It",
    date: "2024-09-12",
    image:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2070",
    imageAlt: "MASLD fatty liver disease in diabetes patients screening",
    authors: "American Diabetes Association",
    journal: "Diabetes Care Journal",
    content: (
      <>
        <p className="mt-4">
          Over 70% of individuals with type 2 diabetes have metabolic
          dysfunction–associated steatotic liver disease (MASLD), previously
          referred to as fatty liver disease. But it is still not well
          recognized—despite being one of the most prevalent and deadly
          complications of diabetes. The patient consensus report of the
          American Diabetes Association demands action now: early screening,
          risk stratification, and coordinated care to avert its fatal outcomes.
        </p>

        <p className="mt-4">
          MASLD is diagnosed when there is excess fat in the liver with
          metabolic conditions such as obesity or elevated blood sugar–and not
          due to alcohol. Almost all of individuals with type 2 diabetes already
          have evidence of metabolic dysfunction–associated steatohepatitis
          (MASH), and approximately one in five also have advanced fibrosis,
          putting them at miraculously increased risk for cirrhosis, liver
          cancer, and liver- related mortality
        </p>

        <p className="mt-4">
          It also increases the risk of heart disease, kidney disease, other
          cancers, and markedly decreases quality of life
        </p>

        <p className="mt-4">
          Since MASLD tends to be asymptomatic, the ADA suggests proactive
          screening for liver fibrosis in every patient with type 2 diabetes or
          prediabetes, particularly for overweight individuals. Diagnosis must
          be based on non-invasive tests and imaging, along with judicious
          clinical assessment
        </p>

        <p className="mt-4">
          The report highlights a multi-faceted approach to management: diet and
          exercise-induced weight loss, GLP-1 agonist, SGLT-2 inhibitor, and
          pioglitazone use, and targeted vitamin E or resmetirom use where
          appropriate
        </p>

        <p className="mt-4">
          Notably, MASLD treatment must be integrated—diabetes physicians, liver
          specialists, dieticians, and primary care physicians collaborating to
          identify early risk and customize long-term follow-up.
        </p>

        <p className="mt-4">
          <b>
            Fatty liver is no silent bystander—it&apos;s a metabolic warning sign
            that usually precedes.{" "}
            <Link
              href="https://diabetesjournals.org/care/article/48/7/1057/160536/Metabolic-Dysfunction-Associated-Steatotic-Liver"
              target="_blank"
              className="text-primary underline"
            >
              Click here to discover why screening and early intervention for
              MASLD might be a lifeline for millions of people living with
              diabetes.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "cmr-syndrome-one-disease": {
    slug: "cmr-syndrome-one-disease",
    title:
      "Why Scientists Now See Heart Disease, Diabetes, and Kidney Failure as One Big Problem",
    date: "2025-02-28",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070",
    imageAlt: "CMR Syndrome integrating heart, kidney, and metabolic disease",
    authors: "Medical Research Team",
    journal: "Cardio-Metabo-Renal Medicine Study",
    content: (
      <>
        <p className="mt-4">
          Medicine has battled heart disease, kidney failure, and diabetes as
          distinct foes for decades. Yet a new body of research contends that
          they are inextricably linked—and that combating them together will
          reshape the future of health care.
        </p>

        <p className="mt-4">
          Physicians now identify one underlying condition known as
          Cardio-Metabo- Renal (CMR) Syndrome, which mirrors the way excess
          weight, elevated blood sugar, and elevated blood pressure harm the
          body in several systems simultaneously. The review underscores that
          obesity, insulin resistance, and hypertension tend to set off a chain
          reaction—initially impacting metabolism, followed by the kidneys,
          followed by the heart. By the time a patient suffers a heart attack or
          kidney failure, years of silent, interrelated harm may already have
          occurred.
        </p>

        <p className="mt-4">
          What is so pressing about this change is the possibility of
          intervention early. Identification of risk at the metabolic level—
          abdominal obesity or prediabetes—is a window to intervene before
          damage is irreversible. Emerging treatments already dissolve the
          traditional lines: SGLT-2 inhibitors shield kidneys as well as the
          heart, and GLP-1 receptor agonists decrease blood glucose, suppress
          obesity, and decrease cardiovascular risk.
        </p>

        <p className="mt-4">
          The review also looks ahead to the future of precision medicine—where
          artificial intelligence, digital health tools, and sophisticated
          biomarkers direct which patients are at highest risk and inform
          personalized prevention. Rather than fragmented care from numerous
          specialists, patients might receive integrated support that treats all
          three conditions simultaneously.
        </p>

        <p className="mt-4">
          The lesson is clear: combining heart, kidney, and metabolic disease in
          a single umbrella isn&apos;t merely a new medical paradigm—it may be the
          strongest means to avoid chronic illness and add years of healthy
          living.
        </p>

        <p className="mt-4">
          <b>
            Interested in learning how combining three diseases in one would
            save millions of lives?{" "}
            <Link
              href="https://link.springer.com/article/10.1007/s13300-025-01738-3'"
              target="_blank"
              className="text-primary underline"
            >
              Click here to see the future of CMR medicine.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "stopping-weight-loss-drugs-early": {
    slug: "stopping-weight-loss-drugs-early",
    title: "Doctors Warn: Stopping Weight-Loss Drugs Early Slashes Results",
    date: "2025-03-20",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070",
    imageAlt:
      "Early discontinuation of weight loss medications reduces effectiveness",
    authors: "Real-World Clinical Study Team",
    journal: "Obesity Treatment Research",
    content: (
      <>
        <p className="mt-4">
          Weight-reduction shots such as semaglutide and tirzepatide are being
          hailed as miracle drugs. However, a new real-world study indicates
          that how patients take them outside clinical trials is as significant
          as the medications themselves.
        </p>

        <p className="mt-4">
          The study tracked thousands of adults who were prescribed semaglutide
          or tirzepatide for obesity. Far from the closely controlled setting of
          trials, however, many patients had trouble with titration schedules,
          side effects, and long-term sticking with treatment. The consequence?
          Hugely divergent weight loss.
        </p>

        <p className="mt-4">
          Patients who remained with therapy made the most stunning reductions—
          echoing clinical trial achievements. But most quit early on,
          frequently in the first six to 12 months, halving their weight loss.
          Titration difficulties also ensured that some never attained the best
          therapeutic dosage, dulling outcomes.
        </p>

        <p className="mt-4">
          Most significantly, persistence with tirzepatide was somewhat more
          likely than semaglutide, and the weight loss it achieved was larger on
          average. Nevertheless, the most important takeaway was the same:
          without consistent use, the potential of these drugs is significantly
          undercut.
        </p>

        <p className="mt-4">
          Researchers emphasize that obesity is a relapsing, chronic disease—and
          such drugs need to be handled as long-term treatments, rather than
          quick fixes. Regular follow-up from physicians, improved education
          regarding side effects, and setting realistic goals can keep patients
          on therapy long enough to experience its complete benefit.
        </p>

        <p className="mt-4">
          <b>
            Wondering what really happens when powerful new obesity drugs meet
            real life?{" "}
            <Link
              href="https://dom-pubs.onlinelibrary.wiley.com/doi/full/10.1111/dom.70004"
              target="_blank"
              className="text-primary underline"
            >
              Click here to explore the data behind semaglutide and tirzepatide
              in everyday use.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "semaglutide-liver-repair": {
    slug: "semaglutide-liver-repair",
    title: "From Weight Loss to Liver Repair: The Hidden Power of Semaglutide",
    date: "2024-11-15",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070",
    imageAlt: "Semaglutide reversing liver inflammation and MASH fibrosis",
    authors: "Nature Medicine Research Team",
    journal: "Nature Medicine",
    content: (
      <>
        <p className="mt-4">
          In groundbreaking new findings published in Nature Medicine,
          scientists have discovered how semaglutide can do potentially far more
          than provide weight loss and blood glucose management. The GLP-1
          medication also reversed liver inflammation and scarring in metabolic
          dysfunction- associated steatohepatitis (MASH), a more severe
          manifestation of fatty liver disease with close association with
          diabetes and obesity.
        </p>

        <p className="mt-4">
          In preclinical models of MASH, the researchers illustrated that
          semaglutide not only corrected liver histology—minimizing fibrosis and
          inflammatory markers—but also reprogrammed the blood protein profile.
          Proteome analysis picked up 72 proteins implicated in metabolism,
          inflammation, and fibrosis, which were brought back towards patterns
          associated with normal liver function. The same biomarkers were
          subsequently confirmed in patient samples, demonstrating that
          treatment seemed to normalize pathways implicated by disease.
        </p>

        <p className="mt-4">
          This research throws some light on semaglutide&apos;s multifaceted action—
          implying that it involves biochemically rebalancing in metabolic and
          immune systems and not just through weight reduction alone.
          Considering the worldwide increase in MASH and its transformation into
          cirrhosis and liver cancer, such insights are a significant
          breakthrough.
        </p>

        <p className="mt-4">
          The stakes are high: semaglutide may become the first effective
          therapy for early-stage MASH, potentially halting—or even
          reversing—fatty liver advancement when it is still treatable.
        </p>

        <p className="mt-4">
          <b>
            Ready to explore how a weekly injection might redefine your liver at
            the molecular level—and why this has implications for millions?{" "}
            <Link
              href="https://www.nature.com/articles/s41591-025-03799-0"
              target="_blank"
              className="text-primary underline"
            >
              Click here to learn more.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "obesity-cardiovascular-crisis": {
    slug: "obesity-cardiovascular-crisis",
    title:
      "The Weight of a Crisis: Unpacking the Link Between Global Obesity and Heart Disease",
    date: "2025-09-07",
    image: Obesity.src,
    imageAlt:
      "Several blister packs containing various pills and capsules, symbolizing the medical response to the global health crisis.",
    authors: "Francisco Lopez-Jimenez, Mariachiara Di Cesare, et al.",
    journal: "Global Heart",
    content: (
      <>
        <p className="mt-4">
          A landmark report in the journal <em>Global Heart</em> reveals the
          staggering scale of the global obesity epidemic and its profound
          connection to cardiovascular disease (CVD), the world&apos;s leading cause
          of death. The research highlights that as of 2022, over one billion
          people were living with obesity. This escalating crisis is directly
          fueling a surge in heart-related conditions, with high body mass index
          (BMI) responsible for 1.9 million CVD deaths in 2021 alone—a number
          that has more than doubled since 1990.
        </p>
        <p className="mt-4">
          The paper, &quot;The Weight of Cardiovascular Diseases,&quot; presents a
          comprehensive analysis showing that since 1990, the age-standardised
          prevalence of obesity has doubled among women and tripled among men.
          The authors argue for a critical shift in perspective, urging
          policymakers and clinicians to move beyond viewing obesity as a simple
          &quot;lifestyle choice.&quot; Instead, they emphasize it as a complex,
          multifaceted disorder driven by a combination of biological, social,
          environmental, and commercial factors that require a holistic and
          integrated response.
        </p>
        <p className="mt-4">
          Looking forward, the report outlines actionable strategies across both
          public health and clinical medicine. It points to the promise of
          potentially &quot;game-changing&quot; medical interventions, such as GLP-1
          receptor agonists (GLP-1RAs), for managing weight and improving
          cardiovascular outcomes. The authors conclude with a powerful call to
          action for coordinated efforts from global health organizations,
          healthcare systems, and governments to implement evidence-based
          policies and update cardiovascular guidelines to tackle the
          intertwined crises of obesity and heart disease.
        </p>
        <p className="mt-4">
          <b>
            For more information{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/DOC-20250907-WA0014._11zon.pdf"
              target="_blank"
              className="text-primary underline"
            >
              click here.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "ozempic-new-indications-jan-2025": {
    slug: "ozempic-new-indications-jan-2025",
    title:
      "Ozempic's New Frontier: FDA Approves Expanded Use for Kidney and Heart Protection",
    date: "2025-01-15",
    image: Ozempic.src,
    imageAlt:
      "Blister packs of various pills and capsules, representing modern pharmaceutical treatments like Ozempic.",
    authors: "Novo Nordisk",
    journal: "U.S. Food and Drug Administration (FDA)",
    content: (
      <>
        <p className="mt-4">
          In a significant label update effective January 2025, the U.S. Food
          and Drug Administration (FDA) has expanded the approved uses for
          Ozempic (semaglutide). Beyond its established roles in managing blood
          sugar and protecting the heart, Ozempic is now officially indicated to
          reduce the risk of sustained eGFR decline, end-stage kidney disease,
          and cardiovascular death in adults with type 2 diabetes mellitus and
          chronic kidney disease.
        </p>

        <p className="mt-4">
          Ozempic, a glucagon-like peptide-1 (GLP-1) receptor agonist, now
          serves a triple role in patient care. It is used as an adjunct to diet
          and exercise to improve glycemic control in adults with type 2
          diabetes, to reduce the risk of major adverse cardiovascular events
          (like heart attack or stroke) in those with established heart disease,
          and now, to provide crucial kidney protection for patients with both
          type 2 diabetes and chronic kidney disease.
        </p>

        <p className="mt-4">
          Patient safety remains paramount, and the updated label continues to
          carry a <strong>boxed warning</strong> regarding a potential risk of
          thyroid C-cell tumors, which was observed in rodent studies.
          Consequently, Ozempic is contraindicated in patients with a personal
          or family history of medullary thyroid carcinoma (MTC). Other serious
          warnings include the risk of acute pancreatitis, diabetic retinopathy
          complications, severe gastrointestinal reactions, and a newly
          highlighted risk of pulmonary aspiration for patients undergoing
          general anesthesia.
        </p>

        <p className="mt-4">
          According to clinical trial data, the most common side effects
          reported by patients using Ozempic include nausea, vomiting, diarrhea,
          abdominal pain, and constipation. These reactions, particularly
          gastrointestinal ones, were most frequently observed during the
          initial dose-escalation phase of treatment.
        </p>

        <p className="mt-4">
          <b>
            This expanded indication marks a new chapter for managing type 2
            diabetes and its complex comorbidities. For comprehensive details on
            dosage, administration, and full safety information, review the
            official documentation.{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/Latest-Ozempic-Label-Jan-2025.pdf"
              target="_blank"
              className="text-primary underline"
            >
              Click here to view the full prescribing information.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "wegovy-mash-approval-aug-2025": {
    slug: "wegovy-mash-approval-aug-2025",
    title:
      "Beyond Weight Loss: Wegovy Gains Landmark Approval to Treat Advanced Liver Disease (MASH)",
    date: "2025-08-15",
    image: Wegovy.src,
    imageAlt:
      "Blister packs of various pills and capsules, representing modern pharmaceutical treatments like Wegovy.",
    authors: "Novo Nordisk",
    journal: "U.S. Food and Drug Administration (FDA)",
    content: (
      <>
        <p className="mt-4">
          In a major development for liver health, the FDA has granted
          accelerated approval for Wegovy (semaglutide) to treat adults with
          noncirrhotic metabolic dysfunction-associated steatohepatitis (MASH)
          with moderate to advanced liver fibrosis. The label update, effective
          August 2025, marks Wegovy as a pioneering treatment for this severe
          form of fatty liver disease, formerly known as NASH.
        </p>

        <p className="mt-4">
          This new indication is based on clinical trial data showing Wegovy&apos;s
          ability to achieve resolution of MASH and improvement in liver
          fibrosis. The approval is granted under the FDA&apos;s accelerated pathway,
          meaning continued approval may depend on the results of ongoing
          confirmatory trials. This adds a critical new dimension to Wegovy&apos;s
          existing approvals for reducing major cardiovascular events and for
          chronic weight management in adults and adolescents with obesity or
          overweight.
        </p>

        <p className="mt-4">
          The prescribing information continues to feature a{" "}
          <strong>boxed warning</strong> for the risk of thyroid C-cell tumors,
          a finding from rodent studies. Because of this potential risk, Wegovy
          is not recommended for patients with a personal or family history of
          medullary thyroid carcinoma (MTC). Other significant warnings include
          the risk of acute pancreatitis, acute gallbladder disease,
          hypoglycemia (especially when used with other diabetes medications),
          and suicidal ideation.
        </p>

        <p className="mt-4">
          The most common side effects observed in clinical trials remain
          consistent across indications and include nausea, diarrhea, vomiting,
          constipation, abdominal pain, and headache. These are often most
          pronounced during the initial dose-escalation period.
        </p>

        <p className="mt-4">
          <b>
            This landmark approval offers a new therapeutic option for millions
            affected by MASH. To understand the full scope of this update,
            including dosage, administration, and complete safety data, it is
            essential to consult the official documentation.{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/Latest-Wegovy-Aug-2025.pdf"
              target="_blank"
              className="text-primary underline"
            >
              Click here to view the full prescribing information.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "seglutide-product-profile-clinical-overview": {
    slug: "seglutide-product-profile-clinical-overview",
    title:
      "Seglutide (Semaglutide): A Comprehensive Clinical Profile for Diabetes, Weight Management, and Liver Health",
    date: "2024-10-26",
    image: Segalutide.src,
    imageAlt:
      "Blister packs of various pills and capsules, representing the pharmaceutical profile of Seglutide (semaglutide).",
    authors: "Macter International Limited, Dept. of Medical Affairs",
    journal: "Internal Product Profile",
    content: (
      <>
        <p className="mt-4">
          Seglutide (semaglutide) is a human glucagon-like peptide-1 (GLP-1)
          receptor agonist, engineered with 94% homology to native human GLP-1.
          Its molecular structure is optimized for a prolonged half-life of
          approximately one week, allowing for convenient once-weekly
          subcutaneous administration. Its mechanism of action includes
          stimulating insulin and suppressing glucagon secretion in a
          glucose-dependent manner, delaying gastric emptying, and acting on
          brain centers to reduce hunger and enhance satiety.
        </p>

        <p className="mt-4">
          The therapeutic applications for Seglutide have expanded
          significantly. Initially established as a cornerstone therapy for
          adults with type 2 diabetes to improve glycemic control and reduce the
          risk of major adverse cardiovascular events (MACE), its indications
          now encompass a broader spectrum of metabolic diseases. These include:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <strong>Chronic Weight Management:</strong> For adults and
            adolescents (12+) with obesity or overweight with comorbidities.
          </li>
          <li>
            <strong>Cardiovascular Risk Reduction:</strong> For adults with
            established cardiovascular disease and either obesity or overweight.
          </li>
          <li>
            <strong>Kidney Protection:</strong> To reduce the risk of kidney
            function decline and end-stage kidney disease in adults with T2DM
            and CKD.
          </li>
          <li>
            <strong>Liver Health (MASH):</strong> A groundbreaking indication
            for the treatment of noncirrhotic metabolic dysfunction-associated
            steatohepatitis (MASH) with moderate to advanced liver fibrosis
            (F2-F3).
          </li>
        </ul>

        <p className="mt-4">
          Extensive clinical data from the SUSTAIN trial program underscores
          Seglutide&apos;s efficacy. Across multiple head-to-head trials, semaglutide
          demonstrated superior reductions in both HbA1c and body weight
          compared to placebo, other GLP-1 RAs (like dulaglutide and exenatide
          ER), DPP-4 inhibitors, and SGLT-2 inhibitors. The landmark SUSTAIN 6
          cardiovascular outcomes trial revealed a significant{" "}
          <strong>26% reduction in the risk of MACE</strong> (CV death,
          non-fatal MI, or non-fatal stroke) versus placebo.
        </p>

        <p className="mt-4">
          While effective, treatment requires careful consideration of its
          safety profile. Seglutide is contraindicated in patients with a
          personal or family history of Medullary Thyroid Carcinoma (MTC) or
          Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Key warnings
          include the risk of acute pancreatitis, gallbladder disease, and
          potential gastrointestinal adverse reactions like nausea and vomiting,
          which are most common during dose initiation. Notably, rapid
          improvement in glucose control has been associated with a temporary
          worsening of pre-existing diabetic retinopathy, requiring patient
          monitoring.
        </p>

        <p className="mt-4">
          <b>
            This profile highlights Seglutide&apos;s robust clinical data and its
            evolving role as a multi-faceted agent for managing complex,
            interrelated metabolic conditions. For complete dosing,
            administration, and safety information, healthcare professionals
            should consult the full product monograph.{" "}
            <b>
              For more information{" "}
              <Link
                href="https://diabesity.life/wp-content/uploads/2025/10/Seglutide-Product-Profile-Updated.pdf"
                target="_blank"
                className="text-primary underline"
              >
                click here.
              </Link>
            </b>
          </b>
        </p>
      </>
    ),
  },

  "semaglutide-kidney-protection-diabetes": {
    slug: "semaglutide-kidney-protection-diabetes",
    title:
      "Semaglutide Shows Major Kidney Protection in Landmark Diabetes Trial",
    date: "2024-05-24",
    image: Semaglutide.src,
    imageAlt:
      "Blister packs of pills, representing the therapeutic breakthrough of semaglutide for kidney disease.",
    authors: "V. Perkovic, et al.",
    journal: "The New England Journal of Medicine",
    content: (
      <>
        <p className="mt-4">
          In a landmark study published in The New England Journal of Medicine,
          researchers have confirmed that semaglutide, a widely used GLP-1
          receptor agonist, significantly reduces the risk of major kidney
          disease events in people with type 2 diabetes and chronic kidney
          disease (CKD). This finding addresses a critical gap in understanding
          the drug&apos;s effects beyond blood sugar control and weight loss.
        </p>

        <p className="mt-4">
          The double-blind, randomized trial involved 3,533 participants with
          both type 2 diabetes and pre-existing CKD. Patients were given either
          a weekly 1.0 mg subcutaneous injection of semaglutide or a placebo.
          The study was designed to track the progression to kidney failure, a
          substantial loss of kidney function (eGFR), or death from
          kidney-related or cardiovascular causes.
        </p>

        <p className="mt-4">
          The results were so compelling that the trial was stopped early. The
          semaglutide group experienced a{" "}
          <strong>24% lower risk of major kidney disease events</strong>{" "}
          compared to the placebo group. Key outcomes included:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>A slower rate of decline in kidney function (eGFR) over time.</li>
          <li>Fewer serious adverse events compared to placebo.</li>
          <li>
            An estimated 20 people would need to be treated for about 3 years to
            prevent one major kidney disease event.
          </li>
        </ul>

        <p className="mt-4">
          The conclusion is clear: for adults with type 2 diabetes and chronic
          kidney disease, semaglutide is a powerful tool for preserving kidney
          function and reducing the risk of both clinically important kidney
          outcomes and death from cardiovascular causes. This solidifies its
          role as a vital organ-protective therapy in this high-risk population.
        </p>

        <p className="mt-4">
          <b>
            Want to dive deeper into the data that&apos;s changing the standard of
            care for diabetic kidney disease?{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/The-FLOW-Trial-Plain-Language-Summary.jpg"
              target="_blank"
              className="text-primary underline"
            >
              Read the full publication here.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "flow-trial-semaglutide-kidney-disease": {
    slug: "flow-trial-semaglutide-kidney-disease",
    title:
      "FLOW Trial: Semaglutide Cuts Risk of Kidney Failure and Death by 24% in Diabetes Patients",
    date: "2024-05-24",
    image: FlowTrial.src,
    imageAlt:
      "Multiple blister packs of medication, illustrating the findings of the FLOW trial on semaglutide.",
    authors: "Perkovic et al.",
    journal: "The New England Journal of Medicine",
    content: (
      <>
        <p className="mt-4">
          A major clinical trial, known as the FLOW trial, has delivered
          definitive evidence that semaglutide provides significant protection
          against severe kidney outcomes and death for people with type 2
          diabetes and chronic kidney disease (CKD). The findings, published in
          The New England Journal of Medicine, position the drug as a critical
          intervention for this high-risk patient population.
        </p>

        <p className="mt-4">
          The study was a large-scale, double-blind, randomized,
          placebo-controlled trial involving 3,533 participants. Patients were
          administered either a weekly 1.0 mg dose of subcutaneous semaglutide
          or a placebo. The primary goal was to determine the drug&apos;s efficacy in
          preventing a composite of major kidney events (including kidney
          failure and a substantial loss of function) or death from
          kidney-related or cardiovascular causes.
        </p>

        <p className="mt-4">
          The results were so positive that the trial was stopped early. After a
          median follow-up of 3.4 years, the semaglutide group showed:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            A <strong>24% lower risk</strong> of experiencing a major kidney
            disease event or death from cardiovascular or kidney-related causes
            compared to the placebo group.
          </li>
          <li>
            A significantly slower rate of decline in kidney function over time.
          </li>
          <li>Fewer serious adverse events than those in the placebo group.</li>
        </ul>

        <p className="mt-4">
          The conclusion of the FLOW trial is unambiguous: semaglutide
          effectively reduces the risk of clinically important kidney outcomes
          and cardiovascular death in patients managing both type 2 diabetes and
          chronic kidney disease, marking a major step forward in treatment.
        </p>

        <p className="mt-4">
          <b>
            Explore the full data from the trial that is set to change the
            future of CKD management.{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/The-FLOW-Trial-Slide-Deck-For-Speaker.pdf"
              target="_blank"
              className="text-primary underline"
            >
              Read the full publication in the NEJM here.
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "essence-trial-semaglutide-in-metabolic-dysfunction": {
    slug: "essence-trial-semaglutide-in-metabolic-dysfunction",
    title:
      "Phase 3 ESSENCE trial: Semaglutide in metabolic dysfunction-associated steatohepatitis",
    date: "2024-05-24",
    image: EssenceTrial.src,
    imageAlt:
      "Multiple blister packs of medication, illustrating the findings of the FLOW trial on semaglutide.",
    authors: "Perkovic et al.",
    journal: "Essence Semaglutide",
    content: (
      <>
        <p className="mt-4">
          Metabolic dysfunction-associated steatohepatitis (MASH) is the
          progressive form of metabolic dysfunction-associated steatotic liver
          disease (MASLD).
        </p>

        <p className="mt-4">
          Semaglutide, a glucagon-like peptide-1 receptor agonist (GLP-1RA), has
          been extensively studied across a broad spectrum of cardiometabolic
          disease.
        </p>

        <p className="mt-4">
          ESSENCE is an ongoing phase 3 trial comparing once-weekly subcutaneous
          semaglutide 2.4 mg versus placebo in participants with biopsy-defined
          MASH and fibrosis stage 2 or 3.
        </p>

        <p className="mt-4">
          Here, we report interim efficacy and safety* results from the first
          800 patients who completed 72 weeks of treatment.
        </p>

        <p className="mt-4">
          <b>
            For more information{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/Phase-3-ESSENCE-trial-Semaglutide-in-metabolic-dysfunction-associated-steatohepatitis.pdf"
              target="_blank"
              className="text-primary underline"
            >
              click here.
            </Link>
          </b>
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
