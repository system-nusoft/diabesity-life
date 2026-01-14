"use client";

const howToSections = [
  {
    id: "how-to-start",
    title: "How to Start — Weeks 1, 4, and 12",
  },
  {
    id: "how-to-exercise",
    title: "How to Exercise at Home — Move more, safely",
  },
  {
    id: "how-to-read-labels",
    title: "How to Read Food Labels — Pakistani brands made simple",
  },
  {
    id: "how-to-handle-social-events",
    title:
      "How to Handle Social Events & Cravings — Eid, weddings, office treats",
  },
  {
    id: "how-to-use-prescription-treatments",
    title:
      "How to Use Prescription Treatments — Pens, pills, and practical tips",
  },
  {
    id: "how-to-handle-blood-sugar",
    title: "How to Handle High or Low Blood Sugar — Calm, clear actions",
  },
];

const howToContent = [
  {
    id: "how-to-start",
    title: "How to Start — Weeks 1, 4, and 12",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Change sticks when it's <strong>clear, kind, and consistent</strong>.
          Think in <strong>12-week blocks</strong> with simple weekly focuses.
          In <strong>Week 1</strong>, establish anchors: drink water before
          meals; add a fist-size portion of vegetables to lunch and dinner; walk
          10–15 minutes after two meals; set a regular bedtime. Swap one sugary
          drink for water or sugar-free. Weigh yourself once (morning, empty
          stomach) and measure waist; then forget the scale until Week 4. Track
          three checkboxes daily: <strong>water, veg, walk</strong>.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Weeks 2–4</h3>
          <p className="text-gray-700 leading-relaxed">
            Upgrade breakfast with <strong>protein first</strong> (eggs, yogurt,
            daal). Plate meals in the kitchen, on{" "}
            <strong>smaller plates</strong>, and sit at a table (not on the
            sofa). Use the <strong>two-item rule</strong> at events (one savoury
            + one sweet, both small). Test <strong>pause points</strong>: set
            down the spoon midway, take two breaths, ask "Am I 7/10 full?" If
            yes, stop. Do a <strong>5-minute tidy and stretch</strong> before
            bed to wind down. Re-measure waist at Week 4 and review progress
            notes, not just kilos.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Weeks 5–8</h3>
          <p className="text-gray-700 leading-relaxed">
            Add <strong>resistance work</strong> twice weekly (home bands,
            bodyweight). Try a <strong>Ramadan-style plate</strong> year-round:
            dates are for special days; focus iftar-like on water + balanced
            plate. Introduce <strong>meal planning</strong>: a weekly protein
            (grilled chicken/daal), a veg base, and a starch you control.
            Schedule a <strong>doctor or dietitian check-in</strong> if your
            quiz risk was Medium/High. Tweak meds only under supervision.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Weeks 9–12</h3>
          <p className="text-gray-700 leading-relaxed">
            Layer <strong>habit strengtheners</strong>: plan for weddings,
            travel, exams. Practice <strong>urge surfing</strong> (delay a
            craving by 10 minutes with water, breathing, quick walk). Consider
            adding a <strong>high-protein snack</strong> on hectic days to
            prevent overeating later. Celebrate non-scale wins: energy, sleep,
            stable moods, fewer cravings, easier stairs. At Week 12, decide the{" "}
            <strong>next block</strong>. Sustainable change is a loop—not a
            finish line.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-exercise",
    title: "How to Exercise at Home — Move more, safely",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Start where you are. For most healthy adults, aim for{" "}
          <strong>150+ minutes/week</strong> of moderate activity plus{" "}
          <strong>2 days</strong> of strength work. For beginners, do{" "}
          <strong>10-15 minute</strong> bouts: chair sit-to-stands, wall
          push-ups, step-ups on a sturdy stool, easy marching in place. Build a{" "}
          <strong>simple circuit</strong> (4-6 moves, 30-45 seconds on, 15-30
          off) and repeat twice. Add <strong>stretching</strong> for tight
          hips/hamstrings and 2 minutes of <strong>nasal breathing</strong> at
          the end.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Safety tips:</h3>
          <p className="text-gray-700 leading-relaxed">
            If you use insulin or certain tablets, check for{" "}
            <strong>low sugar</strong> risk; keep{" "}
            <strong>15 g fast carbs</strong> handy. Avoid high-heat workouts
            outdoors in summer; prefer mornings/evenings or an indoor fan. In{" "}
            <strong>Ramadan</strong>, shift resistance work to{" "}
            <strong>post-iftar</strong> and keep it short. For knee pain, focus
            on <strong>glute/hip strength</strong>,{" "}
            <strong>shorter stride walking</strong>, and{" "}
            <strong>low-impact</strong> options (cycling, swimming). If dizzy,
            very breathless, or in chest pain—
            <strong>stop and seek medical help</strong>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-read-labels",
    title: "How to Read Food Labels — Pakistani brands made simple",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Labels on milk, biscuits, juices, and snacks can be confusing. Scan{" "}
          <strong>serving size</strong> first: many packs list small servings
          that understate sugar and calories. Check{" "}
          <strong>total sugars</strong> and <strong>added sugars</strong>; in
          many products they're similar. Learn sugar aliases:{" "}
          <strong>glucose syrup, maltodextrin, dextrose, HFCS</strong> (rare
          locally but possible). Watch <strong>trans fat</strong> (avoid
          "partially hydrogenated"). Sodium hides in{" "}
          <strong>instant noodles, chips, biscuits</strong>—compare brands and
          pick lower-sodium options.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Quick heuristics:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If <strong>sugar</strong> is in the first 3 ingredients, treat as a
            dessert. If a cereal says "whole grain," confirm by ingredient
            order. "Low-fat" dairy can still have <strong>added sugar</strong>;
            check the table. For juices/ nectars, prefer{" "}
            <strong>whole fruit</strong> or water. For sweeteners, use modestly;
            some people notice improved control simply by{" "}
            <strong>dropping sweet tea</strong> from twice daily to once or
            none.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-handle-social-events",
    title:
      "How to Handle Social Events & Cravings — Eid, weddings, office treats",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Go with a <strong>pre-plan</strong>: drink a full glass of water
          before entering, <strong>scan the spread</strong>, then pick{" "}
          <strong>one savoury + one sweet</strong> (small). Eat slowly, stand
          away from the buffet, and keep a <strong>non-sugary drink</strong> in
          hand. If relatives insist, respond kindly: "Doctor ne portion chhota
          rakhne ko kaha hai." For cravings at home, try the{" "}
          <strong>3-step</strong>: water → slow breathing → short walk or call a
          friend. If the craving remains, choose <strong>protein + veg</strong>{" "}
          first. Build a <strong>back-up kit</strong> (roasted chana, nuts,
          sugar-free gum) for late-night and travel scenarios.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-use-prescription-treatments",
    title:
      "How to Use Prescription Treatments — Pens, pills, and practical tips",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Follow your clinician's instructions <strong>exactly</strong>. For{" "}
          <strong>GLP-1 pens</strong> (e.g., Ozempic), inject weekly on the same
          day, rotate sites, and store per leaflet (unused in the{" "}
          <strong>fridge</strong>, in-use often at <strong>room temp</strong>{" "}
          for limited days). Start <strong>low and go slow</strong> to reduce
          nausea; eat smaller, protein-forward meals.{" "}
          <strong>Do not combine</strong> oral and injectable semaglutide. For{" "}
          <strong>metformin</strong>, take with meals and ask about{" "}
          <strong>extended-release</strong> if stomach upset occurs. If you feel
          unwell (vomiting, dizziness, very low or very high sugars),{" "}
          <strong>contact your clinician</strong>. Never buy injectables from{" "}
          <strong>unverified sellers</strong>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-handle-blood-sugar",
    title: "How to Handle High or Low Blood Sugar — Calm, clear actions",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          If you monitor sugars: <strong>&lt;70 mg/dL</strong> is low; use the{" "}
          <strong>15-gram rule</strong> (3-4 glucose tabs or small juice),
          recheck in 15 minutes, repeat if needed, then eat a balanced snack.
          For <strong>very high</strong> readings, hydrate, walk gently (if
          safe), and call your clinician for next steps. Keep a{" "}
          <strong>wallet card</strong> with emergency contacts and medication
          list. Family members should learn to recognize{" "}
          <strong>hypo signs</strong> (sweating, shakiness, confusion) and{" "}
          <strong>hyper signs</strong> (thirst, frequent urination, fatigue).
          When unsure—<strong>seek medical advice promptly</strong>.
        </p>
      </div>
    ),
  },
];

export default function HowToClient() {
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
                How To
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                Step-by-step guides for daily living with diabesity. From
                starting your journey to handling social events, reading food
                labels, and managing medications—practical advice you can use
                today.
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072"
                alt="How to guide"
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
            {howToSections.map((section) => (
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
          {howToContent.map((section) => (
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
