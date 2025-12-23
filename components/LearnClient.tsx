"use client";

const learnSections = [
  {
    id: "obesity-101",
    title: "Obesity 101 — What it is and why it matters",
  },
  {
    id: "diabetes-101",
    title: "Diabetes 101 — Basics you can actually use",
  },
  {
    id: "obesity-diabetes-connection",
    title: "Obesity ↔ Diabetes — How they're connected",
  },
  {
    id: "risk-factors-screening",
    title: "Risk Factors & Screening — Who should get checked, and when",
  },
  {
    id: "myths-vs-facts",
    title: "Myths vs Facts — Desi edition",
  },
  {
    id: "clinical-corner",
    title: "Clinical Corner — For professionals & curious readers",
  },
];

const learnContent = [
  {
    id: "obesity-101",
    title: "Obesity 101 — What it is and why it matters",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Obesity is not just about &quot;weight&quot; or looks; it&apos;s a chronic, medical
          condition involving excess body fat that affects hormones, metabolism,
          joints, and even mood. Doctors often use{" "}
          <strong>BMI (Body Mass Index)</strong> and{" "}
          <strong>waist circumference</strong> as starting points to assess
          health risk. BMI relates your weight to height, while waist size helps
          estimate abdominal (visceral) fat—fat that sits around internal organs
          and drives insulin resistance. In South Asian communities—including
          Pakistan—health risks can begin at{" "}
          <strong>lower BMI and waist sizes</strong> than many Western charts
          suggest, which is why a person can &quot;look normal&quot; yet face real
          metabolic risk.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Types of body fat:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Subcutaneous fat</strong> sits under the skin (e.g.,
              thighs, arms).
            </li>
            <li>
              <strong>Visceral fat</strong> wraps organs (liver, pancreas) and
              is strongly linked to diabetes, high blood pressure, and heart
              disease. Reducing visceral fat—even modestly—improves insulin and
              energy.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Why does obesity develop?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            It&apos;s multi-factorial: genetics, family routines, urban lifestyles,
            stress, poor sleep, medications, pregnancy-related changes, and food
            environments (sweet tea, refined carbs, large portions, frequent
            weddings/dawats). It isn&apos;t simply &quot;willpower.&quot; Hormones like{" "}
            <strong>insulin</strong> and <strong>GLP-1</strong> influence
            hunger/fullness, and chronic stress raises cortisol, pushing the
            body to store fat.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Health risks to watch:
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Type 2 diabetes, fatty liver, high blood pressure, high cholesterol,
            joint pain, sleep apnea, infertility/irregular periods,
            depression/anxiety. The good news:{" "}
            <strong>small, steady changes</strong>—5–7% weight loss, more
            walking, better sleep, balanced desi meals—can meaningfully reduce
            risk.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            What actually helps:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Balanced desi meals</strong> (protein + vegetables +
              controlled roti/rice), mindful portions.
            </li>
            <li>
              <strong>Daily movement</strong> (steps, home routines, mosque/park
              walks); sit less, move more.
            </li>
            <li>
              <strong>Sleep & stress</strong>: regular bedtimes, breathing
              exercises, frequent water.
            </li>
            <li>
              <strong>Medical guidance</strong> when needed: labs, medication,
              or referral.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Next step:</h3>
          <p className="text-gray-700 leading-relaxed">
            Take the <strong>1-minute Risk Quiz</strong> to understand your
            baseline and get a simple action plan.{" "}
            <em>&quot;Doctor ki salah zaroori hai.&quot;</em>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "diabetes-101",
    title: "Diabetes 101 — Basics you can actually use",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>Diabetes</strong> is a condition where blood glucose stays
          higher than normal. In <strong>Type 2 diabetes</strong> (the most
          common in adults), the body becomes resistant to insulin and also
          makes less insulin over time. <strong>Pre-diabetes</strong> means
          sugars are higher than normal but not yet in diabetes range; it&apos;s a
          warning—and an opportunity to reverse course.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Everyday signals
          </h3>
          <p className="text-gray-700 leading-relaxed">
            may include more thirst, more urination (especially at night),
            blurry vision, fatigue, slow-healing cuts, repeated infections
            (skin, gums), or tingling feet. Some people feel nothing—hence the
            value of screening.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Common tests:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Fasting plasma glucose</strong> (after 8–12 hours without
              food).
            </li>
            <li>
              <strong>HbA1c</strong> (average sugar over ~3 months).
            </li>
            <li>
              <strong>Random glucose</strong> (spot check with symptoms). Your
              doctor decides which test to use, how often to repeat it, and what
              target is appropriate for your age, pregnancy status, other
              conditions, and medications.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Why it happens:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Genetics + lifestyle + environment. High refined carbs (white rice,
            bakery items), sugary beverages, stress, poor sleep, and low
            activity make the pancreas work overtime, then underperform. Weight
            around the abdomen amplifies insulin resistance.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            What helps right now:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Build <strong>balanced plates</strong> (add protein like
              daal/chicken/fish/eggs; keep rotis smaller; add salad/veg).
            </li>
            <li>
              <strong>Move daily</strong> (even 10–15 minute walks after meals
              help).
            </li>
            <li>
              <strong>Medication</strong> when prescribed (metformin is common
              first-line; others exist).
            </li>
            <li>
              <strong>Routine checks</strong> (sugars, HbA1c, blood pressure,
              cholesterol, kidney function, eye & foot exams).
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Complications, briefly:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If sugars remain high for years, risks rise for heart disease,
            stroke, kidney disease, nerve damage, and eye problems. Early
            action, even small changes, lowers risk.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Next step:</h3>
          <p className="text-gray-700 leading-relaxed">
            Use the <strong>HbA1c Translator</strong> in Tools to understand
            typical targets (your doctor&apos;s plan rules). Then book a{" "}
            <strong>baseline consult</strong> if your risk is elevated.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "obesity-diabetes-connection",
    title: "Obesity ↔ Diabetes — How they're connected",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Excess visceral fat changes how cells respond to{" "}
          <strong>insulin</strong>, the hormone that moves glucose from blood
          into cells. Think of insulin as a key; in insulin resistance, the
          locks (cell receptors) become rusty, so the key works poorly. The
          pancreas compensates by making more insulin—until it can&apos;t. Blood
          glucose rises, and over time Type 2 diabetes may develop.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Key drivers of the link:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Abdominal fat</strong> and liver fat (non-alcoholic fatty
              liver) fuel insulin resistance.
            </li>
            <li>
              <strong>Inflammation</strong>: excess fat tissue releases
              inflammatory signals that worsen metabolic control.
            </li>
            <li>
              <strong>Sleep & stress</strong>: poor sleep and chronic stress
              elevate cortisol, pushing glucose up and cravings higher.
            </li>
            <li>
              <strong>PCOS</strong> (in many women) and{" "}
              <strong>low testosterone</strong> (in some men) add insulin
              resistance, weight gain, and mood shifts.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Break the cycle:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Modest weight loss</strong> (even 5–7%) measurably
              improves sugar control and energy.
            </li>
            <li>
              <strong>Meal timing</strong>: space out sweets; avoid grazing all
              day; aim for steady eating windows.
            </li>
            <li>
              <strong>Protein-first</strong> at meals; add fiber (veg/daal) to
              blunt sugar spikes.
            </li>
            <li>
              <strong>Medication</strong> when appropriate—some help with weight
              and insulin sensitivity.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Why this matters in Pakistan:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our food culture is rich and social—chai, mithai, iftar spreads,
            wedding menus. You don&apos;t have to give up your culture. Instead,
            adapt it. Celebrate, then return to routine. It&apos;s the{" "}
            <strong>long-term pattern</strong> that shapes health.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "risk-factors-screening",
    title: "Risk Factors & Screening — Who should get checked, and when",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Some risks you can&apos;t change (age, family history), others you can
          (diet, activity, sleep). In South Asian families, diabetes often
          clusters across generations, and health risks can appear at{" "}
          <strong>lower BMI</strong>.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Common risk factors:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Parent or sibling with diabetes; history of high sugars during pregnancy (gestational diabetes).</li>
            <li>Waist size trending up (particularly central/abdominal fat).</li>
            <li>High blood pressure, high triglycerides or low HDL.</li>
            <li>PCOS in women; sleep apnea; sedentary work/study patterns.</li>
            <li>Frequent intake of sugary drinks, large portions of rice/roti, late-night eating.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            When to screen:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              If you have multiple risks, ask your doctor about{" "}
              <strong>earlier</strong> and <strong>more frequent</strong> checks.
            </li>
            <li>
              If you&apos;re planning pregnancy or managing PCOS, screening may be
              advised sooner.
            </li>
            <li>
              After age 35 (often earlier in South Asians with risk), discuss
              periodic fasting tests.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            How to prepare for lab visits:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Carry a list of medicines, supplements, and recent symptoms.
            </li>
            <li>
              Ask which test is right for you, and how often to retest.
            </li>
            <li>
              Request a simple action plan: diet, movement, follow-up timelines.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            What to do with results:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Numbers are clues—not judgments. Partner with your clinician to set{" "}
            <strong>realistic, staged goals</strong> and choose the right mix of
            lifestyle and (if needed) medication.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "myths-vs-facts",
    title: "Myths vs Facts — Desi edition",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Only sweets cause diabetes.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Refined carbs of many kinds (white rice, bakery items, sugary beverages) raise glucose. Total
            pattern matters: portions, frequency, and overall meal balance.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;If I walk daily, I can eat unlimited mithai.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Movement is powerful, but you can&apos;t outrun a consistently high-sugar, high-portion diet. Combine
            both: smarter food <strong>and</strong> regular activity.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Desi ghee is always &apos;good fat&apos; so I can use as much as I want.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Quality matters—but quantity still counts. Fats are calorie-dense; <em>excess</em> intake—of any fat—can
            stall progress.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Fasting alone will cure my sugar.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Many people see improvements during structured fasting, but it&apos;s not a one-size-fits-all solution.
            Medication timing, hypoglycaemia risk, and overall nutrition still matter—especially in Ramadan.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Herbal or &apos;natural&apos; products are automatically safe.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> &quot;Natural&quot; isn&apos;t always safe or effective. Some products interact with medicines or harm the liver/
            kidneys. Always discuss with your doctor.
          </p>
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Better mindsets:</strong> small steady changes, consistency over perfection, celebrate progress, use
            community support, and get medical advice when unsure.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "clinical-corner",
    title: "Clinical Corner — For professionals & curious readers",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          This site keeps public pages simple. For deeper reading: mechanisms of <strong>GLP-1 receptor agonists</strong>, links
          between <strong>NAFLD</strong> and insulin resistance, typical indications for <strong>bariatric/metabolic surgery</strong> (e.g., severe
          obesity with comorbidities), and practical approaches to sleep apnea, PCOS, and hypertension in the
          context of weight and glucose control. We&apos;ll provide plain-language summaries and point to the latest
          guidance for local practice where available.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Practical pearls:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Approaches that blend <strong>nutrition, movement, sleep hygiene, and behavioural
              coaching</strong> outperform single-focus plans.
            </li>
            <li>
              <strong>Structured follow-up</strong> (e.g., 4–6 weeks) beats ad-hoc
              check-ins.
            </li>
            <li>
              In South Asian populations, consider <strong>lower BMI/waist thresholds</strong> for risk conversations
              and counselling.
            </li>
            <li>
              For people on insulin or sulfonylureas, pair lifestyle counselling with <strong>hypoglycaemia
              safety</strong>.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Caveat:</strong> Clinical decisions must be personalised. Nothing here replaces formal guidelines or a full
            clinical assessment.
          </p>
        </div>
      </div>
    ),
  },
];

export default function LearnClient() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Learn
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">TBD</p>
            </div>
            <div className="relative h-64 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
                alt="Learn about health"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Sections
          </h2>
          <ul className="space-y-4">
            {learnSections.map((section, index) => (
              <li key={section.id} className="flex items-start">
                <span className="text-primary mr-3 mt-1.5 text-xl">
                  &#8226;
                </span>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-primary hover:text-primary/80 font-medium text-lg md:text-xl text-left transition-colors"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {learnContent.map((section) => (
            <div key={section.id}>
              <div id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                  {section.title}
                </h2>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
