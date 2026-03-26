import Link from "next/link";
import Obesity from "../public/obesity-cardiovascular-crisis.jpg";
import Ozempic from "../public/ozempic-new-indications-jan-2025.jpg";
import Wegovy from "../public/wegovy-mash-approval-aug-2025.jpg";
import Segalutide from "../public/seglutide-product-profile-clinical-overview.jpg";
import Semaglutide from "../public/semaglutide-kidney-protection-diabetes.jpg";
import FlowTrial from "../public/flow-trial-semaglutide-kidney-disease.jpg";
import EssenceTrial from "../public/essence-trial-semaglutide-in-metabolic-dysfunction.jpg";
import PharmacologicTreatment from "../public/pharmacologic-treat-of-obesity.jpg";

export interface ResearchArticle {
  slug: string;
  title: string;
  titleUr?: string;
  date: string;
  image: string;
  imageAlt: string;
  authors: string;
  journal: string;
  content: React.ReactNode;
  urduContent?: React.ReactNode;
}

export const researchArticles: Record<string, ResearchArticle> = {
  "five-days-junk-food-brain-rewiring": {
    slug: "five-days-junk-food-brain-rewiring",
    title:
      "Just Five Days of Junk Food Can Rewire Your Brain—And the Effects Don't Disappear Quickly",
    titleUr:
      "صرف پانچ دن کا جنک فوڈ آپ کے دماغ کو دوبارہ پروگرام کر سکتا ہے — اور اثرات جلدی نہیں جاتے",
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
    urduContent: (
      <>
        <p className="mt-4">
          کیا آپ کو لگتا ہے کہ پیزا، فرائز اور سوڈے کا ایک فوری ویک اینڈ بنج
          کوئی دیرپا نقصان نہیں کرے گا؟ نئی جرمن تحقیق اس کے خلاف کہتی ہے۔
          سائنسدانوں نے پایا کہ{" "}
          <b>
            صرف چند دن انتہائی پروسیسڈ خوراک کھانا دماغ کی انسولین حساسیت کو کند
            کرنے کے لیے کافی تھا
          </b>{" "}
          — ایک اہم کام جو بھوک اور میٹابولزم کو منظم کرنے میں مدد کرتا ہے۔
        </p>

        <p className="mt-4">
          دماغ کی انسولین مزاحمت نہ صرف تیزی سے ظاہر ہوئی، بلکہ یہ{" "}
          <b>ایک پورے ہفتے بعد بھی قابل شناخت تھی</b>، یہاں تک کہ شرکاء کے معمول
          کی خوراک پر واپس آنے کے بعد بھی۔ محققین نے جگر کی چربی میں اضافہ اور
          بھوک کے کنٹرول میں خلل بھی نوٹ کیا۔
        </p>

        <p className="mt-4">
          "یہ نتائج ظاہر کرتے ہیں کہ غذا کس قدر تیزی سے دماغ کی صحت اور
          میٹابولزم کو متاثر کر سکتی ہے،" مطالعے کے مصنفین نے خبردار کیا۔
        </p>

        <p className="mt-4">
          یہ مطالعہ بتاتا ہے کہ جنک فوڈ جسم کو اس سے کہیں زیادہ جلدی نقصان
          پہنچاتا ہے جتنا زیادہ تر لوگ سوچتے ہیں — اور یہ کہ یہاں تک کہ قلیل
          مدتی خوراک کے انحراف بھی ایک میٹابولک نشان چھوڑ سکتے ہیں۔
        </p>

        <p className="mt-4">
          <b>مطالعے کا خلاصہ یہاں پڑھیں:</b>{" "}
          <Link
            href="https://nypost.com/2025/02/27/health/what-just-five-days-of-eating-upfs-can-do-to-your-brain-study/?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            جرمن دماغ-انسولین مطالعے کی NY Post کوریج
          </Link>
        </p>
      </>
    ),
  },

  "childhood-obesity-dna-prediction-south-asians": {
    slug: "childhood-obesity-dna-prediction-south-asians",
    title:
      "Childhood Obesity Risk Can Be Predicted at Age 5 Using DNA—With Double the Accuracy for South Asians",
    titleUr:
      "بچپن میں موٹاپے کا خطرہ 5 سال کی عمر میں DNA سے پیش گوئی کی جا سکتی ہے — جنوبی ایشیائیوں کے لیے دوگنی درستگی کے ساتھ",
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
    urduContent: (
      <>
        <p className="mt-4">
          کیا کنڈرگارٹن میں ایک DNA ٹیسٹ یہ پیش گوئی کر سکتا ہے کہ کون بڑا ہو کر
          موٹاپے کا شکار ہوگا؟ نیچر میڈیسن میں ایک انقلابی جینیاتی مطالعہ کا
          کہنا ہے کہ ہاں۔ محققین نے ایک پولی جینک رسک اسکور تیار کیا جو پانچ سال
          تک کے بچوں میں موٹاپے کے خطرے کی پیش گوئی کر سکتا ہے۔
        </p>

        <p className="mt-4">
          یہ نتائج جنوبی ایشیائی آبادیوں کے لیے خاص طور پر نمایاں ہیں، جہاں یہ
          ٹیسٹ دیگر گروہوں کے مقابلے میں <b>دوگنا درست</b> پایا گیا۔ یہ اہم ہے
          کیونکہ جنوبی ایشیائیوں کو ذیابیطس اور موٹاپے سے متعلق پیچیدگیوں کے لیے
          دنیا کے سب سے زیادہ خطرات میں سے ایک کا سامنا ہے۔
        </p>

        <p className="mt-4">
          ماہرین کا کہنا ہے کہ یہ ٹول خاندانوں اور ڈاکٹروں کو ابتدائی مداخلتوں —
          غذا، طرز زندگی، اور احتیاطی دیکھ بھال — کی طرف رہنمائی کر سکتا ہے، اس
          سے بہت پہلے کہ موٹاپا جڑ پکڑ لے۔
        </p>

        <p className="mt-4">
          <b>مزید تفصیلات پڑھیں:</b>{" "}
          <Link
            href="https://timesofindia.indiatimes.com/city/hyderabad/intl-genetic-study-predicts-childhood-obesity-risk-using-indian-data/articleshow/122865432.cms?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            نیچر میڈیسن جینیاتی مطالعے پر ٹائمز آف انڈیا
          </Link>
        </p>
      </>
    ),
  },

  "two-cups-mango-insulin-sensitivity": {
    slug: "two-cups-mango-insulin-sensitivity",
    title:
      "Just Two Cups of Mango a Day Can Improve Insulin Sensitivity—Surprisingly",
    titleUr:
      "روزانہ صرف دو کپ آم انسولین حساسیت کو بہتر بنا سکتے ہیں — حیرت انگیز طور پر",
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
    urduContent: (
      <>
        <p className="mt-4">
          معلوم ہوا کہ آپ کا میٹھا بھی دوائی ہو سکتا ہے۔ ایک چھوٹے لیکن امید
          افزا مطالعے میں پایا گیا کہ جن زیادہ وزن والے بالغوں نے{" "}
          <b>چار ہفتوں تک روزانہ دو کپ آم کھائے</b> ان میں{" "}
          <b>انسولین حساسیت میں قابل پیمائش بہتری</b> آئی، جو ٹائپ 2 ذیابیطس کو
          روکنے میں ایک اہم عنصر ہے۔
        </p>

        <p className="mt-4">
          اور زیادہ حیران کن بات؟ شرکاء کا <b>وزن نہیں بڑھا</b>، اس کے باوجود کہ
          پھل میں قدرتی چینی اضافی تھی۔ محققین کا خیال ہے کہ آم کے فائبر، بائیو
          ایکٹو مرکبات اور اینٹی آکسیڈنٹس کا انوکھا مجموعہ جسم کے گلوکوز کو
          پروسیس کرنے کے طریقے کو بہتر بنانے میں مدد کرتا ہے۔
        </p>

        <p className="mt-4">
          اگرچہ بڑے مطالعات کی ضرورت ہے، یہ بتاتا ہے کہ{" "}
          <b>
            سادہ، ثقافتی طور پر مانوس غذائیں قدرتی طور پر بلڈ شوگر کو کنٹرول
            کرنے میں کردار ادا کر سکتی ہیں۔
          </b>
        </p>

        <p className="mt-4">
          <b>مزید پڑھیں:</b>{" "}
          <Link
            href="https://nypost.com/2025/03/15/health/scientists-discover-enjoyable-way-to-lower-diabetes-risk/?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            آم کے مطالعے پر نیو یارک پوسٹ کی کوریج
          </Link>
        </p>
      </>
    ),
  },

  "obesity-before-30-early-death-risk": {
    slug: "obesity-before-30-early-death-risk",
    title:
      "Becoming Obese Before 30 Raises Early Death Risk by 75%—Alarming Lifespan Toll",
    titleUr:
      "30 سال سے پہلے موٹاپا قبل از وقت موت کا خطرہ 75 فیصد بڑھاتا ہے — عمر پر تشویشناک اثر",
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
    urduContent: (
      <>
        <p className="mt-4">
          جوانی میں موٹاپا محض ظاہری فکر نہیں — یہ زندگی اور موت کا معاملہ ہے۔
          620,000 سے زیادہ بالغوں پر کی گئی ایک وسیع سویڈش تحقیق میں پایا گیا کہ{" "}
          <b>
            30 سال سے پہلے موٹاپے کا شکار ہونا قبل از وقت موت کا خطرہ 75 فیصد
            بڑھا دیتا ہے۔
          </b>
        </p>

        <p className="mt-4">
          خواتین پر اثر اور بھی بدتر تھا، جنہیں قبل از وقت موت کا{" "}
          <b>84 فیصد زیادہ خطرہ</b> تھا، مردوں کے 79 فیصد کے مقابلے میں۔ بنیادی
          وجوہات: قلبی بیماری، ٹائپ 2 ذیابیطس، اور موٹاپے سے متعلق سرطان۔
        </p>

        <p className="mt-4">
          "زندگی میں جتنی جلدی موٹاپا پیدا ہوتا ہے، طویل مدتی خطرہ اتنا ہی زیادہ
          ہوتا ہے،" محققین نے زور دیا۔
        </p>

        <p className="mt-4">
          یہ تحقیق پالیسی سازوں کے لیے ایک انتباہ ہے:{" "}
          <b>
            ابتدائی زندگی کی مداخلتیں — صحت مند اسکول کے کھانے، چینی کے ضوابط،
            اور جسمانی سرگرمی کے لیے شہری منصوبہ بندی — زندگیاں بچانے اور صحت کے
            اخراجات کو کم کرنے کا سب سے مؤثر طریقہ ہو سکتی ہیں۔
          </b>
        </p>

        <p className="mt-4">
          <Link
            href="https://www.theguardian.com/society/2025/may/12/becoming-obese-under-age-of-30-raises-risk-of-early-death-by-at-least-75?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            دی گارڈین پر مکمل رپورٹ پڑھیں
          </Link>
        </p>
      </>
    ),
  },

  "eating-fast-disrupts-glp1-hormones": {
    slug: "eating-fast-disrupts-glp1-hormones",
    title: "Eating Too Fast Disrupts Your Body's Natural Semaglutide Hormones",
    titleUr:
      "بہت تیز کھانا آپ کے جسم کے قدرتی سیماگلوٹائیڈ ہارمونز کو متاثر کرتا ہے",
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
    urduContent: (
      <>
        <p className="mt-4">
          کھانا جلدی جلدی نگلنا صرف بدہضمی سے زیادہ نقصان کر سکتا ہے۔ نئی تحقیق
          سے پتہ چلتا ہے کہ{" "}
          <b>
            تیز کھانا دراصل جسم کے اپنے GLP-1 ہارمونز کو دبا دیتا ہے — وہی
            ہارمونز جن کی نقل سیماگلوٹائیڈ جیسی مشہور دوائیں کرتی ہیں۔
          </b>
        </p>

        <p className="mt-4">
          یہ آنتوں کے ہارمونز بلڈ شوگر کو قابو میں رکھنے اور بھوک کو کم کرنے میں
          اہم کردار ادا کرتے ہیں۔ جب یہ کند ہو جاتے ہیں تو بلڈ شوگر زیادہ اور
          زیادہ دیر تک بڑھتی ہے، جس سے لوگوں میں{" "}
          <b>میٹابولک سنڈروم پیدا کرنے کا 54 فیصد زیادہ خطرہ</b> ہوتا ہے —
          موٹاپا، ٹائپ 2 ذیابیطس اور ہائی بلڈ پریشر کا ایک خطرناک مجموعہ۔
        </p>

        <p className="mt-4">
          "کھانے کی رفتار کو اکثر نظرانداز کیا جاتا ہے، لیکن ہمارا مطالعہ ظاہر
          کرتا ہے کہ یہ ذیابیطس سے بچاؤ کا ایک طاقتور اور سستا ذریعہ ہو سکتا
          ہے،" محققین نے کہا۔
        </p>

        <p className="mt-4">
          خوشخبری؟ مہنگے انجیکشنوں کے برعکس، اس کے لیے کسی نسخے کی ضرورت نہیں:{" "}
          <b>
            کھانے کی میز پر آہستہ آہستہ کھانا آپ کے جسم کے قدرتی ہارمونز کو صحیح
            طریقے سے کام کرنے میں مدد کر سکتا ہے۔
          </b>
        </p>

        <p className="mt-4">
          <Link
            href="https://nypost.com/2025/08/22/health/common-mistake-can-mess-with-bodys-natural-ozempic-hormones-up-diabetes-risk/?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            NY Post پر مکمل خبر
          </Link>
        </p>
      </>
    ),
  },

  "three-lifestyle-changes-diabetes-risk": {
    slug: "three-lifestyle-changes-diabetes-risk",
    title: "Three Simple Lifestyle Changes Slash Diabetes Risk by 31%",
    titleUr:
      "تین سادہ طرز زندگی کی تبدیلیاں ذیابیطس کا خطرہ 31 فیصد کم کر دیتی ہیں",
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
    urduContent: (
      <>
        <p className="mt-4">
          کچھ امید افزا خبر ہے: آپ کو ٹائپ 2 ذیابیطس سے خود کو بچانے کے لیے
          انتہائی اقدامات کی ضرورت نہیں ہے۔ ایک بڑے چھ سالہ یورپی ٹرائل میں پایا
          گیا کہ{" "}
          <b>
            تین سادہ تبدیلیوں — کم کیلوری والی بحیرہ روم کی خوراک کا اتباع،
            باقاعدگی سے ورزش، اور منظم وزن کم کرنے کی مدد — کو یکجا کرنے سے خطرے
            سے دوچار بالغوں میں ذیابیطس کا خطرہ تقریباً ایک تہائی کم ہو گیا۔
          </b>
        </p>

        <p className="mt-4">
          ہزاروں شرکاء پر مشتمل اس مطالعے سے اس بات کے مضبوط شواہد ملتے ہیں کہ
          طرز زندگی کی دوائیں پری ذیابیطس سے مکمل ٹائپ 2 ذیابیطس کی طرف بڑھنے سے
          روکنے میں دواؤں کی طرح ہی طاقتور ہو سکتی ہیں۔
        </p>

        <p className="mt-4">
          "یہ ایک ثبوت ہے کہ حاصل کرنے کے قابل طرز زندگی کی تبدیلیاں صحت عامہ پر
          گہرا اثر ڈال سکتی ہیں،" محققین نے کہا۔
        </p>

        <p className="mt-4">
          جب دنیا بھر میں ذیابیطس تیزی سے بڑھ رہی ہے، یہ نتیجہ کمیونٹیوں کے لیے
          ایک راستہ تجویز کرتا ہے:{" "}
          <b>
            چھوٹی، پائیدار تبدیلیاں ذیابیسٹی کی وبا کے خلاف ہمارا بہترین دفاع ہو
            سکتی ہیں۔
          </b>
        </p>

        <p className="mt-4">
          <Link
            href="https://www.thescottishsun.co.uk/health/15256391/lifestyle-changes-slash-risk-type-2-diabetes/?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            دی اسکاٹش سن پر مزید پڑھیں
          </Link>
        </p>
      </>
    ),
  },

  "gut-hormone-fgf19-burns-fat": {
    slug: "gut-hormone-fgf19-burns-fat",
    title:
      "Scientists Find Gut Hormone That Talks to the Brain—and Forces the Body to Burn Fat",
    titleUr:
      "سائنسدانوں نے آنت کا ہارمون دریافت کیا جو دماغ سے بات کرتا ہے — اور جسم کو چربی جلانے پر مجبور کرتا ہے",
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
    urduContent: (
      <>
        <p className="mt-4">
          تصور کریں کہ آپ کی آنت میں ایک ہارمون ایک خفیہ قاصد کی طرح کام کر رہا
          ہے، جو سیدھے آپ کے دماغ کو سرگوشی کرتا ہے کہ جسم کا "چربی جلانے" کا
          سوئچ آن کریں۔ یہی بالکل وہی ہے جو محققین نے ایک اہم مطالعے میں دریافت
          کیا ہے جو موٹاپے اور ٹائپ 2 ذیابیطس سے لڑنے کے طریقے کو بدل سکتا ہے۔
        </p>

        <p className="mt-4">
          برازیل کی اسٹیٹ یونیورسٹی آف کمپیناس کے سائنسدانوں نے ظاہر کیا ہے کہ
          آنت میں بننے والا ہارمون <b>FGF19</b> صرف ہاضمے میں مدد نہیں کرتا — یہ{" "}
          <b>
            دماغ کے ہائپوتھیلامس تک پہنچ کر اسے چربی جلانا شروع کرنے کا حکم دیتا
            ہے۔
          </b>{" "}
          نتیجہ؟ توانائی کے اخراجات میں اضافہ، بلڈ شوگر کا بہتر کنٹرول، اور وزن
          میں کمی — کم از کم ان موٹے چوہوں میں جن پر انہوں نے تجربہ کیا۔
        </p>

        <p className="mt-4">
          <Link
            href="https://medicalxpress.com/news/2025-06-intestinal-hormone-fat-weight-loss.html?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            MedicalXpress پر مکمل تحقیقی خلاصہ پڑھیں
          </Link>
        </p>

        <p>
          <Link
            href="https://agencia.fapesp.br/research-reveals-how-hormone-accelerates-fat-burning-and-promotes-weight-loss-in-obese-mice/55135?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            Agência FAPESP تفصیلی رپورٹ
          </Link>
        </p>
      </>
    ),
  },

  "gut-microbes-d-lactate-diabetes": {
    slug: "gut-microbes-d-lactate-diabetes",
    title:
      "Researchers Turn Gut Microbes into Diabetes Fighters—By Targeting D-Lactate",
    titleUr:
      "محققین نے آنت کے جراثیم کو ذیابیطس سے لڑنے والوں میں بدل دیا — D-لیکٹیٹ کو ہدف بنا کر",
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
    urduContent: (
      <>
        <p className="mt-4">
          ایک کینیڈین ٹیم نے دریافت کیا ہے کہ موٹے اور ذیابیطس کے شکار چوہوں میں
          آنت کے مائکروبیل میٹابولائٹ <b>D-لیکٹیٹ</b> کو ہدف بنانے سے بلڈ شوگر
          کے ضابطے میں نمایاں بہتری آئی۔ یہ مطالعہ بتاتا ہے کہ{" "}
          <b>مائکروبایوم کو استعمال کرنا</b> ذیابیطس کے علاج کا ایک نیا طریقہ بن
          سکتا ہے — روایتی انجیکشنوں کا ایک آنت پر مبنی متبادل۔
        </p>

        <p className="mt-4">
          <Link
            href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/scientists-discover-new-way-to-fight-diabetes-how-targeting-gut-microbes-could-transform-treatment/articleshow/123541515.cms?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            <i>ٹائمز آف انڈیا</i> پر مکمل کوریج پڑھیں
          </Link>
        </p>
      </>
    ),
  },

  "cord-blood-predicts-diabetes-risk": {
    slug: "cord-blood-predicts-diabetes-risk",
    title: "Your Baby's Cord Blood Can Predict Diabetes Risk at Birth",
    titleUr: "آپ کے بچے کا نال کا خون پیدائش پر ذیابیطس کا خطرہ بتا سکتا ہے",
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
    urduContent: (
      <>
        <p className="mt-4">
          ایک انقلابی دریافت میں، سائنسدانوں نے ظاہر کیا ہے کہ{" "}
          <b>
            نوزائیدہ بچے کے نال کے خون میں ایپی جینیاتی نشانات ان کی زندگی بھر
            ٹائپ 2 ذیابیطس کے خطرے کی پیش گوئی کر سکتے ہیں
          </b>{" "}
          — معیاری طریقوں کے مقابلے میں تقریباً <b>80 فیصد زیادہ درستگی</b> کے
          ساتھ۔ یہ ابتدائی اسکریننگ میں انقلاب لا سکتا ہے، پیدائش کے لمحے سے ہی
          خطرے سے دوچار بچوں کی شناخت کرتے ہوئے۔
        </p>

        <p className="mt-4">
          <Link
            href="https://www.heraldsun.com.au/health/conditions/diabetes/the-test-that-can-predict-your-babys-risk-of-type-2-diabetes/news-story/3fb30d447aec14277da60c9d092bf2be?utm_source=chatgpt.com"
            target="_blank"
            className="text-primary underline"
          >
            <i>ہیرالڈ سن</i> پر یہ خبر پڑھیں
          </Link>
        </p>
      </>
    ),
  },

  "obesity-chronic-disease-not-overeating": {
    slug: "obesity-chronic-disease-not-overeating",
    title:
      "By 2030, nearly half of all adults will live with obesity – but new science shows it's not just about overeating.",
    titleUr:
      "2030 تک تقریباً نصف بالغ موٹاپے کے ساتھ زندگی گزاریں گے — لیکن نئی سائنس ظاہر کرتی ہے کہ یہ صرف زیادہ کھانے کی وجہ سے نہیں",
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
          Health experts break its impact into two groups. &quot;Sick fat
          disease&quot; happens when fat tissue itself goes haywire and pumps
          out bad hormones that push conditions such as diabetes, hypertension,
          and fatty liver disease. &quot;Fat mass disease&quot; arises from the
          physical strain of excess weight — pressure on the heart, pressure on
          the lungs, sleep apnea, and reduced mobility. Together, these
          pressures are responsible for why obesity is associated with hundreds
          of medical complications.
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
          transcend &quot;eat less, move more.&quot; Long-term management can
          involve nutritional interventions, exercise, behavioral therapy,
          drugs, and even surgery. The word is out: obesity is not a
          straightforward failure of willpower but a multifaceted disease that
          needs integrated solutions.
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
    urduContent: (
      <>
        <p className="mt-4">
          کئی سالوں سے، وزن بڑھنے کو بری عادات — زیادہ کیلوریز اور کم ورزش — سے
          منسوب کیا جاتا رہا ہے۔ لیکن محققین اب موٹاپے کو محض طرز عمل کی بجائے
          گہری حیاتیاتی جڑوں کے ساتھ ایک دائمی، بار بار آنے والی بیماری کے طور
          پر دیکھتے ہیں۔ ضرورت سے زیادہ جسمانی چربی صرف ظاہری شکل کو متاثر نہیں
          کرتی؛ یہ ہارمونز کو درہم برہم کرتی ہے، میٹابولزم کو بگاڑتی ہے، سوزش کو
          بڑھاوا دیتی ہے، اور جوڑوں، اعضاء اور یہاں تک کہ دماغ پر بھاری دباؤ
          ڈالتی ہے۔
        </p>

        <p className="mt-4">
          صحت کے ماہرین اس کے اثر کو دو گروہوں میں تقسیم کرتے ہیں۔ "بیمار چربی
          کی بیماری" اس وقت ہوتی ہے جب چربی کے ٹشو خود خراب ہو جاتے ہیں اور برے
          ہارمونز خارج کرتے ہیں جو ذیابیطس، ہائی بلڈ پریشر اور فیٹی جگر کی
          بیماری کو فروغ دیتے ہیں۔ "چربی کی مقدار کی بیماری" اضافی وزن کے جسمانی
          دباؤ سے پیدا ہوتی ہے — دل پر دباؤ، پھیپھڑوں پر دباؤ، نیند کے دوران
          خرانٹے اور نقل و حرکت میں کمی۔ مجتمع طور پر، یہ دباؤ اس بات کی وضاحت
          کرتے ہیں کہ موٹاپا سینکڑوں طبی پیچیدگیوں سے کیوں وابستہ ہے۔
        </p>

        <p className="mt-4">
          اور بھی بری بات جسم کا اپنا دفاعی طریقہ کار ہے۔ جب لوگ کیلوریز کم کرتے
          ہیں، تو بقا کے طریقہ کار شروع ہو جاتے ہیں: بھوک کے ہارمونز بڑھ جاتے
          ہیں، پیٹ بھرنے کے اشارے گر جاتے ہیں، اور توانائی بچانے کے لیے
          میٹابولزم کم ہو جاتا ہے۔ یہی میٹابولک موافقت ہے، اور اسی وجہ سے خوراکی
          پروگرام تقریباً ہمیشہ ناکام ہوتے ہیں اور وزن کم کرنے کے بعد اسے برقرار
          رکھنا شروع میں وزن کم کرنے سے زیادہ مشکل ہے۔
        </p>

        <p className="mt-4">
          سائنسدان بتاتے ہیں کہ کامیاب علاج کے لیے "کم کھائیں، زیادہ حرکت کریں"
          سے آگے بڑھنا ضروری ہے۔ طویل مدتی انتظام میں غذائی مداخلتیں، ورزش، رویے
          کی تھراپی، دوائیں اور یہاں تک کہ سرجری شامل ہو سکتی ہے۔ پیغام واضح ہے:
          موٹاپا محض قوت ارادی کی ناکامی نہیں بلکہ ایک کثیر جہتی بیماری ہے جس کے
          لیے مربوط حل کی ضرورت ہے۔
        </p>

        <p className="mt-4">
          <b>
            یہ جاننے میں دلچسپی ہے کہ علاج بند کرنے کے بعد وزن کیوں واپس آتا
            رہتا ہے — اور طویل مدت میں موٹاپے کے انتظام کے لیے اس کے کیا مضمرات
            ہیں؟{" "}
            <Link
              href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-025-04200-0"
              target="_blank"
              className="text-primary underline"
            >
              جاننے کے لیے یہاں کلک کریں۔
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
    titleUr:
      "نئے مطالعے سے پتہ چلتا ہے کہ موٹاپے کی دوائیں بند کرنے کے چند ہفتوں بعد وزن واپس آنے لگتا ہے",
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
          This trend isn&apos;t merely a clinical aside—it&apos;s a real-world
          issue. Example: patients who received 36 weeks of tirzepatide regained
          almost as much as half the weight lost after stopping.
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
    urduContent: (
      <>
        <p className="mt-4">
          دنیا بھر کے کلینیکل ٹرائلز کے نئے جائزے سے پتہ چلتا ہے کہ موٹاپے سے
          لڑنے والی دوائیں بند کرنے کے بعد کھوئی ہوئی وزن ہفتوں میں واپس آ جاتی
          ہے۔ درحقیقت، 8ویں ہفتے میں وزن دوبارہ بڑھنا شروع ہوا، اور یہ واپسی
          20ویں ہفتے تک جاری رہی۔ کچھ نے چند مہینوں میں کھوئے ہوئے کلو گرام کا
          ایک بڑا حصہ واپس پایا۔
        </p>

        <p className="mt-4">
          واپسی کا اثر GLP-1 ریسیپٹر ایگونسٹس کے ساتھ خاص طور پر نمایاں تھا —
          ایک قسم جس میں عام طور پر تجویز کی جانے والی دوائیں جیسے سیماگلوٹائیڈ
          اور ٹیرزیپاٹائیڈ شامل ہیں۔
        </p>

        <p className="mt-4">
          دلچسپ بات یہ ہے کہ علاج کے دوران ابتدائی طور پر زیادہ وزن کم ہونا اور
          مستمر طرز زندگی کی مداخلتیں اور بھی شدید واپسی کے نمونوں سے وابستہ
          تھیں۔
        </p>

        <p className="mt-4">
          یہ رجحان محض ایک طبی ضمنی بات نہیں — یہ ایک حقیقی دنیا کا مسئلہ ہے۔
          مثال کے طور پر: جن مریضوں نے 36 ہفتے ٹیرزیپاٹائیڈ لی، انہوں نے بند
          کرنے کے بعد کھوئے ہوئے وزن کا تقریباً نصف واپس پایا۔
        </p>

        <p className="mt-4">
          ماہرین خبردار کرتے ہیں کہ مضمرات صرف حجم تک محدود نہیں۔ وزن بڑھنا
          میٹابولزم، بلڈ پریشر، لپڈز اور گلوکوز کنٹرول میں حاصل ہونے والے فوائد
          کو بھی ختم کر سکتا ہے۔
        </p>

        <p className="mt-4">
          اگرچہ وزن کی واپسی دیگر علاجوں — جیسے بیریاٹرک سرجری اور طرز زندگی میں
          تبدیلی — میں بھی تسلیم شدہ ہے، یہ میٹا-تجزیہ موٹاپے سے لڑنے والی
          دوائیوں کے لیے ایک مقداری اور منظم تصویر فراہم کرتا ہے۔
        </p>

        <p className="mt-4">
          <b>
            یہ جاننے میں دلچسپی ہے کہ علاج بند کرنے کے بعد وزن کیوں واپس آتا
            رہتا ہے — اور طویل مدت میں موٹاپے کے انتظام کے لیے اس کے کیا مضمرات
            ہیں؟{" "}
            <Link
              href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-025-04200-0"
              target="_blank"
              className="text-primary underline"
            >
              جاننے کے لیے یہاں کلک کریں۔
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
    titleUr:
      "وزن کم کرنے کے انجیکشنوں کو ترک کرنے کا پوشیدہ خطرہ: کم وزن کم، زیادہ خطرہ",
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
    urduContent: (
      <>
        <p className="mt-4">
          جب کلینیکل ٹرائلز کی بجائے کلینکس میں استعمال کیا جاتا ہے، تو
          سیماگلوٹائیڈ اور ٹیرزیپاٹائیڈ جیسی انجیکٹیبل GLP-1 دوائیں بھی کم
          شاندار نتائج دیتی ہیں۔ کلیولینڈ کلینک کے ایک بڑے مطالعے کے مطابق جس
          میں موٹاپے کے علاج سے گزرنے والے تقریباً 8,000 بالغوں کو شامل کیا گیا،
          50 فیصد سے زیادہ نے ایک سال کے اندر علاج ترک کر دیا، جس سے بہت سے لوگ
          ٹرائل ماحول میں حاصل ہونے والے فوائد سے محروم ہو گئے۔
        </p>

        <p className="mt-4">اور یہی علاج ترک کرنے کا نتائج پر اثر ہوا:</p>

        <p className="mt-4">
          ابتدائی ترک کرنے والوں (3 ماہ میں) نے صرف 3.6 فیصد جسمانی وزن کم کیا۔
        </p>

        <p className="mt-4">
          بعد میں ترک کرنے والوں نے 6.8 فیصد کم کیا، جبکہ ایک سال تک علاج جاری
          رکھنے والے مریضوں نے اوسطاً 11.9 فیصد وزن کم کیا۔
        </p>

        <p className="mt-4">
          زیادہ دیکھ بھال کی خوراکوں نے نتائج کو بہتر بنایا — سیماگلوٹائیڈ کی
          زیادہ سے زیادہ خوراک لینے والے مریضوں نے 13.7 فیصد تک اور ٹیرزیپاٹائیڈ
          لینے والوں نے 18.0 فیصد تک وزن کم کیا۔
        </p>

        <p className="mt-4">
          خواتین، ٹیرزیپاٹائیڈ مریض، اور زیادہ خوراک لینے والے کم از کم 10 فیصد
          وزن کم کرنے کا زیادہ امکان رکھتے تھے — ایک حد جو بڑے صحت کے فوائد سے
          وابستہ ہے۔
        </p>

        <p className="mt-4">
          پری ذیابیطس والوں میں، علاج جاری رکھنا واقعی زندگی بدلنے والا تھا: ان
          میں سے 67.9 فیصد نے معمول کی بلڈ گلوکوز سطح حاصل کی، جبکہ ترک کرنے
          والوں میں صرف 33-41 فیصد نے۔ ابتدائی ترک کرنے والے گروپ میں ٹائپ 2
          ذیابیطس پیدا کرنے کا سب سے زیادہ خطرہ تھا۔
        </p>

        <p className="mt-4">
          مختصر: علاج پر قائم رہنا اہمیت رکھتا ہے — دوائیں جاری رکھنا اور صحیح
          خوراک لینا جلدی علاج ترک کرنے کے مقابلے میں وزن کم کرنے اور میٹابولک
          اثر میں نمایاں اضافہ کرتا ہے۔
        </p>

        <p className="mt-4">
          <b>
            یہ جاننے میں دلچسپی ہے کہ یہ موٹاپے کی روزمرہ دیکھ بھال میں کیسے
            ترجمہ ہوتا ہے، اور اس پر قائم رہنا کیسے فائدہ مند ثابت ہو سکتا ہے؟{" "}
            <Link
              href="https://onlinelibrary.wiley.com/doi/10.1002/oby.24331"
              target="_blank"
              className="text-primary underline"
            >
              مزید یہاں پڑھیں۔
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
    titleUr:
      "کیا آپ کی چربی کا ہارمون آپ کو آنتوں کے سرطان سے بچا سکتا ہے؟ وہ حیران کن تعلق جو ہم نہیں جانتے تھے",
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
            Is your very own fat shaping your cancer risk in ways you can&apos;t
            even imagine?{" "}
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
    urduContent: (
      <>
        <p className="mt-4">
          جب ہم جسمانی چربی کی اصطلاح سنتے ہیں تو دفاع عام طور پر پہلا لفظ نہیں
          ہوتا جو ذہن میں آتا ہے۔ پھر بھی حالیہ نتائج بتاتے ہیں کہ چربی سے بننے
          والا ایک ہارمون — ایڈیپونیکٹن — آنتوں کے سرطان کے واقعات کو کم کرنے
          میں ایک غیر متوقع کردار ادا کر سکتا ہے، جو دنیا میں سرطان سے اموات کی
          سب سے بڑی وجوہات میں سے ایک ہے۔
        </p>

        <p className="mt-4">
          ایڈیپونیکٹن، ایک ہارمون جو سوزش اور انسولین حساسیت کو منظم کرنے میں
          مدد کرتا ہے، موٹاپے سے متاثرہ افراد میں عام طور پر کم ہوتا ہے۔ لیکن یہ
          ہارمون ایک حفاظتی ڈھال کی طرح کام کرتا ہے۔ تحقیق کے ایک بڑے مجموعی
          تجزیے میں، سائنسدانوں نے دیکھا کہ جن لوگوں میں ایڈیپونیکٹن کی سطح
          زیادہ تھی، ان میں آنتوں کے سرطان کا خطرہ نمایاں طور پر کم تھا، خاص طور
          پر مردوں میں۔ BMI اور طرز زندگی کے عوامل کو کنٹرول کرنے کے بعد بھی یہ
          حفاظتی تعلق برقرار رہا۔
        </p>

        <p className="mt-4">
          توازن کے دوسری طرف لیپٹن ہے، چربی سے بننے والا ایک اور ہارمون۔
          ایڈیپونیکٹن کے برعکس، لیپٹن کی سطح موٹاپے میں عام طور پر زیادہ ہوتی ہے
          اور اسے ٹیومر کو پروان چڑھانے کا شبہ ہے۔ محققین کی حیرانی کے لیے،
          آنتوں کے سرطان کے مجموعی خطرے اور لیپٹن کے درمیان کوئی مضبوط تعلق نہیں
          ملا۔ تاہم، لیپٹن نے آنتوں کے اڈینوماز — سومی لیکن قبل از سرطان پولپس
          جو اکثر سرطان کی طرف جانے والے راستے کا ابتدائی قدم ہوتے ہیں — کے ساتھ
          اہم تعلق ظاہر کیا۔
        </p>

        <p className="mt-4">
          مجتمع طور پر، یہ نتائج چربی کو محض نقصاندہ سمجھنے کے تصور کو چیلنج
          کرتے ہیں۔ بلکہ، چربی کے ہارمونز کی سطح یہ طے کر سکتی ہے کہ چربی کے ٹشو
          سرطان سے بچاتے ہیں یا اسے فروغ دیتے ہیں۔ خاص طور پر مردوں کے لیے،
          ایڈیپونیکٹن کی صحت مند سطح کو بحال کرنا احتیاطی تدابیر کا ایک اہم پہلو
          ہو سکتا ہے، اور اڈینوماز کے ساتھ لیپٹن کا تعلق ابتدائی مرحلے کے خطرے
          کو ٹریک کرنے کی ضرورت کو تقویت دیتا ہے۔
        </p>

        <p className="mt-4">
          <b>
            کیا آپ کی اپنی چربی آپ کے سرطان کے خطرے کو ایسے طریقوں سے متشکل کر
            رہی ہے جن کا آپ تصور بھی نہیں کر سکتے؟{" "}
            <Link
              href="https://bmccancer.biomedcentral.com/articles/10.1186/s12885-025-14362-y"
              target="_blank"
              className="text-primary underline"
            >
              حیران کن تعلقات کے پیچھے سائنس جاننے کے لیے یہاں کلک کریں۔
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "four-diets-rewrite-diabetes-care": {
    slug: "four-diets-rewrite-diabetes-care",
    title: "Four Diets That Could Rewrite Diabetes Care",
    titleUr:
      "چار غذائی نظام جو ذیابیطس کی دیکھ بھال کو نئے سرے سے لکھ سکتے ہیں",
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
          than a single &quot;ideal&quot; diet, practitioners may guide patients
          toward the choice that suits their tastes, cultural patterns, and
          health objectives—thus, making it more likely to stick in the long
          term. Research indicates that no matter what plan is utilized,
          patients experience improvements in glycemic control, body weight, and
          cardiometabolic risk factors when diets are maintained consistently.
        </p>

        <p className="mt-4">
          The takeaway? Nutrition is not an afterthought in diabetes
          treatment—it is a strong, versatile therapy.
        </p>

        <p className="mt-4">
          <b>
            Interested in learning which diet may revolutionize diabetes
            care—and why food might be medicine&apos;s most overlooked
            prescription?{" "}
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
    urduContent: (
      <>
        <p className="mt-4">
          ٹائپ 2 ذیابیطس دنیا بھر میں کروڑوں لوگوں کو تباہ کر رہی ہے، لیکن علاج
          اکثر دواؤں پر تنگ نظری سے مرکوز رہتا ہے۔ اب، محققین اصرار کرتے ہیں کہ
          غذا کو دیکھ بھال میں مرکزی مقام ملنا چاہیے — اور چار غذائی نظام حقیقی
          طور پر شواہد پر مبنی انتخاب کے طور پر نمایاں ہیں۔
        </p>

        <p className="mt-4">
          بحیرہ روم کی خوراک، زیتون کے تیل، مچھلی، سبزیوں اور سارے اناج سے
          بھرپور، دل کی صحت اور بلڈ شوگر کنٹرول کو مستقل طور پر بہتر بناتی ہے۔
          کم کاربوہائیڈریٹ والی خوراک HbA1c کو کم کرنے اور وزن میں کمی میں مدد
          دینے میں طاقتور اثرات دکھاتی ہے، اگرچہ طویل مدتی پابندی ایک چیلنج ہے۔
          پھل، پھلیاں اور فائبر سے بھرپور غذاؤں پر مشتمل مکمل پودوں پر مبنی
          خوراک انسولین حساسیت بڑھاتی ہے اور قلبی خطرے کو کم کرتی ہے۔ آخر میں،
          DASH خوراک سوڈیم کم کرکے اور غذائیت سے بھرپور غذائیں بڑھا کر ذیابیطس
          کے لیے موزوں خوراک کے طور پر کام کرتی ہے۔
        </p>

        <p className="mt-4">
          ان حکمت عملیوں کی خاص بات ان کی لچک ہے۔ ایک "مثالی" غذا کی بجائے،
          معالجین مریضوں کو ان کے ذوق، ثقافتی عادات اور صحت کے اہداف کے مطابق
          انتخاب کی طرف رہنمائی کر سکتے ہیں — اس طرح طویل مدت تک اس پر قائم رہنے
          کا امکان زیادہ ہوتا ہے۔ تحقیق بتاتی ہے کہ کوئی بھی منصوبہ استعمال کیا
          جائے، مریضوں کو گلائیسیمک کنٹرول، جسمانی وزن اور قلب-میٹابولک خطرے کے
          عوامل میں بہتری آتی ہے جب غذا مستقل رکھی جائے۔
        </p>

        <p className="mt-4">
          نتیجہ؟ ذیابیطس کے علاج میں غذا ایک بعد کی سوچ نہیں — یہ ایک طاقتور،
          لچکدار علاج ہے۔
        </p>

        <p className="mt-4">
          <b>
            یہ جاننے میں دلچسپی ہے کہ کون سی غذا ذیابیطس کی دیکھ بھال میں انقلاب
            لا سکتی ہے — اور کھانا طب کا سب سے نظرانداز نسخہ کیوں ہو سکتا ہے؟{" "}
            <Link
              href="https://academic.oup.com/jcem/article/110/Supplement_2/S112/8042170"
              target="_blank"
              className="text-primary underline"
            >
              مزید جاننے کے لیے یہاں کلک کریں۔
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
    titleUr:
      "NHS موٹاپے کی دیکھ بھال پر نظر ثانی کر رہا ہے — یہ ہے جو مریضوں کو جاننا چاہیے",
    date: "2024-11-30",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2070",
    imageAlt: "NHS new guidance on treating obesity as chronic condition",
    authors: "National Institute for Health and Care Excellence (NICE)",
    journal: "NICE Clinical Guidelines",
    content: (
      <>
        <p className="mt-4">
          The UK&apos;s health guardian has published sweeping new advice that
          has the potential to revolutionize how obesity is treated throughout
          the NHS. For the first time, the National Institute for Health and
          Care Excellence (NICE) is encouraging clinicians to treat overweight
          and obesity as chronic long-term conditions that need long-term
          assistance, not short-term solutions.
        </p>

        <p className="mt-4">
          The change isn&apos;t only medical—it&apos;s cultural. Doctors are
          encouraged to seek consent before bringing up the issue of weight, not
          to use stigmatising language, and to think about the individual&apos;s
          broader life background—from poverty to early trauma—before they can
          talk about treatment. NICE underlines the fact that insensitive
          management can drive individuals away from care, making both physical
          and mental health even worse.
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
          The word is out: obesity care must go beyond &quot;eat less, move
          more&quot; and adopt compassion, choice, and long-term support.
        </p>

        <p className="mt-4">
          The word is out: obesity care must go beyond &quot;eat less, move
          more&quot; and adopt compassion, choice, and long-term support.{" "}
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
    urduContent: (
      <>
        <p className="mt-4">
          برطانیہ کے صحت کے محافظ نے جامع نئی رہنمائی شائع کی ہے جو NHS میں
          موٹاپے کے علاج کے طریقے کو انقلابی طور پر بدل سکتی ہے۔ پہلی بار، نیشنل
          انسٹی ٹیوٹ فار ہیلتھ اینڈ کیئر ایکسیلینس (NICE) معالجین کی حوصلہ
          افزائی کر رہا ہے کہ وہ زیادہ وزن اور موٹاپے کو دائمی طویل مدتی حالات
          کے طور پر سمجھیں جن کے لیے طویل مدتی مدد ضروری ہے، نہ کہ قلیل مدتی حل۔
        </p>

        <p className="mt-4">
          یہ تبدیلی صرف طبی نہیں — یہ ثقافتی بھی ہے۔ ڈاکٹروں کی حوصلہ افزائی کی
          جاتی ہے کہ وزن کا مسئلہ اٹھانے سے پہلے رضامندی لیں، بدنام کرنے والی
          زبان استعمال نہ کریں، اور علاج کے بارے میں بات کرنے سے پہلے فرد کے
          وسیع تر زندگی کے پس منظر — غربت سے لے کر ابتدائی صدمے تک — پر غور
          کریں۔ NICE اس بات پر زور دیتا ہے کہ بے حس انتظام افراد کو دیکھ بھال سے
          دور کر سکتا ہے، جس سے جسمانی اور ذہنی صحت دونوں مزید بگڑ سکتی ہے۔
        </p>

        <p className="mt-4">
          تشخیص بھی زیادہ باریک ہے۔ اطباء کو اب BMI اور کمر سے قد کا تناسب دونوں
          لینے کی ترغیب دی جاتی ہے، خاص طور پر اس لیے کہ بعض نسلی اقلیتوں کو BMI
          کی کم سطح پر بھی زیادہ خطرہ ہے۔ اہداف انفرادی اور حقیقت پسندانہ ہونے
          چاہئیں — جیسے بغیر تھکاوٹ سیڑھیاں چڑھنا یا پوتے-پوتیوں کے ساتھ کھیلنا
          — بجائے اس کے کہ صرف ترازو پر نظر رکھی جائے۔
        </p>

        <p className="mt-4">
          علاج کے لحاظ سے، مشورہ ہے کہ غذا اور طرز زندگی کے اقدامات میں لچک برتی
          جائے، یہ تسلیم کرتے ہوئے کہ کوئی ایک منصوبہ سب کے لیے موزوں نہیں۔
          بڑھتی ہوئی جسمانی سرگرمی اور متوازن غذائیت اب بھی اہم سفارشات ہیں،
          حالیہ دوائیں جیسے ٹیرزیپاٹائیڈ، سیماگلوٹائیڈ اور لیراگلوٹائیڈ کچھ
          شرائط کے تحت علاج کے حصے کے طور پر شامل ہیں۔ انتہائی کیسوں کے لیے
          سرجری بھی ایجنڈے پر ہے۔
        </p>

        <p className="mt-4">
          سب سے نمایاں بات یہ ہے کہ روک تھام کو اب بچوں اور خاندانوں کو شامل
          کرنے کے لیے وسعت دی گئی ہے، جس میں پائیدار مدد اور کم عمری سے صحت مند
          ماحول پیدا کرنے پر توجہ دی گئی ہے۔
        </p>

        <p className="mt-4">
          پیغام واضح ہے: موٹاپے کی دیکھ بھال "کم کھائیں، زیادہ حرکت کریں" سے آگے
          جانی چاہیے اور ہمدردی، انتخاب اور طویل مدتی مدد کو اپنانا چاہیے۔
        </p>
      </>
    ),
  },

  "ckm-syndrome-heart-kidney-disease": {
    slug: "ckm-syndrome-heart-kidney-disease",
    title:
      "A Radical Shift: Heart and Kidney Disease Are Now Viewed as One Syndrome",
    titleUr:
      "ایک بنیادی تبدیلی: دل اور گردے کی بیماری کو اب ایک ہی سنڈروم سمجھا جاتا ہے",
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
            Might this &quot;one-disease&quot; strategy shift the way your
            doctor works with you to manage your health?{" "}
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
    urduContent: (
      <>
        <p className="mt-4">
          برسوں سے، ہم نے طب کو دل کی بیماری، ذیابیطس اور گردے کی بیماری کو الگ
          الگ جنگوں کے طور پر لڑتے دیکھا ہے۔ لیکن امریکن ہارٹ ایسوسی ایشن کی ایک
          نئی پہل ان دیواروں کو توڑ رہی ہے، یہ کہتے ہوئے کہ یہ سب ایک ہی حالت کے
          مظاہر ہیں: قلبی-گردہ-میٹابولک (CKM) سنڈروم۔
        </p>

        <p className="mt-4">
          یہ انقلاب لاکھوں لوگوں کی دیکھ بھال کو بدل سکتا ہے۔ کیوں؟ کیونکہ
          موٹاپا، انسولین مزاحمت، اور ہائی بلڈ پریشر ایک ساتھ آتے ہیں، خاموشی سے
          دل کا دورہ یا گردے کی بیماری سے سال پہلے خون کی نالیوں، گردوں اور دل
          کو نقصان پہنچاتے ہیں۔ دیر سے جواب دینے کی بجائے، نیا نظام اطباء کو جلد
          جواب دینے کی ترغیب دیتا ہے — نوجوان بالغوں میں خطرے کی اسکریننگ، بلڈ
          شوگر کے ساتھ کمر کا گھیرا بھی جانچنا، اور غذا، تناؤ اور دیکھ بھال تک
          رسائی جیسے سماجی عوامل کو شامل کرنا۔
        </p>

        <p className="mt-4">
          یہ ماڈل پانچ مراحل قائم کرتا ہے، خطرے سے پاک روک تھام (مرحلہ 0) سے لے
          کر مکمل بیماری (مرحلہ 4) تک۔ پیٹ کی اضافی چربی یا پری ذیابیطس والوں کی
          شناخت مرحلہ 1 میں ہی ہو جاتی ہے، تاکہ پہلی انتباہی علامات ظاہر ہونے سے
          پہلے مداخلت ہو سکے۔
        </p>

        <p className="mt-4">
          علاج بھی تیار ہوتا ہے۔ رہنمائی ان دواؤں کو اجاگر کرتی ہے جو بیماریوں
          کو عبور کرتی ہیں: دل اور گردوں کی حفاظت کے لیے SGLT-2 inhibitors، وزن
          اور بلڈ شوگر میں مدد کے لیے GLP-1 receptor agonists، اور طرز زندگی کی
          تبدیلیاں جو تینوں خطرات کو بیک وقت کم کرتی ہیں۔ سب سے اہم بات، یہ
          مربوط، ٹیم کی فراہم کردہ دیکھ بھال کا مطالبہ کرتی ہے — تاکہ مریضوں کو
          ماہرین کے درمیان نہ ادھر ادھر کیا جائے، بلکہ ایک واحد، جامع منصوبے کی
          رہنمائی ملے۔
        </p>

        <p className="mt-4">
          خلاصہ: CKM سنڈروم دائمی بیماری کو دیکھنے کے ہمارے طریقے کو بدلتا ہے۔
          الگ الگ مسائل کی بجائے، یہ ایک ہی باہم جڑا بحران ہے — اور ایک ایسا
          بحران جسے جلدی اور بطور ٹیم حل کیا جائے تو سست کیا یا روکا جا سکتا ہے۔
        </p>

        <p className="mt-4">
          <b>
            کیا یہ "ایک بیماری" حکمت عملی آپ کے ڈاکٹر کے آپ کے ساتھ صحت کے
            انتظام میں کام کرنے کے طریقے کو بدل سکتی ہے؟{" "}
            <Link
              href="https://www.ahajournals.org/doi/10.1161/cir.0000000000001184"
              target="_blank"
              className="text-primary underline"
            >
              مزید یہاں جانیں۔
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
    titleUr:
      "ذیابیطس کے مریضوں میں سے دو تہائی کو فیٹی جگر ہے — اور زیادہ تر کو پتہ نہیں",
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
            Fatty liver is no silent bystander—it&apos;s a metabolic warning
            sign that usually precedes.{" "}
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
    urduContent: (
      <>
        <p className="mt-4">
          ٹائپ 2 ذیابیطس والے 70 فیصد سے زیادہ افراد کو میٹابولک dysfunction سے
          وابستہ steatotic جگر کی بیماری (MASLD) ہے، جسے پہلے فیٹی جگر کی بیماری
          کہا جاتا تھا۔ لیکن اسے ابھی تک اچھی طرح تسلیم نہیں کیا جاتا — باوجود
          اس کے کہ یہ ذیابیطس کی سب سے عام اور مہلک پیچیدگیوں میں سے ایک ہے۔
          امریکن ڈائیبیٹیز ایسوسی ایشن کی مریض اتفاق رائے رپورٹ اب فوری کارروائی
          کا مطالبہ کرتی ہے: ابتدائی اسکریننگ، خطرے کی درجہ بندی، اور اس کے مہلک
          نتائج کو روکنے کے لیے مربوط دیکھ بھال۔
        </p>

        <p className="mt-4">
          MASLD کی تشخیص اس وقت ہوتی ہے جب جگر میں موٹاپے یا بلند بلڈ شوگر جیسی
          میٹابولک حالتوں کے ساتھ اضافی چربی ہو — اور الکحل کی وجہ سے نہ ہو۔
          ٹائپ 2 ذیابیطس والے تقریباً تمام افراد میں پہلے سے MASH کے آثار ہوتے
          ہیں، اور تقریباً پانچ میں سے ایک کو بھی جدید fibrosis ہے، جس سے
          cirrhosis، جگر کے سرطان اور جگر سے متعلق اموات کا خطرہ نمایاں طور پر
          بڑھ جاتا ہے۔
        </p>

        <p className="mt-4">
          یہ دل کی بیماری، گردے کی بیماری اور دیگر سرطانوں کا خطرہ بھی بڑھاتا ہے
          اور معیار زندگی کو نمایاں طور پر کم کرتا ہے۔
        </p>

        <p className="mt-4">
          چونکہ MASLD عام طور پر بغیر علامات کے ہوتا ہے، ADA ہر ٹائپ 2 ذیابیطس
          یا پری ذیابیطس کے مریض، خاص طور پر زیادہ وزن والے افراد میں، جگر کی
          fibrosis کے لیے فعال اسکریننگ تجویز کرتا ہے۔ تشخیص غیر حملہ آور ٹیسٹوں
          اور امیجنگ پر مبنی ہونی چاہیے۔
        </p>

        <p className="mt-4">
          رپورٹ انتظام کے لیے ایک کثیر جہتی نقطہ نظر کو اجاگر کرتی ہے: غذا اور
          ورزش سے وزن میں کمی، GLP-1 agonist، SGLT-2 inhibitor اور pioglitazone
          کا استعمال، اور مناسب صورتوں میں targeted وٹامن E یا resmetirom کا
          استعمال۔
        </p>

        <p className="mt-4">
          قابل ذکر بات یہ ہے کہ MASLD کا علاج مربوط ہونا چاہیے — ذیابیطس کے
          ڈاکٹر، جگر کے ماہرین، غذائیت دان، اور بنیادی نگہداشت کے معالجین
          ابتدائی خطرے کی شناخت اور طویل مدتی فالو اپ کے لیے مل کر کام کریں۔
        </p>

        <p className="mt-4">
          <b>
            فیٹی جگر ایک خاموش تماشائی نہیں — یہ ایک میٹابولک انتباہی علامت ہے۔{" "}
            <Link
              href="https://diabetesjournals.org/care/article/48/7/1057/160536/Metabolic-Dysfunction-Associated-Steatotic-Liver"
              target="_blank"
              className="text-primary underline"
            >
              یہاں کلک کریں کہ MASLD کی اسکریننگ اور ابتدائی مداخلت ذیابیطس کے
              لاکھوں مریضوں کے لیے زندگی کی ڈور کیوں ہو سکتی ہے۔
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
    titleUr:
      "سائنسدان اب دل کی بیماری، ذیابیطس اور گردے کی ناکامی کو ایک بڑا مسئلہ کیوں سمجھتے ہیں",
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
          a single umbrella isn&apos;t merely a new medical paradigm—it may be
          the strongest means to avoid chronic illness and add years of healthy
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
    urduContent: (
      <>
        <p className="mt-4">
          طب نے دہائیوں سے دل کی بیماری، گردے کی ناکامی اور ذیابیطس کو الگ الگ
          دشمنوں کے طور پر لڑا ہے۔ پھر بھی تحقیق کا ایک نیا ادارہ دعوی کرتا ہے
          کہ یہ ناقابل علیحدگی طور پر جڑے ہوئے ہیں — اور ان سے مل کر لڑنا صحت کی
          دیکھ بھال کے مستقبل کو نئی شکل دے گا۔
        </p>

        <p className="mt-4">
          اطباء اب ایک بنیادی حالت جانتے ہیں جسے Cardio-Metabo-Renal (CMR)
          سنڈروم کہا جاتا ہے، جو ظاہر کرتا ہے کہ اضافی وزن، بلند بلڈ شوگر اور
          ہائی بلڈ پریشر بیک وقت کئی نظاموں میں جسم کو کیسے نقصان پہنچاتے ہیں۔
          جائزہ اس بات پر زور دیتا ہے کہ موٹاپا، انسولین مزاحمت اور ہائی بلڈ
          پریشر ایک سلسلہ وار ردعمل شروع کرتے ہیں — پہلے میٹابولزم کو متاثر کرتے
          ہیں، پھر گردوں کو، پھر دل کو۔ جب تک مریض دل کے دورے یا گردے کی ناکامی
          سے دوچار ہوتا ہے، سالوں کا خاموش، باہم جڑا نقصان پہلے سے ہو چکا ہوتا
          ہے۔
        </p>

        <p className="mt-4">
          اس تبدیلی میں سب سے زیادہ اہم ابتدائی مداخلت کا امکان ہے۔ میٹابولک سطح
          پر خطرے کی شناخت — پیٹ کا موٹاپا یا پری ذیابیطس — ناقابل واپسی نقصان
          سے پہلے مداخلت کی ایک کھڑکی ہے۔ ابھرتے ہوئے علاج پہلے سے روایتی حدود
          کو توڑ رہے ہیں: SGLT-2 inhibitors گردوں اور دل دونوں کی حفاظت کرتے
          ہیں، اور GLP-1 receptor agonists بلڈ گلوکوز کم کرتے ہیں، موٹاپے کو
          دباتے ہیں اور قلبی خطرہ کم کرتے ہیں۔
        </p>

        <p className="mt-4">
          جائزہ precision medicine کے مستقبل کی طرف بھی نظر دوڑاتا ہے — جہاں
          مصنوعی ذہانت، ڈیجیٹل صحت کے آلات اور جدید biomarkers یہ بتائیں کہ کون
          سے مریض سب سے زیادہ خطرے میں ہیں اور انفرادی روک تھام کی رہنمائی کریں۔
          متعدد ماہرین کی منقطع دیکھ بھال کی بجائے، مریضوں کو تینوں حالتوں کو
          بیک وقت حل کرنے والی مربوط مدد مل سکتی ہے۔
        </p>

        <p className="mt-4">
          سبق واضح ہے: دل، گردے اور میٹابولک بیماری کو ایک چھتری کے تحت یکجا
          کرنا محض ایک نیا طبی نمونہ نہیں — یہ دائمی بیماری سے بچنے اور صحت مند
          زندگی کے سال بڑھانے کا سب سے مضبوط ذریعہ ہو سکتا ہے۔
        </p>

        <p className="mt-4">
          <b>
            یہ جاننے میں دلچسپی ہے کہ تین بیماریوں کو ایک میں یکجا کرنا لاکھوں
            زندگیاں کیسے بچا سکتا ہے؟{" "}
            <Link
              href="https://link.springer.com/article/10.1007/s13300-025-01738-3'"
              target="_blank"
              className="text-primary underline"
            >
              CMR طب کے مستقبل کو دیکھنے کے لیے یہاں کلک کریں۔
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "stopping-weight-loss-drugs-early": {
    slug: "stopping-weight-loss-drugs-early",
    title: "Doctors Warn: Stopping Weight-Loss Drugs Early Slashes Results",
    titleUr:
      "ڈاکٹروں کا انتباہ: وزن کم کرنے کی دوائیں جلدی بند کرنا نتائج کو نصف کر دیتا ہے",
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
    urduContent: (
      <>
        <p className="mt-4">
          سیماگلوٹائیڈ اور ٹرزیپاٹائیڈ جیسے وزن کم کرنے کے انجیکشن کو معجزاتی
          دوائیں قرار دیا جا رہا ہے۔ تاہم ایک نئی حقیقی دنیا کی تحقیق سے پتہ
          چلتا ہے کہ مریض کلینیکل ٹرائلز سے باہر انہیں کیسے استعمال کرتے ہیں، یہ
          خود دواؤں جتنا ہی اہم ہے۔
        </p>

        <p className="mt-4">
          تحقیق نے ہزاروں بالغ افراد کا مشاہدہ کیا جنہیں موٹاپے کے لیے
          سیماگلوٹائیڈ یا ٹرزیپاٹائیڈ تجویز کی گئی تھی۔ ٹرائلز کے قابو میں ماحول
          کے برعکس، بہت سے مریضوں کو خوراک بڑھانے کے شیڈول، ضمنی اثرات اور طویل
          مدتی علاج جاری رکھنے میں دشواری ہوئی — نتیجہ: وزن میں انتہائی متفاوت
          کمی۔
        </p>

        <p className="mt-4">
          جو مریض علاج جاری رکھتے رہے انہوں نے سب سے زیادہ وزن گھٹایا — جو
          کلینیکل ٹرائل کے نتائج کے برابر تھا۔ لیکن اکثریت نے جلدی چھوڑ دیا،
          اکثر پہلے چھ سے بارہ مہینوں میں، جس سے وزن میں کمی آدھی رہ گئی۔ خوراک
          بڑھانے کی مشکلات نے یہ بھی یقینی بنایا کہ بعض مریض کبھی بہترین علاجی
          خوراک تک نہ پہنچ سکے۔
        </p>

        <p className="mt-4">
          اہم بات یہ ہے کہ ٹرزیپاٹائیڈ کے ساتھ علاج جاری رکھنے کا امکان
          سیماگلوٹائیڈ سے کچھ زیادہ تھا اور اس سے اوسطاً زیادہ وزن کم ہوا۔ تاہم
          سب سے بڑا سبق ایک ہی تھا: مستقل استعمال کے بغیر، ان دواؤں کی صلاحیت
          نمایاں طور پر کم ہو جاتی ہے۔
        </p>

        <p className="mt-4">
          محققین اس بات پر زور دیتے ہیں کہ موٹاپا ایک بار بار لوٹنے والی، دائمی
          بیماری ہے — اور ان دواؤں کو فوری حل کے بجائے طویل مدتی علاج کے طور پر
          سمجھنا چاہیے۔ ڈاکٹروں کی باقاعدہ نگرانی، ضمنی اثرات کے بارے میں بہتر
          تعلیم، اور حقیقت پسندانہ اہداف طے کرنا مریضوں کو علاج پر قائم رکھنے
          میں مدد دے سکتا ہے۔
        </p>

        <p className="mt-4">
          <b>
            جاننا چاہتے ہیں کہ طاقتور نئی موٹاپا دوائیں حقیقی زندگی میں کیا
            نتائج دیتی ہیں؟{" "}
            <Link
              href="https://dom-pubs.onlinelibrary.wiley.com/doi/full/10.1111/dom.70004"
              target="_blank"
              className="text-primary underline"
            >
              روزمرہ استعمال میں سیماگلوٹائیڈ اور ٹرزیپاٹائیڈ کے اعداد و شمار
              جاننے کے لیے یہاں کلک کریں۔
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "semaglutide-liver-repair": {
    slug: "semaglutide-liver-repair",
    title: "From Weight Loss to Liver Repair: The Hidden Power of Semaglutide",
    titleUr: "وزن کم کرنے سے جگر کی مرمت تک: سیماگلوٹائیڈ کی پوشیدہ طاقت",
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
          This research throws some light on semaglutide&apos;s multifaceted
          action— implying that it involves biochemically rebalancing in
          metabolic and immune systems and not just through weight reduction
          alone. Considering the worldwide increase in MASH and its
          transformation into cirrhosis and liver cancer, such insights are a
          significant breakthrough.
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
    urduContent: (
      <>
        <p className="mt-4">
          نیچر میڈیسن میں شائع ہونے والے نئے تحقیقی نتائج میں سائنسدانوں نے
          دریافت کیا ہے کہ سیماگلوٹائیڈ وزن کم کرنے اور خون میں گلوکوز کنٹرول سے
          کہیں زیادہ کام کر سکتی ہے۔ یہ جی ایل پی-1 دوا میٹابولک ڈسفنکشن سے
          وابستہ اسٹیاٹو ہیپاٹائیٹس (MASH) میں جگر کی سوزش اور داغ کو بھی ٹھیک
          کرتی ہے — جو فیٹی لیور بیماری کی زیادہ سنگین شکل ہے اور ذیابیطس و
          موٹاپے سے گہرا تعلق رکھتی ہے۔
        </p>

        <p className="mt-4">
          MASH کے پری کلینیکل ماڈلز میں محققین نے ظاہر کیا کہ سیماگلوٹائیڈ نہ
          صرف جگر کی ساخت کو بہتر کرتی ہے — فائبروسس اور سوزشی نشانات کو کم کرتے
          ہوئے — بلکہ خون میں پروٹین کی پوری ترکیب کو بھی نئے سرے سے ترتیب دیتی
          ہے۔ پروٹیوم تجزیہ نے 72 پروٹین کا انکشاف کیا جو میٹابولزم، سوزش اور
          فائبروسس سے منسلک ہیں، جو معمول کے جگر کے کام سے جڑے نمونوں کی طرف
          واپس آ گئے۔ یہی بائیو مارکر بعد میں مریضوں کے نمونوں میں بھی تصدیق
          ہوئے۔
        </p>

        <p className="mt-4">
          یہ تحقیق سیماگلوٹائیڈ کے کثیر الجہتی عمل پر روشنی ڈالتی ہے — یہ ظاہر
          کرتے ہوئے کہ یہ دوا صرف وزن کم کرنے سے نہیں بلکہ میٹابولک اور مدافعتی
          نظام کو بایو کیمیکل طور پر متوازن کر کے کام کرتی ہے۔ MASH کے عالمی
          پھیلاؤ اور سروسس و جگر کے کینسر میں اس کی تبدیلی کے پیش نظر یہ نتائج
          ایک اہم پیش رفت ہیں۔
        </p>

        <p className="mt-4">
          داؤ بہت اونچے ہیں: سیماگلوٹائیڈ ابتدائی مرحلے کے MASH کے لیے پہلا مؤثر
          علاج بن سکتی ہے، جو فیٹی لیور کی ترقی کو روک سکتی ہے — یا اسے واپس پلٹ
          بھی سکتی ہے — جب یہ ابھی قابلِ علاج ہو۔
        </p>

        <p className="mt-4">
          <b>
            جاننا چاہتے ہیں کہ ہفتہ وار انجیکشن مالیکیولر سطح پر آپ کے جگر کو
            کیسے بدل سکتا ہے؟{" "}
            <Link
              href="https://www.nature.com/articles/s41591-025-03799-0"
              target="_blank"
              className="text-primary underline"
            >
              مزید جاننے کے لیے یہاں کلک کریں۔
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
    titleUr:
      "بحران کا بوجھ: عالمی موٹاپے اور دل کی بیماری کے درمیان تعلق کا تجزیہ",
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
          connection to cardiovascular disease (CVD), the world&apos;s leading
          cause of death. The research highlights that as of 2022, over one
          billion people were living with obesity. This escalating crisis is
          directly fueling a surge in heart-related conditions, with high body
          mass index (BMI) responsible for 1.9 million CVD deaths in 2021
          alone—a number that has more than doubled since 1990.
        </p>
        <p className="mt-4">
          The paper, &quot;The Weight of Cardiovascular Diseases,&quot; presents
          a comprehensive analysis showing that since 1990, the age-standardised
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
          potentially &quot;game-changing&quot; medical interventions, such as
          GLP-1 receptor agonists (GLP-1RAs), for managing weight and improving
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
    urduContent: (
      <>
        <p className="mt-4">
          جریدے <em>Global Heart</em> میں شائع ایک اہم رپورٹ عالمی موٹاپے کی وبا
          کی خوفناک وسعت اور قلبی امراض (CVD) — دنیا میں موت کی سب سے بڑی وجہ —
          سے اس کے گہرے تعلق کو بے نقاب کرتی ہے۔ تحقیق بتاتی ہے کہ 2022 تک ایک
          ارب سے زیادہ لوگ موٹاپے کا شکار تھے۔ یہ بڑھتا بحران دل کی بیماریوں کی
          لہر کو براہ راست ہوا دے رہا ہے — 2021 میں صرف زیادہ BMI کی وجہ سے 19
          لاکھ CVD اموات ہوئیں، جو 1990 کے مقابلے میں دوگنی سے بھی زیادہ ہیں۔
        </p>
        <p className="mt-4">
          "The Weight of Cardiovascular Diseases" نامی یہ مقالہ ایک جامع تجزیہ
          پیش کرتا ہے جو ظاہر کرتا ہے کہ 1990 سے خواتین میں موٹاپے کا پھیلاؤ
          دوگنا اور مردوں میں تین گنا ہو چکا ہے۔ مصنفین سوچ کے انداز میں اہم
          تبدیلی پر زور دیتے ہیں — پالیسی ساز اور ڈاکٹر موٹاپے کو محض "طرزِ
          زندگی کا انتخاب" سمجھنا بند کریں۔ اس کے بجائے اسے حیاتیاتی، سماجی،
          ماحولیاتی اور تجارتی عوامل سے پیدا ہونے والا پیچیدہ، کثیر الجہتی عارضہ
          سمجھا جائے جس کے لیے جامع اور مربوط ردعمل ضروری ہے۔
        </p>
        <p className="mt-4">
          آگے دیکھتے ہوئے رپورٹ صحت عامہ اور طبی دواؤں دونوں میں قابلِ عمل حکمتِ
          عملیوں کا خاکہ پیش کرتی ہے۔ یہ ممکنہ طور پر "گیم چینجر" طبی مداخلتوں —
          جیسے GLP-1 ریسیپٹر agonists (GLP-1RAs) — کی صلاحیت کی طرف اشارہ کرتی
          ہے جو وزن کنٹرول اور قلبی نتائج بہتر بنانے میں مددگار ہو سکتی ہیں۔
          مصنفین عالمی صحت تنظیموں، صحت کے نظاموں اور حکومتوں سے مربوط اقدامات
          کا مطالبہ کرتے ہیں کہ موٹاپے اور دل کی بیماری کے آپس میں جڑے بحرانوں
          سے نمٹنے کے لیے شواہد پر مبنی پالیسیاں نافذ کی جائیں۔
        </p>
        <p className="mt-4">
          <b>
            مزید معلومات کے لیے{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/DOC-20250907-WA0014._11zon.pdf"
              target="_blank"
              className="text-primary underline"
            >
              یہاں کلک کریں۔
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
    titleUr:
      "اوزمپک کی نئی سرحد: ایف ڈی اے نے گردوں اور دل کی حفاظت کے لیے توسیعی استعمال کی منظوری دے دی",
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
    urduContent: (
      <>
        <p className="mt-4">
          جنوری 2025 سے نافذ ایک اہم لیبل اپ ڈیٹ میں، امریکی فوڈ اینڈ ڈرگ
          ایڈمنسٹریشن (FDA) نے اوزمپک (سیماگلوٹائیڈ) کے منظور شدہ استعمالات میں
          توسیع کر دی ہے۔ خون میں شکر کنٹرول کرنے اور دل کی حفاظت کے علاوہ،
          اوزمپک اب ٹائپ 2 ذیابیطس اور دائمی گردوں کی بیماری میں مبتلا بالغوں
          میں eGFR کمی، آخری مرحلے کی گردوں کی بیماری اور قلبی موت کے خطرے کو کم
          کرنے کے لیے بھی سرکاری طور پر تجویز کی گئی ہے۔
        </p>

        <p className="mt-4">
          GLP-1 ریسیپٹر agonist اوزمپک اب مریضوں کی دیکھ بھال میں تین کردار ادا
          کرتی ہے: ٹائپ 2 ذیابیطس میں خوراک اور ورزش کے ساتھ گلائسیمک کنٹرول
          بہتر کرنا، قائم شدہ دل کی بیماری میں بڑے قلبی واقعات (دل کا دورہ یا
          فالج) کا خطرہ کم کرنا، اور اب ٹائپ 2 ذیابیطس کے ساتھ دائمی گردوں کی
          بیماری کے مریضوں کو گردوں کی اہم حفاظت فراہم کرنا۔
        </p>

        <p className="mt-4">
          مریض کی حفاظت سب سے اہم ہے — اپ ڈیٹ شدہ لیبل میں{" "}
          <strong>باکسڈ وارننگ</strong> برقرار ہے جو چوہوں کی تحقیق میں دیکھے
          گئے تھائیرائیڈ C-cell ٹیومر کے ممکنہ خطرے سے متعلق ہے۔ مدیولری
          تھائیرائیڈ کارسینوما (MTC) کی ذاتی یا خاندانی تاریخ رکھنے والے مریضوں
          کو اوزمپک نہیں دی جانی چاہیے۔ دیگر اہم انتباہات میں شدید لبلبے کی
          سوزش، ذیابیطسی ریٹینوپیتھی کی پیچیدگیاں، سنگین معدے کے ردعمل، اور عام
          بے ہوشی کے دوران پھیپھڑوں میں خوراک جانے کا نیا اجاگر شدہ خطرہ شامل
          ہیں۔
        </p>

        <p className="mt-4">
          کلینیکل ٹرائل ڈیٹا کے مطابق، اوزمپک استعمال کرنے والے مریضوں میں سب سے
          عام ضمنی اثرات میں متلی، قے، اسہال، پیٹ میں درد اور قبض شامل ہیں۔ یہ
          ردعمل، خاص طور پر معدے کے مسائل، علاج کے ابتدائی خوراک بڑھانے کے مرحلے
          میں سب سے زیادہ دیکھے گئے۔
        </p>

        <p className="mt-4">
          <b>
            یہ توسیعی منظوری ٹائپ 2 ذیابیطس اور اس کی پیچیدگیوں کے انتظام میں
            ایک نئے باب کا آغاز کرتی ہے۔ خوراک، طریقہ استعمال اور مکمل حفاظتی
            معلومات کے لیے سرکاری دستاویزات دیکھیں۔{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/Latest-Ozempic-Label-Jan-2025.pdf"
              target="_blank"
              className="text-primary underline"
            >
              مکمل نسخہ معلومات دیکھنے کے لیے یہاں کلک کریں۔
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
    titleUr:
      "وزن کم کرنے سے آگے: ویگووی کو جدید جگر کی بیماری (MASH) کے علاج کی تاریخی منظوری مل گئی",
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
          This new indication is based on clinical trial data showing
          Wegovy&apos;s ability to achieve resolution of MASH and improvement in
          liver fibrosis. The approval is granted under the FDA&apos;s
          accelerated pathway, meaning continued approval may depend on the
          results of ongoing confirmatory trials. This adds a critical new
          dimension to Wegovy&apos;s existing approvals for reducing major
          cardiovascular events and for chronic weight management in adults and
          adolescents with obesity or overweight.
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
    urduContent: (
      <>
        <p className="mt-4">
          جگر کی صحت کے لیے ایک اہم پیش رفت میں، FDA نے ویگووی (سیماگلوٹائیڈ) کو
          بالغوں میں غیر سروٹک میٹابولک ڈسفنکشن سے وابستہ اسٹیاٹو ہیپاٹائیٹس
          (MASH) کے علاج کے لیے تیز رفتار منظوری دے دی ہے — خاص طور پر درمیانی
          سے جدید جگر فائبروسس کے مریضوں کے لیے۔ اگست 2025 سے نافذ یہ لیبل اپ
          ڈیٹ ویگووی کو فیٹی لیور کی اس سنگین بیماری — جسے پہلے NASH کہا جاتا
          تھا — کے علاج میں پیش رو بناتی ہے۔
        </p>

        <p className="mt-4">
          یہ نئی منظوری کلینیکل ٹرائل ڈیٹا پر مبنی ہے جو MASH کے خاتمے اور جگر
          فائبروسس میں بہتری ظاہر کرتا ہے۔ یہ منظوری FDA کے تیز رفتار راستے کے
          تحت دی گئی ہے، یعنی جاری تصدیقی ٹرائلز کے نتائج پر مستقبل کی منظوری
          منحصر ہو سکتی ہے۔ یہ بڑے قلبی واقعات کم کرنے اور موٹاپے یا زیادہ وزن
          میں مبتلا بالغوں اور نوعمروں میں دائمی وزن کنٹرول کے لیے ویگووی کی
          موجودہ منظوریوں میں ایک اہم نئی جہت کا اضافہ کرتی ہے۔
        </p>

        <p className="mt-4">
          نسخہ معلومات میں تھائیرائیڈ C-cell ٹیومر کے خطرے کے لیے{" "}
          <strong>باکسڈ وارننگ</strong> برقرار ہے — جو چوہوں کی تحقیق سے ملی۔ اس
          ممکنہ خطرے کے پیش نظر MTC کی ذاتی یا خاندانی تاریخ رکھنے والے مریضوں
          کو ویگووی کی سفارش نہیں کی جاتی۔ دیگر اہم انتباہات میں شدید لبلبے کی
          سوزش، پتتاشی کی بیماری، خون میں شکر کمی (خاص طور پر دیگر ذیابیطس
          ادویات کے ساتھ) اور خودکشی کے خیالات شامل ہیں۔
        </p>

        <p className="mt-4">
          کلینیکل ٹرائلز میں سب سے عام ضمنی اثرات تمام منظوریوں میں یکساں رہے:
          متلی، اسہال، قے، قبض، پیٹ میں درد اور سر درد۔ یہ اثرات اکثر ابتدائی
          خوراک بڑھانے کے دورانیے میں سب سے زیادہ نمایاں ہوتے ہیں۔
        </p>

        <p className="mt-4">
          <b>
            یہ تاریخی منظوری MASH سے متاثر لاکھوں افراد کے لیے ایک نیا علاجی
            راستہ کھولتی ہے۔ خوراک، طریقہ استعمال اور مکمل حفاظتی ڈیٹا کے لیے
            سرکاری دستاویزات سے رجوع کریں۔{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/Latest-Wegovy-Aug-2025.pdf"
              target="_blank"
              className="text-primary underline"
            >
              مکمل نسخہ معلومات دیکھنے کے لیے یہاں کلک کریں۔
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
    titleUr:
      "سیگلوٹائیڈ (سیماگلوٹائیڈ): ذیابیطس، وزن کنٹرول اور جگر کی صحت کے لیے جامع کلینیکل پروفائل",
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
          Seglutide&apos;s efficacy. Across multiple head-to-head trials,
          semaglutide demonstrated superior reductions in both HbA1c and body
          weight compared to placebo, other GLP-1 RAs (like dulaglutide and
          exenatide ER), DPP-4 inhibitors, and SGLT-2 inhibitors. The landmark
          SUSTAIN 6 cardiovascular outcomes trial revealed a significant{" "}
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
            This profile highlights Seglutide&apos;s robust clinical data and
            its evolving role as a multi-faceted agent for managing complex,
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
    urduContent: (
      <>
        <p className="mt-4">
          سیگلوٹائیڈ (سیماگلوٹائیڈ) ایک انسانی GLP-1 ریسیپٹر agonist ہے جو قدرتی
          انسانی GLP-1 سے 94% مماثلت رکھتا ہے۔ اس کی مالیکیولر ساخت تقریباً ایک
          ہفتے کی طویل نیم-زندگی کے لیے بہترین بنائی گئی ہے، جو آسان ہفتہ وار
          subcutaneous انجیکشن کی اجازت دیتی ہے۔ اس کا عمل کا طریقہ گلوکوز پر
          منحصر انداز میں انسولین کو بڑھانا اور گلوکاگون کو دبانا، معدے کا خالی
          ہونا سست کرنا، اور دماغی مراکز پر اثر انداز ہو کر بھوک کم کرنا اور پیٹ
          بھرے ہونے کا احساس بڑھانا ہے۔
        </p>

        <p className="mt-4">
          سیگلوٹائیڈ کے علاجی استعمالات میں نمایاں توسیع ہوئی ہے۔ ابتدا میں ٹائپ
          2 ذیابیطس کے بالغ مریضوں کے لیے گلائسیمک کنٹرول بہتر کرنے اور بڑے قلبی
          واقعات (MACE) کا خطرہ کم کرنے کی بنیادی دوا کے طور پر قائم، اب اس کے
          استعمالات میٹابولک بیماریوں کی وسیع رینج پر محیط ہیں:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <strong>دائمی وزن کنٹرول:</strong> موٹاپے یا comorbidities کے ساتھ
            زیادہ وزن میں مبتلا بالغوں اور نوعمروں (12+) کے لیے۔
          </li>
          <li>
            <strong>قلبی خطرہ کم کرنا:</strong> قائم شدہ قلبی بیماری اور موٹاپے
            یا زیادہ وزن والے بالغوں کے لیے۔
          </li>
          <li>
            <strong>گردوں کی حفاظت:</strong> ٹائپ 2 ذیابیطس اور CKD کے مریضوں
            میں گردوں کی کارکردگی میں کمی اور آخری مرحلے کی گردوں کی بیماری کا
            خطرہ گھٹانے کے لیے۔
          </li>
          <li>
            <strong>جگر کی صحت (MASH):</strong> درمیانی سے جدید جگر فائبروسس
            (F2-F3) کے ساتھ نان سروٹک MASH کے علاج کے لیے ایک اہم منظوری۔
          </li>
        </ul>

        <p className="mt-4">
          SUSTAIN ٹرائل پروگرام کا وسیع کلینیکل ڈیٹا سیگلوٹائیڈ کی افادیت کو
          واضح کرتا ہے۔ متعدد head-to-head ٹرائلز میں سیماگلوٹائیڈ نے HbA1c اور
          جسمانی وزن دونوں میں پلاسیبو، دیگر GLP-1 RAs (جیسے ڈیولاگلوٹائیڈ اور
          ایگزیناٹائیڈ ER)، DPP-4 inhibitors اور SGLT-2 inhibitors کے مقابلے میں
          نمایاں طور پر زیادہ کمی دکھائی۔ تاریخی SUSTAIN 6 قلبی نتائج ٹرائل نے
          پلاسیبو کے مقابلے MACE کے خطرے میں <strong>26% نمایاں کمی</strong>{" "}
          ظاہر کی۔
        </p>

        <p className="mt-4">
          مؤثر ہونے کے ساتھ، علاج میں حفاظتی پروفائل کا بھی احتیاط سے جائزہ
          ضروری ہے۔ سیگلوٹائیڈ MTC یا Multiple Endocrine Neoplasia syndrome type
          2 (MEN 2) کی ذاتی یا خاندانی تاریخ رکھنے والے مریضوں میں منع ہے۔ اہم
          انتباہات میں شدید لبلبے کی سوزش، پتتاشی کی بیماری، اور متلی و قے جیسے
          معدے کے ضمنی اثرات شامل ہیں — جو خوراک شروع کرنے کے دوران سب سے عام
          ہوتے ہیں۔ قابل ذکر یہ ہے کہ گلوکوز کنٹرول میں تیز بہتری پہلے سے موجود
          ذیابیطسی ریٹینوپیتھی کے عارضی بگاڑ سے منسلک ہو سکتی ہے۔
        </p>

        <p className="mt-4">
          <b>
            یہ پروفائل سیگلوٹائیڈ کے مضبوط کلینیکل ڈیٹا اور پیچیدہ، آپس میں جڑی
            میٹابولک حالتوں کے انتظام میں اس کے بڑھتے کردار کو اجاگر کرتی ہے۔
            مکمل خوراک، طریقہ استعمال اور حفاظتی معلومات کے لیے صحت پیشہ ور
            افراد کو مکمل پروڈکٹ مونوگراف سے رجوع کرنا چاہیے۔{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/Seglutide-Product-Profile-Updated.pdf"
              target="_blank"
              className="text-primary underline"
            >
              مزید معلومات کے لیے یہاں کلک کریں۔
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "semaglutide-kidney-protection-diabetes": {
    slug: "semaglutide-kidney-protection-diabetes",
    title:
      "Semaglutide Shows Major Kidney Protection in Landmark Diabetes Trial",
    titleUr:
      "سیماگلوٹائیڈ نے تاریخی ذیابیطس ٹرائل میں گردوں کی بڑی حفاظت ثابت کر دی",
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
            Want to dive deeper into the data that&apos;s changing the standard
            of care for diabetic kidney disease?{" "}
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
    urduContent: (
      <>
        <p className="mt-4">
          نیو انگلینڈ جرنل آف میڈیسن میں شائع ایک تاریخی تحقیق میں محققین نے
          تصدیق کی ہے کہ سیماگلوٹائیڈ — ایک وسیع پیمانے پر استعمال ہونے والا
          GLP-1 ریسیپٹر agonist — ٹائپ 2 ذیابیطس اور دائمی گردوں کی بیماری (CKD)
          میں مبتلا افراد میں گردوں کی بڑی بیماری کے واقعات کا خطرہ نمایاں طور
          پر کم کرتی ہے۔ یہ نتیجہ خون میں شکر کنٹرول اور وزن کم کرنے سے آگے دوا
          کے اثرات کے بارے میں ایک اہم خلا کو پُر کرتا ہے۔
        </p>

        <p className="mt-4">
          اس ڈبل بلائنڈ، بے ترتیب ٹرائل میں ٹائپ 2 ذیابیطس اور پہلے سے موجود CKD
          کے 3,533 شرکاء شامل تھے۔ مریضوں کو ہفتہ وار 1.0 mg subcutaneous
          سیماگلوٹائیڈ یا پلاسیبو دیا گیا۔ تحقیق کا مقصد گردوں کی ناکامی، گردوں
          کی کارکردگی (eGFR) میں نمایاں کمی، یا گردوں یا قلبی وجوہات سے موت کی
          پیشرفت کا جائزہ لینا تھا۔
        </p>

        <p className="mt-4">
          نتائج اتنے قائل کن تھے کہ ٹرائل جلد بند کرنا پڑا۔ سیماگلوٹائیڈ گروپ
          میں پلاسیبو کے مقابلے گردوں کی بڑی بیماری کے واقعات کا خطرہ{" "}
          <strong>24% کم</strong> رہا۔ اہم نتائج:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>وقت کے ساتھ گردوں کی کارکردگی (eGFR) میں کمی کی سست رفتار۔</li>
          <li>پلاسیبو کے مقابلے کم سنگین منفی واقعات۔</li>
          <li>
            اندازہ لگایا گیا کہ ایک بڑے گردوں کے واقعے کو روکنے کے لیے تقریباً
            20 افراد کو 3 سال تک علاج کرنا ہوگا۔
          </li>
        </ul>

        <p className="mt-4">
          نتیجہ واضح ہے: ٹائپ 2 ذیابیطس اور دائمی گردوں کی بیماری والے بالغوں کے
          لیے سیماگلوٹائیڈ گردوں کی کارکردگی محفوظ رکھنے اور قلبی وجوہات سے موت
          کا خطرہ کم کرنے میں ایک طاقتور ذریعہ ہے — جو اس اعلی خطرے کی آبادی میں
          اہم عضو-حفاظتی علاج کے طور پر اس کا کردار مستحکم کرتی ہے۔
        </p>

        <p className="mt-4">
          <b>
            ذیابیطسی گردوں کی بیماری کے معیاری علاج کو بدلنے والے ڈیٹا میں
            گہرائی سے جانا چاہتے ہیں؟{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/The-FLOW-Trial-Plain-Language-Summary.jpg"
              target="_blank"
              className="text-primary underline"
            >
              مکمل تحقیق یہاں پڑھیں۔
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
    titleUr:
      "FLOW ٹرائل: سیماگلوٹائیڈ نے ذیابیطس کے مریضوں میں گردوں کی ناکامی اور موت کا خطرہ 24% کم کر دیا",
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
          or a placebo. The primary goal was to determine the drug&apos;s
          efficacy in preventing a composite of major kidney events (including
          kidney failure and a substantial loss of function) or death from
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
    urduContent: (
      <>
        <p className="mt-4">
          FLOW ٹرائل کے نام سے مشہور ایک بڑے کلینیکل ٹرائل نے قطعی ثبوت فراہم
          کیا ہے کہ سیماگلوٹائیڈ ٹائپ 2 ذیابیطس اور دائمی گردوں کی بیماری (CKD)
          کے مریضوں کو سنگین گردوں کے نتائج اور موت سے اہم تحفظ دیتی ہے۔ نیو
          انگلینڈ جرنل آف میڈیسن میں شائع یہ نتائج دوا کو اس اعلی خطرے کی مریض
          آبادی کے لیے ایک اہم مداخلت کے طور پر پیش کرتے ہیں۔
        </p>

        <p className="mt-4">
          یہ تحقیق 3,533 شرکاء پر مشتمل ایک بڑے پیمانے پر، ڈبل بلائنڈ، بے ترتیب،
          پلاسیبو کنٹرولڈ ٹرائل تھی۔ مریضوں کو ہفتہ وار 1.0 mg subcutaneous
          سیماگلوٹائیڈ یا پلاسیبو دیا گیا۔ بنیادی مقصد گردوں کی ناکامی، کارکردگی
          میں نمایاں کمی، یا گردوں یا قلبی وجوہات سے موت پر مشتمل مرکب نتائج کو
          روکنے میں دوا کی افادیت جاننا تھا۔
        </p>

        <p className="mt-4">
          نتائج اتنے مثبت تھے کہ ٹرائل قبل از وقت بند کرنا پڑا۔ 3.4 سال کے اوسط
          فالو اپ کے بعد سیماگلوٹائیڈ گروپ میں:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            پلاسیبو گروپ کے مقابلے گردوں کی بڑی بیماری یا قلبی و گردوں سے متعلق
            وجوہات سے موت کا خطرہ <strong>24% کم</strong> رہا۔
          </li>
          <li>
            وقت کے ساتھ گردوں کی کارکردگی میں کمی کی نمایاں طور پر سست رفتار۔
          </li>
          <li>پلاسیبو گروپ کے مقابلے کم سنگین منفی واقعات۔</li>
        </ul>

        <p className="mt-4">
          FLOW ٹرائل کا نتیجہ واضح ہے: سیماگلوٹائیڈ ٹائپ 2 ذیابیطس اور دائمی
          گردوں کی بیماری دونوں کے مریضوں میں اہم گردوں کے نتائج اور قلبی موت کا
          خطرہ مؤثر طریقے سے کم کرتی ہے — جو CKD کے علاج کے مستقبل میں ایک بڑا
          قدم ہے۔
        </p>

        <p className="mt-4">
          <b>
            CKD کے انتظام کا مستقبل بدلنے والے ٹرائل کا مکمل ڈیٹا دیکھیں۔{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/The-FLOW-Trial-Slide-Deck-For-Speaker.pdf"
              target="_blank"
              className="text-primary underline"
            >
              NEJM میں مکمل تحقیق یہاں پڑھیں۔
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
    titleUr:
      "فیز 3 ESSENCE ٹرائل: میٹابولک ڈسفنکشن سے وابستہ اسٹیاٹو ہیپاٹائیٹس میں سیماگلوٹائیڈ",
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
    urduContent: (
      <>
        <p className="mt-4">
          میٹابولک ڈسفنکشن سے وابستہ اسٹیاٹو ہیپاٹائیٹس (MASH) میٹابولک ڈسفنکشن
          سے وابستہ اسٹیاٹوٹک لیور بیماری (MASLD) کی ترقی یافتہ شکل ہے۔
        </p>

        <p className="mt-4">
          سیماگلوٹائیڈ — ایک گلوکاگون جیسا پیپٹائیڈ-1 ریسیپٹر agonist (GLP-1RA)
          — قلبی میٹابولک بیماریوں کی وسیع رینج میں بڑے پیمانے پر تحقیق کا موضوع
          رہا ہے۔
        </p>

        <p className="mt-4">
          ESSENCE ایک جاری فیز 3 ٹرائل ہے جو بایوپسی سے تصدیق شدہ MASH اور
          فائبروسس اسٹیج 2 یا 3 والے شرکاء میں ہفتہ وار subcutaneous
          سیماگلوٹائیڈ 2.4 mg کا پلاسیبو سے موازنہ کرتا ہے۔
        </p>

        <p className="mt-4">
          یہاں ہم 72 ہفتوں کا علاج مکمل کرنے والے پہلے 800 مریضوں کے عبوری
          افادیت اور حفاظتی* نتائج پیش کر رہے ہیں۔
        </p>

        <p className="mt-4">
          <b>
            مزید معلومات کے لیے{" "}
            <Link
              href="https://diabesity.life/wp-content/uploads/2025/10/Phase-3-ESSENCE-trial-Semaglutide-in-metabolic-dysfunction-associated-steatohepatitis.pdf"
              target="_blank"
              className="text-primary underline"
            >
              یہاں کلک کریں۔
            </Link>
          </b>
        </p>
      </>
    ),
  },

  "pharmacologic-treatment-of-obesity-in-adults": {
    slug: "pharmacologic-treatment-of-obesity-in-adults",
    title:
      "Pharmacologic Treatment of Obesity in Adults: Standards of Care in Overweight and Obesity",
    titleUr:
      "بالغوں میں موٹاپے کا دواؤں سے علاج: زیادہ وزن اور موٹاپے میں نگہداشت کے معیارات",
    date: "2026-03-06",
    image: PharmacologicTreatment.src,
    imageAlt:
      "Multiple blister packs of medication, illustrating the findings of the FLOW trial on semaglutide.",
    authors: "American Diabetes Association",
    journal: "American Diabetes Association (ADA)",
    content: (
      <>
        <p className="mt-4">
          Obesity medications may be part of a comprehensive care plan for
          adults with obesity. The Obesity Association, a division of the
          American Diabetes Association (ADA), developed comprehensive,
          evidence-based guidelines on the pharmacologic treatment of obesity in
          adults. When used in conjunction with lifestyle modifications, obesity
          medications have demonstrated efficacy in inducing and sustaining
          weight reduction while concurrently improving clinical outcomes of
          obesity and obesity-related diseases and complications. Health care
          professionals should engage people with obesity in a person-centered,
          shared decision-making approach when selecting an obesity medication
          to optimize health outcomes while emphasizing individual needs and
          preferences. The ADA’s Obesity Association encourages health care
          professionals to adopt these guidelines for treatment of obesity in
          adults.
        </p>

        <p className="mt-4">
          Obesity medications are an essential component of a comprehensive
          approach to obesity management, offering significant benefits beyond
          lifestyle interventions alone for many people. Research indicates that
          pharmacotherapy can lead to greater weight reduction and improved
          weight maintenance than placebo in adults with obesity. Of note,
          randomized controlled trials (RCTs) of obesity medications include
          lifestyle intervention in both placebo and study drug arms, which most
          typically comprises a 500-calorie deficit meal plan and behavioral
          intervention that usually produces 2.6% weight reduction in the
          placebo group, and the placebo group receives a placebo pill or
          injection, as appropriate. In meta-analyses of RCTs, people treated
          with obesity medications experienced substantial weight reduction
          compared with placebo. Participants treated with obesity medications
          also had improvements in cardiometabolic markers, such as glycemia and
          lipid profiles, and some obesity medications demonstrated improvements
          in cardiovascular outcomes and other obesity-related diseases. When
          used appropriately, obesity medications offer a favorable risk-benefit
          profile in many cases, making them a viable option for many people
          with obesity.
        </p>

        <p className="mt-4">
          <b>
            For more information{" "}
            <Link
              href="https://diabetesjournals.org/docm-care/article/1/1/5/164233/Pharmacologic-Treatment-of-Obesity-in-Adults"
              target="_blank"
              className="text-primary underline"
            >
              click here.
            </Link>
          </b>
        </p>
      </>
    ),
    urduContent: (
      <>
        <p className="mt-4">
          موٹاپے کی دوائیں بالغوں میں موٹاپے کے جامع علاج کے منصوبے کا حصہ ہو
          سکتی ہیں۔ امریکن ڈائبیٹیز ایسوسی ایشن (ADA) کی ایک شاخ، Obesity
          Association نے بالغوں میں موٹاپے کے دواؤں سے علاج پر جامع، شواہد پر
          مبنی رہنما اصول تیار کیے ہیں۔ طرزِ زندگی میں تبدیلیوں کے ساتھ استعمال
          ہونے پر، موٹاپے کی دوائیں وزن کم کرنے اور اسے برقرار رکھنے میں مؤثر
          ثابت ہوئی ہیں اور ساتھ ہی موٹاپے اور اس سے جڑی بیماریوں کے طبی نتائج
          کو بہتر کرتی ہیں۔ صحت کے پیشہ ور افراد کو چاہیے کہ موٹاپے کی دوا منتخب
          کرتے وقت مریض کی ذاتی ضروریات اور ترجیحات کو مدنظر رکھتے ہوئے مشترکہ
          فیصلہ سازی کا طریقہ اپنائیں۔ ADA کی Obesity Association صحت کے پیشہ ور
          افراد کو ان رہنما اصولوں کو بالغوں میں موٹاپے کے علاج کے لیے اپنانے کی
          ترغیب دیتی ہے۔
        </p>

        <p className="mt-4">
          موٹاپے کی دوائیں موٹاپے کے انتظام کے جامع طریقہ کار کا ایک لازمی جزو
          ہیں — طرزِ زندگی کی مداخلتوں سے آگے بہت سے افراد کو نمایاں فوائد دیتی
          ہیں۔ تحقیق سے پتہ چلتا ہے کہ دوا علاج (pharmacotherapy) موٹاپے میں
          مبتلا بالغوں میں پلاسیبو کے مقابلے زیادہ وزن میں کمی اور بہتر وزن
          برقراری کا باعث بن سکتی ہے۔ قابلِ ذکر ہے کہ موٹاپے کی دواؤں کے بے
          ترتیب کنٹرولڈ ٹرائلز (RCTs) میں طرزِ زندگی کی مداخلت دونوں گروپوں —
          پلاسیبو اور تحقیقی دوا — میں شامل ہوتی ہے۔ RCTs کے میٹا تجزیوں میں،
          موٹاپے کی دواؤں سے علاج پانے والے شرکاء نے پلاسیبو کے مقابلے نمایاں
          وزن میں کمی دکھائی۔ شرکاء میں قلبی میٹابولک نشانات جیسے گلیسیمیا اور
          لپڈ پروفائلز میں بھی بہتری آئی، اور بعض دواؤں نے قلبی نتائج اور موٹاپے
          سے جڑی دیگر بیماریوں میں بھی بہتری ظاہر کی۔ مناسب استعمال سے یہ دوائیں
          بہت سے موٹاپے کے مریضوں کے لیے ایک قابلِ عمل انتخاب ہیں۔
        </p>

        <p className="mt-4">
          <b>
            مزید معلومات کے لیے{" "}
            <Link
              href="https://diabetesjournals.org/docm-care/article/1/1/5/164233/Pharmacologic-Treatment-of-Obesity-in-Adults"
              target="_blank"
              className="text-primary underline"
            >
              یہاں کلک کریں۔
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
  return Object.values(researchArticles).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}
