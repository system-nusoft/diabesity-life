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
  content: React.ReactNode;
  relatedBlogs?: string[];
}

export const blogArticles: Record<string, BlogArticle> = {
  "how-semaglutide-changes-lives": {
    slug: "how-semaglutide-changes-lives",
    title: "How Semaglutide Changed My Life",
    date: "2025-05-12",
    image: Semaglutide.src,
    imageAlt: "Semaglutide medication",
    category: "Medication",
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
  },

  "getting-rid-of-obesity-the-real-challenge": {
    slug: "getting-rid-of-obesity-the-real-challenge",
    title: "Getting Rid of Obesity: The Real Challenge",
    author: "Tariq Nisar",
    date: "2025-06-15",
    image: ObesityChallenge.src,
    imageAlt: "Weight management",
    category: "Weight Loss",
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
  },

  "diabetes-is-a-slient-epidemic-sweeping-pakistan": {
    slug: "diabetes-is-a-slient-epidemic-sweeping-pakistan",
    title: "Diabetes is a silent epidemic sweeping Pakistan",
    author: "Dr Sarwar Malik",
    date: "2025-08-10",
    image: SilentEpidemic.src,
    imageAlt: "Silent Epidemic",
    category: "Education",
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
