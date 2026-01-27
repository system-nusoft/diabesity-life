"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const hubSections = [
  {
    id: "what-is-glp1",
    title: "What is GLP-1?",
  },
  {
    id: "diabesity-link",
    title: "The Link: Why GLP-1 Addresses \"Diabesity\"",
  },
  {
    id: "appetite-regulation",
    title: "Appetite Regulation: Silencing the \"Food Noise\"",
  },
  {
    id: "insulin-signaling",
    title: "Insulin Signaling: Precision Glucose Control",
  },
  {
    id: "beta-cell-protection",
    title: "Beta-Cell Protection",
  },
];

const hubContent = [
  {
    id: "what-is-glp1",
    title: "What is GLP-1?",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>Glucagon-like peptide-1 (GLP-1)</strong> is a naturally
          occurring metabolic hormone produced in the &quot;L-cells&quot; of
          your small intestine. Think of it as your body&apos;s{" "}
          <strong>&quot;Fullness Messenger.&quot;</strong>
        </p>

        <p className="text-gray-700 leading-relaxed">
          In a healthy system, GLP-1 is released within minutes of eating. It
          travels through the bloodstream to signal the brain and the pancreas
          that nutrients have arrived. However, natural GLP-1 is fragile; it is
          broken down by enzymes (DPP-4) in just 2 minutes.{" "}
          <strong>Modern GLP-1 therapies</strong> are engineered to be
          &quot;long-acting,&quot; staying in your system for a week to provide
          sustained metabolic control.
        </p>
      </div>
    ),
  },
  {
    id: "diabesity-link",
    title: "The Link: Why GLP-1 Addresses \"Diabesity\"",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          For decades, obesity and Type 2 Diabetes were treated as separate
          issues. We now know they are two sides of the same coin:{" "}
          <strong>Metabolic Dysfunction.</strong>
        </p>

        <p className="text-gray-700 leading-relaxed">
          GLP-1 is the &quot;bridge&quot; because it corrects the{" "}
          <strong>Incretin Effect</strong>.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem:</h3>
          <p className="text-gray-700 leading-relaxed">
            In people with &quot;Diabesity,&quot; the natural GLP-1 response is
            blunted. The body doesn&apos;t realize it&apos;s full, and the
            pancreas doesn&apos;t get the &quot;start&quot; signal for insulin.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Solution:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            By restoring GLP-1 levels, treatments simultaneously lower blood
            sugar (treating diabetes) and reduce caloric intake (treating
            obesity). When weight drops, insulin resistance improves, creating a{" "}
            <strong>&quot;virtuous cycle&quot;</strong> of health.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "appetite-regulation",
    title: "Appetite Regulation: Silencing the \"Food Noise\"",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          One of the most revolutionary aspects of GLP-1 therapy is its effect
          on the <strong>Hypothalamus</strong> (the brain&apos;s reward center).
        </p>

        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Satiety Signaling:</strong> It increases the feeling of
            satisfaction after small meals.
          </li>
          <li>
            <strong>The &quot;Food Noise&quot; Effect:</strong> Many patients
            describe a constant mental chatter about their next meal. GLP-1
            therapy helps quiet this &quot;noise,&quot; making it easier to
            stick to a healthy diet without relying solely on willpower.
          </li>
          <li>
            <strong>Slow Digestion:</strong> It physically slows down{" "}
            <strong>gastric emptying</strong>. Because food stays in the stomach
            longer, the physical sensation of fullness lasts for hours rather
            than minutes.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "insulin-signaling",
    title: "Insulin Signaling: Precision Glucose Control",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Unlike older diabetes medications that force the pancreas to pump out
          insulin constantly (which can cause dangerous &quot;crashes&quot;),
          GLP-1 is <strong>Glucose-Dependent</strong>.
        </p>

        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Smart Release:</strong> It tells the pancreas to release
            insulin <em>only</em> when your blood sugar is actually high. This
            significantly reduces the risk of hypoglycemia (low blood sugar).
          </li>
          <li>
            <strong>Glucagon Suppression:</strong> It stops the liver from
            pumping out unnecessary sugar into your blood.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "beta-cell-protection",
    title: "Beta-Cell Protection",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Emerging research suggests that GLP-1 may help protect and preserve
          the health of <strong>Beta-cells</strong> in the pancreas, potentially
          slowing the progression of diabetes over time.
        </p>
      </div>
    ),
  },
];

const actionCards = [
  {
    title: "Supporting GLP-1 naturally",
    description:
      "Learn how diet and lifestyle choices can support your body's natural GLP-1 production.",
    href: "/diet",
    linkText: "Explore Diet",
  },
  {
    title: "Restoring GLP-1 with treatment",
    description:
      "Understand the medical therapies available to restore and enhance GLP-1 signaling.",
    href: "/medication",
    linkText: "Explore Medication",
  },
  {
    title: "Measuring GLP-1 outcomes",
    description:
      "Track your progress with the right tools and understand what the numbers mean.",
    href: "#",
    linkText: "Explore Tools",
  },
];

export default function GlpHubClient() {
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
                The GLP-1 Hub
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                Understanding how GLP-1 connects appetite, blood sugar, and
                weight management. Discover the science behind this powerful
                hormone and how it can help address diabesity.
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2069"
                alt="GLP-1 Hub"
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
            {hubSections.map((section) => (
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
          {hubContent.map((section) => (
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

      {/* Action Cards Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6 lg:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Take Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionCards.map((card) => (
              <div
                key={card.title}
                className="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  {card.linkText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
