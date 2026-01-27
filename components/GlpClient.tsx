"use client";

const glpSections = [
  {
    id: "obesity-diabetes-connection",
    title: "What is Diabesity?",
  },
  {
    id: "diabetes-101",
    title: "What is Diabetes?",
  },
  {
    id: "obesity-101",
    title: "What is Obesity?",
  },
  {
    id: "glp1-agonists",
    title: "GLP-1 Agonists & Newer Agents — What to know in Pakistan",
  },
  {
    id: "clinical-corner",
    title: "Clinical Corner — For professionals & curious readers",
  },
  {
    id: "glp1-treatments",
    title: "GLP-1 Based Treatments",
  },
];

const glpContent = [
  {
    id: "obesity-diabetes-connection",
    title: "What is Diabesity?",
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
    id: "diabetes-101",
    title: "What is Diabetes?",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-gray-700 leading-relaxed">
            Understanding a health condition is the first step toward managing
            it. At its core, diabetes is a condition that affects how your body
            turns food into energy. Think of it like this:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>
              You eat food, which your body breaks down into a sugar called{" "}
              <strong>glucose</strong>.
            </li>
            <li>
              This glucose enters your bloodstream, raising your blood sugar
              levels.
            </li>
            <li>
              Your pancreas releases a hormone called <strong>insulin</strong>.
            </li>
            <li>
              <strong>Insulin acts like a key</strong>, unlocking your body's
              cells to let the glucose in, where it's used for energy.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed mt-2">
            In diabetes, this process is disrupted. There are two main ways this
            can happen, which define the two main types of diabetes.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Type 1 Diabetes: An Autoimmune Condition
          </h3>
          <p>
            In Type 1 diabetes, the body's immune system—which normally fights
            off infections—mistakenly attacks and destroys the insulin-producing
            cells (beta cells) in the pancreas. It's like the body has lost the
            factory that makes the "keys."
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>
              <strong>Cause:</strong> An autoimmune reaction. The exact trigger
              is unknown, but genetics and environmental factors (like viruses)
              may play a role.
              <strong>It is not caused by diet or lifestyle.</strong>
            </li>
            <li>
              <strong>Insulin Production:</strong> The body produces very little
              or no insulin.
            </li>
            <li>
              <strong>Who it Affects:</strong> It's most often diagnosed in
              children, teens, and young adults, but it can develop at any age.{" "}
            </li>
            <li>
              <strong>Management:</strong> People with Type 1 diabetes must take
              insulin every day to live. This is done through multiple daily
              injections or an insulin pump.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Type 2 Diabetes: Insulin Resistance
          </h3>
          <p>
            Type 2 diabetes is the most common form. In this case, the body's
            "key factory" (the pancreas) is still working, but the "locks" on
            the cells are faulty. This is called{" "}
            <strong>insulin resistance.</strong> Initially, the pancreas works
            overtime to produce more insulin to overcome this resistance. Over
            time, however, it can't keep up, and blood sugar levels rise.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>
              <strong>Cause:</strong> A combination of strong genetic
              predisposition and lifestyle factors.{" "}
              <strong>
                Obesity is the single biggest risk factor for developing Type 2
                diabetes.
              </strong>
            </li>
            <li>
              <strong>Insulin Production:</strong> The body either doesn't use
              insulin effectively (insulin resistance) or, in later stages,
              doesn't produce enough insulin.
            </li>
            <li>
              <strong>Who it Affects:</strong> It most often develops in people
              over age 45, but rates are rising dramatically in younger adults,
              teens, and children.
            </li>
            <li>
              <strong>Management:</strong> Management focuses on:
            </li>
            <li>
              <strong>Lifestyle:</strong> Healthy eating, regular physical
              activity, and weight loss.
            </li>
            <li>
              <strong>Oral Medications:</strong> Pills that help the body use
              insulin better or make less glucose.
            </li>
            <li>
              <strong>Injectable Medications:</strong> Including insulin or
              other drugs (like GLP-1 agonists) that help manage blood sugar.
            </li>
          </ul>
        </div>

        {/* At-a-Glance Comparison Table */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            At-a-Glance: Type 1 vs. Type 2 Diabetes
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-4 pr-4 font-bold text-gray-900">
                    Feature
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">
                    Type 1 Diabetes
                  </th>
                  <th className="text-left py-4 pl-4 font-bold text-gray-900">
                    Type 2 Diabetes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900">
                    Primary Problem
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Body cannot produce insulin.
                  </td>
                  <td className="py-4 pl-4 text-gray-700">
                    Body cannot use insulin effectively (insulin resistance).
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900">Cause</td>
                  <td className="py-4 px-4 text-gray-700">
                    Autoimmune disease.
                  </td>
                  <td className="py-4 pl-4 text-gray-700">
                    Strong genetic link plus lifestyle factors (obesity,
                    inactivity).
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900">
                    Typical Onset
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Rapid, often in childhood or young adulthood.
                  </td>
                  <td className="py-4 pl-4 text-gray-700">
                    Gradual, usually in adulthood, but increasing in youth.
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900">
                    Prevention
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Cannot be prevented.
                  </td>
                  <td className="py-4 pl-4 text-gray-700">
                    Can often be prevented or delayed with a healthy lifestyle.
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900">
                    Treatment
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Requires daily insulin (injections or pump).
                  </td>
                  <td className="py-4 pl-4 text-gray-700">
                    Lifestyle changes, oral medications, and sometimes insulin.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
    id: "obesity-101",
    title: "What is Obesity?",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Obesity is not just about &quot;weight&quot; or looks; it&apos;s a
          chronic, medical condition involving excess body fat that affects
          hormones, metabolism, joints, and even mood. Doctors often use{" "}
          <strong>BMI (Body Mass Index)</strong> and{" "}
          <strong>waist circumference</strong> as starting points to assess
          health risk. BMI relates your weight to height, while waist size helps
          estimate abdominal (visceral) fat—fat that sits around internal organs
          and drives insulin resistance. In South Asian communities—including
          Pakistan—health risks can begin at{" "}
          <strong>lower BMI and waist sizes</strong> than many Western charts
          suggest, which is why a person can &quot;look normal&quot; yet face
          real metabolic risk.
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
            The Clinical Classes of Obesity
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Healthcare providers classify obesity into different classes to
            better understand health risks and determine appropriate treatment
            paths.
          </p>
        </div>

        {/* BMI Classification Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-900">
                <th className="text-left py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  Class
                </th>
                <th className="text-left py-4 px-4 font-bold text-gray-900 w-[20%]">
                  BMI Range
                </th>
                <th className="text-left py-4 pl-4 font-bold text-gray-900 w-[60%]">
                  Description & Associated Health Risk
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  Overweight
                </td>
                <td className="py-4 px-4 text-gray-700 w-[20%]">25.0 – 29.9</td>
                <td className="py-4 pl-4 text-gray-700 w-[60%]">
                  <strong>Elevated Risk.</strong> Not technically classified as
                  obesity, but this range indicates an increased risk of
                  developing obesity and related health problems.
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  Class I Obesity
                </td>
                <td className="py-4 px-4 text-gray-700 w-[20%]">30.0 – 34.9</td>
                <td className="py-4 pl-4 text-gray-700 w-[60%]">
                  <strong>Moderate Risk.</strong> This is the first clinical
                  stage of obesity. Health risks, including for Type 2 diabetes,
                  high blood pressure, and heart disease, are significant.
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  Class II Obesity
                </td>
                <td className="py-4 px-4 text-gray-700 w-[20%]">35.0 – 39.9</td>
                <td className="py-4 pl-4 text-gray-700 w-[60%]">
                  <strong>High Risk.</strong> At this stage, the risk of
                  weight-related health complications is high. Many individuals
                  may be candidates for more intensive treatments, including
                  weight-loss surgery.
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  Class III Obesity
                </td>
                <td className="py-4 px-4 text-gray-700 w-[20%]">≥ 40.0</td>
                <td className="py-4 pl-4 text-gray-700 w-[60%]">
                  <strong>Very High / Severe Risk.</strong> Formerly known as
                  "morbid obesity," this class is associated with a very high
                  risk of developing serious health conditions, a reduced life
                  expectancy, and a lower quality of life if left untreated.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Why does obesity develop?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            It&apos;s multi-factorial: genetics, family routines, urban
            lifestyles, stress, poor sleep, medications, pregnancy-related
            changes, and food environments (sweet tea, refined carbs, large
            portions, frequent weddings/dawats). It isn&apos;t simply
            &quot;willpower.&quot; Hormones like <strong>insulin</strong> and{" "}
            <strong>GLP-1</strong> influence hunger/fullness, and chronic stress
            raises cortisol, pushing the body to store fat.
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
          supervision: they&apos;re not for everyone (e.g., certain endocrine
          conditions, pregnancy/breastfeeding). Never combine{" "}
          <strong>Ozempic and Rybelsus</strong>; they&apos;re the{" "}
          <strong>same molecule</strong> via different routes. If supplies vary
          by city, discuss <strong>alternatives and bridging plans</strong> with
          your clinician.
        </p>
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
  {
    id: "glp1-treatments",
    title: "GLP-1 Based Treatments",
    content: (
      <div className="space-y-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          Learn how modern medical advancements — including GLP-1–based
          therapies — are transforming the way obesity and type 2 diabetes are
          understood and treated at a biological level.
        </p>

        {/* How GLP-1 Works in the Body */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            How GLP-1 Works in the Body
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">The Gut</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Slows digestion and signals fullness earlier, helping you feel
                satisfied with smaller portions.
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">The Brain</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Reduces cravings and "food noise" by regulating appetite signals
                between the gut and the brain.
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">The Blood</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Enhances insulin release and stabilizes blood sugar levels after
                meals.
              </p>
            </div>
          </div>
        </div>

        {/* Clinical Citations */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Clinical Citations
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Cardiovascular Safety:</strong> Proven to reduce major
              adverse cardiovascular events (MACE) in adults with Type 2
              Diabetes.{" "}
              <a
                href="https://www.nejm.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                See NEJM Study
              </a>
            </li>
            <li>
              <strong>Weight Management Efficacy:</strong> Clinical trials
              demonstrate up to 15-22.5% body weight reduction in chronic weight
              management.{" "}
              <a
                href="https://www.thelancet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                See The Lancet
              </a>
            </li>
            <li>
              <strong>Global Standards:</strong> Our information aligns with the
              latest ADA/EASD Consensus Reports on the management of
              hyperglycemia.{" "}
              <a
                href="https://diabetes.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View ADA Standards
              </a>
            </li>
          </ul>
        </div>

        {/* The "Diabesity" Crisis in Numbers */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            The "Diabesity" Crisis in Numbers
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-3 pr-4 font-bold text-gray-900">
                    Metric
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">
                    Pakistan Statistic (2025/2026)
                  </th>
                  <th className="text-left py-3 pl-4 font-bold text-gray-900">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Diabetes Prevalence
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    ~31.4% of the adult population
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    International Diabetes Federation (IDF)
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Total Adult Cases
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Over 34 million people
                  </td>
                  <td className="py-3 pl-4 text-gray-700">IDF / DRAP Reports</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Obesity in Women
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    ~57% are overweight or obese
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    WHO / BF Biosciences Data
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Global Rank
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    3rd highest number of diabetes cases
                  </td>
                  <td className="py-3 pl-4 text-gray-700">WHO / PSX Filings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How Modern GLP-1 Therapies Compare */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            How Modern GLP-1 Therapies Compare
          </h3>
          <p className="text-gray-700 mb-4">
            Oral / Injectable Diabetes Therapies – GLP-1 & Insulin
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-3 pr-4 font-bold text-gray-900">
                    Feature
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">
                    Oral Diabetes Medications
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">
                    GLP-1 / GIP Therapies
                  </th>
                  <th className="text-left py-3 pl-4 font-bold text-gray-900">
                    Insulin
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Primary action
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Improve insulin sensitivity or increase insulin release to
                    lower blood sugar
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Regulate appetite & insulin
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    Direct glucose control
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Weight impact
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Neutral or mild weight gain (varies by medication)
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Significant weight reduction
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    Neutral or weight gain
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Hunger control
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Minimal – does not directly suppress appetite
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Strong appetite suppression
                  </td>
                  <td className="py-3 pl-4 text-gray-700">None</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">Dosing</td>
                  <td className="py-3 px-4 text-gray-700">
                    Daily tablets (once or multiple times per day)
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Weekly or daily injections
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    Daily or multiple daily
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Treatment focus
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Blood sugar control rather than appetite or weight
                  </td>
                  <td className="py-3 px-4 text-gray-700">Underlying biology</td>
                  <td className="py-3 pl-4 text-gray-700">
                    Blood sugar replacement
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Best for
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Early-stage type 2 diabetes or combination therapy
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Diabetes with weight issues
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    Advanced or insulin deficiency
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Availability in Pakistan
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Widely available and commonly prescribed
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Increasingly available
                  </td>
                  <td className="py-3 pl-4 text-gray-700">Widely available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Safety Disclaimer */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Safety Disclaimer
          </h3>
          <p className="text-gray-700 leading-relaxed">
            This information is for educational purposes only and does not
            replace medical advice. Treatment decisions should always be made in
            consultation with a qualified healthcare professional.
          </p>
        </div>

        {/* Supporting GLP-1 Results with Lifestyle */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Supporting GLP-1 Results with Lifestyle
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                High Protein Intake
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Adequate protein helps preserve muscle mass during weight loss
                and supports sustained energy levels throughout the day.
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                Resistance Training
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Strength exercises help maintain and build muscle, improving
                metabolism and long-term weight management outcomes.
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                Muscle Preservation
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Combining protein intake with regular activity helps prevent
                muscle loss that can occur during rapid weight reduction.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function GlpClient() {
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
                GLP-1 & Diabesity
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                Understand the connection between diabetes and obesity, and
                discover how modern GLP-1 based therapies are transforming
                treatment options for better health outcomes.
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
                alt="GLP-1 and Diabesity"
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
            {glpSections.map((section) => (
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
          {glpContent.map((section) => (
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
