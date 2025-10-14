"use client";

import { Category, getCategoryGradient } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is diabetes a death sentence?",
    answer:
      "No, diabetes is not a death sentence. With proper management, including medication, diet, exercise, and regular monitoring, people with diabetes can live long, healthy, and fulfilling lives. The key is early detection and consistent care.",
    category: "Education" as Category,
  },
  {
    question: "Why did this happen to me?",
    answer:
      "Diabesity can develop due to a combination of genetic factors, lifestyle choices, diet, and environmental factors. It's not your fault—it's a complex condition that affects millions. What matters now is taking positive steps forward to manage your health.",
    category: "Diet" as Category,
  },
  {
    question: "Are you at risk?",
    answer:
      "Risk factors include family history of diabetes, being overweight, physical inactivity, age over 45, high blood pressure, and certain ethnic backgrounds. If you have multiple risk factors, it's important to get screened and take preventive measures.",
    category: "Health" as Category,
  },
  {
    question: "My blood sugar numbers confuse me.",
    answer:
      "Normal fasting blood sugar is below 100 mg/dL. Prediabetes is 100-125 mg/dL, and diabetes is 126 mg/dL or higher. Your doctor can help you understand your specific targets and what your numbers mean for your health journey.",
    category: "Recipes" as Category,
  },
  {
    question: "Daily habits that protect you",
    answer:
      "Key protective habits include: eating a balanced diet rich in vegetables and whole grains, exercising for 30 minutes daily, maintaining a healthy weight, managing stress, getting adequate sleep, staying hydrated, and monitoring your blood sugar regularly.",
    category: "Health" as Category,
  },
  {
    question: "I'm at a restaurant — what should I order?",
    answer:
      "Choose grilled or baked proteins instead of fried, opt for vegetables or salad as sides, avoid sugary drinks and desserts, control portion sizes, and ask for dressings and sauces on the side. Don't hesitate to ask how food is prepared.",
    category: "Diet" as Category,
  },
  {
    question: "I've just been diagnosed — what does this mean?",
    answer:
      "A diagnosis means it's time to take action, but you're not alone. Work with your healthcare team to create a management plan, learn about your condition, make lifestyle adjustments, and connect with support groups. Many people successfully manage diabesity.",
    category: "Education" as Category,
  },
  {
    question: "My doctor mentioned a GLP-1 — what is that?",
    answer:
      "GLP-1 agonists are medications that help control blood sugar by mimicking a hormone that stimulates insulin release, slows digestion, and reduces appetite. They've shown promising results for both diabetes management and weight loss. Discuss with your doctor if they're right for you.",
    category: "Education" as Category,
  },
];

export default function NewsClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <section className="grid grid-cols-2 max-w-7xl mx-auto gap-8 md:gap-24 py-16 md:py-20 px-6">
        {/* Introduction Section */}
        <div className="flex col-span-2 md:col-span-1 justify-center items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
              The answers to all your questions
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mb-2">
              Expert-verified answers from our team of healthcare professionals
            </p>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex col-span-2 md:col-span-1 items-center justify-center">
          <img
            className="relative overflow-hidden bg-cover bg-center"
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2100"
          />
          {/* <div className="absolute inset-0 bg-gray-500/60"></div> */}
        </div>
      </section>

      {/* Grid Wrapper */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
            FAQs
          </h2>

          {/* FAQs Section */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Left Column - First Half FAQs */}
            <div className="flex flex-col gap-4">
              {faqs.slice(0, faqs.length / 2).map((faq, idx) => (
                <div key={idx} className="flex flex-col">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className={`${getCategoryGradient(
                      faq.category
                    )} px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center transition-all hover:opacity-90`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === idx ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="bg-white px-6 py-4 border text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Last Half FAQs */}
            <div className="flex flex-col gap-4">
              {faqs.slice(faqs.length / 2, faqs.length).map((faq, idx) => (
                <div key={idx + 4} className="flex flex-col">
                  <button
                    onClick={() => toggleFaq(idx + 4)}
                    className={`${getCategoryGradient(
                      faq.category
                    )} px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center transition-all hover:opacity-90`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openFaqIndex === idx + 4 ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === idx + 4 ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="bg-white px-6 py-4 border text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
