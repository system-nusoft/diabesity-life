"use client";

const dietSections = [
  {
    id: "ask-a-nutritionist",
    title: "Ask a Nutritionist — When guidance saves time",
  },
  {
    id: "desi-meal-makeovers",
    title: "Desi Meal Makeovers — Enjoy the food you love, with smarter swaps",
  },
  {
    id: "low-gi-tips",
    title: "Low-GI & Glycaemic Load Tips — Local choices that blunt sugar spikes",
  },
  {
    id: "portion-control",
    title: "Portion Control & Practical Guides — Visual rules that work in real kitchens",
  },
  {
    id: "sample-diet-plans",
    title: "Sample Diet Plans — Budget, Moderate, and Clinical tracks",
  },
  {
    id: "snacking-street-food",
    title: "Snacking & Street-Food Survival — Realistic rules for real life",
  },
  {
    id: "supplements-herbal-remedies",
    title: "Supplements & Herbal Remedies — What helps, what to skip",
  },
  {
    id: "behavioural-tools",
    title: "Behavioural Tools — Make habits stick",
  },
];

const dietContent = [
  {
    id: "ask-a-nutritionist",
    title: "Ask a Nutritionist — When guidance saves time",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          If you have <strong>diabetes, PCOS, pregnancy, kidney/liver issues</strong>, or struggle with planning, a qualified
          dietitian can tailor carbs, protein, and timing around your life, medicines, and budget. A single consult
          can clarify <strong>portion sizes, Ramadan strategy</strong>, and <strong>grocery lists</strong> for the whole family. If you book online,
          confirm <strong>credentials</strong>, ask for <strong>written plans</strong>, and schedule a <strong>follow-up in 4–6 weeks</strong>.
        </p>
      </div>
    ),
  },
  {
    id: "desi-meal-makeovers",
    title: "Desi Meal Makeovers — Enjoy the food you love, with smarter swaps",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Pakistani meals can be heart-healthy without losing flavour. A "makeover" is not a punishment; it's a
          series of small, repeatable tweaks. Start by re-balancing the <strong>plate</strong>: half vegetables/salad (cooked or
          raw), a quarter <strong>protein</strong> (daal, chicken, fish, eggs, yogurt), and a quarter <strong>carbs</strong> (roti or rice). For <strong>biryani/
          nihari/qorma</strong>, shrink the carb portion and add a protein-plus-fiber side (raita with grated cucumber,
          mixed salad, sautéed bhindi). Use <strong>less oil</strong> and prefer <strong>stews/grills</strong> to deep-fries on routine days. Switch
          from heaped tablespoons of ghee/oil to <strong>measured teaspoons</strong>.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Batch-cook basic components: boiled chana/daal, grilled chicken strips, mixed veg—then assemble in
          different ways through the week. For <strong>roti</strong>, try smaller diameter or use <strong>bajra/jowar</strong> mixes a few times a
          week. For rice lovers, pre-boil and <strong>drain starchy water</strong>, then mix with veg and protein (pulao style).
          Keep <strong>spices</strong>—they deliver joy without extra calories. The goal is a taste-faithful home menu that quietly
          cuts excess carbs and oil. Over a month, these shifts add up to better energy, waist reduction, and
          steadier sugars.
        </p>
      </div>
    ),
  },
  {
    id: "low-gi-tips",
    title: "Low-GI & Glycaemic Load Tips — Local choices that blunt sugar spikes",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Instead of banning foods, learn which <strong>combinations</strong> slow glucose rise. Pair carbs with <strong>protein and
          fiber</strong>: daal-roti with salad, rice with chana and vegetables, fruit with a handful of nuts. Choose <strong>whole
          grains</strong> (bajra, jowar, oats), <strong>legumes</strong> (daal, chana, rajma), and <strong>non-starchy vegetables</strong> (cucumber,
          karela, saag, gobi). Keep portions of <strong>white rice/naan</strong> smaller; prefer <strong>roti</strong> over naan; explore <strong>brown
          basmati</strong> if acceptable. For snacks, try <strong>roasted chana</strong>, <strong>fruit + yogurt</strong>, <strong>boiled eggs</strong>, or <strong>chicken tikka</strong>{" "}
          without extra oil.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Timing matters: avoid <strong>late-night heavy meals</strong>, and try <strong>post-meal 10–15-minute walks</strong> to improve
          glucose handling. During <strong>Ramadan</strong>, plan <strong>suhoor</strong> with protein + slow carbs (oats, daal, eggs) and <strong>iftar</strong>{" "}
          with dates + water, followed by a balanced plate rather than a fried-food buffet.
        </p>
      </div>
    ),
  },
  {
    id: "portion-control",
    title: "Portion Control & Practical Guides — Visual rules that work in real kitchens",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Portion control is a skill. Replace vague advice with <strong>visual rules</strong>. Use the <strong>hand method</strong>: protein = palm,
          carbs = cupped hand (or half roti), fats = thumb, vegetables = two open hands. Eat on <strong>smaller plates</strong>{" "}
          and <strong>plate in the kitchen</strong> (don't serve family-style if you tend to refill). Start meals with <strong>water + salad</strong> to
          reduce overeating. Add <strong>"pause points"</strong>: halfway through, put the spoon down, take two deep breaths,
          ask "Am I at 7/10 full?" If yes, save the rest.
        </p>

        <p className="text-gray-700 leading-relaxed">
          For chai culture, negotiate <strong>frequency and size</strong>. Take <strong>unsweetened or lightly sweetened chai</strong> and pair
          with <strong>protein</strong> (egg, chana) instead of biscuits. If you love paratha, reserve it for <strong>two mornings/week</strong>{" "}
          and use tissue-pressed, shallow-fried versions. At dawats/weddings, follow the <strong>two-item rule</strong>: one
          savoury + one sweet, both small; skip sugary drinks; add water. Portion control is about <strong>enjoying the
          same foods</strong> in amounts that keep you energized rather than sleepy.
        </p>
      </div>
    ),
  },
  {
    id: "sample-diet-plans",
    title: "Sample Diet Plans — Budget, Moderate, and Clinical tracks",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Give yourself options that match your reality: - <strong>Budget plan:</strong> Roti with daal/egg, seasonal veg, small rice
          days, boiled chana, and homemade raita. One fruit/day, nuts 3–4 days/week. Minimal packaged snacks.
          - <strong>Moderate plan:</strong> Add fish/chicken twice weekly, brown basmati sometimes, yogurt smoothies (no
          sugar), light tikkas, more salad variety. - <strong>Clinical plan (with dietitian):</strong> Tailored carbs/protein/fat
          targets, medication-timed meals, special needs (PCOS, kidney issues), Ramadan adjustments.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Example day (weight-loss intent): Breakfast: omelet with veg + small roti; chai with little/no sugar.
          <br />
          Lunch: daal + salad + small rice; yogurt raita.
          <br />
          Snack: fruit + 8–10 nuts.
          <br />
          Dinner: chicken tikka + sautéed veg + small roti.
          <br />
          Walk 10–15 mins after lunch and dinner.
        </p>
      </div>
    ),
  },
  {
    id: "snacking-street-food",
    title: "Snacking & Street-Food Survival — Realistic rules for real life",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Set <strong>guardrails</strong>, not bans. If you love <strong>samosa/chaat/bun kebab</strong>, limit to <strong>once per week</strong>, share with a
          friend, add water and salad/raita, and avoid sugary drinks. Pick <strong>grilled</strong> over deep-fried when possible;
          ask vendors to <strong>hold extra chutney/syrups</strong>. Keep a <strong>"back-up snack kit"</strong> in your bag (roasted chana,
          nuts, sugar-free gum) to dodge impulsive choices when hungry or stuck in traffic. For travel and office
          days, pack <strong>egg wraps, fruit, yogurt, or leftover tikka</strong>. When cravings hit at night, take <strong>two minutes</strong>:
          water, slow breaths, quick stretch; if still hungry, choose <strong>protein + veg</strong>.
        </p>
      </div>
    ),
  },
  {
    id: "supplements-herbal-remedies",
    title: "Supplements & Herbal Remedies — What helps, what to skip",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Be sceptical of "miracle" weight-loss teas or pills. Some products are <strong>unsafe</strong> or <strong>ineffective</strong>. Evidence
          supports <strong>adequate protein</strong>, <strong>fiber</strong>, and in some cases <strong>vitamin D</strong> if deficient. Discuss <strong>omega-3</strong> for
          triglycerides with your doctor. Be cautious with <strong>fat burners</strong> and <strong>unregulated herbal mixes</strong>; they can
          interact with medicines or stress the liver. If you try something new, <strong>note any side effects</strong>, keep doses
          small, and <strong>tell your clinician</strong>.
        </p>
      </div>
    ),
  },
  {
    id: "behavioural-tools",
    title: "Behavioural Tools — Make habits stick",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Use <strong>implementation intentions</strong>: "If X happens, I will do Y" (e.g., "If I'm offered mithai at work, I'll take a
          half piece and eat it slowly after lunch"). Keep <strong>visible cues</strong>: salad bowl on the counter, filled water bottle
          on your desk, pre-cut veg in the fridge. Track <strong>three basics</strong> daily: steps, portions of veg, and sweet
          drinks. Reward consistency, not perfection. If you "fall off" during a wedding week, <strong>reboot the very
          next meal</strong>. Progress beats perfection.
        </p>
      </div>
    ),
  },
];

export default function DietClient() {
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Diet
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">TBD</p>
            </div>
            <div className="relative h-64 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053"
                alt="Healthy diet"
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
            {dietSections.map((section, index) => (
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
          {dietContent.map((section) => (
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
