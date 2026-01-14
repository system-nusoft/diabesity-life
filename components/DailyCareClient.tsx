"use client";

import { Category, getCategoryGradient } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const careItems = [
  {
    title: "How to use the apparatus",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-3">GLP-1 Pen (Injectable)</h3>
          <p className="text-gray-700 mb-3">
            A GLP-1 pen is an injectable tool that supports sugar control and
            appetite regulation. It is usually used once a week or once a day
            depending on your doctor&apos;s plan.
          </p>

          <h4 className="font-bold mb-2">What you need:</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Pen</li>
            <li>New sterile needle</li>
            <li>Alcohol swab</li>
            <li>Sharps container (or thick bottle with screw lid)</li>
            <li>Cool pouch during hot weather</li>
          </ul>

          <h4 className="font-bold mb-2">How to use (simple steps):</h4>
          <ol className="list-decimal pl-6 mb-4 space-y-1">
            <li>
              Check the pen label, expiry date, and that the liquid looks clear
            </li>
            <li>Attach a new needle</li>
            <li>If the instructions mention &quot;priming&quot;, do it once</li>
            <li>Choose an area on your abdomen, thigh, or upper arm.</li>
            <li>Inject under the skin</li>
            <li>Rotate spots each time to avoid lumps</li>
            <li>Throw the used needle into a sharp container right away</li>
          </ol>

          <h4 className="font-bold mb-2">Storage basics:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Keep unopened pens in the fridge (not frozen)</li>
            <li>
              In-use pens can stay at room temperature (avoid heat and sunlight)
            </li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">Insulin (Pens or Vials)</h3>
          <p className="text-gray-700 mb-3">
            Insulin may be used daily or as needed.
          </p>

          <h4 className="font-bold mb-2">What you need:</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Insulin pen or vial</li>
            <li>New needle or syringe</li>
            <li>Alcohol swabs</li>
            <li>Glucometer & strips</li>
            <li>Sharps container</li>
            <li>Fast-acting sugar source (for low sugar episodes)</li>
          </ul>

          <h4 className="font-bold mb-2">How to use (simple steps):</h4>
          <ol className="list-decimal pl-6 mb-4 space-y-1">
            <li>
              Confirm which insulin you are using and when it should be taken
            </li>
            <li>Prime the pen if required</li>
            <li>Inject under the skin and rotate areas</li>
            <li>Check blood sugar as advised</li>
            <li>Note down readings and how you feel</li>
          </ol>

          <h4 className="font-bold mb-2">Storage basics:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Keep unopened insulin in the fridge (not frozen)</li>
            <li>
              In-use insulin can stay at room temperature for around 28 days
              (avoid sunlight)
            </li>
          </ul>
        </div>
      </div>
    ),
    category: "Services" as Category,
  },
  {
    title: "Daily monitoring",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Daily monitoring helps you stay safe and understand how your body
          responds to lifestyle changes and medication.
        </p>

        <div>
          <h4 className="font-bold mb-2">What to watch regularly:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>How you feel</strong> (energy, hunger, sleep)
            </li>
            <li>
              <strong>Any nausea, stomach discomfort, dizziness</strong>
            </li>
            <li>
              <strong>Hydration levels</strong> (especially with certain
              medicines)
            </li>
            <li>
              <strong>Signs of infection</strong> (especially around personal
              areas for some medicines)
            </li>
            <li>
              <strong>Injection site condition</strong> (redness or lumps)
            </li>
            <li>
              <strong>Low sugar signs</strong> if you use insulin (shaking,
              sweating, confusion)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">For people taking injectables:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Keep a small source of <strong>fast-acting sugar</strong> handy if
              using insulin
            </li>
            <li>
              Note any repeated vomiting or severe belly pain — speak to a
              doctor
            </li>
            <li>Stay hydrated, especially in summer</li>
            <li>
              If you feel unwell (fever, dehydration), contact your clinician
              before continuing certain medicines
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">
            Blood Sugar Monitoring (if you check at home):
          </h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              &lt;70 mg/dL is considered low — treat with fast-acting sugar and
              recheck in 15 minutes
            </li>
            <li>
              Very high numbers + feeling unwell require medical attention
            </li>
            <li>
              Patterns are more useful than single readings — track morning,
              before meals, or after meals based on your doctor&apos;s plan
            </li>
          </ul>
        </div>
      </div>
    ),
    category: "Services" as Category,
  },
  {
    title: "Types of medication (Injectables only — no oral medicines)",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-3">A. GLP-1 Injectable Pen</h3>

          <h4 className="font-bold mb-2">These help with:</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Appetite control</li>
            <li>Weight management</li>
            <li>Better sugar levels</li>
          </ul>

          <h4 className="font-bold mb-2">Common experiences:</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Reduced hunger</li>
            <li>Smaller meal portions</li>
            <li>Occasional nausea in the beginning</li>
            <li>Better control of cravings</li>
          </ul>

          <h4 className="font-bold mb-2">Important notes:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Do not use if you have certain rare thyroid conditions</li>
            <li>Not suitable during pregnancy or breastfeeding</li>
            <li>
              If you&apos;re also on insulin, your other doses may need
              adjustment
            </li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">B. Insulin (Pen or Vial)</h3>
          <p className="text-gray-700 mb-3">
            Insulin helps move sugar from your blood into your cells. It can be
            long-acting (background insulin), meal-time insulin, or a premixed
            version.
          </p>

          <h4 className="font-bold mb-2">What it helps with:</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>High blood sugar levels</li>
            <li>Stabilizing daily energy</li>
            <li>Reducing long-term health risks</li>
          </ul>

          <h4 className="font-bold mb-2">Important notes:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Learn how to recognize low sugar signs</li>
            <li>Always have a fast-acting sugar option nearby</li>
            <li>
              Illness, dehydration, or steroids can affect your insulin needs
            </li>
          </ul>
        </div>
      </div>
    ),
    category: "Services" as Category,
  },
  {
    title: "Treat section",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-3">
            Treatment Pathways — Simple Overview
          </h3>
          <p className="text-gray-700 mb-3">
            Treatment for diabetes or weight issues usually follows a
            step-by-step ladder:
          </p>
          <ol className="list-decimal pl-6 mb-3 space-y-1">
            <li>
              <strong>Lifestyle basics</strong>: meals, movement, sleep, stress
            </li>
            <li>
              <strong>Medication</strong>: based on your sugar levels, symptoms,
              and doctor&apos;s guidance
            </li>
            <li>
              <strong>Injectables</strong>: such as GLP-1 pens or insulin when
              needed
            </li>
            <li>
              <strong>Advanced options</strong>: for people who need more
              support after trying lifestyle and medications
            </li>
          </ol>
          <p className="text-gray-700">
            Your doctor will guide you based on sugars, overall health, goals,
            and safety.
          </p>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">
            Integrating Medication with Daily Life
          </h3>
          <p className="text-gray-700 mb-3">
            Simple routines help you stay consistent:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Pair medication doses with regular habits (e.g., breakfast, after
              Maghrib)
            </li>
            <li>Use reminders on your phone</li>
            <li>Keep injectables in one secure, visible place</li>
            <li>
              Have a written plan: what you&apos;re taking, possible side
              effects, what to do if unwell
            </li>
            <li>
              Know when to increase water intake or pause certain medicines
              during sickness
            </li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">
            Surgery & Advanced Therapies (High-Level Only)
          </h3>
          <p className="text-gray-700 mb-3">
            Sometimes, people with severe weight issues or diabetes
            complications may consider surgical options.
          </p>

          <h4 className="font-bold mb-2">Before surgery:</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Nutrition and psychological assessment</li>
            <li>Medical review</li>
            <li>Understanding the benefits and risks</li>
          </ul>

          <h4 className="font-bold mb-2">After surgery:</h4>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Long-term support</li>
            <li>Vitamin and mineral checks</li>
            <li>More structured meal plans</li>
          </ul>

          <p className="text-gray-700">
            Surgery is not a shortcut — it&apos;s a medically guided decision.
          </p>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">Finding a doctor</h3>
          <p className="text-gray-700 mb-3">
            What to look for when seeking care:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Clear credentials</li>
            <li>Transparent fees</li>
            <li>A plan for follow-ups</li>
            <li>Someone who explains things in simple language</li>
            <li>Comfort with asking questions</li>
          </ul>
          <p className="text-gray-700">
            A good first visit sets the foundation for better health decisions.
          </p>
        </div>
      </div>
    ),
    category: "Services" as Category,
  },
  {
    title: "Blood glucose level monitoring",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold mb-2">Why monitor?</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand patterns</li>
            <li>Catch low or high sugar early</li>
            <li>Adjust your lifestyle more effectively</li>
            <li>Communicate better with your clinician</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">When to check</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Morning before eating (fasting)</li>
            <li>Before meals</li>
            <li>2 hours after meals</li>
            <li>At bedtime</li>
            <li>
              Any time you feel symptoms (shaking, dizziness, extreme thirst)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">How to check</h4>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Wash hands.</li>
            <li>Insert test strip into glucometer</li>
            <li>Use lancet on the side of your fingertip</li>
            <li>Place drop of blood on strip</li>
            <li>Wait for reading</li>
          </ol>
        </div>

        <div>
          <h4 className="font-bold mb-2">What to record</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Number (reading)</li>
            <li>Time of day</li>
            <li>What you ate</li>
            <li>Any symptoms</li>
            <li>Any medication taken</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Warning signs</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Low sugar</strong>: shaking, sweating, fast heartbeat,
              confusion → take fast-acting sugar immediately
            </li>
            <li>
              <strong>High sugar + symptoms</strong>: vomiting, extreme thirst,
              weakness → seek medical advice
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Tips</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Keep your glucometer charged</li>
            <li>Store strips properly (dry, sealed)</li>
            <li>Replace lancets regularly</li>
            <li>Discuss patterns with your clinician</li>
          </ul>
        </div>
      </div>
    ),
    category: "Services" as Category,
  },
];

export default function DailyCareClient() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Daily care and monitoring
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            Taking care of your health every day is the foundation of managing
            diabetes effectively. Learn how to use your medication, monitor your
            blood sugar, and understand treatment options to stay in control.
          </p>
        </div>
      </section>

      {/* Accordions Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            {careItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => toggleItem(index)}
                  className={`${getCategoryGradient(
                    item.category
                  )} px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center hover:opacity-90 group`}
                >
                  <span className="group-hover:text-white">{item.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 text-gray-900 ${
                      openItemIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItemIndex === index ? "max-h-[125rem] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="bg-white px-6 py-4 border text-gray-700 leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
