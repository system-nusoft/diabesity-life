import {
  Heading,
  List,
  Paragraph,
  Quote,
  TextImageSection,
} from "@/components/BlogTemplate";
import SilentEpidemic from "../public/diabetes-is-a-silent-epidemic-sweeping-pakistan.jpg";
import ObesityChallenge from "../public/getting-rid-of-obesity-the-real-challenge.jpg";
import Semaglutide from "../public/how-semaglutide-changes-lives.jpg";
import EndingLife from "../public/is-diabetes-ending-my-life.png";
import Monogenic from "../public/monogenic-and-syndromic-obesity.jpg";
import ScrollStudy from "../public/scroll-study-snack-repeat.jpg";
import UnderstandDiabetes from "../public/understanding-diabetes.jpg";
import WhyDiabesityMatters from "../public/what-is-diabesity-and-why-does-it-matter.jpg";

export interface BlogArticle {
  slug: string;
  title: string;
  author?: string;
  date: string;
  image: string;
  imageAlt: string;
  category: string;
  excerpt?: string;
  links?: { text: string; url: string }[];
  content: React.ReactNode;
  relatedBlogs?: string[];
  urdu?: {
    title: string;
    author?: string;
    content: React.ReactNode;
  };
}

export const blogArticles: Record<string, BlogArticle> = {
  "how-semaglutide-changes-lives": {
    slug: "how-semaglutide-changes-lives",
    title: "How Semaglutide Changed My Life",
    date: "2025-05-12",
    image: Semaglutide.src,
    imageAlt: "Semaglutide medication",
    category: "Medication",
    excerpt: "Effects of Semaglutide on fertility and unexpected pregnancy",
    links: [
      { text: "Learn more about Semaglutide", url: "#" },
      { text: "Diabesity Medication Guide", url: "#" },
      { text: "Patient Stories", url: "#" },
    ],
    content: (
      <>
        <Paragraph>
          Zainab Jan never imagined that diabetes and a weight loss treatment
          plan would result in one of the largest surprises of her life: a
          pregnancy after ten years.
        </Paragraph>

        <Paragraph>
          A 37-year-old Islamabad resident with three children was diagnosed
          with type 2 diabetes and began oral medication for six months. Yet, at
          a weight of 85 kilos, struggling with erratic sugar levels, her
          physician finally prescribed semaglutide, an injectable GLP-1
          medication that regulates blood sugar and causes weight loss.
        </Paragraph>

        <Quote>
          I was battling obesity and high sugar levels, so the doctor put me on
          semaglutide to enable me to get my health under control.
        </Quote>

        <TextImageSection
          text={
            <>
              <Heading level={3}>Starting the Journey</Heading>
              <Paragraph>
                She was started on 0.25mg once a week. Although her early
                progress was satisfactory, she later began to experience mood
                swings.
              </Paragraph>
              <Paragraph>
                &quot;I was getting snappier,&quot; she said.
              </Paragraph>
              <Paragraph>
                Her physician informed her that such early side effects as
                nausea, vomiting, abdominal discomfort, or mood shifts were
                normal and would gradually go away on their own.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
          imageAlt="Medical consultation"
        />

        <Paragraph>
          Two months on, her dosage was raised to 0.5 mg once a week. With
          reduced appetite and weight gain, Jan noticed actual improvement and
          lost two kilograms. She later switched to the escalated dose of 1mg
          once in a week. By month seven, she had lost a cumulative of 10
          kilograms.
        </Paragraph>

        <Heading level={3}>An Unexpected Turn</Heading>

        <Paragraph>
          Just as she was rejoicing at her better health, her life took an
          unexpected turn.
        </Paragraph>

        <Paragraph>
          &quot;I had been having occasional missing periods because of hormonal
          imbalance caused by diabetes & obesity, so I didn&apos;t pay much heed
          to it initially,&quot; she remembered.
        </Paragraph>

        <Paragraph>
          But during a regular check-up at a public hospital, she was given some
          amazing news: she was pregnant! Jan was utterly shocked and asked the
          medical officer how it could have happened, and even the doctor was
          surprised. What perplexed her further was that she had also been on a
          birth control patch then.
        </Paragraph>

        <Quote>
          Despite taking the patch, I got pregnant while taking semaglutide.
        </Quote>

        <TextImageSection
          text={
            <>
              <Heading level={3}>The Medical Explanation</Heading>
              <Paragraph>
                Experts indicate this isn&apos;t a complete shock.
              </Paragraph>
              <Paragraph>
                Dr Sikandar Jamal, a consultant diabetologist, says that
                semaglutide results in sudden weight loss in most women, which
                could correct hormonal imbalance and ovulation, even in women
                with conditions like PCOs or insulin resistance.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080"
          imageAlt="Healthcare professional"
          reverse
        />

        <Quote author="Dr Sikandar Jamal, Consultant Diabetologist">
          Women who had previously been having irregular cycles or were
          considered to be infertile could suddenly find themselves fertile
          again without even knowing it. This can happen even with the use of
          contraceptives, particularly if the methods are less effective because
          of weight fluctuations or skipped doses.
        </Quote>

        <Paragraph>
          As Jan&apos;s pregnancy was diagnosed early, the doctor discontinued
          semaglutide immediately. Jan turned to insulin for safer blood sugar
          management throughout pregnancy. Genetic testing was also suggested by
          her doctor to confirm the baby had not been harmed by early exposure
          to the drug.
        </Paragraph>

        <Quote>
          I was petrified, but I adhered to all the medical advice and prayed
          day and night. Alhamdulillah, scans were okay and I was informed I
          could continue with the pregnancy.
        </Quote>

        <Heading level={3}>A Miracle After 10 Years</Heading>

        <Paragraph>
          Being a mother of a 12-year-old boy and an 11-year-old girl, the
          pregnancy was seen by Jan and her husband as nothing but a miracle.
        </Paragraph>

        <Paragraph>
          &quot;After 10 years, this was miraculous. My kids and husband were
          ecstatic.&quot;
        </Paragraph>

        <Paragraph>But not everyone was so considerate.</Paragraph>

        <Quote>
          People were surprised and, honestly, critical. They mocked me and told
          me I was having another baby when my other kids were older. It felt
          strange, and it stung.
        </Quote>

        <TextImageSection
          text={
            <>
              <Paragraph>
                But she didn&apos;t let that stop her. &quot;This was between my
                husband, the Almighty Allah, and me. Nobody else can have
                something to say about that.&quot;
              </Paragraph>
              <Paragraph>
                Ever since her daughter&apos;s birth, her family feels whole
                again.
              </Paragraph>
              <Paragraph>
                &quot;We are full of joy and happiness, Alhamdulillah!&quot;
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070"
          imageAlt="Happy family"
        />

        <Heading level={3}>A Message to Society</Heading>

        <Paragraph>
          Now accepting motherhood again, she has one very specific message for
          our society: &quot;People need to learn to respect other people&apos;s
          choices. Health, fertility, and family planning are personal choices.
          Rather than ridiculing or intruding, we should be nice and
          empathetic.&quot;
        </Paragraph>
      </>
    ),
    relatedBlogs: [
      "monogenic-and-syndromic-obesity",
      "getting-rid-of-obesity-the-real-challenge",
      "diabetes-is-a-slient-epidemic-sweeping-pakistan",
    ],
    urdu: {
      title: "سیماگلوٹائیڈ نے میری زندگی کیسے بدلی",
      content: (
        <>
          <Paragraph>
            زینب جان نے کبھی نہیں سوچا تھا کہ ذیابیطس اور وزن میں کمی کا علاج
            ان کی زندگی میں سب سے بڑی حیرت لے آئے گا — دس سال بعد ایک حمل۔
          </Paragraph>

          <Paragraph>
            اسلام آباد کی رہائشی ۳۷ سالہ خاتون، جن کے تین بچے ہیں، کو ٹائپ ۲
            ذیابیطس تشخیص ہوئی اور انہوں نے چھ ماہ زبانی دوائیں لیں۔ لیکن ۸۵
            کلو وزن کے ساتھ اور شوگر کی سطح میں بے قاعدگی کے باعث، آخر کار ان
            کے ڈاکٹر نے سیماگلوٹائیڈ تجویز کی — ایک انجیکشن والی GLP-1 دوا جو
            خون میں شوگر کو قابو میں رکھتی ہے اور وزن کم کرتی ہے۔
          </Paragraph>

          <Quote>
            میں موٹاپے اور زیادہ شوگر سے لڑ رہی تھی، اس لیے ڈاکٹر نے سیماگلوٹائیڈ
            دی تاکہ میں اپنی صحت پر قابو پا سکوں۔
          </Quote>

          <TextImageSection
            text={
              <>
                <Heading level={3}>سفر کا آغاز</Heading>
                <Paragraph>
                  انہیں ہفتے میں ایک بار ۰.۲۵ ملی گرام سے شروع کیا گیا۔ ابتدائی
                  ترقی تسلی بخش رہی، لیکن بعد میں انہیں موڈ میں تبدیلیاں محسوس
                  ہونے لگیں۔
                </Paragraph>
                <Paragraph>
                  &quot;میں چڑچڑی ہوتی جا رہی تھی،&quot; انہوں نے بتایا۔
                </Paragraph>
                <Paragraph>
                  ان کے ڈاکٹر نے بتایا کہ ابتدائی ضمنی اثرات جیسے متلی، قے، پیٹ
                  کی تکلیف یا موڈ میں تبدیلیاں عام ہیں اور آہستہ آہستہ خود بخود
                  ختم ہو جاتی ہیں۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
            imageAlt="طبی مشاورت"
          />

          <Paragraph>
            دو ماہ بعد، ان کی خوراک بڑھا کر ہفتے میں ایک بار ۰.۵ ملی گرام کر
            دی گئی۔ بھوک کم ہونے اور وزن کم ہوتے دیکھ کر جان نے حقیقی بہتری
            محسوس کی اور دو کلو وزن کم کیا۔ پھر خوراک بڑھا کر ہفتے میں ایک بار
            ۱ ملی گرام کر دی گئی۔ ساتویں مہینے تک، انہوں نے مجموعی طور پر ۱۰
            کلو وزن کم کر لیا تھا۔
          </Paragraph>

          <Heading level={3}>ایک غیر متوقع موڑ</Heading>

          <Paragraph>
            جب وہ اپنی بہتر صحت پر خوش ہو رہی تھیں، ان کی زندگی میں ایک غیر
            متوقع موڑ آیا۔
          </Paragraph>

          <Paragraph>
            &quot;ذیابیطس اور موٹاپے کی وجہ سے ہارمونل عدم توازن کے باعث میرے
            ماہواری کبھی کبھی غائب ہو جاتی تھی، اس لیے ابتدا میں میں نے اس پر
            زیادہ توجہ نہیں دی،&quot; انہوں نے یاد کیا۔
          </Paragraph>

          <Paragraph>
            لیکن ایک سرکاری ہسپتال میں معمول کے معائنے کے دوران انہیں حیرت انگیز
            خبر ملی: وہ حاملہ تھیں! جان بالکل سکتے میں آ گئیں اور ڈاکٹر سے
            پوچھا کہ یہ کیسے ہوا — اور ڈاکٹر بھی حیران تھے۔ جو بات انہیں مزید
            الجھا گئی وہ یہ تھی کہ وہ اس وقت برتھ کنٹرول پیچ بھی لگا رہی تھیں۔
          </Paragraph>

          <Quote>
            پیچ لگانے کے باوجود، سیماگلوٹائیڈ لیتے ہوئے میں حاملہ ہو گئی۔
          </Quote>

          <TextImageSection
            text={
              <>
                <Heading level={3}>طبی وضاحت</Heading>
                <Paragraph>
                  ماہرین کا کہنا ہے کہ یہ بالکل حیرت کی بات نہیں ہے۔
                </Paragraph>
                <Paragraph>
                  ذیابیطس کے ماہر ڈاکٹر سکندر جمال کہتے ہیں کہ سیماگلوٹائیڈ
                  اکثر خواتین میں اچانک وزن میں کمی لاتی ہے، جو ہارمونل عدم توازن
                  اور بیضہ دانی کے عمل کو درست کر سکتی ہے — یہاں تک کہ پی سی اوز
                  یا انسولین مزاحمت جیسی بیماریوں میں بھی۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080"
            imageAlt="صحت کی دیکھ بھال کرنے والے پیشہ ور"
            reverse
          />

          <Quote author="ڈاکٹر سکندر جمال، کنسلٹنٹ ذیابیطس ماہر">
            جن خواتین کی ماہواری پہلے بے قاعدہ تھی یا جنہیں بانجھ سمجھا جاتا
            تھا، وہ اچانک اپنے آپ کو دوبارہ زرخیز پا سکتی ہیں بغیر یہ جانے کہ
            ایسا ہو رہا ہے۔ یہ مانع حمل تدابیر کے استعمال کے باوجود بھی ہو سکتا
            ہے، خاص طور پر اگر وزن میں تبدیلی یا خوراک چھوڑنے کی وجہ سے یہ
            تدابیر کم مؤثر ہوں۔
          </Quote>

          <Paragraph>
            چونکہ جان کا حمل ابتدائی مرحلے میں تشخیص ہو گیا، ڈاکٹر نے فوری طور
            پر سیماگلوٹائیڈ بند کر دی۔ جان نے حمل کے دوران محفوظ طریقے سے شوگر
            کنٹرول کے لیے انسولین شروع کی۔ ڈاکٹر نے جینیاتی ٹیسٹنگ کی بھی
            سفارش کی تاکہ تصدیق ہو سکے کہ بچے کو دوا کی ابتدائی نمائش سے نقصان
            نہیں پہنچا۔
          </Paragraph>

          <Quote>
            میں بہت ڈری ہوئی تھی، لیکن میں نے تمام طبی مشورے پر عمل کیا اور دن
            رات دعائیں مانگتی رہی۔ الحمدللہ، اسکین ٹھیک تھے اور مجھے بتایا گیا
            کہ میں حمل جاری رکھ سکتی ہوں۔
          </Quote>

          <Heading level={3}>دس سال بعد ایک معجزہ</Heading>

          <Paragraph>
            ایک ۱۲ سالہ بیٹے اور ۱۱ سالہ بیٹی کی ماں کے لیے، جان اور ان کے شوہر
            نے اس حمل کو محض ایک معجزہ سمجھا۔
          </Paragraph>

          <Paragraph>
            &quot;دس سال بعد، یہ واقعی معجزہ تھا۔ میرے بچے اور شوہر بے حد خوش
            تھے۔&quot;
          </Paragraph>

          <Paragraph>لیکن ہر کوئی اتنا مہربان نہیں تھا۔</Paragraph>

          <Quote>
            لوگ حیران ہوئے اور، سچ کہوں تو، تنقید بھی کی۔ انہوں نے مجھ پر طنز
            کیا اور کہا کہ جب دوسرے بچے بڑے ہو گئے ہیں تو میں ایک اور بچہ لا رہی
            ہوں۔ یہ عجیب اور تکلیف دہ لگا۔
          </Quote>

          <TextImageSection
            text={
              <>
                <Paragraph>
                  لیکن انہوں نے اسے روکنے نہیں دیا۔ &quot;یہ معاملہ میرے شوہر،
                  اللہ تعالیٰ اور میرے درمیان ہے۔ کسی اور کو اس میں بولنے کا حق
                  نہیں ہے۔&quot;
                </Paragraph>
                <Paragraph>
                  اپنی بیٹی کی پیدائش کے بعد سے ان کا خاندان ایک بار پھر مکمل
                  محسوس کرتا ہے۔
                </Paragraph>
                <Paragraph>
                  &quot;ہم خوشی اور مسرت سے بھرے ہوئے ہیں، الحمدللہ!&quot;
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070"
            imageAlt="خوشحال خاندان"
          />

          <Heading level={3}>معاشرے کے لیے ایک پیغام</Heading>

          <Paragraph>
            اب دوبارہ ماں بننے کو قبول کرتے ہوئے، ان کے پاس ہمارے معاشرے کے لیے
            ایک خاص پیغام ہے: &quot;لوگوں کو دوسروں کے انتخاب کا احترام کرنا
            سیکھنا چاہیے۔ صحت، زرخیزی اور خاندانی منصوبہ بندی ذاتی معاملات ہیں۔
            طنز یا مداخلت کے بجائے، ہمیں مہربان اور ہمدرد ہونا چاہیے۔&quot;
          </Paragraph>
        </>
      ),
    },
  },

  "getting-rid-of-obesity-the-real-challenge": {
    slug: "getting-rid-of-obesity-the-real-challenge",
    title: "Getting Rid of Obesity: The Real Challenge",
    author: "Tariq Nisar",
    date: "2025-06-15",
    image: ObesityChallenge.src,
    imageAlt: "Weight management",
    category: "Weight Loss",
    links: [
      { text: "Understanding Obesity", url: "#" },
      { text: "Weight Loss Strategies", url: "#" },
      { text: "Healthy Eating Habits", url: "#" },
    ],
    excerpt: "Breaking the cycle of weight regain after dieting",
    content: (
      <>
        <Paragraph>
          <em>
            (Translated from an Urdu article published in Monthly Nabz, May
            2025, published by Pakistan Medical Association)
          </em>
        </Paragraph>

        <Paragraph>
          Four years into her marriage, Rubina&apos;s life looked very
          different. She was now the mother of two children — and forty
          kilograms heavier. Before marriage, she had been slim and energetic,
          but obesity had gradually reshaped not just her body, but her entire
          sense of self.
        </Paragraph>

        <Paragraph>
          Rather than succumbing to discouragement, Rubina decided to take
          charge. Over the next six months, she lost almost twenty-five
          kilograms. Within three more months, she shed the rest of the excess
          weight.
        </Paragraph>

        <Paragraph>
          For a while, she maintained her new figure through careful habits. But
          just four months later, the scales began to tip again this time, with
          a gain of ten kilograms.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>A Universal Struggle</Heading>
              <Paragraph>
                Her experience is not unique. Around the world, countless people
                fight hard to lose weight, only to watch it return. The
                challenge is not just losing the kilos, but keeping them off.
                For many, the dream of maintaining a healthy weight remains just
                that — a dream. They try again and again, yet repeated setbacks
                drain their motivation. Eventually, a large number accept
                obesity as an unchangeable part of their lives.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070"
          imageAlt="Weight loss journey"
        />

        <Paragraph>
          Weight regain after dieting is so common that many people believe
          it&apos;s inevitable. In fact, past research has shown that for most
          people struggling with obesity, the weight lost is soon regained —
          sometimes even exceeding the original amount. This cycle has
          discouraged many from trying again.
        </Paragraph>

        <Heading level={3}>New Hope from Research</Heading>

        <Paragraph>
          Now, a joint study by the University of Pittsburgh and the University
          of Colorado shows that long-term weight maintenance is possible.
          According to their findings, people should not lose hope, because with
          the right approach, this pattern can be broken.
        </Paragraph>

        <Quote author="Dr. Albert Stunkard, University of Pennsylvania">
          This is one of the most surprising and encouraging outcomes of late
          20th-century research.
        </Quote>

        <Paragraph>
          The study, which began in 1993 and was published in 1998 in the
          American Journal of Clinical Nutrition, followed 800 American men and
          women who each lost at least three pounds and maintained that loss for
          nearly six years. Participants ranged in age from 19 to 85.
        </Paragraph>

        <Paragraph>
          What made these results stand out was that many had repeatedly lost
          and regained weight in the past — on average, a cumulative 260 pounds
          over several attempts — but had never been able to maintain the loss
          before. This time, they succeeded.
        </Paragraph>

        <Paragraph>
          The evidence is clear: sustained weight loss is achievable, and
          science now understands more about how to make it happen.
        </Paragraph>

        <Quote author="Mary Lokim, University of Pittsburgh School of Medicine">
          Those who succeeded in keeping the weight off tried a variety of
          methods until they found the one that worked for them. With every
          setback, each person learned from their mistakes. By identifying their
          weaknesses, they were able to figure out which strategies would
          actually lead to success.
        </Quote>

        <Heading level={3}>Choosing the Right Approach</Heading>

        <Paragraph>
          Selecting the right method is critical when it comes to losing weight
          — and keeping it off. David, a 47-year-old man, weighed 100 pounds
          over his target. The excess weight led to a heart attack. When he was
          discharged from the hospital, his doctor gave him a blunt warning:
          either lose the weight or prepare to face the consequences.
        </Paragraph>

        <Paragraph>
          David tried fasting, slimming pills, and invested in multiple
          commercial weight-loss programs. Every time, the results were
          temporary. &quot;Each time I lost a significant amount of weight, I
          felt great,&quot; David recalls. &quot;But the happiness never lasted.
          I eventually discovered the reason: after reaching my target weight, I
          slipped back into my old eating habits. Overeating was always the
          trigger for my weight gain.&quot;
        </Paragraph>

        <Paragraph>
          Once David realized that overeating was his main trigger, he began
          avoiding situations where he might be tempted to indulge. He reduced
          his portion sizes, slowed down his eating, and made exercise a regular
          part of his routine — something he had always resisted before. The
          result was not just weight loss, but sustained weight loss. After his
          first heart attack, he went on to live another 25 years in good
          health. Now, at the age of 72, he is more energetic and active than
          many people far younger than him.
        </Paragraph>

        <Heading level={3}>Setting Realistic Goals</Heading>
        <Paragraph>
          David is one of many study participants who learned from their
          failures and identified the real obstacles in their path. In contrast,
          many people fail simply because they set unrealistic goals and waste
          their energy chasing them.
        </Paragraph>
        <Paragraph>
          Take Joy from Washington, for example. Standing 5 feet 3 inches tall,
          she weighed 238 pounds and had a 42-inch waist. Her goal was to lose
          90 pounds, and she tried repeatedly — but nothing worked. Then she
          decided on a more realistic approach: aiming for a weight of 160
          pounds and a 22-inch waist, setting smaller, step-by-step goals along
          the way. This strategy helped her lose 67 pounds successfully.
        </Paragraph>

        <Heading level={3}>Finding the Right Method for You</Heading>

        <Paragraph>
          One of the most effective tools for identifying what works is keeping
          a detailed food log. Writing down everything you eat, in order and
          without skipping details, can help you spot patterns and make better
          choices.
        </Paragraph>

        <Quote author="Rena Wing, Psychologist">
          The pattern of weight loss and regain is not necessarily a barrier to
          long-term success. If you&apos;re struggling, don&apos;t give up —
          persistence can pay off.
        </Quote>

        <Paragraph>
          Above all, don&apos;t let past failures discourage you. While some
          earlier studies suggested that losing and regaining weight could be
          unhealthy and make future weight loss harder, recent research
          challenges that idea.
        </Paragraph>

        <Heading level={3}>Losing Weight: Finding What Works for You</Heading>

        <Paragraph>
          People who want to lose weight are often searching for a method that
          is completely effective and foolproof. The truth, however, is that
          there is no single, universally proven formula for weight loss. Yale
          University psychologist Kelly Brownell explains: &quot;The flood of
          poorly written, misleading books on dieting has only made the matter
          more confusing.&quot;
        </Paragraph>

        <Paragraph>
          Many people seek professional advice or join structured programs. For
          example, Corrie Lee Farley from Washington turned to a weight-loss
          organization that didn&apos;t ban her favorite foods. By making
          gradual changes, she managed to lose 70 pounds.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Paragraph>
                If you can&apos;t afford the cost of a weight-loss program or
                don&apos;t have the time to join one, don&apos;t lose hope. Many
                people have achieved their target weight entirely on their own.
              </Paragraph>
              <Paragraph>
                Take Jay Wheaton from Texas. He had tried many times in the past
                to lose weight, and despite repeated failures, he didn&apos;t
                give up. Eventually, he succeeded in losing 90 pounds from his
                original 235 — and kept it off for nearly 20 years.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
          imageAlt="Self-motivation"
          reverse
        />

        <Quote>
          I had taken part in some extremely demanding weight-loss programs, but
          every time I ended up failing. So, I eventually gave up. Then one day,
          I ran into a friend I didn&apos;t even recognize at first — the friend
          had lost a remarkable amount of weight. With his friend&apos;s
          guidance, Jay began a new routine of healthy eating and regular
          exercise. Today, at 150 pounds, his weight is perfectly suited to his
          5-foot-8 frame.
        </Quote>

        <Heading level={3}>Make It Personal</Heading>

        <Paragraph>
          Most people in the study followed the same core principles that
          experts have long emphasized: avoiding foods high in fat and calories,
          and increasing physical activity. But the key was that they tailored
          their approach to suit their own preferences and lifestyle.
        </Paragraph>

        <Paragraph>
          Willie from Orlando, for instance, cut back on meat and eliminated
          rich, high-fat dishes from her diet. She significantly reduced her fat
          intake — something a quarter of the successful participants had done.
          Experts now recommend that daily fat intake should not exceed 30
          percent of total calories. Those who rely heavily on packaged or
          processed foods should be especially cautious. Labels reading
          &quot;low-fat&quot; or &quot;fat-free&quot; can be misleading, as
          these products may still contain more fat than recommended.
        </Paragraph>

        <Paragraph>
          The study also found that 40 percent of successful individuals closely
          monitored their calorie intake.
        </Paragraph>

        <Quote>
          I learned that it&apos;s better to eat something whenever you feel
          hungry, just enough to satisfy that hunger. In my experience, waiting
          for a scheduled mealtime only makes you eat more than you should.
        </Quote>

        <Paragraph>
          Another secret to success was avoiding prolonged hunger. Instead of
          eating three large meals a day, many found it better to have five
          smaller meals spread throughout the day.
        </Paragraph>

        <Heading level={3}>Exercise</Heading>

        <Paragraph>
          Ninety percent of participants in the study achieved lasting success
          only after making lifestyle changes that included regular exercise and
          greater physical activity.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Paragraph>
                Mary, a 43-year-old nurse, had struggled for years without
                success before finally losing 75 pounds and keeping it off. Her
                secret? She minimized her use of vehicles, choosing to walk
                whenever possible or ride a bicycle instead.
              </Paragraph>
              <Paragraph>
                Jay made running a daily habit after returning from work. Corrie
                Lee incorporated home workouts into her routine, added a daily
                one-mile walk, and swam every week.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2074"
          imageAlt="Exercise and physical activity"
        />

        <Paragraph>
          What was the common factor in their success? They all increased their
          physical activity in ways they personally enjoyed and could sustain —
          pairing it with sensible dietary changes. The key is to not only
          exercise regularly but to make yourself more physically active in
          everyday life than you were in the past.
        </Paragraph>

        <Heading level={3}>A Surprising Insight</Heading>

        <Paragraph>
          In the study, 40% of participants said that keeping the weight off was
          actually easier than losing it in the first place. This may sound
          unbelievable to those who have struggled—often repeatedly—to maintain
          their results. Many people around the world have experienced this
          cycle of loss and regain, and some have given up altogether after
          multiple failed attempts.
        </Paragraph>

        <Paragraph>
          But the research offers hope. These failures aren&apos;t proof that
          lasting weight loss is impossible—they&apos;re often the result of
          flawed strategies. What&apos;s needed is not just effort, but the
          right approach. It takes time, and it&apos;s rarely easy, but
          it&apos;s deeply worthwhile.
        </Paragraph>
        <Paragraph>
          If so, many once-discouraged people can not only lose significant
          weight but also maintain it, then this goal is within reach for
          anyone, anywhere.
        </Paragraph>
      </>
    ),
    relatedBlogs: [
      "how-semaglutide-changes-lives",
      "diabetes-is-a-slient-epidemic-sweeping-pakistan",
      "monogenic-and-syndromic-obesity",
    ],
    urdu: {
      title: "مٹاپے سے نجات مگر کیسے؟",
      author: "طارق نثار",
      content: (
        <>
          <Paragraph>
            <em>(بشکریہ۔ نبض، مئی 2025، پاکستان میڈیکل ایسو سی ایشن)</em>
          </Paragraph>

          <Paragraph>
            شادی کے چار سال بعد روبینہ کی زندگی میں یہ فرق آیا کہ دو بچوں کی ماں
            بن چکی تھی اور اس کے وزن میں چالیس کلو کا اضافہ ہو چکا تھا۔ شادی سے
            پہلے وہ اسمارٹ تھی مگر اب موٹاپے نے اس کی پوری شخصیت بدل دی تھی۔
            اپنی اس تبدیلی پر اس نے بہت بددل ہونے کے بجاۓ وزن میں کمی کا فیصلہ
            کیا۔اگلے چھ ماہ میں وہ لگ بھگ پچیس کلو وزن سے نجات پا چکی تھی۔ تین
            ماہ بعد اس نے بقیہ اضافی وزن سے بھی چھٹکارا پالیا۔
          </Paragraph>

          <Paragraph>
            مٹاپے سے نجات کے بعد اس نے کچھ عرصہ احتیاط سے کام لیا۔ اس دوران اس
            کا وزن اپنی حد میں رہا لیکن صرف چار ماہ بعد اس کے وزن میں ایک بار
            پھر دس کلو کا اضافہ ہو چکا تھا۔
          </Paragraph>

          <Heading level={3}>ایک عالمی مسئلہ</Heading>
          <Paragraph>
            یہ مٹاپے کے شکار بے شمار لوگوں کا بنیادی مسئلہ ہے۔ وہ بڑی جدوجہد کے
            بعد اپنا وزن کم کرتے ہیں مگر یہ کمی عارضی ثابت ہوتی ہے کیونکہ زیادہ
            عرصہ نہیں گزرتا ہے کہ وہ ایک بار پھر مٹاپے کا شکار ہوجاتے ہیں۔وزن کا
            ایک حد میں رہنا، وزن میں کمی کے بعد کمی برقرار رہنا، دنیا بھر کے
            بیشتر موٹے افراد کی دلی خواہش ہے۔ ایسے لوگ ایک سے زیادہ بار اس کی
            کوشش کرتے ہیں مگر ناکامی کے بعد ہمت ہار جاتے ہیں، ان کی بڑی تعداد
            موٹاپے کو اپنا مقدر مان لیتی ہے۔
          </Paragraph>

          <Paragraph>
            وزن میں کمی برقرار رکھی جا سکتی ہے، لہٰذا ایسے لوگوں کو ناامید نہیں
            ہونا چاہیے۔ پٹسبرگ یونیورسٹی اور کولوراڈو یونیورسٹی کے محققین کی
            مشترکہ ٹیم کے حاصل کردہ نتائج یہی بتاتے ہیں۔
          </Paragraph>

          <Paragraph>
            ماضی میں ہونے والی تحقیقات سے یہی ظاہر ہوتا ہے کہ وزن میں کمی کے بعد
            اضافہ، بعض صورتوں میں کمی سے زیادہ اضافہ مٹاپے کا شکار بیشتر لوگوں
            کا مشترکہ عارضہ ہے۔ ایسے لوگ چاہے جتنی بھی کوششیں کر لیں، انہیں
            مٹاپے سے نجات ملنا ممکن نہیں۔ لیکن اب یہ بات اعتماد کے ساتھ کہی
            جاسکتی ہے کہ وزن میں کمی کے بعد اضافے کے اس سلسلے کو توڑا جا سکتا
            ہے۔
          </Paragraph>

          <Paragraph>
            پینسلوانیا یونیورسٹی سے وابستہ وزن میں کمی کے ماہر ڈاکٹر البرٹ
            اسٹنکارڈ کارو کہتے ہیں۔ &quot;گزشتہ صدی کے اختتام پر ہونے والی تحقیق
            کا حیران کن اور امید افزا پہلو یہی ہے۔&quot;
          </Paragraph>

          <Paragraph>
            ١۹۹۸ء میں امریکن جرنل آف کلینیکل نیوٹریشن میں پہلی بار اس تحقیق کے
            نتائج سامنے آئے۔ جس کی ابتداء ١۹۹۳ء میں ہوئی تھی۔ اس تحقیق میں شامل
            آٹھ سو افراد (خواتین اور حضرات) امریکی باشندے ہیں جنہوں نے اپنے وزن
            میں کم از کم تین پونڈ کمی کے بعد تقریباً چھ برس اس کمی کو برقرار
            رکھا۔ انیس برس سے پچاسی برس کے ان لوگوں میں ایسے افراد کی تعداد
            نمایاں تھی جو گزرے ہوۓ برسوں میں کئی بار مختلف اوقات میں اوسطاً ۲۶۰
            پونڈ وزن کم کر چکے تھے لیکن اس سے قبل وزن میں کمی کو برقرار نہیں رکھ
            پائے تھے۔
          </Paragraph>

          <Paragraph>
            پٹسبرگ یونیورسٹی اسکول آف میڈیسن سے وابستہ تحقیق میں شامل میری لوکیم
            کہتی ہیں۔ &quot;کامیابی حاصل کرنے والوں نے وزن کم کرنے کے لیے مختلف
            طریقے اپنائے اور اس طرح وہ طریقہ تلاش کر لیا جو ان کے لیے کارگر ثابت
            ہوا۔ یہ کس طرح ہوا؟ اپنی ہر ناکامی سے ہر شخص نے سبق سیکھا اور اپنی
            خامیوں کا اندازہ لگا کر یہ نتیجہ اخذ کیا کہ کون سی تکنیک اسے کامیاب
            بنا سکتی ہے۔درست تکنیک کا انتخاب ہی ان لوگوں میں وزن کی کمی برقرار
            رہنے کا سبب بنا۔ مصدقہ غذائی طریقوں اور ہر فرد کے ذاتی تجربات کے
            اشتراک نے یہ بات یقینی بنائی کہ دنیا کا ہر شخص اس اشتراک سے اپنا
            مٹاپا دور یا ختم کر سکتا ہے۔&quot;
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>اپنے لیے طریقے کا انتخاب کرنا</Heading>
                <Paragraph>
                  مٹاپے سے نجات کے لیے درست طریقے کا انتخاب ضروری ہے۔ ۴۷ برس کے
                  ڈیوڈ کا وزن مطلوبہ آخری حد سے سو پونڈ زیادہ تھا۔ زائد وزن کے
                  باعث وہ حملہ قلب کا شکار ہوا اس کے معالج نےاسے اسپتال سے رخصت
                  کرتے ہوئے کہا تھا کہ وہ یا تو اپنا وزن کم کر لے یا پھر مرنے کے
                  لیے تیار رہے۔ ڈیوڈ نے وزن میں کمی کے لیے فاقے کئے، سلمنگ پلز
                  استعمال کیں، وزن میں کمی کے مختلف اشتہاری پروگراموں میں سرمایہ
                  لٹایا لیکن ہر بار وزن کی کمی عارضی ثابت ہوئی۔ ڈیوڈ کا کہنا ہے
                  کہ ہر بار اپنے وزن میں نمایاں کمی کے بعد میں بہت خوش ہوا لیکن
                  میری یہ خوشی عارضی ثابت ہوئی، میں نے بڑی سنجیدگی سے اپنی
                  ناکامی کا سبب تلاش کیا تو معلوم ہوا کہ میں وزن میں کمی کے بعد
                  اپنے سابقہ معمول کے مطابق بسیار خوری اپنا لیتا ہوں۔ گویا ہر
                  بار میرے وزن میں اضافے کا سبب میری بسیار خوری تھی۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070"
            imageAlt="Weight loss journey"
          />

          <Paragraph>
            یہ نتیجہ اخذ کرنے کے بعد ڈیوڈ نے ایسے مواقعوں سے بچنا شروع کر دیا
            جہاں ڈٹ کر کھانے کی ترغیب ملتی تھی۔ اس کے ساتھ ہی اس نے اپنی خوراک
            میں کمی کے ساتھ کھانا کھانے کی رفتار بھی کم کر لی۔ پہلے وہ ورزش سے
            کتراتا تھا لیکن اس نے ورزش اپنے معموالت کا لازمی جزو بنالی۔ اب نہ
            صرف اس کے وزن میں کمی ہوئی بلکہ یہ کمی مسلسل برقرار رہی۔ پہلی بار
            حملہ قلب کے بعد وہ پچیس برس صحت مند اور چاق و چوبند رہا۔ ۷۲ برس کی
            عمر میں وہ اپنے سے کم عمر بہت سے لوگوں کے مقابلے میں مستعد و فعال
            ہے۔
          </Paragraph>

          <Paragraph>
            ڈیوڈ سے متعلق مطالعے میں شامل ان افراد میں سے ایک ہے جنہوں نے اپنی
            ناکامیوں سے سبق سیکھا اور راہ میں درپیش رکاوٹ کا اندازہ لگایا۔
          </Paragraph>

          <Paragraph>
            بہت سے لوگ محض اس لیے ناکام رہتے ہیں کہ وہ غیر حقیقت پسندانہ ہدف طے
            کر کے اپنی توانائیاں رائیگاں کرتے ہیں۔ واشنگٹن سے تعلق رکھنے والی
            جویری کا قد پانچ فٹ تین انچ ہے اس کا وزن ۲۳۸ پونڈ اور کمر ۴۲ انچ
            تھی۔ اس نے اپنے وزن میں ۹۰ پونڈ کمی کا ہدف مقرر کر کے کئی بار کوشش
            کی، کوئی بھی تدبیر کارگر نہ ہوئی۔ پھر اس نے اپنا وزن ١٦۰ پونڈ اور
            کمر ۲۲ انچ کرنے کی ٹھانی اور مرحلہ وار وزن میں کچھ کمی کا ہدف طے
            کیا۔ اس طرح اس نے اپنے وزن میں ٦۷ پونڈ کی کمی کر لی۔
          </Paragraph>

          <Paragraph>
            آپ کے لیے کیا طریقہ موزوں ہے؟ یہ جاننے کے لیے غذائی اندراج ضروری ہے۔
            آپ نے کیا کچھ کھایا اس کا ترتیب وار باقاعدہ اندراج ہی آپ کو کھانے
            پینے سے روک سکتا ہے۔
          </Paragraph>

          <Paragraph>
            اپنی ناکامیوں پر حوصلہ مت ہاریں ۔یہ ٹھیک ہے کہ کچھ تحقیقی مطالعوں کے
            مطابق وزن میں کمی اور پھر اضافہ غیر صحت مندانہ ہے اور وزن میں کمی کی
            کوششوں کو مشکل بنا سکتا ہے لیکن اس حوالے سے حالیہ تحقیق بتاتی ہے کہ
            اصل حقیقت یہ نہیں ہے۔ وزن میں کمی / اضافے کا سلسلہ وزن میں مستقل کمی
            کے لیے رکاوٹ یا خطرہ نہیں ہے۔ اگر آپ اس مسئلے سے دوچار ہیں تو ہمت نہ
            ہاریں، وزن میں کمی کی کوشش ترک نہ کریں، یہ تاکید ماہر نفسیات رینا
            ونگ کی ہے جس نے اس تحقیق میں خصوصی طور پر کام کیا ہے۔
          </Paragraph>

          <Heading level={3}>وزن میں کمی</Heading>

          <Paragraph>
            وزن میں کمی کے خواہاں افراد عموما کسی ایسے طریقے کے متلاشی رہتے ہیں
            جو پوری طرح مؤثر اور مکمل ہو لیکن حقیقت یہ ہے کہ وزن میں کمی کا کوئی
            ایک مستند اور کامیاب طریقہ نہیں ہے۔ یال یونیورسٹی کی ماہر نفسیات
            کیلی برونیل کہتی ہیں۔ &quot;ڈائٹنگ کے موضوع پر بے سروپا کتابوں نے
            معاملے کو مزید الجھا دیا ہے۔&quot;
          </Paragraph>

          <Paragraph>
            بہت سے لوگ وزن میں کمی کے لیے کسی معالج سے مشورہ لیتے ہیں یا کسی
            باقاعدہ پروگرام کے تحت ایسا کرتے ہیں۔ مثلاً واشنگٹن کی کوریلی فارلی
            نے وزن میں کمی کے لیے ایک ادارے سے رابطہ کیا جس نے اس کی پسندیدہ
            اشیاء کھانے کی پابندی عائد نہیں کی۔ کوریلی نے بتدریج اپنے وزن میں 70
            پونڈ کمی کی۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Paragraph>
                  اگر آپ وزن میں کمی کے لیے کسی ادارے کے اخراجات کے متحمل نہیں
                  ہو سکتے ہیں یا اس کے لیے وقت نہیں نکال سکتے ہیں تو مایوس نہ
                  ہوں۔ ایسے کامیاب لوگ بھی کم نہیں ہیں جنہوں نے اپنے طور پر وزن
                  میں مطلوبہ کمی کی۔
                </Paragraph>
                <Paragraph>
                  ٹیکساس کے جے وہیٹن نے ماضی میں اپنا وزن کم کرنے کی کئی بار
                  کوشش کی۔ وہ اپنی ناکامیوں پر مایوس نہیں ہوا۔ پھر وہ اپنے وزن
                  235 پونڈ میں نوے پونڈ کمی کے بعد لگ بھگ بیس برس یہ کمی برقرار
                  رکھنے میں کامیاب رہا۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
            imageAlt="Self-motivation"
            reverse
          />

          <Quote>
            میں نے وزن میں کمی کے لیے انتہائی محنت طلب پروگراموں میں حصہ لیا
            لیکن ہر بار ناکامی سے دوچار رہا۔ لہٰذا میں نے اپنی کوششیں ترک کر
            دیں۔ پھر اس کی ملاقات اپنے ایک ایسے دوست سے ہوئی جسے وہ پہلی نظر میں
            پہچان نہ سکا تھا۔ اس دوست نے اپنے وزن میں قابل رشک کمی کرلی تھی۔ جے
            نے اپنے دوست کی رہنمائی سے غذا اور ورزش کا نیا سلسلہ شروع کیا۔ اب اس
            کا وزن 150 پونڈ ہے جو اس کے قد پانچ فٹ آٹھ انچ کی مناسبت سے بہترین
            ہے۔
          </Quote>

          <Heading level={3}>ذاتی طور پر فیصلہ کیجئے</Heading>

          <Paragraph>
            تحقیق میں شامل بیشتر لوگوں نے وزن میں کمی کے لیے انہی اصولوں کو
            اپنایا جن پر ماہرین ہمیشہ زور دیتے رہے ہیں۔ مثلاً چکنائی اور کیلوریز
            سے بھرپور غذاؤں سے گریز اور جسمانی سرگرمیوں میں اضافہ لیکن انہوں نے
            اپنے لائحہ عمل کا انتخاب خود اپنی ترجیحات اور پسند کے اعتبار سے کیا۔
          </Paragraph>

          <Paragraph>
            اورلینڈو کی ولی نے وزن میں کمی کے لیے گوشت کی مقدار کم کرنے کے ساتھ
            مرغن غذائیں ترک کر دیں۔ اس نے اپنی خوراک میں چکنائی کی مقدار میں
            نمایاں کمی کی۔ ایک چوتھائی کامیاب افراد نے یہی کیا تھا۔ اب ماہرین
            کہتے ہیں کہ روزانہ کی خوراک میں چکنائی کی مقدار 30 فیصد ہونا
            چاہیے۔بازار میں دستیاب اشیاء استعمال کرنے والوں کو اس کا بطور خاص
            خیال رکھنا چاہئیے۔ انہیں پیکنگ پر درج &quot;کم چکنائی&quot; یا
            &quot;چکنائی کے بغیر&quot; کے الفاظ پر یقین نہیں کرنا چاہیے۔ یہ ڈبہ
            بند غذائیں تجویز شدہ حد سے زیادہ چکنائی کا ذریعہ بن سکتی ہیں۔تحقیق
            کے مطابق چالیس فیصد کامیاب لوگوں نے &quot;کیلوریز&quot; کو خصوصی
            اہمیت دی۔
          </Paragraph>

          <Paragraph>
            کامیابی کا ایک گر بھوکا نہ رہنا بھی ہے۔آپ طے شدہ تین بار صبح، دو
            پہر، شام اور رات ڈٹ کر کھانے کے بجائے دن میں پانچ بار کم مقدار میں
            کھا سکتے ہیں۔وزن میں کمی کے بعد کی برقرار رکھنے والے جے کا کہنا ہے۔
            &quot;میں نے یہ جانا کہ جب بھی بھوک لگے کچھ کھا لینا چاہیے اس حد تک
            کہ بھوک کی تشفی ہو جائے۔ میرے تجربے کے مطابق کھانے کے لیے طے شدہ وقت
            تک انتظار خوب کھانے کا سبب بنتا ہے۔&quot;
          </Paragraph>

          <Heading level={3}>ورزش</Heading>
          <Paragraph>
            تحقیق میں شامل نوے فیصد افراد نے اپنے لائیف اسٹائل میں تبدیلی کے بعد
            ہی شاندار کامیابی حاصل کی۔ اس تبدیلی میں باقاعدہ ورزش اور جسمانی طور
            پر زیادہ فعال ہونا بھی شامل ہے۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Paragraph>
                  43برس کی نرس میری نے کئی برس مسلسل ناکامی کے بعد اپنے وزن میں
                  75 پونڈ کی مستقل کمی کی۔ میری کا کہنا ہے کہ میں نے سواری کا
                  استعمال ممکنہ حد تک کم کر دیا۔ جب بھی موقع ملتا پیدل چلنے کو
                  ترجیح دیتی ہوں یا پھر سائیکل استعمال کرتی ہوں۔
                </Paragraph>
                <Paragraph>
                  جے نے کام سے واپسی کے بعد دوڑنے کو ترجیح دی۔ کوریلی نے گھر میں
                  رہ کر ورزش کے ساتھ روزانہ ایک میل چہل قدمی اور ہفتہ وار تیراکی
                  کا معمول اپنایا۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2074"
            imageAlt="Exercise and physical activity"
          />

          <Paragraph>
            ان سب کی کامیابی کا سبب کیا ہے؟ اپنی پسند اور ترجیح کے مطابق جسمانی
            طور پر سرگرمیوں میں اضافہ جو غذا میں کمی کے ساتھ نہایت ضروری ہے۔
            ورزش کے ساتھ خود کو جسمانی طور پر ماضی کی بہ نسبت زیادہ فعال کیا
            جائے۔
          </Paragraph>

          <Heading level={3}>حیران کن پہلو</Heading>

          <Paragraph>
            تحقیق میں شامل چالیس فیصد افراد کا کہنا ہے کہ وزن میں کمی کے مقابلے
            میں اس کمی کو برقرار رکھنا آسان ہے۔ یہ بات ایسے تمام لوگوں کے لیے نا
            قابل یقین ہے جو اپنے وزن میں بار بار کمی کے بعد اس کمی کو برقرار
            رکھنے میں ناکام رہتے ہیں۔ دنیا میں ایسے لوگوں کی تعداد کم نہیں ہے۔
            ان میں بہت سے لوگ ایک سے زیادہ بار ناکامی کے بعد ہمت ہار چکے ہیں۔
          </Paragraph>

          <Paragraph>
            یہ تحقیق ایسے ہی مایوس لوگوں کو حوصلہ دلاتی ہے۔ ان کی ناکامی کا سبب
            یہ نہیں ہے کہ ایسا ہونا ناممکن ہے۔ وہ ناکام صرف اپنی نا مناسب حکمت
            عملی کے باعث ہوتے ہیں۔ ضرورت اس بات کی ہے کہ وہ درست راہ کا انتخاب
            کریں۔ اس میں وقت تو صرف ہوتا ہے، یہ کام آسان بھی نہیں ہے لیکن اپنی
            بھر پور افادیت رکھتا ہے۔
          </Paragraph>

          <Paragraph>
            جب بہت سے مایوس اور دل برداشتہ لوگ اپنے وزن میں قابل رشک کمی کے بعد
            اس کمی کو برقرار رکھ سکتے ہیں تو یہ کام دنیا کے ہر فرد کے لیے ممکن
            ہے۔
          </Paragraph>
        </>
      ),
    },
  },

  "diabetes-is-a-slient-epidemic-sweeping-pakistan": {
    slug: "diabetes-is-a-slient-epidemic-sweeping-pakistan",
    title: "Diabetes is a silent epidemic sweeping Pakistan",
    author: "Dr Sarwar Malik",
    date: "2025-08-10",
    image: SilentEpidemic.src,
    imageAlt: "Silent Epidemic",
    category: "Education",
    links: [
      { text: "World Diabetes Day", url: "#" },
      { text: "Diabetes Care", url: "#" },
      { text: "Effects of Obesity", url: "#" },
    ],
    excerpt:
      "The effects of diabetes are far-reaching, impacting individuals and families.",
    content: (
      <>
        <Paragraph>
          <em>
            Diabetes is fast becoming one of Pakistan&apos;s most serious public
            health challenges. Already, millions of adults have diabetes and
            millions more are at risk, while the nation reports one of the
            highest cases of diabetes in the world. Increasing obesity,
            urbanisation, low access to healthcare and genetic susceptibility
            have all been behind what experts say is an alarmingly rising
            epidemic.
          </em>
        </Paragraph>

        <Paragraph>
          <em>
            To gain a better perspective on the size of the crisis, its causes
            and changing treatment and prevention protocols, we sit down with Dr
            Sarwar Malik, consultant endocrinologist and head of the Department
            of Endocrinology at the Capital Development Authority Hospital,
            Islamabad.
          </em>
        </Paragraph>

        <Heading level={3}>The Current State of Diabetes in Pakistan</Heading>
        <Paragraph>
          <strong>
            Q: How would you describe the current state of diabetes in Pakistan,
            and are we facing an epidemic?
          </strong>
        </Paragraph>
        <Paragraph>
          <strong>A:</strong> As of 2024, Pakistan has around 34.5 million
          adults with diabetes and an additional 12–17 million with prediabetes,
          putting the total number of affected individuals at over 50 million,
          according to the latest figures. This means nearly one in three adults
          either has diabetes or is at high risk of developing it soon. The
          country holds the highest diabetes prevalence rate globally (31.4 per
          cent), and this number is expected to rise to over 70 million by 2050
          if urgent interventions are not implemented.
        </Paragraph>

        <Heading level={3}>At-Risk Groups</Heading>

        <Paragraph>
          <strong>
            Q: What groups are most at risk, age-wise, gender-wise or
            geographically and why?
          </strong>
        </Paragraph>

        <Paragraph>
          <strong>A:</strong> In Pakistan, the groups most at risk of developing
          diabetes include adults aged 40 and above, who show the highest
          prevalence due to age-related insulin resistance and unhealthy
          lifestyle habits. Women, especially those who are overweight or have
          had gestational diabetes, are also more vulnerable, partly due to
          hormonal factors and limited access to healthcare and physical
          activity. Geographically, urban populations face a higher risk than
          rural ones because of sedentary lifestyles, unhealthy diets, and
          greater exposure to processed foods. However, rural areas are also
          seeing rising cases as modern habits and poor health awareness spread.
        </Paragraph>

        <Heading level={3}>Alarming New Trends</Heading>
        <Paragraph>
          <strong>
            Q: Have you noticed any new or alarming trends in the incidence or
            management of diabetes lately?
          </strong>
        </Paragraph>
        <Paragraph>
          <strong>A:</strong> Certainly. There&apos;s sharp rise in diabetes
          cases in our country in recent years, with over 34 million affected,
          but still, a large portion of patients remain undiagnosed or
          undertreated, mirroring global patterns where nearly 60 per cent of
          diabetics over 30 are not receiving proper medication.
        </Paragraph>

        <Quote author="Dr Sarwar Malik">
          The new alarming trend is the early onset of Type-2 diabetes in
          younger individuals of 18-35 years of age and it is becoming a huge
          financial burden on the country&apos;s fragile economy.
        </Quote>

        <Paragraph>
          Even among those on treatment, more than half have poor glycemic
          control, leading to serious complications like neuropathy and
          retinopathy. Widespread lack of awareness, high out-of-pocket
          healthcare costs and inconsistent follow-up further worsen the
          situation. Although emerging technologies like AI show potential for
          early detection and improved care, their impact in Pakistan remains
          limited due to infrastructure and access barriers.
        </Paragraph>

        <Heading level={3}>Root Causes</Heading>

        <Paragraph>
          <strong>
            Q: What do you believe are the key reasons behind the rising
            diabetes cases in the country? Is it purely lifestyle-related or are
            other factors at play?
          </strong>
        </Paragraph>

        <Paragraph>
          <strong>A:</strong> The rising diabetes cases here are driven by a
          combination of lifestyle and non-lifestyle factors. While poor diet,
          physical inactivity, urbanisation and increased obesity are major
          contributors, the problem goes deeper. Genetic predisposition plays a
          significant role, especially in South Asian populations, who are more
          prone to insulin resistance. Also, lack of public health education,
          delayed diagnosis and limited access to affordable care have allowed
          diabetes to spread unchecked. Social factors like poverty, stress, and
          gender-based disparities, particularly affecting women, also
          contribute. So, while lifestyle is a core driver, it&apos;s part of a
          broader web of medical, social and systemic issues fueling the
          epidemic.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>Public Awareness and Screening</Heading>
              <Paragraph>
                <strong>
                  Q: How effective are current public awareness campaigns and
                  screening efforts in tackling this crisis?
                </strong>
              </Paragraph>
              <Paragraph>
                <strong>A:</strong> Despite diabetes awareness and screening
                efforts, their overall effectiveness remains limited in our
                country. Campaigns, such as those run by community groups like
                CCD in Faisalabad and the Pakistan Diabetes Prevention
                Programme, have raised awareness and facilitated screening in
                localised settings, but their national-scale impact is still
                modest.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
          imageAlt="Public health awareness"
        />

        <Paragraph>
          More structured programmes, like diabetes self-management education in
          tertiary care and health-education sessions for school teachers, have
          shown promising results in improving knowledge, treatment adherence
          and glycemic control. Yet, broader studies show that public awareness
          is still lacking, only about 47 per cent of people surveyed in Punjab
          had adequate knowledge, and awareness remains particularly low among
          rural, less educated and lower socioeconomic groups. In summary, while
          targeted interventions are effective on a small scale, large-scale,
          sustained public campaigns and systematic screening are still needed
          to meaningfully combat diabetes crisis in our country.
        </Paragraph>

        <Heading level={3}>Modern Treatment Approaches</Heading>

        <Paragraph>
          <strong>
            Q: What treatments are most commonly recommended now and how have
            approaches evolved over the years?
          </strong>
        </Paragraph>

        <Paragraph>
          <strong>A:</strong> In Pakistan, the most commonly recommended
          treatments for diabetes today include a combination of lifestyle
          modification, oral medications, and insulin therapy, depending on the
          stage and severity of the disease. Initially, Metformin remains the
          first-line oral medication for Type 2 diabetes due to its safety,
          affordability, and effectiveness. However, in recent years,
          there&apos;s been a growing use of newer drug classes like SGLT2
          inhibitors and GLP-1 receptor agonists, which offer added
          cardiovascular and kidney benefits though their high cost limits
          widespread use.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Paragraph>
                Treatment approaches have evolved significantly over the years.
                Earlier, care was mostly reactive and focused on managing blood
                sugar alone. Now, it&apos;s increasingly holistic, emphasising
                early screening, patient education, prevention of complications
                and individualised care. Self-management education, mobile
                health tools, and multidisciplinary clinics are also being
                introduced, though access remains uneven across the country.
              </Paragraph>
              <Paragraph>
                Overall, while global treatment standards are improving,
                affordability and healthcare infrastructure continue to limit
                consistent, high-quality diabetes care for many in Pakistan.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079"
          imageAlt="Modern medical treatment"
          reverse
        />

        <Heading level={3}>Semaglutide: Benefits and Risks</Heading>

        <Paragraph>
          <strong>
            Q: Medications like Semaglutide are gaining popularity. What are the
            benefits and possible side effects of such modern drugs?
          </strong>
        </Paragraph>

        <Paragraph>
          <strong>A:</strong> Medications like Semaglutide, part of the GLP-1
          receptor agonist class, are gaining popularity for their dual benefits
          in blood sugar control and weight loss. They help lower HbA1c, reduce
          appetite, and promote significant weight reduction, while also
          offering added protection against heart and kidney diseases. Recent
          studies even suggest potential anti-aging, anti-inflammatory and
          neuroprotective effects. However, these benefits come with risks,
          common side effects include nausea, vomiting, diarrhea, and more
          serious but rare issues like pancreatitis, gallbladder disease and
          possible thyroid concerns. While promising, these drugs require
          careful medical supervision to balance benefits with potential
          complications.
        </Paragraph>

        <Heading level={3}>Semaglutide and Fertility</Heading>

        <Paragraph>
          <strong>
            Q: Some patients report unexpected pregnancies despite using
            Semaglutide with birth control. How does this drug affect fertility
            and hormones?
          </strong>
        </Paragraph>

        <Quote author="Dr Sarwar Malik">
          Semaglutide can influence fertility and hormones primarily because it
          affects metabolism, appetite, and insulin regulation, which are
          closely linked to reproductive health.
        </Quote>

        <Paragraph>
          <strong>A:</strong> While there&apos;s no direct evidence that
          Semaglutide improves infertility, its impact on weight loss and
          hormonal balance can sometimes disrupt menstrual cycles and ovulation.
          This hormonal fluctuation might reduce the effectiveness of some birth
          control methods or alter how the body processes contraceptives,
          potentially leading to unexpected pregnancies. Also, rapid weight
          changes can affect hormone levels involved in fertility. Because
          research is still limited, women using Semaglutide alongside
          contraception should consult their healthcare providers to ensure
          appropriate birth control methods and close monitoring.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>Lifestyle: The Foundation of Care</Heading>
              <Paragraph>
                <strong>
                  Q: What role does diet, physical activity and stress
                  management play in both controlling and preventing diabetes?
                </strong>
              </Paragraph>
              <Paragraph>
                <strong>A:</strong> Diet, physical activity and stress
                management play crucial roles in both preventing and controlling
                diabetes. A balanced diet rich in whole grains, vegetables, lean
                proteins and healthy fats helps regulate blood sugar levels and
                maintain a healthy weight, reducing insulin resistance.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053"
          imageAlt="Healthy lifestyle and diet"
        />

        <Paragraph>
          Regular physical activity improves insulin sensitivity, aids weight
          management and lowers blood glucose levels. Meanwhile, effective
          stress management is vital because chronic stress can raise blood
          sugar through hormonal changes and lead to unhealthy behaviors like
          poor eating or inactivity. Together, these lifestyle factors form the
          foundation of diabetes care, often reducing the need for medications
          and preventing complications.
        </Paragraph>

        <Heading level={3}>A Vision for Change</Heading>

        <Paragraph>
          <strong>
            Q: If you could change one thing in our healthcare or social system
            to reduce diabetes rates, what would it be?
          </strong>
        </Paragraph>

        <Quote author="Dr Sarwar Malik">
          If I&apos;ve the power to make a single change, it&apos;ll be to
          implement widespread, accessible and sustained diabetes education and
          prevention programmes at the community level. Empowering people with
          knowledge about healthy lifestyles, early symptoms and the importance
          of regular screening, especially in rural and underserved areas, could
          drastically reduce new cases and improve management of existing ones.
        </Quote>

        <Paragraph>
          This change would require integrating diabetes awareness into schools,
          workplaces, and primary healthcare, combined with affordable access to
          nutrition counseling and physical activity opportunities. Education
          fuels prevention, which is the key to reversing our diabetes epidemic.
        </Paragraph>
      </>
    ),
    relatedBlogs: [
      "how-semaglutide-changes-lives",
      "getting-rid-of-obesity-the-real-challenge",
      "monogenic-and-syndromic-obesity",
    ],
    urdu: {
      title: "ذیابیطس: پاکستان میں پھیلتی ایک خاموش وبا",
      author: "ڈاکٹر سرور ملک",
      content: (
        <>
          <Paragraph>
            <em>
              ذیابیطس تیزی سے پاکستان کے سب سے سنگین صحت عامہ کے چیلنجوں میں
              سے ایک بنتی جا رہی ہے۔ لاکھوں بالغ افراد پہلے سے اس بیماری میں
              مبتلا ہیں اور لاکھوں مزید خطرے میں ہیں، جبکہ پاکستان دنیا میں
              سب سے زیادہ ذیابیطس کے مریضوں والے ممالک میں شامل ہے۔ بڑھتا ہوا
              موٹاپا، شہری کاری، صحت کی سہولیات تک محدود رسائی اور جینیاتی
              حساسیت — یہ سب مل کر اس تشویشناک وبا کو جنم دے رہے ہیں۔
            </em>
          </Paragraph>

          <Paragraph>
            <em>
              اس بحران کی گہرائی، اسباب اور بدلتے علاج و تدارک کے طریقوں کو
              سمجھنے کے لیے ہم ڈاکٹر سرور ملک سے گفتگو کرتے ہیں، جو کنسلٹنٹ
              اینڈوکرائنولوجسٹ اور اسلام آباد کے سی ڈی اے ہسپتال میں شعبہ
              اینڈوکرائنولوجی کے سربراہ ہیں۔
            </em>
          </Paragraph>

          <Heading level={3}>پاکستان میں ذیابیطس کی موجودہ صورت حال</Heading>
          <Paragraph>
            <strong>
              س: آپ پاکستان میں ذیابیطس کی موجودہ صورت حال کو کیسے بیان
              کریں گے، اور کیا ہم واقعی ایک وبا کا سامنا کر رہے ہیں؟
            </strong>
          </Paragraph>
          <Paragraph>
            <strong>ج:</strong> ۲۰۲۴ء تک پاکستان میں تقریباً ۳ کروڑ ۴۵ لاکھ
            بالغ افراد ذیابیطس میں مبتلا ہیں اور اضافی ۱ کروڑ ۲۰ لاکھ سے ۱
            کروڑ ۷۰ لاکھ افراد کو پری-ذیابیطس ہے، جس سے متاثرہ افراد کی
            مجموعی تعداد ۵ کروڑ سے تجاوز کر جاتی ہے۔ اس کا مطلب یہ ہے کہ
            ہر تین میں سے ایک بالغ یا تو ذیابیطس کا شکار ہے یا جلد اس میں
            مبتلا ہونے کا خدشہ ہے۔ پاکستان دنیا میں سب سے زیادہ ذیابیطس کی
            شرح (۳۱.۴ فیصد) رکھتا ہے اور اگر فوری اقدامات نہ کیے گئے تو ۲۰۵۰ء
            تک یہ تعداد ۷ کروڑ سے تجاوز کر سکتی ہے۔
          </Paragraph>

          <Heading level={3}>خطرے میں کون؟</Heading>

          <Paragraph>
            <strong>
              س: عمر، جنس یا جغرافیائی لحاظ سے کون سے گروہ سب سے زیادہ
              خطرے میں ہیں اور کیوں؟
            </strong>
          </Paragraph>

          <Paragraph>
            <strong>ج:</strong> پاکستان میں ذیابیطس کا سب سے زیادہ خطرہ ۴۰
            سال سے زائد عمر کے بالغ افراد کو ہے کیونکہ بڑھتی عمر کے ساتھ
            انسولین مزاحمت اور غیر صحت مند طرز زندگی بڑھ جاتے ہیں۔ خواتین،
            خاص طور پر وہ جو زیادہ وزن رکھتی ہیں یا جنہیں حمل کے دوران
            ذیابیطس ہوئی ہو، ہارمونل عوامل اور صحت کی سہولیات تک محدود
            رسائی کی وجہ سے زیادہ خطرے میں ہیں۔ جغرافیائی لحاظ سے شہری
            آبادی میں دیہی علاقوں کے مقابلے میں خطرہ زیادہ ہے، تاہم جدید
            عادات اور صحت سے متعلق آگاہی کی کمی کے باعث دیہی علاقوں میں بھی
            کیسز بڑھ رہے ہیں۔
          </Paragraph>

          <Heading level={3}>نئے اور تشویشناک رجحانات</Heading>
          <Paragraph>
            <strong>
              س: کیا آپ نے حال ہی میں ذیابیطس کے واقعات یا انتظام میں کوئی
              نئے یا تشویشناک رجحانات محسوس کیے ہیں؟
            </strong>
          </Paragraph>
          <Paragraph>
            <strong>ج:</strong> یقیناً۔ ملک میں ۳ کروڑ ۴۰ لاکھ سے زیادہ
            متاثرہ افراد کے ساتھ حالیہ برسوں میں ذیابیطس کے کیسز میں تیز
            اضافہ ہوا ہے، لیکن اب بھی بڑی تعداد میں مریض یا تو تشخیص سے محروم
            ہیں یا انہیں مناسب علاج نہیں مل رہا۔
          </Paragraph>

          <Quote author="ڈاکٹر سرور ملک">
            سب سے تشویشناک نیا رجحان ۱۸ سے ۳۵ سال کے نوجوانوں میں ٹائپ ۲
            ذیابیطس کا ابتدائی ظہور ہے، جو ملک کی کمزور معیشت پر بھاری مالی
            بوجھ بنتا جا رہا ہے۔
          </Quote>

          <Paragraph>
            علاج زیر علاج مریضوں میں بھی آدھے سے زیادہ کا گلائسیمک کنٹرول
            ناقص ہے، جس سے نیوروپیتھی اور ریٹینوپیتھی جیسی پیچیدگیاں سامنے
            آ رہی ہیں۔ آگاہی کی کمی، زیادہ طبی اخراجات اور غیر منظم فالو-اپ
            صورت حال کو مزید خراب کر رہے ہیں۔ اگرچہ AI جیسی ابھرتی ہوئی
            ٹیکنالوجیز ابتدائی تشخیص میں مددگار ہو سکتی ہیں، لیکن
            انفراسٹرکچر اور رسائی کی رکاوٹوں کی وجہ سے پاکستان میں ان کا
            اثر ابھی محدود ہے۔
          </Paragraph>

          <Heading level={3}>بنیادی وجوہات</Heading>

          <Paragraph>
            <strong>
              س: آپ کے خیال میں ملک میں بڑھتے ذیابیطس کیسز کی اہم وجوہات
              کیا ہیں؟ کیا یہ خالص طرز زندگی سے متعلق ہے یا دوسرے عوامل بھی
              ہیں؟
            </strong>
          </Paragraph>

          <Paragraph>
            <strong>ج:</strong> یہاں بڑھتے ذیابیطس کیسز طرز زندگی اور
            غیر طرز زندگی دونوں عوامل کے امتزاج سے آ رہے ہیں۔ غیر متوازن
            خوراک، جسمانی غیر فعالیت، شہری کاری اور بڑھتا موٹاپا بڑے محرکات
            ہیں، لیکن مسئلہ اس سے گہرا ہے۔ جینیاتی استعداد، خاص طور پر
            جنوبی ایشیائی آبادیوں میں انسولین مزاحمت، اہم کردار ادا کرتی ہے۔
            عوامی صحت کی تعلیم کی کمی، دیر سے تشخیص اور سستی طبی سہولیات تک
            محدود رسائی نے ذیابیطس کو بے روک پھیلنے دیا ہے۔ غربت، تناؤ اور
            صنفی تفاوت جیسے سماجی عوامل بھی اس وبا کو ہوا دے رہے ہیں۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>عوامی آگاہی اور اسکریننگ</Heading>
                <Paragraph>
                  <strong>
                    س: اس بحران سے نمٹنے میں موجودہ عوامی آگاہی مہمات اور
                    اسکریننگ کی کوششیں کتنی مؤثر ہیں؟
                  </strong>
                </Paragraph>
                <Paragraph>
                  <strong>ج:</strong> ذیابیطس آگاہی اور اسکریننگ کی کوششوں
                  کے باوجود ان کی مجموعی تاثیر ہمارے ملک میں محدود ہے۔
                  فیصل آباد میں CCD اور پاکستان ذیابیطس پریوینشن پروگرام
                  جیسی مہمات نے مقامی سطح پر آگاہی بڑھائی ہے، لیکن ملکی
                  پیمانے پر ان کا اثر ابھی کم ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
            imageAlt="عوامی صحت آگاہی"
          />

          <Paragraph>
            زیادہ منظم پروگرام، جیسے ٹرشری کیئر میں ذیابیطس سیلف-مینجمنٹ
            تعلیم اور اسکول اساتذہ کے لیے صحت تعلیمی سیشن، علم، علاج کی
            پابندی اور گلائسیمک کنٹرول میں بہتری کے امید افزا نتائج دکھا
            چکے ہیں۔ تاہم، وسیع تر مطالعات سے پتہ چلتا ہے کہ عوامی آگاہی
            اب بھی کم ہے — پنجاب میں سروے کیے گئے صرف ۴۷ فیصد افراد کو
            کافی معلومات تھی اور دیہی، کم تعلیم یافتہ اور غریب طبقوں میں
            آگاہی خاص طور پر کم ہے۔ خلاصہ یہ کہ چھوٹے پیمانے پر مداخلتیں
            مؤثر ہیں، لیکن ملک گیر، مستقل مہمات اور منظم اسکریننگ ابھی باقی
            ہے۔
          </Paragraph>

          <Heading level={3}>جدید علاج کے طریقے</Heading>

          <Paragraph>
            <strong>
              س: آج کل کون سے علاج سب سے زیادہ تجویز کیے جاتے ہیں اور
              برسوں میں طریقوں میں کیا تبدیلی آئی ہے؟
            </strong>
          </Paragraph>

          <Paragraph>
            <strong>ج:</strong> پاکستان میں آج ذیابیطس کے سب سے زیادہ
            تجویز کردہ علاجوں میں طرز زندگی میں تبدیلی، زبانی ادویات اور
            انسولین تھراپی کا مجموعہ شامل ہے، جو بیماری کی شدت پر منحصر ہے۔
            ٹائپ ۲ ذیابیطس کے لیے میٹفارمن اپنی حفاظت، سستی اور تاثیر کی
            وجہ سے پہلی پسند کی زبانی دوا ہے۔ تاہم، حالیہ برسوں میں SGLT2
            انہیبیٹرز اور GLP-1 ریسیپٹر ایگونسٹ جیسی نئی دوا کلاسیں بڑھ رہی
            ہیں جو دل اور گردوں کے فوائد بھی دیتی ہیں، اگرچہ ان کی زیادہ
            قیمت وسیع استعمال کو محدود کرتی ہے۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Paragraph>
                  علاج کے طریقوں میں سالوں کے ساتھ نمایاں تبدیلی آئی ہے۔
                  پہلے دیکھ بھال زیادہ تر ردعمل پر مبنی تھی اور صرف شوگر
                  کنٹرول پر توجہ تھی۔ اب یہ زیادہ جامع ہو گئی ہے — ابتدائی
                  اسکریننگ، مریض کی تعلیم، پیچیدگیوں کی روک تھام اور
                  انفرادی دیکھ بھال پر زور دیا جا رہا ہے۔
                </Paragraph>
                <Paragraph>
                  مجموعی طور پر، جبکہ عالمی علاج کے معیار بہتر ہو رہے ہیں،
                  سستی اور صحت کا بنیادی ڈھانچہ پاکستان میں یکساں اعلیٰ
                  معیار کی ذیابیطس دیکھ بھال کو محدود کر رہا ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079"
            imageAlt="جدید طبی علاج"
            reverse
          />

          <Heading level={3}>سیماگلوٹائیڈ: فوائد اور خطرات</Heading>

          <Paragraph>
            <strong>
              س: سیماگلوٹائیڈ جیسی ادویات مقبول ہو رہی ہیں۔ ایسی جدید ادویات
              کے فوائد اور ممکنہ ضمنی اثرات کیا ہیں؟
            </strong>
          </Paragraph>

          <Paragraph>
            <strong>ج:</strong> سیماگلوٹائیڈ جیسی ادویات، جو GLP-1 ریسیپٹر
            ایگونسٹ کلاس سے تعلق رکھتی ہیں، خون میں شوگر کنٹرول اور وزن
            میں کمی کے دوہرے فوائد کی وجہ سے مقبول ہو رہی ہیں۔ یہ HbA1c کم
            کرتی ہیں، بھوک گھٹاتی ہیں اور نمایاں وزن کم کرتی ہیں، ساتھ ہی
            دل اور گردوں کی حفاظت کرتی ہیں۔ تاہم ان فوائد کے ساتھ خطرات بھی
            ہیں — عام ضمنی اثرات میں متلی، قے، اسہال شامل ہیں اور نادر لیکن
            سنگین مسائل جیسے لبلبے کی سوزش، پتتاشی کی بیماری اور ممکنہ
            تھائیرائیڈ تشویشیں بھی ہو سکتی ہیں۔
          </Paragraph>

          <Heading level={3}>سیماگلوٹائیڈ اور زرخیزی</Heading>

          <Paragraph>
            <strong>
              س: کچھ مریضوں نے سیماگلوٹائیڈ اور برتھ کنٹرول کے ساتھ غیر
              متوقع حمل کی اطلاع دی ہے۔ یہ دوا زرخیزی اور ہارمونز کو کیسے
              متاثر کرتی ہے؟
            </strong>
          </Paragraph>

          <Quote author="ڈاکٹر سرور ملک">
            سیماگلوٹائیڈ بنیادی طور پر میٹابولزم، بھوک اور انسولین ریگولیشن
            کو متاثر کرتی ہے، جو تولیدی صحت سے گہرا تعلق رکھتے ہیں — اس
            لیے یہ زرخیزی اور ہارمونز کو متاثر کر سکتی ہے۔
          </Quote>

          <Paragraph>
            <strong>ج:</strong> اگرچہ اس بات کا کوئی براہ راست ثبوت نہیں کہ
            سیماگلوٹائیڈ بانجھ پن ٹھیک کرتی ہے، لیکن وزن میں کمی اور ہارمونل
            توازن پر اس کا اثر ماہواری اور بیضہ دانی کے عمل کو متاثر کر سکتا
            ہے۔ یہ ہارمونل اتار چڑھاؤ کچھ مانع حمل طریقوں کی تاثیر کم کر
            سکتا ہے، جس کے نتیجے میں غیر متوقع حمل ہو سکتا ہے۔ سیماگلوٹائیڈ
            لینے والی خواتین کو چاہیے کہ مناسب مانع حمل طریقہ اور نگرانی کے
            لیے اپنے ڈاکٹر سے مشورہ کریں۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>طرز زندگی: دیکھ بھال کی بنیاد</Heading>
                <Paragraph>
                  <strong>
                    س: ذیابیطس کو کنٹرول کرنے اور روکنے میں خوراک، جسمانی
                    سرگرمی اور تناؤ کے انتظام کا کیا کردار ہے؟
                  </strong>
                </Paragraph>
                <Paragraph>
                  <strong>ج:</strong> خوراک، جسمانی سرگرمی اور تناؤ کا
                  انتظام ذیابیطس کی روک تھام اور کنٹرول دونوں میں اہم
                  کردار ادا کرتے ہیں۔ سارا اناج، سبزیاں، دبلا پروٹین اور
                  صحت مند چکنائی پر مشتمل متوازن خوراک خون میں شوگر کو
                  قابو میں رکھتی اور انسولین مزاحمت کم کرتی ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053"
            imageAlt="صحت مند طرز زندگی اور خوراک"
          />

          <Paragraph>
            باقاعدہ جسمانی سرگرمی انسولین کی حساسیت بڑھاتی، وزن کنٹرول میں
            مدد کرتی اور خون میں گلوکوز کم کرتی ہے۔ تناؤ کا مؤثر انتظام بھی
            ضروری ہے کیونکہ دائمی تناؤ ہارمونل تبدیلیوں کے ذریعے شوگر بڑھا
            سکتا ہے اور غیر صحت مند عادات کو جنم دے سکتا ہے۔ یہ تمام طرز
            زندگی کے عوامل مل کر ذیابیطس کی دیکھ بھال کی بنیاد بناتے ہیں اور
            اکثر ادویات کی ضرورت کم کر دیتے ہیں۔
          </Paragraph>

          <Heading level={3}>تبدیلی کا ایک وژن</Heading>

          <Paragraph>
            <strong>
              س: اگر آپ ذیابیطس کی شرح کم کرنے کے لیے ہمارے صحت یا سماجی
              نظام میں ایک چیز بدل سکتے، تو وہ کیا ہوتی؟
            </strong>
          </Paragraph>

          <Quote author="ڈاکٹر سرور ملک">
            اگر مجھے ایک تبدیلی لانے کا اختیار ہو تو میں کمیونٹی سطح پر
            وسیع، قابل رسائی اور پائیدار ذیابیطس تعلیم اور تدارک پروگرام
            نافذ کروں گا۔ لوگوں کو صحت مند طرز زندگی، ابتدائی علامات اور
            باقاعدہ اسکریننگ کی اہمیت کے بارے میں علم دینا — خاص طور پر
            دیہی اور پسماندہ علاقوں میں — نئے کیسز کو بڑی حد تک کم کر
            سکتا ہے اور موجودہ مریضوں کی دیکھ بھال بہتر بنا سکتا ہے۔
          </Quote>

          <Paragraph>
            اس تبدیلی کے لیے ضروری ہے کہ ذیابیطس آگاہی کو سکولوں، کام کی
            جگہوں اور بنیادی صحت مراکز میں شامل کیا جائے، ساتھ ہی غذائی
            مشاورت اور جسمانی سرگرمی کے سستے مواقع فراہم کیے جائیں۔ تعلیم
            تدارک کو ممکن بناتی ہے — اور تدارک ہی ہماری ذیابیطس وبا کو
            پلٹنے کی کنجی ہے۔
          </Paragraph>
        </>
      ),
    },
  },

  "understanding-diabetes": {
    slug: "understanding-diabetes",
    title: "Understanding Diabetes",
    author: "Tayyaba Anwar",
    date: "2025-07-20",
    image: UnderstandDiabetes.src,
    imageAlt: "Healthcare in Pakistan",
    category: "Education",
    content: (
      <>
        <Paragraph>
          Diabetes mellitus, or more commonly known as &apos;Sugar&apos; or
          &apos;Diabetes&apos; in our part of the world, diagnosis of which
          leaves permanent imprints and a complete and comprehensive shift in
          one&apos;s lifestyle, is characterized by inability of pancreas to
          produce enough level of hormone insulin, resulting in sustained high
          blood sugar levels and need of immediate preventive medical care.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>Types and Symptoms</Heading>
              <Paragraph>
                Diabetes usually categorized into Type 1 and Type 2, with Type 1
                developing typically in childhood attributing to genetic and
                environmental factors and Type 2 being the most common in
                adults, with recent surge seen in younger people also, is
                perceived as a &apos;Silent Killer&apos; due to the serious
                complications it can lead to such as cardiovascular disease,
                neuropathy, retinopathy, kidney disease to name a few, if not
                being treated timely and effectively.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=2091"
          imageAlt="Understanding diabetes types"
        />

        <Paragraph>
          The condition can be identified through symptoms such as excessive
          weight loss, increased thirst, excessive urination, blurred vision and
          fatigue.
        </Paragraph>

        <Heading level={3}>A Global and National Crisis</Heading>

        <Paragraph>
          The world has seen an enormous surge in the population growing from 7%
          in 1990 to 14% of adults in 2022 between the age of 18 years and
          above, being affected by the disease. Taking into account, the figures
          are even alarming when it comes to Pakistan, with 26.7% of the country
          population (33 million adults) affected from the disease with country
          posing highest prevalence rate in the world.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Paragraph>
                Such staggering figures urge one not only to delve deeply into
                the causes of this disease&apos;s development among individuals
                but also to carefully design a lifestyle regime, at both
                individual and societal levels, that may facilitate prevention
                and cure.
              </Paragraph>

              <Paragraph>
                With the increasing prevalence and mortality associated with it,
                it becomes an emotional and economic burden on the patient and a
                socio-economic burden on the country&apos;s economy, making it
                even more imperative to devise and develop ways that can help
                reduce its recurrence among people.
              </Paragraph>
            </>
          }
          reverse
          image="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071"
          imageAlt="Healthcare infrastructure"
        />
        <Paragraph>
          Sedentary lifestyles, obesity, and poor dietary habits are as much
          contributor towards an individual developing the disease as hereditary
          or genetic traits are and in a developing country like Pakistan, poor
          or limited access to health care facilities makes the situation even
          worse.
        </Paragraph>

        <Heading level={3}>National Action Plan</Heading>

        <Paragraph>
          Realizing the risk and long-term effects, the disease poses, on a
          larger scale, the National Action Plan for Non-communicable Disease
          Prevention, Control and Health Promotion in Pakistan (NAP-NCD) is an
          effort, being carried out to prevent and control the incidence of
          diabetes. This is achieved through surveillance and the control of
          risk factors, a continuing Medical Education (CME) program for
          healthcare providers, and the assurance of the availability of
          required medications.
        </Paragraph>

        <Paragraph>
          These are being further strengthened by conducting capacity building
          workshops within in health and community sector practitioners and
          social workers on the lines of registration, treatment and referral
          protocols.
        </Paragraph>

        <Heading level={3}>Is It Enough?</Heading>
        <Paragraph>
          But within a country of more than 255 million, underdeveloped systems
          and structures, a struggling economy and scarcity of basic health care
          resources, would any such measure be sufficient to cope with the
          ever-rising risks, prevalence and recurrence of disease, i.e. Diabetes
          mellitus? The answer is a solid &apos;No&apos;.
        </Paragraph>

        <Heading level={3}>Lifestyle as Medicine</Heading>

        <Paragraph>
          In a situation, where there is no universally designed cure for
          diabetes, researches and studies have shown over time, a revamping of
          one&apos;s lifestyle, eating habits, weight watch can not only reduce
          the risk of having the condition but can significantly supplement the
          other wise complex management of the condition that involves several
          strategies. Adults and especially the elderly should be made aware of
          the importance of incorporating exercise and diet changes as a part of
          their daily routine, with the prevention strategies like walk,
          exercise, sports, outdoor activities, being made part of an individual
          life right from their school years.
        </Paragraph>

        <Heading level={3}>Prevention Through Education</Heading>
        <Paragraph>
          Awareness through education at a young age, can prove to be the
          strongest tool in preventing the occurrence of disease among people,
          at a later stage in life. It is important to note, there are some
          diabetes risk factors you can&apos;t change, such as your
          genetics/family history, age and race, however, some very basic life
          style changes can substantially help reduce the risk of developing
          disease in the first place.
        </Paragraph>

        <List
          items={[
            "Committing one self to a minimum of 30 minutes' walk in a day",
            "Maintaining a healthy weight",
            "Managing your stress effectively",
            "Eating a balanced nutritious diet",
          ]}
        />

        <Heading level={3}>Living with Diabetes</Heading>

        <Paragraph>
          Being diagnosed with diabetes is a life-changing event, however, in no
          way it implies that one cannot continue living a happy and healthy
          life. Being a global health concern, all it requires is consistent
          care, diligence and an all-inclusive healthy lifestyle at the
          individual, community and society level as a whole, that may help
          develop a better grasp in not only preventing but also managing the
          condition.
        </Paragraph>
      </>
    ),
    relatedBlogs: [
      "is-diabetes-ending-my-life",
      "scroll-study-snack-repeat",
      "what-is-diabesity-and-why-does-it-matter",
    ],
    urdu: {
      title: "ذیابیطس کو سمجھنا",
      author: "طیبہ انور",
      content: (
        <>
          <Paragraph>
            ذیابیطس ملیٹس، جسے ہمارے ہاں عموماً &apos;شوگر&apos; یا
            &apos;ذیابیطس&apos; کہا جاتا ہے، ایک ایسی بیماری ہے جس کی تشخیص
            زندگی پر گہرے نقوش چھوڑ دیتی ہے اور طرز زندگی میں مکمل تبدیلی
            ناگزیر ہو جاتی ہے۔ یہ بیماری لبلبے کی انسولین ہارمون پیدا کرنے
            کی ناکافی صلاحیت کی وجہ سے ہوتی ہے، جس کے نتیجے میں خون میں
            شوگر کی سطح مسلسل بڑھی رہتی ہے اور فوری طبی دیکھ بھال ضروری
            ہو جاتی ہے۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>اقسام اور علامات</Heading>
                <Paragraph>
                  ذیابیطس عموماً ٹائپ ۱ اور ٹائپ ۲ میں تقسیم ہوتی ہے۔ ٹائپ ۱
                  عموماً بچپن میں جینیاتی اور ماحولیاتی عوامل سے پیدا ہوتی ہے
                  جبکہ ٹائپ ۲ بالغوں میں سب سے عام ہے اور حال ہی میں نوجوانوں
                  میں بھی اس میں اضافہ دیکھا گیا ہے۔ اگر بروقت اور مؤثر علاج
                  نہ کیا جائے تو یہ &apos;خاموش قاتل&apos; بن سکتی ہے کیونکہ
                  یہ دل کی بیماری، نیوروپیتھی، ریٹینوپیتھی اور گردوں کی بیماری
                  جیسی سنگین پیچیدگیاں پیدا کر سکتی ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=2091"
            imageAlt="ذیابیطس کی اقسام کو سمجھنا"
          />

          <Paragraph>
            اس بیماری کی علامات میں وزن میں تیزی سے کمی، پیاس کا زیادہ لگنا،
            بار بار پیشاب آنا، نظر کا دھندلانا اور تھکاوٹ شامل ہیں۔
          </Paragraph>

          <Heading level={3}>عالمی اور قومی بحران</Heading>

          <Paragraph>
            دنیا بھر میں اس بیماری میں زبردست اضافہ دیکھا گیا ہے — ۱۹۹۰ء
            میں ۷ فیصد سے بڑھ کر ۲۰۲۲ء میں ۱۸ سال سے زائد عمر کے ۱۴ فیصد
            بالغ اس کا شکار ہو چکے ہیں۔ پاکستان کے حوالے سے اعداد و شمار
            اور بھی تشویشناک ہیں — ملک کی ۲۶.۷ فیصد آبادی (۳ کروڑ ۳۰ لاکھ
            بالغ) اس بیماری میں مبتلا ہے اور پاکستان دنیا میں سب سے زیادہ
            شرح والے ممالک میں شامل ہے۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Paragraph>
                  یہ تعداد ہمیں مجبور کرتی ہے کہ ہم نہ صرف اس بیماری کے
                  اسباب کی گہرائی میں جائیں بلکہ انفرادی اور سماجی سطح پر ایک
                  ایسا طرز زندگی ڈیزائن کریں جو اس کی روک تھام اور علاج میں
                  مددگار ہو۔
                </Paragraph>

                <Paragraph>
                  بڑھتی ہوئی شیوع اور اس سے وابستہ اموات مریض اور اس کے
                  خاندان کے لیے جذباتی اور معاشی بوجھ بن جاتی ہیں، اور ملک
                  کی معیشت پر بھی سماجی و اقتصادی دباؤ ڈالتی ہیں — یہی وجہ
                  ہے کہ اس کی تکرار کو کم کرنے کے طریقے ڈھونڈنا ناگزیر ہے۔
                </Paragraph>
              </>
            }
            reverse
            image="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071"
            imageAlt="صحت کا بنیادی ڈھانچہ"
          />

          <Paragraph>
            غیر فعال طرز زندگی، موٹاپا اور غیر متوازن خوراک اتنے ہی ذمہ دار
            ہیں جتنے جینیاتی عوامل — اور پاکستان جیسے ترقی پذیر ملک میں صحت
            کی سہولیات تک کم یا محدود رسائی صورت حال کو مزید خراب کرتی ہے۔
          </Paragraph>

          <Heading level={3}>قومی ایکشن پلان</Heading>

          <Paragraph>
            بیماری کے خطرات اور طویل مدتی اثرات کو سامنے رکھتے ہوئے، پاکستان
            میں غیر متعدی بیماریوں کی روک تھام، کنٹرول اور صحت کے فروغ کے
            لیے قومی ایکشن پلان (NAP-NCD) اس کی شیوع کو کم کرنے کی ایک
            کوشش ہے۔ اس میں خطرے کے عوامل کی نگرانی اور کنٹرول، صحت کے
            پیشہ ور افراد کے لیے مسلسل طبی تعلیم (CME) پروگرام اور ضروری
            ادویات کی دستیابی یقینی بنانا شامل ہے۔
          </Paragraph>

          <Paragraph>
            اسے مزید مضبوط بنانے کے لیے صحت اور کمیونٹی شعبوں کے کارکنان
            اور سماجی کارکنوں کے لیے رجسٹریشن، علاج اور ریفرل پروٹوکول پر
            صلاحیت سازی ورکشاپس منعقد کی جا رہی ہیں۔
          </Paragraph>

          <Heading level={3}>کیا یہ کافی ہے؟</Heading>
          <Paragraph>
            لیکن ۲۵ کروڑ سے زیادہ آبادی، کمزور نظام، مشکلات میں گھری معیشت
            اور بنیادی صحت وسائل کی قلت والے ملک میں — کیا یہ اقدامات
            ذیابیطس ملیٹس کے بڑھتے خطرات اور تکرار سے نمٹنے کے لیے کافی
            ہوں گے؟ جواب سیدھا &apos;نہیں&apos; ہے۔
          </Paragraph>

          <Heading level={3}>طرز زندگی بطور دوا</Heading>

          <Paragraph>
            ایسی صورت حال میں جہاں ذیابیطس کا کوئی عالمگیر علاج موجود نہیں،
            تحقیق اور مطالعات نے ثابت کیا ہے کہ طرز زندگی، کھانے کی عادات
            اور وزن پر نظر رکھنا نہ صرف بیماری کے خطرے کو کم کر سکتا ہے
            بلکہ اس کے پیچیدہ انتظام میں اہم کردار ادا کر سکتا ہے۔ بالغ
            افراد اور خاص طور پر بزرگوں کو روزانہ کی زندگی میں ورزش اور
            خوراک میں تبدیلی کو شامل کرنا چاہیے — اور یہ احتیاطی عادات
            اسکول کے دنوں سے ہی اپنانی چاہییں۔
          </Paragraph>

          <Heading level={3}>تعلیم کے ذریعے روک تھام</Heading>
          <Paragraph>
            کم عمری میں تعلیم کے ذریعے آگاہی آگے چل کر بیماری کو روکنے کا
            سب سے طاقتور ہتھیار ثابت ہو سکتی ہے۔ یہ یاد رکھنا ضروری ہے کہ
            ذیابیطس کے کچھ خطرے کے عوامل، جیسے جینیات، عمر اور نسل، آپ
            کے بس میں نہیں ہیں — لیکن چند بنیادی طرز زندگی کی تبدیلیاں
            بیماری کا خطرہ نمایاں طور پر کم کر سکتی ہیں:
          </Paragraph>

          <List
            items={[
              "روزانہ کم از کم ۳۰ منٹ پیدل چلنے کا عزم",
              "صحت مند وزن برقرار رکھنا",
              "تناؤ کو مؤثر طریقے سے قابو میں رکھنا",
              "متوازن اور غذائیت سے بھرپور خوراک کھانا",
            ]}
          />

          <Heading level={3}>ذیابیطس کے ساتھ زندگی</Heading>

          <Paragraph>
            ذیابیطس کی تشخیص یقیناً زندگی بدل دینے والا واقعہ ہے، لیکن اس
            کا مطلب یہ نہیں کہ خوشحال اور صحت مند زندگی ممکن نہیں رہتی۔
            یہ ایک عالمی صحت کا مسئلہ ہے اور اس کے لیے بس مستقل دیکھ بھال،
            لگن اور انفرادی، کمیونٹی اور سماجی سطح پر ایک جامع صحت مند طرز
            زندگی درکار ہے — جو اس بیماری کو نہ صرف روکنے بلکہ اس کے بہتر
            انتظام میں بھی مددگار ہو۔
          </Paragraph>
        </>
      ),
    },
  },

  "is-diabetes-ending-my-life": {
    slug: "is-diabetes-ending-my-life",
    title: "Is Diabetes ending my life?",
    author: "Muhammad Yasir",
    date: "2025-09-05",
    image: EndingLife.src,
    imageAlt: "Living with diabetes",
    category: "Health",
    content: (
      <>
        <Paragraph>
          I recall vividly when the doctor gave me a stern look and said,
          &quot;You have diabetes.&quot;
        </Paragraph>

        <Paragraph>
          The words struck me like a physical blow. I sat silently, reeling from
          what had occurred. My head was spinning in a thousand ways —
          complications, medications, lifestyle modifications. The more I
          worried, the worse it felt. It wasn&apos;t the disease that terrified
          me; it was the fear of losing control of my own life.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>Facing the Reality</Heading>
              <Paragraph>
                My mind was instantly flooded with questions and fears — What
                does this mean for my future? Will I lose my health, my energy,
                my independence? The doctor explained the realities in clear
                terms: diabetes isn&apos;t just about high blood sugar;
                it&apos;s a disease that, if left uncontrolled, can silently
                damage vital organs — the heart, kidneys, eyes, nerves, even the
                skin. It can lead to blindness, kidney failure, heart attacks,
                strokes, and slow-healing wounds. I knew then that this
                wasn&apos;t something I could take lightly.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=2091"
          imageAlt="Medical diagnosis"
        />

        <Paragraph>
          That first week after my diagnosis was one of the darkest periods of
          my life. I was caught in a cycle of anxiety and regret, replaying
          every unhealthy choice I had made. I learned that my family history
          wasn&apos;t innocent either — diabetes ran through generations like an
          uninvited guest. My grandfather had it, my uncle struggled with it,
          and now it was in my life. The thought that it could one day affect my
          children made my chest tighten. I didn&apos;t just have to fight this
          for myself — I had to set an example for the next generation.
        </Paragraph>

        <Quote>
          For days, I was in shock and a state of anxiety. I couldn&apos;t help
          but wonder, How did I end up here? Every consideration took me back to
          the same painful reality: I had been neglecting my health. But one
          day, looking at myself in the mirror, I gave myself a promise. I was
          not going to let this disease consume me. I would fight it back.
        </Quote>

        <TextImageSection
          text={
            <>
              <Heading level={3}>Taking Control: Diet Changes</Heading>
              <Paragraph>
                I began with my plate. Gone were the fizzy drinks, fried foods,
                and all the processed rubbish I had indulged in. In their place
                went fresh veggies, lean meats, whole grains, and measured
                portions. It was like punishment at first, but eventually, I
                grew to appreciate how my body felt — lighter, more energetic.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053"
          imageAlt="Healthy eating"
          reverse
        />

        <Heading level={3}>Exercise Became My Routine</Heading>

        <Paragraph>
          Exercise became my daily routine. I walked each morning, picking up my
          speed and mood with every step. Strength training came next, followed
          by light cardio. The sweating was a purification of old ways, and my
          body answered in kind. But I knew that diabetes wasn&apos;t just a
          fight in the body — it was one in the mind.
        </Paragraph>

        <Heading level={3}>Mental Wellness</Heading>
        <Paragraph>
          So I taught myself to pace my mind. I did deep breathing, morning
          meditation, and sat quietly outside, feeling the breeze on my face.
          Stress was just another adversary, and I needed to keep it under
          control.
        </Paragraph>

        <Paragraph>
          Months went by, and my commitment started paying off in my readings.
          My blood sugar remained steady, sitting exactly where my doctor had
          hoped. The best part? I was in control again. I was myself again.
        </Paragraph>

        <Quote>
          In retrospect, diabetes did not kill me — it remade me. It showed me
          how to be disciplined, patient, and the strength of perseverance. I
          still have it, but I live my own way. And if there&apos;s one thing
          I&apos;ve realized, it&apos;s this: a diagnosis isn&apos;t the end of
          the story — it can be the start of a better one.
        </Quote>
      </>
    ),
    relatedBlogs: [
      "understanding-diabetes",
      "what-is-diabesity-and-why-does-it-matter",
      "scroll-study-snack-repeat",
    ],
    urdu: {
      title: "کیا ذیابیطس میری زندگی ختم کر رہی ہے؟",
      author: "محمد یاسر",
      content: (
        <>
          <Paragraph>
            مجھے وہ لمحہ اچھی طرح یاد ہے جب ڈاکٹر نے سنجیدگی سے میری طرف
            دیکھا اور کہا، &quot;آپ کو ذیابیطس ہے۔&quot;
          </Paragraph>

          <Paragraph>
            یہ الفاظ کسی ضرب کی طرح لگے۔ میں خاموش بیٹھا رہا، حیرت اور
            اضطراب میں ڈوبا ہوا۔ ذہن میں ہزار خیال آنے لگے — پیچیدگیاں،
            دوائیں، طرز زندگی میں تبدیلیاں۔ جتنا سوچتا، اتنا ہی بُرا لگتا۔
            مجھے بیماری سے اتنا ڈر نہیں تھا — ڈر تھا تو اپنی زندگی پر سے
            کنٹرول کھو دینے کا۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>حقیقت کا سامنا</Heading>
                <Paragraph>
                  میرے ذہن میں فوراً سوالات اور خدشات کا سیلاب آ گیا — میرے
                  مستقبل کا کیا ہوگا؟ کیا میں اپنی صحت، توانائی اور آزادی
                  کھو دوں گا؟ ڈاکٹر نے صاف لفظوں میں سمجھایا: ذیابیطس صرف
                  زیادہ شوگر کا نام نہیں — یہ ایک ایسی بیماری ہے جو اگر
                  قابو میں نہ رکھی جائے تو خاموشی سے اہم اعضاء کو نقصان
                  پہنچاتی ہے — دل، گردے، آنکھیں، اعصاب، حتیٰ کہ جلد کو بھی۔
                  یہ اندھا پن، گردے فیل ہونا، دل کا دورہ، فالج اور آہستہ
                  بھرنے والے زخم تک لے جا سکتی ہے۔ اس وقت مجھے احساس ہو گیا
                  کہ یہ معاملہ سنجیدہ ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=2091"
            imageAlt="طبی تشخیص"
          />

          <Paragraph>
            تشخیص کے بعد پہلا ہفتہ میری زندگی کے تاریک ترین ادوار میں سے
            ایک تھا۔ میں اضطراب اور پچھتاوے کے چکر میں پھنسا ہر غلط انتخاب
            کو دہراتا رہا۔ مجھے پتہ چلا کہ میری خاندانی تاریخ بھی بے داغ
            نہیں تھی — ذیابیطس نسل در نسل چلی آ رہی تھی جیسے کوئی ان چاہا
            مہمان ہو۔ میرے دادا کو تھی، چچا کو تھی، اور اب میری باری تھی۔
            یہ سوچ کہ شاید ایک دن میرے بچوں کو بھی ہو، سینے کو بھاری کر
            دیتی تھی۔ مجھے نہ صرف اپنے لیے لڑنا تھا — بلکہ اگلی نسل کے
            لیے ایک مثال بھی قائم کرنی تھی۔
          </Paragraph>

          <Quote>
            کئی دن میں سکتے اور گھبراہٹ میں رہا۔ بار بار یہی سوچتا — میں
            یہاں تک کیسے پہنچا؟ ہر خیال اسی دردناک حقیقت پر لے جاتا کہ میں
            اپنی صحت سے غافل رہا۔ لیکن ایک دن آئینے میں خود کو دیکھ کر
            میں نے اپنے آپ سے وعدہ کیا — میں اس بیماری کو اپنے اوپر حاوی
            نہیں ہونے دوں گا۔ میں اس سے لڑوں گا۔
          </Quote>

          <TextImageSection
            text={
              <>
                <Heading level={3}>کنٹرول اپنے ہاتھ میں: خوراک میں تبدیلی</Heading>
                <Paragraph>
                  میں نے اپنی پلیٹ سے شروعات کی۔ فزی ڈرنکس، تلی ہوئی چیزیں
                  اور پروسیسڈ کھانے سب ختم ہو گئے۔ ان کی جگہ تازہ سبزیاں،
                  دبلا گوشت، سارا اناج اور مناسب مقدار میں کھانا آ گیا۔ شروع
                  میں یہ سزا جیسا لگا، لیکن آہستہ آہستہ مجھے محسوس ہونے لگا
                  کہ جسم کتنا ہلکا اور توانا ہو گیا ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053"
            imageAlt="صحت مند کھانا"
            reverse
          />

          <Heading level={3}>ورزش میری روزمرہ عادت بن گئی</Heading>

          <Paragraph>
            ورزش میری روزانہ کی عادت بن گئی۔ ہر صبح چہل قدمی کرتا، قدم
            بڑھاتا تو موڈ بھی بہتر ہوتا جاتا۔ پھر طاقت کی ورزش اور ہلکی
            کارڈیو بھی شامل ہو گئی۔ پسینہ جیسے پرانی عادتوں کا صفایا کر
            رہا ہو۔ لیکن میں جانتا تھا کہ ذیابیطس صرف جسم کی لڑائی نہیں —
            یہ ذہن کی بھی لڑائی ہے۔
          </Paragraph>

          <Heading level={3}>ذہنی صحت</Heading>
          <Paragraph>
            اس لیے میں نے اپنے ذہن کو قابو میں رکھنا سیکھا۔ گہری سانسیں
            لینا، صبح کا مراقبہ اور باہر سکون سے بیٹھنا — ہوا کو چہرے
            پر محسوس کرنا۔ تناؤ بھی ایک دشمن تھا اور اسے قابو میں رکھنا
            ضروری تھا۔
          </Paragraph>

          <Paragraph>
            مہینے گزرتے گئے اور میری محنت نتیجہ دینے لگی۔ میری شوگر مستحکم
            رہنے لگی، بالکل وہاں جہاں ڈاکٹر چاہتے تھے۔ سب سے اچھی بات؟ میں
            دوبارہ کنٹرول میں تھا۔ میں پھر خود تھا۔
          </Paragraph>

          <Quote>
            پیچھے مڑ کر دیکھوں تو ذیابیطس نے مجھے ختم نہیں کیا — اس نے
            مجھے نئے سرے سے بنایا۔ اس نے مجھے نظم و ضبط، صبر اور استقامت
            کی طاقت سکھائی۔ ابھی بھی ہے، لیکن میں اپنی مرضی سے جیتا ہوں۔
            اور اگر ایک بات جانی ہے تو یہ کہ: تشخیص کہانی کا اختتام نہیں
            — یہ ایک بہتر کہانی کا آغاز ہو سکتا ہے۔
          </Quote>
        </>
      ),
    },
  },

  "monogenic-and-syndromic-obesity": {
    slug: "monogenic-and-syndromic-obesity",
    title: "Monogenic & Syndromic Obesity",
    date: "2025-10-01",
    image: Monogenic.src,
    imageAlt: "Genetic research and obesity",
    category: "Education",
    content: (
      <>
        <em>
          <strong>
            Obesity is a metabolic disorder in which energy balance is
            dysregulated, leading to weight gain.
          </strong>
        </em>

        <Paragraph>
          It is a major medical problem beginning from childhood and seems to
          have an epidemic size as the World Health Organization (WHO) has
          estimated the number of children &lt; 5 years old who are obese or
          overweight to be ~39 million.
        </Paragraph>

        <Paragraph>
          Children are considered overweight when their BMI is between the 85th
          and 95th percentile for their age and gender, obese with a BMI ≥ 95th
          percentile, and extremely obese with a BMI ≥ 120% of the 95th
          percentile.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>What is Monogenic Obesity?</Heading>
              <Paragraph>
                <strong>Monogenic obesity</strong> follows a Mendelian pattern
                of inheritance and patients are usually characterized by severe
                obesity due to mutations in a specific gene. Mutations in genes
                implicated in the leptin–melanocortin pathway have been mostly
                associated with monogenic obesity.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080"
          imageAlt="Genetic research"
        />

        <Heading level={3}>Types of Monogenic Obesity</Heading>

        <List
          items={[
            "Congenital Leptin Deficiency",
            "Congenital Leptin Receptor Deficiency",
            "POMC Deficiency",
            "PCSK1 Deficiency",
            "MC4R Deficiency",
          ]}
        />

        <Heading level={3}>Leptin-Melanocortin Pathway</Heading>

        <Paragraph>
          In this pathway, leptin—an adipose tissue hormone—binds to the
          hypothalamic leptin receptor, stimulating the production of
          proopiomelanocortin (POMC). Proprotein convertase subtilisin/kexin
          type 1 (PCSK1) cleaves POMC into melanocortin ligands, such as α- and
          β melanocyte–stimulating hormone, expediting binding and activation of
          the melanocortin-4 receptor (MC4R), thus reducing food intake and
          increasing energy consumption. BDNF (Brain derived neurotrophic
          factor) also has a regulatory role in this pathway.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>Key Findings in Pakistani Children</Heading>
              <Paragraph>
                Leptin deficiency is considered a significant cause of monogenic
                obesity in Egyptian children with early-onset obesity as the
                diagnosis of these patients would be a perfect target for
                recombinant leptin therapy.
              </Paragraph>
              <Paragraph>
                Remarkably high morbidity and mortality has been observed in
                children with LEP or LEPR deficiency. High incidence of
                pulmonary and GI infections is the main cause of deaths.
                Oxidative stress levels are notably higher in LEP than in LEPR
                or MC4R deficiency.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080"
          imageAlt="Medical research findings"
          reverse
        />

        <Paragraph>
          Current or novel medications against monogenic forms of obesity,
          though available in many developed countries, are unfortunately
          lacking in Pakistan—a country with the world&apos;s highest recorded
          prevalence of LEP-signaling deficiency.
        </Paragraph>

        <Heading level={3}>Treatment Options</Heading>

        <List
          items={[
            "Leptin deficiency: hormone replacement therapy with recombinant leptin",
            "LEPR deficiency: Setmelanotide (MC4R agonist)",
            "POMC deficiency: Setmelanotide (MC4R agonist)",
            "PCSK1 deficiency: Setmelanotide (MC4R agonist)",
            "MC4R deficiency: Semaglutide (GLP-1 RA), Tirzepatide (GLP-1/GIP RA)",
          ]}
        />

        <Heading level={3}>Syndromic Obesity</Heading>
        <Paragraph>
          Syndromic obesity refers to obesity that is associated with
          intellectual disability, dysmorphic features, or abnormalities
          affecting different organs and systems, with low frequency, high
          variability, and a Mendelian pattern of inheritance.
        </Paragraph>

        <Heading level={3}>Important Syndromic Obesity Types</Heading>

        <List
          items={[
            "Prader–Willi Syndrome (PWS)",
            "Bardet–Biedl Syndrome (BBS)",
            "Pseudohypoparathyroidism (PHP) Type 1a",
            "Alström Syndrome (ALMS)",
            "16p11.2 Deletion Syndrome",
            "WAGR Syndrome",
            "Smith–Magenis Syndrome (SMS)",
            "Cohen Syndrome (CS)",
            "MYT1L-Variants Syndrome",
            "Börjeson–Forssman–Lehmann Syndrome (BFLS)",
            "Down Syndrome (DS)",
            "Kallmann Syndrome (KS)",
            "Carpenter Syndrome (CRPT1)",
          ]}
        />

        <Heading level={3}>
          Research Findings: High Morbidity and Mortality
        </Heading>

        <Paragraph>
          <a
            href="https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791%2823%2900354-3"
            target="_blank"
            className="underline"
          >
            <em>Read more</em>
          </a>
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>Key Conclusions</Heading>
              <Paragraph>
                Comparative data from this retrospective cross-sectional study
                indicate a distinctly higher level of morbidity in children with
                LEP or LEPR deficiency compared with those with homozygous
                loss-of-function mutations in the MC4R gene.
              </Paragraph>
              <Paragraph>
                Current or novel medications against monogenic forms of obesity,
                though available in many developed countries, are unfortunately
                lacking in Pakistan—a country with the world&apos;s highest
                recorded prevalence of LEP-signaling deficiency.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
          imageAlt="Medical research and treatment"
          reverse
        />

        <Paragraph>
          The treatments include hormone replacement therapy with recombinant
          leptin for subjects with LEP deficiency, the MC4R agonist
          setmelanotide for LEPR deficiency, and glucagon like peptide-1
          receptor agonists for subjects with MC4R deficiency.
        </Paragraph>

        <Paragraph>
          The fact that a sizable population of children are failing to achieve
          normal educational development and are becoming seriously ill and
          dying prematurely as the result of a deficiency in hormonal signaling
          for which relatively simple peptide treatments are readily available
          highlights serious flaws in the global system through which drugs are
          developed and made available to those who most need them.
        </Paragraph>
      </>
    ),
    relatedBlogs: [
      "how-semaglutide-changes-lives",
      "getting-rid-of-obesity-the-real-challenge",
      "diabetes-is-a-slient-epidemic-sweeping-pakistan",
    ],
    urdu: {
      title: "مونوجینک اور سنڈرومک موٹاپا",
      content: (
        <>
          <em>
            <strong>
              موٹاپا ایک میٹابولک عارضہ ہے جس میں توانائی کا توازن بگڑ جاتا
              ہے اور وزن بڑھتا رہتا ہے۔
            </strong>
          </em>

          <Paragraph>
            یہ بچپن سے شروع ہونے والا ایک سنگین طبی مسئلہ ہے اور وبائی شکل
            اختیار کرتا جا رہا ہے — عالمی ادارہ صحت (WHO) کے مطابق ۵ سال سے
            کم عمر کے تقریباً ۳ کروڑ ۹۰ لاکھ بچے موٹے یا زائد وزن کا شکار
            ہیں۔
          </Paragraph>

          <Paragraph>
            بچوں کو زائد وزن تب سمجھا جاتا ہے جب ان کا BMI ان کی عمر اور
            جنس کے لحاظ سے ۸۵ویں اور ۹۵ویں پرسینٹائل کے درمیان ہو، موٹاپا
            BMI ≥ ۹۵ویں پرسینٹائل پر، اور انتہائی موٹاپا ۹۵ویں پرسینٹائل
            کے ۱۲۰ فیصد یا اس سے زیادہ BMI پر۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>مونوجینک موٹاپا کیا ہے؟</Heading>
                <Paragraph>
                  <strong>مونوجینک موٹاپا</strong> مینڈیلین طرز وراثت کی
                  پیروی کرتا ہے اور مریضوں میں عام طور پر کسی ایک مخصوص جین
                  میں تبدیلی کی وجہ سے شدید موٹاپا پایا جاتا ہے۔ لیپٹن-میلانوکورٹن
                  راستے میں شامل جینز میں تبدیلیاں زیادہ تر مونوجینک موٹاپے
                  سے منسلک رہی ہیں۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080"
            imageAlt="جینیاتی تحقیق"
          />

          <Heading level={3}>مونوجینک موٹاپے کی اقسام</Heading>

          <List
            items={[
              "پیدائشی لیپٹن کی کمی",
              "پیدائشی لیپٹن ریسیپٹر کی کمی",
              "POMC کی کمی",
              "PCSK1 کی کمی",
              "MC4R کی کمی",
            ]}
          />

          <Heading level={3}>لیپٹن-میلانوکورٹن راستہ</Heading>

          <Paragraph>
            اس راستے میں لیپٹن — ایک چربی کے بافتوں کا ہارمون — ہائپوتھیلامک
            لیپٹن ریسیپٹر سے جڑتا ہے اور پروپیومیلانوکورٹن (POMC) کی پیداوار
            کو متحرک کرتا ہے۔ PCSK1 POMC کو میلانوکورٹن لیگنڈز میں تبدیل
            کرتا ہے جو MC4R کو فعال کرتے ہیں، اس طرح خوراک کی مقدار کم
            ہوتی اور توانائی کا استعمال بڑھتا ہے۔ BDNF بھی اس راستے میں
            ریگولیٹری کردار ادا کرتا ہے۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>پاکستانی بچوں میں اہم نتائج</Heading>
                <Paragraph>
                  لیپٹن کی کمی کو مصری بچوں میں ابتدائی موٹاپے کی ایک اہم وجہ
                  سمجھا جاتا ہے اور ایسے مریضوں کی تشخیص ریکومبیننٹ لیپٹن
                  تھراپی کے لیے بہترین ہدف ہو سکتی ہے۔
                </Paragraph>
                <Paragraph>
                  LEP یا LEPR کی کمی والے بچوں میں بیماری اور اموات کی نمایاں
                  اونچی شرح دیکھی گئی ہے۔ پھیپھڑوں اور معدے کے انفیکشن اموات
                  کی سب سے بڑی وجہ ہیں۔ LEP کی کمی میں آکسیڈیٹو اسٹریس کی
                  سطح LEPR یا MC4R کی کمی سے نمایاں طور پر زیادہ ہوتی ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080"
            imageAlt="طبی تحقیق کے نتائج"
            reverse
          />

          <Paragraph>
            مونوجینک موٹاپے کے خلاف موجودہ یا نئی ادویات، اگرچہ بہت سے
            ترقی یافتہ ممالک میں دستیاب ہیں، بدقسمتی سے پاکستان میں موجود
            نہیں — حالانکہ پاکستان میں دنیا میں LEP-سگنلنگ کی کمی کی سب سے
            زیادہ شرح ریکارڈ کی گئی ہے۔
          </Paragraph>

          <Heading level={3}>علاج کے اختیارات</Heading>

          <List
            items={[
              "لیپٹن کی کمی: ریکومبیننٹ لیپٹن سے ہارمون ریپلیسمنٹ تھراپی",
              "LEPR کی کمی: سیٹمیلانوٹائیڈ (MC4R ایگونسٹ)",
              "POMC کی کمی: سیٹمیلانوٹائیڈ (MC4R ایگونسٹ)",
              "PCSK1 کی کمی: سیٹمیلانوٹائیڈ (MC4R ایگونسٹ)",
              "MC4R کی کمی: سیماگلوٹائیڈ (GLP-1 RA)، ٹرزیپاٹائیڈ (GLP-1/GIP RA)",
            ]}
          />

          <Heading level={3}>سنڈرومک موٹاپا</Heading>
          <Paragraph>
            سنڈرومک موٹاپا وہ موٹاپا ہے جو ذہنی معذوری، ڈسمورفک خصوصیات،
            یا مختلف اعضاء اور نظاموں کو متاثر کرنے والی خرابیوں کے ساتھ
            ہوتا ہے — اس کی تعداد کم، تنوع زیادہ اور وراثت کا مینڈیلین طرز
            ہوتا ہے۔
          </Paragraph>

          <Heading level={3}>سنڈرومک موٹاپے کی اہم اقسام</Heading>

          <List
            items={[
              "پریڈر-ولی سنڈروم (PWS)",
              "بارڈٹ-بیڈل سنڈروم (BBS)",
              "سیوڈوہائپوپیراتھائیرائیڈزم (PHP) ٹائپ 1a",
              "السٹروم سنڈروم (ALMS)",
              "16p11.2 ڈیلیشن سنڈروم",
              "WAGR سنڈروم",
              "اسمتھ-میگینس سنڈروم (SMS)",
              "کوہن سنڈروم (CS)",
              "MYT1L-ویریئنٹس سنڈروم",
              "بورجیسن-فورسمین-لہمان سنڈروم (BFLS)",
              "ڈاؤن سنڈروم (DS)",
              "کالمان سنڈروم (KS)",
              "کارپینٹر سنڈروم (CRPT1)",
            ]}
          />

          <Heading level={3}>تحقیقی نتائج: زیادہ بیماری اور اموات</Heading>

          <Paragraph>
            <a
              href="https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791%2823%2900354-3"
              target="_blank"
              className="underline"
            >
              <em>مزید پڑھیں</em>
            </a>
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>اہم نتائج</Heading>
                <Paragraph>
                  اس پسماندہ کراس-سیکشنل مطالعے کے موازنہ اعداد و شمار یہ
                  ظاہر کرتے ہیں کہ LEP یا LEPR کی کمی والے بچوں میں MC4R جین
                  کی ہوموزائگس loss-of-function تبدیلیوں والے بچوں کے مقابلے
                  میں بیماری کی سطح نمایاں طور پر زیادہ ہے۔
                </Paragraph>
                <Paragraph>
                  مونوجینک موٹاپے کے خلاف موجودہ یا نئی ادویات، اگرچہ بہت سے
                  ترقی یافتہ ممالک میں دستیاب ہیں، بدقسمتی سے پاکستان میں
                  موجود نہیں — حالانکہ یہاں LEP-سگنلنگ کی کمی کی دنیا میں
                  سب سے زیادہ شرح ریکارڈ کی گئی ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
            imageAlt="طبی تحقیق اور علاج"
            reverse
          />

          <Paragraph>
            علاج میں LEP کی کمی والے افراد کے لیے ریکومبیننٹ لیپٹن سے
            ہارمون ریپلیسمنٹ تھراپی، LEPR کی کمی کے لیے MC4R ایگونسٹ
            سیٹمیلانوٹائیڈ، اور MC4R کی کمی والے افراد کے لیے GLP-1
            ریسیپٹر ایگونسٹ شامل ہیں۔
          </Paragraph>

          <Paragraph>
            یہ حقیقت کہ بچوں کی ایک بڑی تعداد ہارمونل سگنلنگ کی کمی کی وجہ
            سے نہ صرف تعلیمی ترقی میں پیچھے رہ رہی ہے بلکہ سنگین بیماری
            اور قبل از وقت موت کا شکار ہو رہی ہے — جبکہ نسبتاً آسان پیپٹائیڈ
            علاج دستیاب ہیں — اس عالمی نظام میں سنگین خامیوں کو اجاگر کرتا
            ہے جس کے ذریعے دوائیں تیار اور ان تک رسائی دی جاتی ہے جنہیں
            ان کی سب سے زیادہ ضرورت ہے۔
          </Paragraph>
        </>
      ),
    },
  },

  "scroll-study-snack-repeat": {
    slug: "scroll-study-snack-repeat",
    title:
      "Scroll, Study, Snack, repeat: Why Pakistani Gen Z Is Drowning in a Diabesity Crisis",
    date: "2025-10-15",
    image: ScrollStudy.src,
    imageAlt: "Gen Z and digital lifestyle",
    category: "Health",
    content: (
      <>
        <Heading level={3}>
          Introduction: When Health Isn&apos;t a Choice
        </Heading>
        <Paragraph>
          <strong>Reels. Exams. Fast food. Repeat.</strong>
        </Paragraph>
        <Paragraph>
          Now in Pakistan, kids carry an invisible health burden. Not only
          obesity or diabetes. Both! And it&apos;s beginning earlier than ever.
        </Paragraph>
        <Paragraph>
          It is often spoken about in hushed tones. A cousin who began taking
          insulin at 18. A friend who fainted in school. A sleepy adolescent
          girl reports her illness as &quot;weakness.&quot; But this isn&apos;t
          just a weakness.{" "}
          <strong>
            It&apos;s diabesity: a mix of diabetes and obesity, and it&apos;s
            growing fast among Gen Z in Pakistan
          </strong>
          . Its prevalence is silently increasing in our homes as we are fixated
          on food reels, body trends, exercise crazes, and soothing mantras of
          wellness.
        </Paragraph>
        <Paragraph>
          It&apos;s thought to be caused by a poor diet or lack of exercise. For
          most young Pakistanis, it&apos;s an everyday battle. No gym, no
          healthy food, excessive use of screens, exam stress, and no support
          system, and you have a recipe for a crisis that nobody is talking
          about.
        </Paragraph>
        <Heading level={3}>Where Do You Even Move Anymore?</Heading>
        <Paragraph>
          There was once a day when kids spent their evenings outside. Now that
          norm is nowhere to be seen. For women, it is more difficult. A
          leisurely walk might run into stares, running in workout clothes draws
          comments. Many prefer staying indoors.
        </Paragraph>
        <Paragraph>
          Screen time has taken the place of physical activity. A typical day
          now goes from school to tuition to scrolling in bed. This is the new
          routine. Even physical education is done as a joke, just a single
          cricket match as a dusty old excuse for exercise.
        </Paragraph>
        <Paragraph>
          This sedentary shift is not merely a cultural change. It is a
          metabolic disaster in the making.
        </Paragraph>
        <Heading level={3}>
          Processed Food, Perfect Bodies, and a Flood of Digital Pressure
        </Heading>
        <TextImageSection
          text={
            <>
              <Paragraph>
                Let&apos;s be real. The majority of families aren&apos;t cooking
                kale or quinoa. People consume what they can. That typically
                means oil-drenched parathas and salan, white bread, sweet tea,
                deep-fried snacks, and packaged drinks.
              </Paragraph>
              <Paragraph>
                Ultra-processed foods are marketing themselves as
                &quot;quick&quot; and &quot;modern.&quot; Eye-catching
                advertisements promote cartoon-branded breakfast cereals and
                convenient yogurt cups, but they are choked with added sugars,
                salt, and trans-fat oils, and they lack nutrients and fiber.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081"
          imageAlt="Processed foods"
          reverse
        />
        <Paragraph>
          The essentials, like chicken and milk, are often contaminated with
          hormones and are poorly regulated. Preservatives, salt, and added
          sugars are even found in common household products like ketchup,
          mayonnaise, bakery bread, and packaged juice.
        </Paragraph>
        <Paragraph>
          Instead of fruit, nuts, or homemade food, school lunchboxes are filled
          with processed cheese, sugar biscuits, or packaged chips.
        </Paragraph>
        <Paragraph>
          Consuming fresh produce can be costly and cooking from scratch takes
          time, but small, affordable swaps and batch cooking can help make
          healthy eating more accessible.
        </Paragraph>
        <Paragraph>
          Social media adds fuel to the fire. Every swipe brings forth glowing
          influencers, six-pack abs, and spotless smoothie bowls. Whilst most
          teenagers eat a reheated sandwich and suffer from mental fatigue after
          school hours.
        </Paragraph>
        <Paragraph>
          This isn&apos;t just about looking different. It&apos;s about feeling
          like a failure. Without the resources or assistance to break free from
          this cycle, young people are stuck in bodies they are told to hate and
          surrounded by foods they are told to stay away from.
        </Paragraph>
        <Paragraph>
          It&apos;s not just weight. It&apos;s a psychological loop. Binge
          eating leads to guilt. Guilt leads to starvation, so you feel like
          you&apos;re balancing it. This toxic relationship with your body
          becomes so familiar that it starts to feel normal.
        </Paragraph>
        <Paragraph>The result? A double blow to the youth psyche:</Paragraph>
        <List
          items={[
            "Glorification of unhealthy food",
            "Idealized, typically unrealistic body figures",
          ]}
        />
        <Paragraph>
          Young adults are left confused and despondent. Body dysmorphia, eating
          disorders, and emotional eating are on the rise, but in secret. No
          national discussion of it. Only silent scrolling, comparing, and
          self-comforting.
        </Paragraph>
        <Heading level={3}>Hours of Sitting, Years of Damage</Heading>
        <Paragraph>Let&apos;s not forget the static routines:</Paragraph>
        <List
          items={[
            "Children spend six to eight hours sitting during school",
            "Evenings are often occupied with tuition or screen-based study sessions",
            "University and office environments require extended hours of desk-bound work",
          ]}
        />
        <Paragraph>
          Our way of life hinders regular movement. Setting one&apos;s health as
          a priority is frequently dismissed as a luxury or seen as a diversion
          from other responsibilities.
        </Paragraph>
        <Heading level={3}>Mental Health: The Invisible Weight</Heading>
        <Paragraph>
          Gen Z is carrying more than just extra pounds. They&apos;re burdened
          with academic pressure, financial uncertainty, social comparison,
          climate anxiety, and a continuous digital presence that challenges
          their self-worth.
        </Paragraph>
        <Paragraph>
          There is a source to this spiral that is all too frequently
          overlooked: stress, anxiety, and emotional burnout. This generation is
          growing up under unprecedented stress. Competition over grades,
          financial insecurity, isolation, and perpetual comparison are pushing
          them toward psychological collapse.
        </Paragraph>
        <TextImageSection
          text={
            <>
              <Paragraph>
                Food is what remains. It&apos;s comfort. It&apos;s control.
                It&apos;s a distraction. And it&apos;s destruction. Mental
                health is untouched, yet most parents dismiss it with advice to
                pray or &quot;be stronger.&quot; Schools don&apos;t take
                emotional distress seriously. Therapy is rare, and when it
                exists, it&apos;s unaffordable for most, and emotional
                contributors to diabesity remain largely ignored in both
                families and the healthcare system.
              </Paragraph>
              <Paragraph>
                A study conducted by Aga Khan University in low-income Karachi
                neighborhoods found that nearly 17% of adolescents already meet
                the criteria for metabolic syndrome. That is their risk for type
                2 diabetes, cardiovascular disease, and obesity complications is
                real and is surfacing quickly.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
          imageAlt="Healthcare accessibility"
        />
        <Paragraph>
          Over 25% of children in Punjab are already obese. Astonishingly, the
          majority of parents continue to confuse strength and bulkiness,
          completely overlooking the long-term health implications.
        </Paragraph>
        <Paragraph>
          In adults, the picture is not as positive. More than 50% are obese.
          Approximately 73% carry risk-enhancing belly fat. With more than 33
          million diagnosed diabetics in the nation, the undiagnosed diabetics
          are probably even higher.
        </Paragraph>
        <Heading level={3}>
          You Can&apos;t Fight What You Don&apos;t Understand
        </Heading>
        <Paragraph>
          The average teenager and adult don&apos;t have a clue about how to
          read a label. Most don&apos;t even realize how much sugar is
          excessive, or the fact that a packaged lassi contains more sugar than
          a can of soda. Nobody ever taught them, and nobody is teaching them
          now.
        </Paragraph>
        <Paragraph>
          We are lacking in nutritional literacy. It is not being taught in
          schools. Rather, adolescents are being overloaded with diet secrets on
          the internet and doctor-shaming lectures once the damage is done.
        </Paragraph>
        <Heading level={3}>Born in a Third-World Reality</Heading>
        <Paragraph>
          Living in a low-income country intensifies the crisis. It is
          relatively uncommon to find preventive screenings for obesity or
          diabetes. Many people cannot afford healthcare due to out-of-pocket
          costs. The majority of people find wellness trends, which typically
          come from the West, to be unclear and cost-prohibitive.
        </Paragraph>
        <Paragraph>
          But these challenges can be addressed with practical, local solutions:
        </Paragraph>
        <List
          items={[
            "Integrate nutrition and health literacy into school curriculums from an early age",
            "Ensure safe public spaces for physical activity, particularly for women and girls",
            "Regulate food marketing to limit misleading health claims and reduce promotion of ultra-processed foods to children",
            "Support community-led wellness initiatives where local leaders promote affordable, culturally relevant healthy habits",
            "Make preventive care a norm by offering free annual screenings in schools, universities, and workplaces",
          ]}
        />
        When people advise &quot;Just take care of yourself,&quot; it must be
        followed with the tools, spaces, and affordable options that make that
        advice realistic for everyone.
        <Heading level={3}>
          Conclusion: This Generation Deserves More Than a Warning Label
        </Heading>
        <Paragraph>
          This Generation Deserves More than a Warning Label: Diabesity in Gen Z
          is not only an epidemic, it&apos;s the result of decades of structural
          neglect, misinformation, cultural shifts, and economic pressures.
        </Paragraph>
        <Paragraph>
          These children are growing up in a culture that values health in
          theory but rarely teaches how to achieve it. This is not personal
          failure, it is a collective one. But collective problems can be solved
          collectively.
        </Paragraph>
        <strong>
          We can help our youth thrive by providing the space, safety, and
          knowledge they need to survive and grow.
        </strong>
        <Heading level={3}>Sources:</Heading>
        <List
          items={[
            "Sharif et al. (2024), Lancet Regional Health – Southeast Asia: 'Metabolic syndrome and obesity among marginalised school-going adolescents in Karachi, Pakistan' (prevalence = 16.7%)",
            "Tanveer et al. (2024), AIMS Public Health: Nutrition behavior & obesity study across 62 schools in Punjab (19.4% overweight, 10.7% obese)",
            "MDPI report (2022) on BMI trends in youth across Pakistan",
          ]}
        />
      </>
    ),
    relatedBlogs: [
      "understanding-diabetes",
      "is-diabetes-ending-my-life",
      "what-is-diabesity-and-why-does-it-matter",
    ],
    urdu: {
      title: "اسکرول، پڑھائی، ناشتہ، دہرائیں: پاکستانی جنریشن Z ڈائیبیسٹی بحران میں کیوں ڈوب رہی ہے",
      content: (
        <>
          <Heading level={3}>تعارف: جب صحت کوئی انتخاب نہ ہو</Heading>
          <Paragraph>
            <strong>ریلز۔ امتحانات۔ فاسٹ فوڈ۔ دہرائیں۔</strong>
          </Paragraph>
          <Paragraph>
            آج کے پاکستان میں بچے ایک پوشیدہ صحت کا بوجھ اٹھائے پھرتے ہیں۔
            صرف موٹاپا نہیں، صرف ذیابیطس نہیں — دونوں! اور یہ پہلے سے کہیں
            زیادہ کم عمری میں شروع ہو رہا ہے۔
          </Paragraph>
          <Paragraph>
            اس کا ذکر اکثر دبی آواز میں ہوتا ہے۔ ایک کزن جس نے ۱۸ سال میں
            انسولین لینا شروع کی۔ ایک دوست جو اسکول میں بے ہوش ہو گیا۔ ایک
            نیند بھری لڑکی جو اپنی بیماری کو &quot;کمزوری&quot; بتاتی ہے۔
            لیکن یہ صرف کمزوری نہیں ہے۔{" "}
            <strong>
              یہ ڈائیبیسٹی ہے: ذیابیطس اور موٹاپے کا امتزاج، اور یہ
              پاکستان میں جنریشن Z میں تیزی سے پھیل رہا ہے۔
            </strong>{" "}
            اس کی شیوع خاموشی سے ہمارے گھروں میں بڑھ رہی ہے جبکہ ہم فوڈ
            ریلز، باڈی ٹرینڈز اور ویلنیس کے نعروں میں مگن ہیں۔
          </Paragraph>
          <Paragraph>
            اسے عموماً غیر متوازن خوراک یا ورزش کی کمی کی وجہ سمجھا جاتا
            ہے۔ لیکن زیادہ تر نوجوان پاکستانیوں کے لیے یہ روزمرہ کی جنگ
            ہے — نہ جم، نہ صحت مند کھانا، ضرورت سے زیادہ اسکرین ٹائم،
            امتحانات کا تناؤ، اور کوئی سپورٹ سسٹم نہیں — یہ سب مل کر ایک
            ایسے بحران کی بنیاد ڈالتے ہیں جس پر کوئی بات نہیں کر رہا۔
          </Paragraph>
          <Heading level={3}>اب حرکت کہاں ہوتی ہے؟</Heading>
          <Paragraph>
            ایک وقت تھا جب بچے شام کو باہر کھیلتے تھے۔ اب یہ معمول ناپید
            ہو گیا ہے۔ لڑکیوں کے لیے یہ اور بھی مشکل ہے — پیدل چلنے پر
            گھوری، ورزشی لباس میں دوڑنے پر تبصرے۔ بیشتر گھر میں رہنا
            پسند کرتی ہیں۔
          </Paragraph>
          <Paragraph>
            اسکرین ٹائم نے جسمانی سرگرمی کی جگہ لے لی ہے۔ ایک عام دن اب
            اسکول سے ٹیوشن اور پھر بستر پر اسکرولنگ پر ختم ہوتا ہے۔ یہی
            نیا معمول ہے۔ حتیٰ کہ جسمانی تعلیم بھی مذاق بن گئی ہے — بس ایک
            کرکٹ میچ، ورزش کا پرانا بہانہ۔
          </Paragraph>
          <Paragraph>
            یہ محض ثقافتی تبدیلی نہیں ہے۔ یہ ایک میٹابولک تباہی کی شروعات
            ہے۔
          </Paragraph>
          <Heading level={3}>
            پروسیسڈ فوڈ، پرفیکٹ باڈیز، اور ڈیجیٹل دباؤ کا سیلاب
          </Heading>
          <TextImageSection
            text={
              <>
                <Paragraph>
                  سچ بات یہ ہے کہ زیادہ تر گھرانوں میں کیل یا کوئنوا نہیں
                  پکتا۔ لوگ وہی کھاتے ہیں جو میسر ہو — عموماً تیل میں ڈوبے
                  پراٹھے اور سالن، سفید ڈبل روٹی، میٹھی چائے، تلی ہوئی چیزیں
                  اور پیکٹ والے مشروبات۔
                </Paragraph>
                <Paragraph>
                  انتہائی پروسیسڈ کھانے خود کو &quot;جلدی&quot; اور
                  &quot;جدید&quot; بتا کر فروخت ہو رہے ہیں۔ رنگین اشتہار
                  کارٹون والے ناشتے کے اناج اور سہل دہی کے کپ کی تشہیر
                  کرتے ہیں، لیکن یہ اضافی شوگر، نمک اور ٹرانس فیٹ سے بھرے
                  ہوتے ہیں اور غذائیت و فائبر سے خالی ہوتے ہیں۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081"
            imageAlt="پروسیسڈ کھانے"
            reverse
          />
          <Paragraph>
            بنیادی اشیاء جیسے مرغی اور دودھ میں اکثر ہارمونز ہوتے ہیں اور
            ان کی نگرانی ناقص ہے۔ کیچپ، مایونیز، بیکری کی روٹی اور پیکٹ
            والے جوس جیسی عام گھریلو چیزوں میں بھی پرزرویٹوز، نمک اور
            اضافی شوگر پائی جاتی ہے۔
          </Paragraph>
          <Paragraph>
            اسکول کے لنچ بکس میں پھل، خشک میوے یا گھر کے کھانے کی بجائے
            پروسیسڈ پنیر، شوگر بسکٹ یا پیکٹ والے چپس بھرے ہوتے ہیں۔
          </Paragraph>
          <Paragraph>
            تازہ سبزیاں مہنگی ہو سکتی ہیں اور گھر میں پکانے میں وقت لگتا
            ہے، لیکن چھوٹی اور سستی متبادل اشیاء اور بیچ کوکنگ صحت مند
            کھانے کو زیادہ قابل رسائی بنا سکتی ہے۔
          </Paragraph>
          <Paragraph>
            سوشل میڈیا آگ میں تیل ڈالتا ہے۔ ہر سوائپ پر چمکتے ہوئے
            انفلوئنسر، سکس پیک ایبز اور صاف ستھرے اسموتھی بولز سامنے آتے
            ہیں — جبکہ زیادہ تر نوجوان اسکول کے بعد دوبارہ گرم کیا ہوا
            سینڈوچ کھاتے اور ذہنی تھکاوٹ سے دوچار رہتے ہیں۔
          </Paragraph>
          <Paragraph>
            یہ صرف مختلف نظر آنے کی بات نہیں ہے۔ یہ ناکامی کا احساس ہے۔
            اس چکر سے نکلنے کے وسائل یا مدد کے بغیر، نوجوان ایسے جسموں
            میں پھنسے ہیں جن سے نفرت کرنے کو کہا جاتا ہے اور ایسے کھانوں
            سے گھرے ہیں جن سے دور رہنے کو کہا جاتا ہے۔
          </Paragraph>
          <Paragraph>
            یہ صرف وزن کا مسئلہ نہیں ہے — یہ ایک نفسیاتی چکر ہے۔ زیادہ
            کھانے سے احساس جرم، احساس جرم سے بھوک — گویا توازن بنا رہے ہو۔
            جسم کے ساتھ یہ زہریلا رشتہ اتنا عام ہو جاتا ہے کہ معمول لگنے
            لگتا ہے۔
          </Paragraph>
          <Paragraph>نتیجہ؟ نوجوان ذہن پر دوہری ضرب:</Paragraph>
          <List
            items={[
              "غیر صحت مند کھانے کی تعریف",
              "مثالی لیکن اکثر غیر حقیقی جسمانی تصویریں",
            ]}
          />
          <Paragraph>
            نوجوان الجھن اور مایوسی میں مبتلا ہیں۔ باڈی ڈسمورفیا، کھانے کی
            خرابیاں اور جذباتی کھانا بڑھ رہے ہیں، لیکن چھپ کر۔ قومی سطح
            پر کوئی بات نہیں ہوتی — بس خاموش اسکرولنگ، موازنہ، اور اپنے
            آپ کو تسلی۔
          </Paragraph>
          <Heading level={3}>گھنٹوں بیٹھنا، سالوں کا نقصان</Heading>
          <Paragraph>جامد معمولات کو نظر انداز نہ کریں:</Paragraph>
          <List
            items={[
              "بچے اسکول میں چھ سے آٹھ گھنٹے بیٹھتے ہیں",
              "شامیں اکثر ٹیوشن یا اسکرین پر پڑھائی میں گزرتی ہیں",
              "یونیورسٹی اور دفتری ماحول میں گھنٹوں میز پر بیٹھنا ضروری ہے",
            ]}
          />
          <Paragraph>
            ہمارا طرز زندگی باقاعدہ حرکت کو مشکل بناتا ہے۔ صحت کو ترجیح
            دینا اکثر عیاشی یا ذمہ داریوں سے توجہ ہٹانے کے طور پر دیکھا
            جاتا ہے۔
          </Paragraph>
          <Heading level={3}>ذہنی صحت: پوشیدہ بوجھ</Heading>
          <Paragraph>
            جنریشن Z صرف اضافی وزن نہیں اٹھا رہی — وہ تعلیمی دباؤ، مالی
            عدم یقین، سماجی موازنہ، موسمیاتی پریشانی اور ایک مسلسل ڈیجیٹل
            موجودگی کا بوجھ بھی اٹھا رہی ہے جو ان کی خود اعتمادی کو چیلنج
            کرتی ہے۔
          </Paragraph>
          <Paragraph>
            اس چکر کا ایک ماخذ ہے جسے اکثر نظر انداز کیا جاتا ہے: تناؤ،
            اضطراب اور جذباتی تھکاوٹ۔ یہ نسل بے مثال دباؤ میں پل رہی ہے۔
            گریڈز کی دوڑ، مالی غیر یقینی، تنہائی اور مسلسل موازنہ انہیں
            نفسیاتی انہدام کی طرف دھکیل رہا ہے۔
          </Paragraph>
          <TextImageSection
            text={
              <>
                <Paragraph>
                  کھانا ہی باقی رہتا ہے۔ یہ سکون ہے، کنٹرول ہے، توجہ ہٹانے
                  کا ذریعہ ہے — اور تباہی بھی ہے۔ ذہنی صحت کو نظر انداز کیا
                  جاتا ہے، زیادہ تر والدین دعا کرنے یا &quot;مضبوط ہو جاؤ&quot;
                  کی نصیحت سے معاملہ ختم کر دیتے ہیں۔ اسکول جذباتی تکلیف کو
                  سنجیدہ نہیں لیتے۔ تھراپی نادر ہے اور جب ہو بھی تو زیادہ
                  تر کے لیے ناقابل برداشت مہنگی۔ ڈائیبیسٹی کے جذباتی محرکات
                  خاندانوں اور صحت کے نظام دونوں میں بڑی حد تک نظر انداز
                  رہتے ہیں۔
                </Paragraph>
                <Paragraph>
                  آغا خان یونیورسٹی کے کراچی کے کم آمدنی والے علاقوں میں
                  کیے گئے مطالعے میں پتہ چلا کہ تقریباً ۱۷ فیصد نوعمر پہلے
                  سے میٹابولک سنڈروم کے معیار پر پورے اترتے ہیں — یعنی ٹائپ
                  ۲ ذیابیطس، دل کی بیماری اور موٹاپے کی پیچیدگیوں کا خطرہ
                  حقیقی ہے اور تیزی سے سامنے آ رہا ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
            imageAlt="صحت کی رسائی"
          />
          <Paragraph>
            پنجاب میں ۲۵ فیصد سے زیادہ بچے پہلے سے موٹاپے کا شکار ہیں۔
            حیرت کی بات یہ ہے کہ زیادہ تر والدین اب بھی طاقت اور موٹاپے
            کو یکساں سمجھتے ہیں اور طویل مدتی صحت کے نتائج کو بالکل نظر
            انداز کرتے ہیں۔
          </Paragraph>
          <Paragraph>
            بالغوں میں صورت حال اور بھی تشویشناک ہے۔ ۵۰ فیصد سے زیادہ موٹے
            ہیں۔ تقریباً ۷۳ فیصد کے پیٹ میں خطرناک چربی ہے۔ ملک میں ۳ کروڑ
            ۳۰ لاکھ سے زیادہ تشخیص شدہ ذیابیطس کے مریض ہیں اور غیر تشخیص
            شدہ کی تعداد اس سے بھی زیادہ ہو سکتی ہے۔
          </Paragraph>
          <Heading level={3}>جو سمجھ نہیں، اس سے لڑ نہیں سکتے</Heading>
          <Paragraph>
            اوسط نوجوان اور بالغ کو لیبل پڑھنا نہیں آتا۔ زیادہ تر کو یہ
            بھی نہیں معلوم کہ شوگر کتنی زیادہ ہے، یا یہ کہ پیکٹ والی لسی
            میں سوڈے کے کین سے زیادہ شوگر ہو سکتی ہے۔ کبھی کسی نے سکھایا
            نہیں اور اب بھی کوئی نہیں سکھا رہا۔
          </Paragraph>
          <Paragraph>
            ہم میں غذائی تعلیم کی کمی ہے۔ اسکولوں میں نہیں پڑھائی جاتی۔
            اس کی بجائے نوجوانوں کو انٹرنیٹ پر ڈائیٹ کے راز اور نقصان
            ہونے کے بعد ڈاکٹروں کی لیکچر سنی جاتی ہیں۔
          </Paragraph>
          <Heading level={3}>تیسری دنیا کی حقیقت میں پیدا ہونا</Heading>
          <Paragraph>
            کم آمدنی والے ملک میں رہنا بحران کو اور گہرا کرتا ہے۔ موٹاپے
            یا ذیابیطس کے لیے احتیاطی اسکریننگ بہت کم ملتی ہے۔ بہت سے
            لوگ جیب سے اٹھنے والے اخراجات کی وجہ سے صحت کی سہولیات نہیں
            لے سکتے۔ ویلنیس ٹرینڈز، جو عموماً مغرب سے آتے ہیں، اکثر
            مبہم اور مہنگے ہوتے ہیں۔
          </Paragraph>
          <Paragraph>
            لیکن ان چیلنجوں کا عملی، مقامی حل ممکن ہے:
          </Paragraph>
          <List
            items={[
              "ابتدائی عمر سے اسکولی نصاب میں غذائی اور صحت کی تعلیم شامل کریں",
              "جسمانی سرگرمی کے لیے محفوظ عوامی جگہیں یقینی بنائیں، خاص طور پر خواتین اور لڑکیوں کے لیے",
              "گمراہ کن صحت کے دعووں اور بچوں کو انتہائی پروسیسڈ کھانوں کی تشہیر کو محدود کریں",
              "کمیونٹی پر مبنی ویلنیس اقدامات کی حمایت کریں جہاں مقامی رہنما سستی اور ثقافتی طور پر مناسب صحت مند عادات فروغ دیں",
              "اسکولوں، یونیورسٹیوں اور کام کی جگہوں پر مفت سالانہ اسکریننگ کو معمول بنائیں",
            ]}
          />
          جب لوگ کہتے ہیں &quot;بس اپنا خیال رکھو&quot; تو اس کے ساتھ
          وہ اوزار، جگہیں اور سستے اختیارات بھی دینے ہوں گے جو اس نصیحت
          کو سب کے لیے قابل عمل بنائیں۔
          <Heading level={3}>
            نتیجہ: اس نسل کو صرف وارننگ لیبل سے زیادہ کی ضرورت ہے
          </Heading>
          <Paragraph>
            جنریشن Z میں ڈائیبیسٹی صرف ایک وبا نہیں — یہ دہائیوں کی
            ساختی غفلت، غلط معلومات، ثقافتی تبدیلیوں اور معاشی دباؤ کا
            نتیجہ ہے۔
          </Paragraph>
          <Paragraph>
            یہ بچے ایسی ثقافت میں پل رہے ہیں جو نظریاتی طور پر صحت کی
            اہمیت مانتی ہے لیکن شاذ ہی سکھاتی ہے کہ اسے کیسے حاصل کریں۔
            یہ ذاتی ناکامی نہیں — یہ اجتماعی ناکامی ہے۔ لیکن اجتماعی
            مسائل اجتماعی طور پر حل ہو سکتے ہیں۔
          </Paragraph>
          <strong>
            ہم اپنے نوجوانوں کو وہ جگہ، سلامتی اور علم دے کر پھلتا پھولتا
            دیکھ سکتے ہیں جو انہیں زندہ رہنے اور ترقی کرنے کے لیے چاہیے۔
          </strong>
          <Heading level={3}>ماخذ:</Heading>
          <List
            items={[
              "شریف وغیرہ (۲۰۲۴)، لینسیٹ ریجنل ہیلتھ – جنوب مشرقی ایشیا: کراچی کے پسماندہ علاقوں کے اسکولی نوعمروں میں میٹابولک سنڈروم اور موٹاپا (شرح = ۱۶.۷٪)",
              "تنویر وغیرہ (۲۰۲۴)، AIMS پبلک ہیلتھ: پنجاب کے ۶۲ اسکولوں میں غذائی رویہ اور موٹاپے کا مطالعہ (۱۹.۴٪ زائد وزن، ۱۰.۷٪ موٹے)",
              "MDPI رپورٹ (۲۰۲۲) پاکستان میں نوجوانوں کے BMI رجحانات پر",
            ]}
          />
        </>
      ),
    },
  },

  "what-is-diabesity-and-why-does-it-matter": {
    slug: "what-is-diabesity-and-why-does-it-matter",
    title: "What is Diabesity and Why Does it Matter?",
    date: "2025-01-15",
    image: WhyDiabesityMatters.src,
    imageAlt: "Understanding diabesity",
    category: "Education",
    content: (
      <>
        <Heading level={3}>Introduction</Heading>

        <Paragraph>
          With so much screen time, prolonged sitting, and irresistible fast
          food, diabesity is a silent health crisis that is spreading quickly.
          Despite the term&apos;s newness, its effects are prevalent in
          Pakistan.
        </Paragraph>

        <Paragraph>
          When obesity and type 2 diabetes coexist, they may be more harmful to
          health and more difficult to treat. Where the prevalence of obesity
          and diabetes are rising, educating yourself about diabetes should not
          be an option.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>What is Diabesity?</Heading>
              <Paragraph>
                Diabesity is the combination of the two words
                &quot;obesity&quot; and &quot;diabetes&quot;. People who are
                overweight or chubby are also at a higher risk of getting type 2
                diabetes, this is a medical reality.
              </Paragraph>
              <Paragraph>
                When we are consuming more than what we can burn, especially if
                we are consuming processed food and sugar, our body starts to
                store it as fat. It is one of the lead causes of insulin
                resistance. Insulin resistance is a condition where cells in the
                body stops responding to insulin. As a result, blood sugar
                levels increase, leading to type 2 diabetes.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
          imageAlt="Diabesity health crisis"
        />

        <Paragraph>
          More than 33 million adults in Pakistan have diabetes and more than
          50% of urban adults are overweight or obese.
        </Paragraph>

        <Heading level={3}>Why is Diabesity Important?</Heading>

        <Paragraph>
          Pakistan is facing a health crisis and diabetes is more than just a
          medical term. So, for that, it is crucial:
        </Paragraph>

        <List
          items={[
            "Insulin resistance caused by obesity makes it more difficult for the body to control blood sugar levels.",
            "Many people wait for treatment or are not diagnosed, which causes the illness to worsen covertly.",
          ]}
        />

        <Paragraph>
          Women are more impacted due to the hormonal change. In other words,
          you cannot treat obesity without monitoring blood sugar levels, and
          you cannot treat diabetes without addressing weight.
        </Paragraph>

        <Heading level={3}>How is Diabesity Treated?</Heading>
        <Paragraph>
          Diabetes can be effectively managed with a combination of dietary
          changes and medical supervision, despite the lack of a standardized
          treatment. What works is this:
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>1. Lifestyle Changes</Heading>
              <Paragraph>
                The first step is to establish healthier daily routines:
              </Paragraph>
              <Heading level={4}>Nutrition</Heading>
              <Paragraph>
                Give whole foods: fruits, vegetables, whole grains, lean meats,
                and healthy fats a priority. Avoid fried foods, sugary drinks,
                and processed snacks. Use portion control and meal timing to
                prevent blood sugar spikes.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053"
          imageAlt="Healthy nutrition"
          reverse
        />

        <Heading level={4}>Physical Activity</Heading>

        <Paragraph>
          Get in at least 30 minutes of exercise each day. This could be
          dancing, taking a walk, or practicing yoga at home. Exercise improves
          insulin sensitivity and aids in weight loss.
        </Paragraph>

        <Heading level={4}>Sleep</Heading>

        <Paragraph>
          Inadequate sleep raises cortisol levels and insulin resistance. Try to
          get 7 or 9 hours.
        </Paragraph>

        <Heading level={3}>2. Psychosocial and Emotional Support</Heading>
        <Paragraph>
          A lot of people with diabetes also have trouble with:
        </Paragraph>
        <List
          items={[
            "Issues with how you see your body",
            "Not feeling good about yourself",
            "Problems with mental health",
          ]}
        />

        <Paragraph>
          It can be easier to get help if you talk to diabetes educators,
          counselors, and nutritionists. There are offline and online support
          groups in Pakistan.
        </Paragraph>

        <Heading level={4}>Why Diabesity is Growing in Pakistan?</Heading>

        <Paragraph>
          Pakistan continues to face a growing diabesity crisis, influenced by a
          combination of cultural habits, lifestyle choices, and environmental
          factors that are often overlooked. Currently, Pakistan ranks{" "}
          <strong>4th</strong> globally in diabetes prevalence (IDF Diabetes
          Atlas, latest edition). The rise in diabesity is not simply due to
          overeating or lack of exercise; it is also driven by changing dietary
          patterns, increased consumption of processed foods, reduced physical
          activity, and limited awareness about preventive health.
        </Paragraph>

        <Paragraph>
          Below, we list the main reasons for this health crisis.
        </Paragraph>

        <Heading level={4}>
          The Obesogenic Desi Diet: An Overeating Culture
        </Heading>
        <TextImageSection
          text={
            <>
              <Paragraph>
                Despite its flavor, traditional South Asian cuisine is a
                nutritional minefield. The typical Pakistani plate includes:
              </Paragraph>
              <List
                items={[
                  "White rice, white flour, naan, and parathas are examples of refined carbohydrates.",
                  "Deep-fried foods: puris, pakoras, and samosas",
                  "Sugary drinks include carbonated drinks, rooh afza, and chai (which can contain up to three teaspoons of sugar per cup).",
                  "High in saturated fats: butter, red meat, and banaspati ghee",
                ]}
              />
            </>
          }
          image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081"
          imageAlt="Traditional Pakistani cuisine"
          reverse
        />

        <Paragraph>
          Celebration meals are calorie bombs, and portion control is rarely
          practiced. Fast food and highly processed meals have become more
          commonplace in urban diets due to an increasing reliance on food
          delivery apps like Foodpanda.
        </Paragraph>

        <Heading level={3}>
          3. A National Blind Spot: Health Education & Misinformation
        </Heading>

        <Paragraph>
          In Pakistani school curriculum, health science is rarely taught. Most
          students never learn how their bodies process sugar or why belly fat
          matters.
        </Paragraph>

        <List
          items={[
            "Schools do not offer structured nutrition education.",
            "Natural sugars don't count, Only fat people get diabetes, and Insulin is addictive are common misconceptions.",
            "Stigma attached to seeking help, especially for overweight teenagers and young girls.",
          ]}
        />

        <Paragraph>
          Without early awareness, the majority of people are diagnosed late,
          often after complications such as blurred vision, foot ulcers, or
          extreme fatigue.
        </Paragraph>

        <TextImageSection
          text={
            <>
              <Heading level={3}>
                4. The cost of diabetes is higher than that of medical care
              </Heading>
              <Paragraph>
                In Pakistan, access to high-quality care is extremely unequal,
                despite the fact that diabetes requires long-term, multifaceted
                management.
              </Paragraph>
              <Paragraph>
                As noted by The Express Tribune, Pakistan&apos;s national health
                budget{" "}
                <strong>
                  allocates very little to non-communicable diseases
                </strong>
                , despite their rising toll.
              </Paragraph>
              <Paragraph>
                Unlike in the UK or the UAE, there are no subsidies for diabetic
                food items or GLP-1 medications.
              </Paragraph>
            </>
          }
          image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
          imageAlt="Healthcare costs"
        />

        <Heading level={4}>Little Actions Lead to Significant Change</Heading>

        <Paragraph>
          You don&apos;t have to completely change your life all at once. Begin
          with modest, long-term actions:
        </Paragraph>

        <List
          items={[
            "Replace sugary beverages with sugar-free lassi or lemon water.",
            "After dinner, take a 15–20 minute walk.",
            "If diabetes runs in your family, consult a physician.",
          ]}
        />

        <Heading level={3}>
          Conclusion: Treating Diabesity is a Lifelong Commitment But You
          Don&apos;t Have to Do It Alone
        </Heading>

        <Paragraph>
          Diabetes is treatable and even preventable with the right care,
          despite the fact that it may seem overwhelming. Instead of just
          managing two conditions, think of it as taking back control of your
          life.
        </Paragraph>
        <Paragraph>
          Whether you have a diagnosis, are at risk, or just want to lead a
          healthier lifestyle, awareness is the first step in your journey. Now
          is the perfect time to make an appointment with one of our affiliated
          doctors and dietitians.
        </Paragraph>

        <Heading level={3}>References</Heading>

        <List
          items={[
            "International Diabetes Federation. (2021). IDF Diabetes Atlas, 10th Edition.",
            "World Health Organization. (2024). Obesity and overweight.",
            "National Institute of Health Pakistan. (2017). Non-Communicable Diseases Risk Factor Survey Pakistan (Steps Survey).",
            "Papas, M. A., Alberg, A. J., Ewing, R., Helzlsouer, K. J., Gary, T. L., & Klassen, A. C. (2007). The built environment and obesity. Epidemiologic Reviews, 29(1), 129–143.",
            "Bray, G. A., Kim, K. K., & Wilding, J. P. H. (2017). Obesity: a chronic relapsing progressive disease process. JAMA, 317(10), 1017–1018.",
            "American Diabetes Association. (2024). Standards of Medical Care in Diabetes—2024. Diabetes Care, 47(Supplement_1).",
            "Pak Pharma Guide. (2024). Ozempic Availability, Cost, and Usage in Pakistan.",
            "Yasmeen, R., & Parveen, F. (2020). Nutritional trends and obesity in Pakistani children and adolescents. Pakistan Journal of Medical Sciences, 36(4), 790–794.",
            "Raza, A., & Ali, N. (2022). Urbanization and lifestyle diseases: The impact of sedentary behavior in South Asian cities. British Medical Journal, BMJ Global Health.",
            "The Express Tribune. (2024). Health Budget 2024: Where is the money going?",
            "UNICEF Pakistan. (2023). Adolescent Health and Nutrition in Pakistan: Current Status and Challenges.",
          ]}
        />
      </>
    ),
    relatedBlogs: [
      "understanding-diabetes",
      "is-diabetes-ending-my-life",
      "scroll-study-snack-repeat",
    ],
    urdu: {
      title: "ڈائیبیسٹی کیا ہے اور یہ کیوں اہم ہے؟",
      content: (
        <>
          <Heading level={3}>تعارف</Heading>

          <Paragraph>
            بے تحاشہ اسکرین ٹائم، لمبے عرصے تک بیٹھنے اور ناقابل مزاحمت
            فاسٹ فوڈ کے ساتھ، ڈائیبیسٹی ایک خاموش صحت کا بحران ہے جو تیزی
            سے پھیل رہا ہے۔ یہ اصطلاح نئی ہو سکتی ہے لیکن اس کے اثرات
            پاکستان میں بہت عام ہیں۔
          </Paragraph>

          <Paragraph>
            جب موٹاپا اور ٹائپ ۲ ذیابیطس اکٹھے ہوں تو صحت کے لیے زیادہ
            نقصان دہ اور علاج کے لیے زیادہ مشکل ہو سکتے ہیں۔ جہاں موٹاپے
            اور ذیابیطس کی شیوع بڑھ رہی ہو، وہاں خود کو تعلیم دینا اختیاری
            نہیں رہتا۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>ڈائیبیسٹی کیا ہے؟</Heading>
                <Paragraph>
                  ڈائیبیسٹی &quot;موٹاپا&quot; (obesity) اور
                  &quot;ذیابیطس&quot; (diabetes) کا مجموعہ ہے۔ یہ طبی حقیقت
                  ہے کہ زائد وزن یا موٹاپے کا شکار افراد کو ٹائپ ۲ ذیابیطس
                  کا خطرہ زیادہ ہوتا ہے۔
                </Paragraph>
                <Paragraph>
                  جب ہم اپنی ضرورت سے زیادہ، خاص طور پر پروسیسڈ کھانے اور
                  شوگر کھاتے ہیں تو جسم اسے چربی کے طور پر ذخیرہ کرنے لگتا
                  ہے۔ یہ انسولین مزاحمت کی بڑی وجوہات میں سے ایک ہے —
                  ایسی حالت جہاں جسم کے خلیے انسولین کا جواب دینا بند کر
                  دیتے ہیں اور خون میں شوگر بڑھ کر ٹائپ ۲ ذیابیطس بن جاتی ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
            imageAlt="ڈائیبیسٹی صحت بحران"
          />

          <Paragraph>
            پاکستان میں ۳ کروڑ ۳۰ لاکھ سے زیادہ بالغ ذیابیطس میں مبتلا
            ہیں اور ۵۰ فیصد سے زیادہ شہری بالغ زائد وزن یا موٹاپے کا شکار
            ہیں۔
          </Paragraph>

          <Heading level={3}>ڈائیبیسٹی کیوں اہم ہے؟</Heading>

          <Paragraph>
            پاکستان صحت کے بحران کا سامنا کر رہا ہے اور ذیابیطس محض ایک
            طبی اصطلاح سے کہیں بڑھ کر ہے۔ اس لیے ضروری ہے کہ:
          </Paragraph>

          <List
            items={[
              "موٹاپے سے پیدا ہونے والی انسولین مزاحمت جسم کے لیے شوگر کنٹرول کرنا مشکل بنا دیتی ہے۔",
              "بہت سے لوگ علاج میں دیر کرتے یا تشخیص سے محروم رہتے ہیں، جس سے بیماری چھپتے چھپاتے بڑھتی رہتی ہے۔",
            ]}
          />

          <Paragraph>
            خواتین ہارمونل تبدیلیوں کی وجہ سے زیادہ متاثر ہوتی ہیں۔ خلاصہ
            یہ کہ شوگر کی سطح پر نظر رکھے بغیر موٹاپے کا علاج ممکن نہیں،
            اور وزن کو نظر انداز کر کے ذیابیطس کا علاج نہیں ہو سکتا۔
          </Paragraph>

          <Heading level={3}>ڈائیبیسٹی کا علاج کیسے ہوتا ہے؟</Heading>
          <Paragraph>
            کوئی معیاری علاج نہ ہونے کے باوجود، خوراک میں تبدیلی اور طبی
            نگرانی کے امتزاج سے ذیابیطس کو مؤثر طریقے سے قابو میں رکھا جا
            سکتا ہے:
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>۱۔ طرز زندگی میں تبدیلیاں</Heading>
                <Paragraph>
                  پہلا قدم صحت مند روزمرہ معمولات قائم کرنا ہے:
                </Paragraph>
                <Heading level={4}>غذائیت</Heading>
                <Paragraph>
                  پھل، سبزیاں، سارا اناج، دبلا گوشت اور صحت مند چکنائی کو
                  ترجیح دیں۔ تلی ہوئی چیزیں، میٹھے مشروبات اور پروسیسڈ
                  اسنیکس سے پرہیز کریں۔ شوگر کی سطح کو مستحکم رکھنے کے
                  لیے مقدار اور کھانے کے اوقات کا خیال رکھیں۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053"
            imageAlt="صحت مند غذائیت"
            reverse
          />

          <Heading level={4}>جسمانی سرگرمی</Heading>

          <Paragraph>
            روزانہ کم از کم ۳۰ منٹ ورزش کریں — چاہے پیدل چلنا ہو، ڈانس ہو
            یا گھر میں یوگا۔ ورزش انسولین کی حساسیت بہتر کرتی اور وزن کم
            کرنے میں مدد دیتی ہے۔
          </Paragraph>

          <Heading level={4}>نیند</Heading>

          <Paragraph>
            ناکافی نیند کورٹیسول اور انسولین مزاحمت بڑھاتی ہے۔ ۷ سے ۹
            گھنٹے سونے کی کوشش کریں۔
          </Paragraph>

          <Heading level={3}>۲۔ نفسیاتی اور جذباتی مدد</Heading>
          <Paragraph>
            ذیابیطس کے بہت سے مریض ان مسائل سے بھی دوچار ہوتے ہیں:
          </Paragraph>
          <List
            items={[
              "جسمانی تصویر کے بارے میں پریشانیاں",
              "خود اعتمادی کی کمی",
              "ذہنی صحت کے مسائل",
            ]}
          />

          <Paragraph>
            ذیابیطس ایجوکیٹرز، مشیروں اور ماہرین غذائیت سے مدد لینا آسان
            بنا سکتا ہے۔ پاکستان میں آن لائن اور آف لائن سپورٹ گروپس موجود
            ہیں۔
          </Paragraph>

          <Heading level={4}>پاکستان میں ڈائیبیسٹی کیوں بڑھ رہی ہے؟</Heading>

          <Paragraph>
            پاکستان ثقافتی عادات، طرز زندگی کے انتخاب اور ماحولیاتی عوامل
            کے امتزاج سے بڑھتے ہوئے ڈائیبیسٹی بحران کا سامنا کر رہا ہے۔
            فی الحال پاکستان ذیابیطس کی شرح میں عالمی سطح پر{" "}
            <strong>چوتھے</strong> نمبر پر ہے (IDF ذیابیطس اٹلس، تازہ
            ترین ایڈیشن)۔ ڈائیبیسٹی کا اضافہ صرف زیادہ کھانے یا ورزش
            کی کمی سے نہیں — یہ بدلتے غذائی طریقوں، پروسیسڈ کھانوں کے
            بڑھتے استعمال اور صحت سے متعلق محدود آگاہی سے بھی آ رہا ہے۔
          </Paragraph>

          <Paragraph>اس صحت بحران کی بڑی وجوہات درج ذیل ہیں:</Paragraph>

          <Heading level={4}>موٹاپا بڑھانے والی دیسی خوراک: زیادہ کھانے کی ثقافت</Heading>
          <TextImageSection
            text={
              <>
                <Paragraph>
                  ذائقے کے باوجود، روایتی جنوبی ایشیائی کھانا غذائی
                  لحاظ سے خطرناک ہو سکتا ہے۔ عام پاکستانی پلیٹ میں شامل ہیں:
                </Paragraph>
                <List
                  items={[
                    "سفید چاول، سفید آٹا، نان اور پراٹھے جیسے ریفائنڈ کاربوہائیڈریٹ",
                    "تلی ہوئی چیزیں: پوریاں، پکوڑے اور سموسے",
                    "میٹھے مشروبات: کاربونیٹڈ ڈرنکس، روح افزا اور چائے (جس میں فی کپ تین چمچ تک شوگر ہو سکتی ہے)",
                    "سیچوریٹڈ فیٹ سے بھرپور: مکھن، سرخ گوشت اور بناسپتی گھی",
                  ]}
                />
              </>
            }
            image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081"
            imageAlt="روایتی پاکستانی کھانا"
            reverse
          />

          <Paragraph>
            تقریبات کے کھانے کیلوری بموں کی طرح ہوتے ہیں اور کھانے کی مقدار
            کا خیال شاذ ہی رکھا جاتا ہے۔ فوڈ پانڈا جیسی فوڈ ڈیلیوری ایپس
            پر بڑھتے انحصار کی وجہ سے فاسٹ فوڈ اور انتہائی پروسیسڈ کھانے
            شہری خوراک کا معمول بن گئے ہیں۔
          </Paragraph>

          <Heading level={3}>
            ۳۔ قومی اندھا دھبہ: صحت کی تعلیم اور غلط معلومات
          </Heading>

          <Paragraph>
            پاکستانی اسکولی نصاب میں صحت سائنس شاذ ہی پڑھائی جاتی ہے۔
            زیادہ تر طلباء کبھی نہیں سیکھتے کہ جسم شوگر کیسے پروسیس کرتا
            ہے یا پیٹ کی چربی کیوں اہم ہے۔
          </Paragraph>

          <List
            items={[
              "اسکولوں میں منظم غذائی تعلیم نہیں دی جاتی۔",
              "عام غلط فہمیاں: قدرتی شوگر نہیں گنتی، صرف موٹے لوگوں کو ذیابیطس ہوتی ہے، انسولین لت لگاتی ہے۔",
              "مدد مانگنے پر بدنامی، خاص طور پر زائد وزن نوعمروں اور لڑکیوں کے لیے۔",
            ]}
          />

          <Paragraph>
            ابتدائی آگاہی کے بغیر، زیادہ تر لوگوں کی تشخیص دیر سے ہوتی ہے
            — اکثر پیچیدگیوں جیسے نظر کا دھندلانا، پاؤں کے زخم یا شدید
            تھکاوٹ کے بعد۔
          </Paragraph>

          <TextImageSection
            text={
              <>
                <Heading level={3}>
                  ۴۔ ذیابیطس کا خرچ طبی دیکھ بھال سے زیادہ ہے
                </Heading>
                <Paragraph>
                  پاکستان میں اعلیٰ معیار کی دیکھ بھال تک رسائی انتہائی
                  غیر مساوی ہے، حالانکہ ذیابیطس کو طویل مدتی اور کثیر پہلو
                  انتظام کی ضرورت ہے۔
                </Paragraph>
                <Paragraph>
                  ایکسپریس ٹریبیون کے مطابق، پاکستان کا قومی صحت بجٹ{" "}
                  <strong>
                    غیر متعدی بیماریوں کے لیے بہت کم مختص کرتا ہے
                  </strong>
                  ، باوجود ان کے بڑھتے بوجھ کے۔
                </Paragraph>
                <Paragraph>
                  برطانیہ یا UAE کے برعکس، یہاں ذیابیطس کی خوراک یا
                  GLP-1 ادویات کے لیے کوئی سبسڈی نہیں ہے۔
                </Paragraph>
              </>
            }
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
            imageAlt="صحت کے اخراجات"
          />

          <Heading level={4}>چھوٹے اقدامات بڑی تبدیلی لاتے ہیں</Heading>

          <Paragraph>
            آپ کو ایک ہی بار زندگی مکمل نہیں بدلنی۔ معمولی، دیرپا اقدامات
            سے شروع کریں:
          </Paragraph>

          <List
            items={[
              "میٹھے مشروبات کی جگہ شوگر فری لسی یا لیموں پانی لیں۔",
              "رات کے کھانے کے بعد ۱۵ سے ۲۰ منٹ پیدل چلیں۔",
              "اگر خاندان میں ذیابیطس ہے تو ڈاکٹر سے مشورہ کریں۔",
            ]}
          />

          <Heading level={3}>
            نتیجہ: ڈائیبیسٹی کا علاج عمر بھر کا عہد ہے — لیکن آپ کو
            اکیلے نہیں کرنا
          </Heading>

          <Paragraph>
            ذیابیطس قابل علاج اور حتیٰ کہ قابل تدارک ہے بشرطیکہ صحیح دیکھ
            بھال ہو، چاہے یہ مشکل لگے۔ اسے دو بیماریوں کے انتظام کے بجائے
            اپنی زندگی پر دوبارہ کنٹرول حاصل کرنا سمجھیں۔
          </Paragraph>
          <Paragraph>
            چاہے آپ کی تشخیص ہو چکی ہو، خطرے میں ہوں، یا بس صحت مند طرز
            زندگی چاہتے ہوں — آگاہی آپ کے سفر کا پہلا قدم ہے۔ ابھی ہمارے
            وابستہ ڈاکٹروں اور ماہرین غذائیت سے ملاقات کا بہترین وقت ہے۔
          </Paragraph>

          <Heading level={3}>حوالہ جات</Heading>

          <List
            items={[
              "انٹرنیشنل ذیابیطس فیڈریشن۔ (۲۰۲۱)۔ IDF ذیابیطس اٹلس، ۱۰واں ایڈیشن۔",
              "عالمی ادارہ صحت۔ (۲۰۲۴)۔ موٹاپا اور زائد وزن۔",
              "نیشنل انسٹیٹیوٹ آف ہیلتھ پاکستان۔ (۲۰۱۷)۔ غیر متعدی بیماریوں کے خطرے کے عوامل سروے۔",
              "پاپاس وغیرہ (۲۰۰۷)۔ تعمیر شدہ ماحول اور موٹاپا۔ ایپیڈیمیولوجک ریویوز۔",
              "بریے وغیرہ (۲۰۱۷)۔ موٹاپا: ایک دائمی، بار بار لوٹنے والا ترقی پذیر بیماری عمل۔ JAMA۔",
              "امریکن ذیابیطس ایسوسی ایشن۔ (۲۰۲۴)۔ ذیابیطس میں طبی دیکھ بھال کے معیارات۔",
              "یاسمین و پروین (۲۰۲۰)۔ پاکستانی بچوں اور نوعمروں میں غذائی رجحانات اور موٹاپا۔",
              "رضا و علی (۲۰۲۲)۔ شہری کاری اور طرز زندگی کی بیماریاں۔ BMJ گلوبل ہیلتھ۔",
              "ایکسپریس ٹریبیون۔ (۲۰۲۴)۔ صحت بجٹ ۲۰۲۴: پیسہ کہاں جا رہا ہے؟",
              "یونیسف پاکستان۔ (۲۰۲۳)۔ پاکستان میں نوعمر صحت اور غذائیت۔",
            ]}
          />
        </>
      ),
    },
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
  return Object.values(blogArticles).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}
