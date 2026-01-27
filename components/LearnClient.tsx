"use client";

const learnSections = [
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
            <li>
              Parent or sibling with diabetes; history of high sugars during
              pregnancy (gestational diabetes).
            </li>
            <li>
              Waist size trending up (particularly central/abdominal fat).
            </li>
            <li>High blood pressure, high triglycerides or low HDL.</li>
            <li>PCOS in women; sleep apnea; sedentary work/study patterns.</li>
            <li>
              Frequent intake of sugary drinks, large portions of rice/roti,
              late-night eating.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            When to screen:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              If you have multiple risks, ask your doctor about{" "}
              <strong>earlier</strong> and <strong>more frequent</strong>{" "}
              checks.
            </li>
            <li>
              If you&apos;re planning pregnancy or managing PCOS, screening may
              be advised sooner.
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
            <li>Ask which test is right for you, and how often to retest.</li>
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
            <strong>Fact:</strong> Refined carbs of many kinds (white rice,
            bakery items, sugary beverages) raise glucose. Total pattern
            matters: portions, frequency, and overall meal balance.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;If I walk daily, I can eat unlimited
            mithai.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Movement is powerful, but you can&apos;t
            outrun a consistently high-sugar, high-portion diet. Combine both:
            smarter food <strong>and</strong> regular activity.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Desi ghee is always &apos;good
            fat&apos; so I can use as much as I want.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Quality matters—but quantity still counts.
            Fats are calorie-dense; <em>excess</em> intake—of any fat—can stall
            progress.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Fasting alone will cure my sugar.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Many people see improvements during
            structured fasting, but it&apos;s not a one-size-fits-all solution.
            Medication timing, hypoglycaemia risk, and overall nutrition still
            matter—especially in Ramadan.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Herbal or &apos;natural&apos; products
            are automatically safe.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> &quot;Natural&quot; isn&apos;t always safe or
            effective. Some products interact with medicines or harm the liver/
            kidneys. Always discuss with your doctor.
          </p>
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Better mindsets:</strong> small steady changes, consistency
            over perfection, celebrate progress, use community support, and get
            medical advice when unsure.
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
          This site keeps public pages simple. For deeper reading: mechanisms of{" "}
          <strong>GLP-1 receptor agonists</strong>, links between{" "}
          <strong>NAFLD</strong> and insulin resistance, typical indications for{" "}
          <strong>bariatric/metabolic surgery</strong> (e.g., severe obesity
          with comorbidities), and practical approaches to sleep apnea, PCOS,
          and hypertension in the context of weight and glucose control.
          We&apos;ll provide plain-language summaries and point to the latest
          guidance for local practice where available.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Practical pearls:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Approaches that blend{" "}
              <strong>
                nutrition, movement, sleep hygiene, and behavioural coaching
              </strong>{" "}
              outperform single-focus plans.
            </li>
            <li>
              <strong>Structured follow-up</strong> (e.g., 4–6 weeks) beats
              ad-hoc check-ins.
            </li>
            <li>
              In South Asian populations, consider{" "}
              <strong>lower BMI/waist thresholds</strong> for risk conversations
              and counselling.
            </li>
            <li>
              For people on insulin or sulfonylureas, pair lifestyle counselling
              with <strong>hypoglycaemia safety</strong>.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Caveat:</strong> Clinical decisions must be personalised.
            Nothing here replaces formal guidelines or a full clinical
            assessment.
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
      const offset = 100;
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
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Learn
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                Understanding diabesity starts here. Learn about risk factors,
                debunk common myths, and get the knowledge you need to take
                control of your health.
              </p>
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
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6 lg:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Sections
          </h2>
          <ul className="space-y-4">
            {learnSections.map((section) => (
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
