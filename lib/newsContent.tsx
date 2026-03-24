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
import Article10 from "../public/news-article-10.jpg";

export interface NewsArticle {
  slug: string;
  title: string;
  titleUr?: string;
  date: string;
  image: string;
  imageAlt: string;
  category: string;
  color: string;
  excerpt: string;
  excerptUr?: string;
  content: React.ReactNode;
  urduContent?: React.ReactNode;
}

export const newsArticles: Record<string, NewsArticle> = {
  "pakistan-diabetes-surge": {
    slug: "pakistan-diabetes-surge",
    title: "DW: What is driving Pakistan’s alarming diabetes surge?",
    titleUr: "DW: پاکستان میں ذیابیطس کے خطرناک اضافے کی وجہ کیا ہے؟",
    date: "2025-05-15",
    image: Article1.src,
    imageAlt: "Healthcare in Pakistan",
    category: "Education",
    color: "bg-orange-500",
    excerpt:
      "Pakistan is in the midst of a growing diabetes crisis, a recent report has revealed. Over 33 million adults in the South Asian nation are living with diabetes and the numbers continue to rise.",
    excerptUr:
      "پاکستان ایک بڑھتے ہوئے ذیابیطس بحران کے درمیان ہے، جیسا کہ ایک حالیہ رپورٹ نے انکشاف کیا ہے۔ جنوبی ایشیائی ملک میں 3 کروڑ 30 لاکھ سے زیادہ بالغ ذیابیطس کے ساتھ زندگی گزار رہے ہیں اور یہ تعداد مسلسل بڑھ رہی ہے۔",
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
    urduContent: (
      <>
        <p>
          <strong>
            پاکستان ایک بڑھتے ہوئے ذیابیطس بحران کے درمیان ہے، جیسا کہ ایک حالیہ
            رپورٹ نے انکشاف کیا ہے۔ جنوبی ایشیائی ملک میں 3 کروڑ 30 لاکھ سے
            زیادہ بالغ ذیابیطس کے ساتھ زندگی گزار رہے ہیں اور یہ تعداد مسلسل بڑھ
            رہی ہے۔
          </strong>
        </p>
        <p className="mt-4">
          پاکستان میں صحت کے ماہرین نے جنوبی ایشیائی ملک میں ذیابیطس کے بڑھتے
          ہوئے کیسوں پر شدید تشویش کا اظہار کیا ہے، اور خبردار کیا ہے کہ اگر
          حکومت فوری اقدامات نہیں کرتی تو صورت حال قابو سے باہر ہو سکتی ہے۔
        </p>
        <p className="mt-4">
          انٹرنیشنل ڈائیبیٹک فیڈریشن (IDF) کی ایک حالیہ رپورٹ جس میں 2021 میں
          ذیابیطس والے بالغوں (20–79 سال) کی تعداد کے لحاظ سے دنیا کے سرفہرست
          ممالک کی درجہ بندی کی گئی، پاکستان کو چین اور بھارت کے بعد 3 کروڑ 30
          لاکھ کے ساتھ تیسرے نمبر پر رکھا گیا ہے۔
        </p>
        <p className="mt-4">
          مزید تفصیلات کے لیے{" "}
          <Link
            href="https://www.dw.com/en/what-is-driving-pakistans-alarming-diabetes-surge/a-60318409"
            target="_blank"
            className="text-primary underline"
          >
            یہاں کلک کریں
          </Link>
          ۔
        </p>
      </>
    ),
  },

  "pm-launches-prevention-program": {
    slug: "pm-launches-prevention-program",
    title:
      "ARAB NEWS: PM launches prevention program as over 33 million Pakistanis found to have diabetes",
    titleUr:
      "ARAB NEWS: وزیراعظم نے روک تھام کا پروگرام شروع کیا جب 3 کروڑ 30 لاکھ سے زیادہ پاکستانیوں میں ذیابیطس پائی گئی",
    date: "2025-06-20",
    image: Article2.src,
    imageAlt: "Prime Minister health initiative",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "ISLAMABAD: Pakistani Prime Minister Shehbaz Sharif said on Thursday, National Diabetes Day, his government was launching a new program for the control and prevention of diabetes in a country where over 33 million people had the chronic disease.",
    excerptUr:
      "اسلام آباد: پاکستانی وزیراعظم شہباز شریف نے جمعرات کو، قومی ذیابیطس ڈے پر، کہا کہ ان کی حکومت ایک ایسے ملک میں ذیابیطس کے کنٹرول اور روک تھام کے لیے ایک نیا پروگرام شروع کر رہی ہے جہاں 3 کروڑ 30 لاکھ سے زیادہ لوگ اس دائمی بیماری میں مبتلا ہیں۔",
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
    urduContent: (
      <>
        <p>
          اسلام آباد: پاکستانی وزیراعظم شہباز شریف نے جمعرات کو، قومی ذیابیطس ڈے
          پر، کہا کہ ان کی حکومت ایک ایسے ملک میں ذیابیطس کے کنٹرول اور روک تھام
          کے لیے ایک نیا پروگرام شروع کر رہی ہے جہاں 3 کروڑ 30 لاکھ سے زیادہ لوگ
          اس دائمی بیماری میں مبتلا ہیں۔
        </p>
        <p className="mt-4">
          اس ہفتے جاری کیے گئے دی لانسیٹ جرنل کے ایک نئے تجزیے کے مطابق، پچھلی
          تین دہائیوں میں دنیا بھر میں ذیابیطس سے متاثر بالغوں کی فیصد دوگنی ہو
          گئی ہے، جس میں سب سے زیادہ اضافہ ترقی پذیر ممالک میں ہوا ہے۔
        </p>
        <p className="mt-4">
          مزید تفصیلات کے لیے{" "}
          <Link
            href="https://www.arabnews.com/node/2579243/pakistan"
            target="_blank"
            className="text-primary underline"
          >
            یہاں کلک کریں
          </Link>
          ۔
        </p>
      </>
    ),
  },

  "pakistan-diabetes-prevalence": {
    slug: "pakistan-diabetes-prevalence",
    title:
      "HEALTH POLICY WATCH: Pakistan Has the World's Highest Diabetes Prevalence—and Lacks Focus on Prevention",
    titleUr:
      "HEALTH POLICY WATCH: پاکستان میں دنیا کی سب سے زیادہ ذیابیطس کی شرح — اور روک تھام پر توجہ کا فقدان",
    date: "2025-07-10",
    image: Article3.src,
    imageAlt: "Diabetes prevention awareness",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "ISLAMABAD – Muhammad Waqas is an engineer at a private telecom company. He still remembers the day six years ago in 2018 when he was diagnosed with diabetes at the age of 30. It completely changed his life.",
    excerptUr:
      "اسلام آباد – محمد وقاس ایک نجی ٹیلی کام کمپنی میں انجینئر ہیں۔ انہیں آج بھی وہ دن یاد ہے جب چھ سال پہلے 2018 میں 30 سال کی عمر میں انہیں ذیابیطس کی تشخیص ہوئی۔ اس نے ان کی زندگی مکمل طور پر بدل دی۔",
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
    urduContent: (
      <>
        <p>
          اسلام آباد – محمد وقاس ایک نجی ٹیلی کام کمپنی میں انجینئر ہیں۔ انہیں
          آج بھی وہ دن یاد ہے جب چھ سال پہلے 2018 میں 30 سال کی عمر میں انہیں
          ذیابیطس کی تشخیص ہوئی۔ اس نے ان کی زندگی مکمل طور پر بدل دی۔
        </p>
        <p className="mt-4">
          وقاس کے لیے یہ تشخیص خاص طور پر حیران کن تھی کیونکہ ان کے والدین میں
          سے کسی کو بھی یہ بیماری نہیں تھی، اور وہ ہمیشہ سے جسمانی طور پر فٹ رہے
          تھے اور اسکول کے دنوں سے ہر طرح کے کھیلوں میں حصہ لیتے رہے تھے۔
        </p>
        <p className="mt-4">
          مزید تفصیلات کے لیے{" "}
          <Link
            href="https://healthpolicy-watch.news/pakistan-has-the-worlds-highest-diabetes-prevalence-and-lacks-focus-on-prevention/#:~:text=World's%20highest%20prevalence%20of%20diabetes&text=Pakistan%20has%20the%20world's%20highest%20adult%20prevalence%20rate.,fourth%20highest%20in%20global%20rankings."
            target="_blank"
            className="text-primary underline"
          >
            یہاں کلک کریں
          </Link>
          ۔
        </p>
      </>
    ),
  },

  "pakistan-diabetics-undiagnosed": {
    slug: "pakistan-diabetics-undiagnosed",
    title:
      "DAWN: Pakistan has 33m diabetics, 27pc still undiagnosed: PM coordinator",
    titleUr:
      "DAWN: پاکستان میں 3 کروڑ 30 لاکھ ذیابیطس کے مریض، 27 فیصد ابھی تک غیر تشخیص شدہ: وزیراعظم کوآرڈینیٹر",
    date: "2025-08-05",
    image: Article4.src,
    imageAlt: "Medical consultation",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "ISLAMABAD: While World Diabetes Day observed on Thursday, Coordinator to the Prime Minister on Health Dr Malik Mukhtar Ahmed Bharath said that diabetes was a major public health concern in Pakistan, requiring a united approach from all sectors to tackle it.",
    excerptUr:
      "اسلام آباد: جمعرات کو عالمی یوم ذیابیطس کے موقع پر، وزیراعظم کے صحت کوآرڈینیٹر ڈاکٹر ملک مختار احمد بھارتھ نے کہا کہ ذیابیطس پاکستان میں ایک بڑا صحت عامہ کا مسئلہ ہے جس سے نمٹنے کے لیے تمام شعبوں کی مشترکہ کوشش ضروری ہے۔",
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
    urduContent: (
      <>
        <p>
          <strong>
            اسلام آباد: جمعرات کو عالمی یوم ذیابیطس کے موقع پر، وزیراعظم کے صحت
            کوآرڈینیٹر ڈاکٹر ملک مختار احمد بھارتھ نے کہا کہ ذیابیطس پاکستان میں
            ایک بڑا صحت عامہ کا مسئلہ ہے جس سے نمٹنے کے لیے تمام شعبوں کی مشترکہ
            کوشش ضروری ہے۔
          </strong>
        </p>
        <Quote author="انہوں نے بری امام میں ایک نان کمیونیکیبل ڈیزیزز (NCDs) سنٹر کا افتتاح کرنے کے بعد کہا۔">
          پاکستان میں تقریباً 3 کروڑ 30 لاکھ افراد ذیابیطس کے ساتھ زندگی گزار
          رہے ہیں، جبکہ تشویشناک طور پر 27 فیصد مزید افراد ابھی تک غیر تشخیص شدہ
          ہیں۔
        </Quote>
        <p className="mt-4">
          مزید تفصیلات کے لیے{" "}
          <Link
            href="https://www.dawn.com/news/1872408/pakistan-has-33m-diabetics-27pc-still-undiagnosed-pm-coordinator"
            target="_blank"
            className="text-primary underline"
          >
            یہاں کلک کریں
          </Link>
          ۔
        </p>
      </>
    ),
  },

  "pakistan-confronts-alarming-diabetes-burden": {
    slug: "pakistan-confronts-alarming-diabetes-burden",
    title:
      "WORLD DIABETES FOUNDATION: Pakistan confronts alarming diabetes burden",
    titleUr:
      "WORLD DIABETES FOUNDATION: پاکستان تشویشناک ذیابیطس کے بوجھ کا سامنا کر رہا ہے",
    date: "2025-09-15",
    image: Article5.src,
    imageAlt: "Healthy lifestyle",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "An estimated 6.7 million people live with diabetes in Pakistan. By 2035, this number is estimated to rise to 12.8 million which places Pakistan among the top ten countries of number of people living with diabetes.",
    excerptUr:
      "پاکستان میں اندازاً 67 لاکھ افراد ذیابیطس کے ساتھ زندگی گزار رہے ہیں۔ 2035 تک یہ تعداد 1 کروڑ 28 لاکھ تک پہنچنے کا تخمینہ ہے جس سے پاکستان ذیابیطس میں مبتلا افراد کی تعداد کے لحاظ سے دنیا کے سرفہرست دس ممالک میں شامل ہو جائے گا۔",
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
    urduContent: (
      <>
        <p>
          پاکستان میں اندازاً 67 لاکھ افراد ذیابیطس کے ساتھ زندگی گزار رہے ہیں۔
          2035 تک یہ تعداد 1 کروڑ 28 لاکھ تک پہنچنے کا تخمینہ ہے جس سے پاکستان
          ذیابیطس میں مبتلا افراد کی تعداد کے لحاظ سے دنیا کے سرفہرست دس ممالک
          میں شامل ہو جائے گا۔
        </p>
        <p className="mt-4">
          یہ بات پاکستان ڈائیبیٹیز لیڈرشپ فورم (PDLF) کے افتتاحی اجلاس میں کہی
          گئی، جو اسلام آباد میں 1-2 مارچ کو منعقد ہوا اور جس میں یورپ، مشرق
          وسطیٰ اور پاکستان سے بین الاقوامی و قومی مقررین، کلیدی رائے رکھنے والے
          ماہرین اور پالیسی ساز شامل ہوئے۔ افتتاحی اجلاس سے وزیر مملکت برائے
          قومی صحت خدمات ریگولیشن اور کوآرڈینیشن، محترمہ سائرہ افضل تارڑ نے خطاب
          کیا، جنہوں نے پاکستان میں ذیابیطس کے چیلنج کی فوری نوعیت اور اس کے
          پیمانے کو اجاگر کیا۔
        </p>
        <p className="mt-4">
          مزید تفصیلات کے لیے{" "}
          <Link
            href="https://www.worlddiabetesfoundation.org/news/pakistan-confronts-alarming-diabetes-burden/"
            target="_blank"
            className="text-primary underline"
          >
            یہاں کلک کریں
          </Link>
          ۔
        </p>
      </>
    ),
  },

  "children-living-with-diabetes": {
    slug: "children-living-with-diabetes",
    title:
      "DAWN: Children among 24,000 living with Type 1 diabetes in Pakistan",
    titleUr:
      "DAWN: پاکستان میں ٹائپ 1 ذیابیطس کے ساتھ زندگی گزارنے والے 24,000 افراد میں بچے بھی شامل",
    date: "2025-09-28",
    image: Article6.src,
    imageAlt: "Medical research",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "KARACHI: Highlighting the need to raise public awareness about diabetes, a public health specialist at a programme held on Tuesday at the Karachi Press Club (KPC) shared that the latest international data shows that 24,000 Pakistanis — the majority of them children — are living with Type 1 diabetes.",
    excerptUr:
      "کراچی: ذیابیطس کے بارے میں عوامی آگاہی بڑھانے کی ضرورت کو اجاگر کرتے ہوئے، کراچی پریس کلب میں منعقدہ ایک پروگرام میں ایک ماہر صحت عامہ نے بتایا کہ تازہ ترین بین الاقوامی اعداد و شمار سے پتہ چلتا ہے کہ 24,000 پاکستانی — جن میں اکثریت بچوں کی ہے — ٹائپ 1 ذیابیطس کے ساتھ زندگی گزار رہے ہیں۔",
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
    urduContent: (
      <>
        <p>
          <strong>
            کراچی: ذیابیطس کے بارے میں عوامی آگاہی بڑھانے کی ضرورت کو اجاگر کرتے
            ہوئے، کراچی پریس کلب (KPC) میں منگل کو منعقدہ ایک پروگرام میں ایک
            ماہر صحت عامہ نے بتایا کہ تازہ ترین بین الاقوامی اعداد و شمار سے پتہ
            چلتا ہے کہ 24,000 پاکستانی — جن میں اکثریت بچوں کی ہے — اس وقت ٹائپ
            1 ذیابیطس، ایک لاعلاج خود کار مدافعتی بیماری، کے ساتھ زندگی گزار رہے
            ہیں۔
          </strong>
        </p>
        <p className="mt-4">
          سینئر کنسلٹنٹ ذیابیطس ایجوکیٹر عروم غفور کو حال ہی میں انٹرنیشنل
          ڈائیبیٹیز فیڈریشن (IDF) کا نائب صدر منتخب کیا گیا ہے۔ وہ یہ باوقار
          عہدہ حاصل کرنے والی پہلی پاکستانی خاتون ہیں، جنہوں نے دنیا بھر کی 270
          سے زائد انجمنوں سے 112 ووٹ حاصل کیے۔
        </p>
        <p className="mt-4">
          مزید تفصیلات کے لیے{" "}
          <Link
            href="https://www.dawn.com/news/1908855/children-among-24000-living-with-type-1-diabetes-in-pakistan"
            target="_blank"
            className="text-primary underline"
          >
            یہاں کلک کریں
          </Link>
          ۔
        </p>
      </>
    ),
  },
  "increased-diabetic-population-in-pakistan": {
    slug: "increased-diabetic-population-in-pakistan",
    title:
      "VITALSNEWS: Pakistan now has 34.5 million, not 33m people living with diabetes, WHO warns",
    titleUr:
      "VITALSNEWS: WHO کا انتباہ — پاکستان میں ذیابیطس کے مریضوں کی تعداد 3 کروڑ 30 لاکھ نہیں بلکہ 3 کروڑ 45 لاکھ ہو گئی",
    date: "2025-11-17",
    image: Article7.src,
    imageAlt: "Medical research",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "Islamabad: Pakistan now has 34.5 million people living with diabetes, a sharp increase from the International Diabetes Federation’s earlier estimate of 33 million, new WHO figures released on World Diabetes Day 2025 show. Health officials say this confirms that Pakistan continues to carry the highest proportional diabetes burden in the world, with one in three adults already affected.",
    excerptUr:
      "اسلام آباد: عالمی یوم ذیابیطس 2025 پر جاری کردہ WHO کے نئے اعداد و شمار کے مطابق پاکستان میں اب 3 کروڑ 45 لاکھ افراد ذیابیطس کے ساتھ زندگی گزار رہے ہیں، جو انٹرنیشنل ڈائیبیٹیز فیڈریشن کے پہلے تخمینے 3 کروڑ 30 لاکھ سے کافی زیادہ ہے۔ صحت حکام کا کہنا ہے کہ اس سے ثابت ہوتا ہے کہ پاکستان دنیا میں ذیابیطس کا سب سے زیادہ متناسب بوجھ اٹھا رہا ہے۔",
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
    urduContent: (
      <>
        <p>
          اسلام آباد: عالمی یوم ذیابیطس 2025 پر جاری کردہ WHO کے نئے اعداد و
          شمار کے مطابق پاکستان میں اب 3 کروڑ 45 لاکھ افراد ذیابیطس کے ساتھ
          زندگی گزار رہے ہیں، جو انٹرنیشنل ڈائیبیٹیز فیڈریشن کے پہلے تخمینے 3
          کروڑ 30 لاکھ سے کافی زیادہ ہے۔ صحت حکام کا کہنا ہے کہ اس سے ثابت ہوتا
          ہے کہ پاکستان دنیا میں سب سے زیادہ متناسب ذیابیطس کا بوجھ اٹھا رہا ہے،
          جہاں تین میں سے ایک بالغ پہلے سے متاثر ہے۔
        </p>
        <p className="mt-4">
          WHO اور وزارت صحت نے جمعہ کو خبردار کیا کہ ملک اب مشرقی بحیرہ روم کے
          خطے میں ذیابیطس کے تمام کیسوں کے 40 فیصد سے زیادہ کا ذمہ دار ہے۔ انہوں
          نے لوگوں پر زور دیا کہ وہ اسکریننگ کروائیں اور احتیاطی طرز زندگی
          اپنائیں کیونکہ یہ مرض تمام عمر گروپوں میں بڑھتا جا رہا ہے۔
        </p>
        <p className="mt-4">
          مزید تفصیلات کے لیے{" "}
          <Link
            href="https://vitalsnews.com/top-story/pakistan-sounds-the-alarm-on-explosive-diabetes-crisis-as-who-issues-stark-warning/"
            target="_blank"
            className="text-primary underline"
          >
            یہاں کلک کریں
          </Link>
          ۔
        </p>
      </>
    ),
  },
  "real-world-effectiveness-of-semaglutide": {
    slug: "real-world-effectiveness-of-semaglutide",
    title:
      "DIABETES RESEARCH AND CLINICAL PRACTICE: Real-world effectiveness of once-weekly Semaglutide in type 2 diabetes: insights from Pak. diabetes effectiveness study",
    titleUr:
      "DIABETES RESEARCH AND CLINICAL PRACTICE: ٹائپ 2 ذیابیطس میں ہفتہ وار سیماگلوٹائیڈ کی حقیقی دنیا میں افادیت: پاکستان ذیابیطس افادیت مطالعے کے نتائج",
    date: "2025-11-17",
    image: Article8.src,
    imageAlt: "Medical research",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "Background: Pakistan ranks 3rd globally in the number of people with diabetes and has the highest prevalence rate in the world. Notably, Obesity not only is a major contributing factor in type 2 diabetes but also for Prediabetes.",
    excerptUr:
      "پس منظر: پاکستان ذیابیطس کے مریضوں کی تعداد کے لحاظ سے عالمی سطح پر تیسرے نمبر پر ہے اور دنیا میں سب سے زیادہ شرح پھیلاؤ رکھتا ہے۔ قابل ذکر بات یہ ہے کہ موٹاپا نہ صرف ٹائپ 2 ذیابیطس بلکہ پری ذیابیطس کا بھی ایک بڑا محرک عنصر ہے۔",
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
    urduContent: (
      <>
        <p>
          <strong>پس منظر:</strong> پاکستان ذیابیطس کے مریضوں کی تعداد کے لحاظ
          سے عالمی سطح پر تیسرے نمبر پر ہے اور دنیا میں سب سے زیادہ شرح پھیلاؤ
          رکھتا ہے۔ قابل ذکر بات یہ ہے کہ موٹاپا نہ صرف ٹائپ 2 ذیابیطس بلکہ پری
          ذیابیطس کا بھی ایک بڑا محرک عنصر ہے۔
        </p>
        <p className="mt-4">
          <strong>مقصد:</strong> پاکستان ذیابیطس افادیت مطالعہ، ایک کثیرالمراکز،
          مستقبل نگر، کھلے لیبل، مشاہداتی مطالعہ، نے پاکستان میں ٹائپ 2 ذیابیطس
          (T2D) کے مریضوں میں ہفتہ وار سیماگلوٹائیڈ کی حقیقی دنیا میں افادیت کا
          جائزہ لیا۔
        </p>
        <p className="mt-4">
          <strong>طریقہ کار:</strong> اس مطالعے میں T2D کے وہ بالغ مریض شامل تھے
          جن کی سیماگلوٹائیڈ شروع کرنے سے 12 ہفتے قبل کم از کم ایک گلائیکیٹڈ
          ہیموگلوبن (HbA1c) پیمائش موجود تھی۔
        </p>
        <p className="mt-4">
          مزید تفصیلات کے لیے{" "}
          <Link
            href="https://www.diabetesresearchclinicalpractice.com/article/S0168-8227(25)00867-8/fulltext"
            target="_blank"
            className="text-primary underline"
          >
            یہاں کلک کریں
          </Link>
          ۔
        </p>
      </>
    ),
  },
  "impact-of-community-based-support": {
    slug: "impact-of-community-based-support",
    title:
      "DIABETES RESEARCH AND CLINICAL PRACTICE: Impact of community-based peer support on glycemic control & quality of life in Type 1 diabetes: an observational study",
    titleUr:
      "DIABETES RESEARCH AND CLINICAL PRACTICE: ٹائپ 1 ذیابیطس میں کمیونٹی پر مبنی ہم جیسے ساتھیوں کی مدد کا گلائیسیمک کنٹرول اور معیار زندگی پر اثر: ایک مشاہداتی مطالعہ",
    date: "2025-11-17",
    image: Article9.src,
    imageAlt: "Medical research",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "Background: Peer support is vital for improving diabetes management by offering emotional, educational, & practical assistance specially in Type 1 Diabetes (T1DM) worldwide.",
    excerptUr:
      "پس منظر: ہم جیسے ساتھیوں کی مدد ذیابیطس کے انتظام کو بہتر بنانے کے لیے اہم ہے کیونکہ یہ دنیا بھر میں خاص طور پر ٹائپ 1 ذیابیطس (T1DM) میں جذباتی، تعلیمی اور عملی معاونت فراہم کرتی ہے۔",
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
    urduContent: (
      <>
        <p>
          <strong>پس منظر:</strong> ہم جیسے ساتھیوں کی مدد ذیابیطس کے انتظام کو
          بہتر بنانے کے لیے اہم ہے کیونکہ یہ دنیا بھر میں خاص طور پر ٹائپ 1
          ذیابیطس (T1DM) میں جذباتی، تعلیمی اور عملی معاونت فراہم کرتی ہے۔
        </p>
        <p className="mt-4">
          <strong>مقصد:</strong> ڈائی بڈیز (DiaBuddies) منصوبے کا مقصد اسلام
          آباد، پاکستان میں T1DM کے افراد کے درمیان گلائیسیمک کنٹرول اور معیار
          زندگی پر کمیونٹی پر مبنی ہم جیسے ساتھیوں کی مدد کے اثر کا جائزہ لینا
          تھا، جس میں T1DM والی مشہور شخصیات کی تعلیمی مداخلتیں اور حوصلہ افزا
          گفتگو شامل تھی۔
        </p>
        <p className="mt-4">
          <strong>طریقہ کار:</strong> یہ مشاہداتی کوہورٹ مطالعہ، جنوری 2022 سے
          جنوری 2024 تک کیا گیا، T1DM کے 378 افراد میں کمیونٹی پر مبنی ہم جیسے
          ساتھیوں کی مدد کے گلائیسیمک کنٹرول اور معیار زندگی پر اثر کا جائزہ
          لیتا ہے۔
        </p>
        <p className="mt-4">
          مزید تفصیلات کے لیے{" "}
          <Link
            href="https://www.diabetesresearchclinicalpractice.com/article/S0168-8227(25)00866-6/fulltext"
            target="_blank"
            className="text-primary underline"
          >
            یہاں کلک کریں
          </Link>
          ۔
        </p>
      </>
    ),
  },
  "pakistani-children-overweight-or-obese": {
    slug: "pakistani-children-overweight-or-obese",
    title:
      "VITALSNEWS: Breaking News - Over 18 million Pakistani children either overweight or obese, global atlas warns",
    titleUr:
      "VITALSNEWS: بریکنگ نیوز — 1 کروڑ 80 لاکھ سے زیادہ پاکستانی بچے زیادہ وزن یا موٹاپے کا شکار، عالمی اٹلس کا انتباہ",
    date: "2026-03-06",
    image: Article10.src,
    imageAlt: "Medical research",
    category: "Health",
    color: "bg-green-500",
    excerpt:
      "Background: Peer support is vital for improving diabetes management by offering emotional, educational, & practical assistance specially in Type 1 Diabetes (T1DM) worldwide.",
    excerptUr:
      "اسلام آباد: پاکستان میں 5 سے 19 سال کی عمر کے 1 کروڑ 80 لاکھ سے زیادہ بچے اور نوعمر اس وقت زیادہ وزن یا موٹاپے کا شکار ہیں، جس سے ملک دنیا کے سب سے زیادہ متاثرہ پانچ ممالک میں شامل ہو گیا ہے۔",
    content: (
      <>
        <p>
          Islamabad: More than 18 million children and adolescents aged 5 to 19
          years in Pakistan are currently living with overweight or obesity,
          placing the country among the five most affected nations in the world
          as childhood obesity rises rapidly across low and middle income
          countries.
        </p>
        <p className="mt-4">
          The alarming estimate places Pakistan alongside the world’s most
          populous countries facing a growing burden of childhood obesity. The
          figures come from the World Obesity Atlas 2026, a comprehensive global
          analysis of childhood overweight and obesity trends prepared by the
          World Obesity Federation.
        </p>
        <p className="mt-4">
          According to the report, Pakistan ranks fifth globally for the number
          of children aged 5 to 19 years living with high body mass index,
          following China, India, the United States and Indonesia. The atlas
          estimates that around eight million Pakistani children in this age
          group are already living with obesity, while the total number of those
          who are either overweight or obese exceeds 18 million.
        </p>
        <p className="mt-4">
          For more details, click{" "}
          <Link
            href="https://vitalsnews.com/top-story/breaking-news-over-18-million-pakistani-children-either-overweight-or-obese-global-atlas-warns/"
            target="_blank"
            className="text-primary underline"
          >
            here
          </Link>
          .
        </p>
      </>
    ),
    urduContent: (
      <>
        <p>
          اسلام آباد: پاکستان میں 5 سے 19 سال کی عمر کے 1 کروڑ 80 لاکھ سے زیادہ
          بچے اور نوعمر اس وقت زیادہ وزن یا موٹاپے کا شکار ہیں، جس سے ملک دنیا
          کے سب سے زیادہ متاثرہ پانچ ممالک میں شامل ہو گیا ہے کیونکہ کم اور
          متوسط آمدنی والے ممالک میں بچپن کا موٹاپا تیزی سے بڑھ رہا ہے۔
        </p>
        <p className="mt-4">
          یہ تشویشناک تخمینہ پاکستان کو بچپن کے موٹاپے کے بڑھتے ہوئے بوجھ کا
          سامنا کرنے والے دنیا کے سب سے زیادہ آبادی والے ممالک کے ساتھ کھڑا کرتا
          ہے۔ یہ اعداد و شمار ورلڈ اوبیسٹی اٹلس 2026 سے آئے ہیں، جو ورلڈ اوبیسٹی
          فیڈریشن کی تیار کردہ بچپن کے زیادہ وزن اور موٹاپے کے رجحانات کا ایک
          جامع عالمی تجزیہ ہے۔
        </p>
        <p className="mt-4">
          رپورٹ کے مطابق، پاکستان چین، بھارت، امریکہ اور انڈونیشیا کے بعد 5 سے
          19 سال کی عمر کے بچوں میں زیادہ باڈی ماس انڈیکس کے ساتھ زندگی گزارنے
          والوں کی تعداد کے لحاظ سے عالمی سطح پر پانچویں نمبر پر ہے۔ اٹلس کا
          تخمینہ ہے کہ اس عمر گروپ میں تقریباً 80 لاکھ پاکستانی بچے پہلے ہی
          موٹاپے کا شکار ہیں، جبکہ زیادہ وزن یا موٹاپے میں سے کسی ایک کا شکار
          افراد کی کل تعداد 1 کروڑ 80 لاکھ سے تجاوز کر گئی ہے۔
        </p>
        <p className="mt-4">
          مزید تفصیلات کے لیے{" "}
          <Link
            href="https://vitalsnews.com/top-story/breaking-news-over-18-million-pakistani-children-either-overweight-or-obese-global-atlas-warns/"
            target="_blank"
            className="text-primary underline"
          >
            یہاں کلک کریں
          </Link>
          ۔
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
  return Object.values(newsArticles).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}
