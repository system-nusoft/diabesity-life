"use client";
import Medication from "../public/medication.jpeg";

const medicationSections = [
  {
    id: "first-line-drugs",
    title: "First-line & Common Diabetes Drugs — Plain-language overview",
  },
  {
    id: "glp1-agonists",
    title: "GLP-1 Agonists & Newer Agents — What to know in Pakistan",
  },
  {
    id: "injectables-handling",
    title: "Injectables: Handling & Storage — Practical safety",
  },
  {
    id: "safety-interactions-monitoring",
    title: "Safety, Interactions & Monitoring — Stay ahead of problems",
  },
  {
    id: "affordability-access",
    title: "Affordability & Access — Navigating costs in Pakistan",
  },
  {
    id: "surgery-advanced-therapies",
    title: "Surgery & Advanced Therapies — When to consider",
  },
];

const medicationContent = [
  {
    id: "first-line-drugs",
    title: "First-line & Common Diabetes Drugs — Plain-language overview",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Medication isn't a shortcut; it's a <strong>tool</strong> alongside
          diet, movement, and sleep. Many adults start with{" "}
          <strong>metformin</strong>. It reduces liver glucose output and
          improves insulin sensitivity, often with mild stomach upset that
          settles if you <strong>start low and take with meals</strong>. Other
          oral drugs include <strong>sulfonylureas</strong> (can lower sugar but
          may cause hypos and weight gain), and{" "}
          <strong>SGLT2 inhibitors</strong> (help the kidneys pass extra
          glucose; watch hydration and genital infection risk). Your doctor may
          combine medicines to meet <strong>HbA1c targets</strong> appropriate
          to age and context.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Insulin is sometimes needed—temporarily or long-term—especially if
          sugars stay high, during pregnancy, or with certain illnesses. Insulin
          can be life-saving and safe when{" "}
          <strong>doses, timing, and technique</strong> are clear. None of this
          replaces lifestyle; rather, medicines make lifestyle changes{" "}
          <strong>more effective and safer</strong>.
        </p>
      </div>
    ),
  },
  {
    id: "glp1-agonists",
    title: "GLP-1 Agonists & Newer Agents — What to know in Pakistan",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>GLP-1 receptor agonists</strong> (e.g.,{" "}
          <strong>Ozempic/semaglutide</strong>,{" "}
          <strong>Rybelsus oral semaglutide</strong>,{" "}
          <strong>liraglutide</strong>) act on hunger/fullness and insulin
          pathways. Many people notice{" "}
          <strong>reduced appetite, steadier sugars, and weight loss</strong>.
          Typical side effects are{" "}
          <strong>nausea, constipation, or reflux</strong> early on—often
          improved by <strong>slow dose titration</strong> and{" "}
          <strong>smaller meals</strong>. These medicines require medical
          supervision: they're not for everyone (e.g., certain endocrine
          conditions, pregnancy/breastfeeding). Never combine{" "}
          <strong>Ozempic and Rybelsus</strong>; they're the{" "}
          <strong>same molecule</strong> via different routes. If supplies vary
          by city, discuss <strong>alternatives and bridging plans</strong> with
          your clinician.
        </p>
      </div>
    ),
  },
  {
    id: "injectables-handling",
    title: "Injectables: Handling & Storage — Practical safety",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          For <strong>pens</strong> (GLP-1 or insulin): check the{" "}
          <strong>expiry</strong>, inspect the <strong>solution</strong>, attach
          a <strong>new needle</strong>, and <strong>prime</strong> if
          instructions say so. Inject <strong>subcutaneously</strong> into
          abdomen, thigh, or upper arm; <strong>rotate sites</strong> to avoid
          lumps. Unused pens are kept <strong>refrigerated (2-8°C)</strong>;
          once in use, many can be kept at <strong>room temperature</strong> for
          a limited time—follow the leaflet. In hot weather, use{" "}
          <strong>insulated pouches</strong> when travelling. Never{" "}
          <strong>share pens or needles</strong>. Dispose of sharps safely
          (rigid container if you lack a sharps bin) and keep medicines away
          from children.
        </p>
      </div>
    ),
  },
  {
    id: "safety-interactions-monitoring",
    title: "Safety, Interactions & Monitoring — Stay ahead of problems",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Know your <strong>red flags</strong>: severe or persistent vomiting,
          dehydration, dizziness, signs of infection, or{" "}
          <strong>very low sugar</strong> (especially on insulin/sulfonylureas).
          Keep <strong>15 g fast-acting carbs</strong> handy for hypoglycaemia
          (glucose tablets, small juice box). Review meds/labs with your doctor:{" "}
          <strong>HbA1c, kidney function</strong>, and if on certain drugs,{" "}
          <strong>electrolytes</strong> or <strong>vitamin B12</strong>. Tell
          your clinician about <strong>all</strong> products you take, including{" "}
          <strong>herbals and over-the-counter</strong> items. Medicines work
          best with <strong>routine</strong>: consistent meals, activity, and
          sleep.
        </p>
      </div>
    ),
  },
  {
    id: "affordability-access",
    title: "Affordability & Access — Navigating costs in Pakistan",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Costs vary widely. Ask about{" "}
          <strong>generics, patient-assistance</strong>, and{" "}
          <strong>public hospitals</strong>. Consider a step-up plan: start with{" "}
          <strong>lifestyle + metformin</strong>, add other agents as needed. If
          a GLP-1 is prescribed but <strong>unaffordable or unavailable</strong>
          , discuss <strong>alternatives</strong> rather than buying from
          unverified sources. Keep prescriptions, use{" "}
          <strong>reputable pharmacies</strong>, and verify batch/expiry. If you
          use e-commerce, prefer platforms that{" "}
          <strong>require a valid prescription</strong> and offer{" "}
          <strong>cold-chain delivery</strong> for temperature-sensitive
          products.
        </p>
      </div>
    ),
  },
  {
    id: "surgery-advanced-therapies",
    title: "Surgery & Advanced Therapies — When to consider",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>Bariatric/metabolic surgery</strong> can be appropriate for
          severe obesity (often BMI thresholds with comorbidities) when
          lifestyle and medicines are not enough. Benefits may include{" "}
          <strong>substantial weight loss</strong> and improved sugar control;
          risks and recovery plans must be reviewed with a{" "}
          <strong>qualified surgical team</strong>. There are also endoscopic
          options in some centres. Surgery is not an "easy way out"—it's a
          medical path requiring{" "}
          <strong>nutrition counselling, psychological readiness</strong>, and
          long-term follow-up. A frank, respectful discussion with your
          clinician can clarify whether it fits your situation.
        </p>

        <p className="text-gray-700 leading-relaxed italic">
          Medical disclaimer: This section is informative and{" "}
          <strong>not</strong> a prescription. Always consult your doctor for
          personalised advice and dosing.
        </p>
      </div>
    ),
  },
];

export default function MedicationClient() {
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
                Medication
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                Plain-language guidance on diabetes and weight medications
                available in Pakistan. Understand your options, learn proper
                usage, manage side effects, and navigate costs with confidence.
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <img
                src={Medication.src}
                alt="Medication"
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
            {medicationSections.map((section) => (
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
          {medicationContent.map((section) => (
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
