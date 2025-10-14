"use client";

import { Home, Lightbulb, Settings, Trees } from "lucide-react";

const missionCards = [
  {
    icon: Lightbulb,
    title: "Clear knowledge without confusion",
    description:
      "We break down complex topics like managing blood sugar to understanding medications into simple, actionable guides in both Urdu and English. We believe everyone has the right to understand their own health.",
    color: "text-orange-500",
  },
  {
    icon: Settings,
    title: "Tools That Fit Your Life",
    description:
      "We create diet plans that celebrate Pakistani cuisine by providing expert advice that understands your reality, from Lahore to the most remote village. These are resources designed to work with you.",
    color: "text-yellow-500",
  },
  {
    icon: Home,
    title: "A Community That Understands",
    description:
      "You are not alone on this journey. We share real stories from Pakistanis just like you to fight stigma, build a national network of support, and prove that change is possible together.",
    color: "text-blue-500",
  },
  {
    icon: Trees,
    title: "A Healthier Future for Generations",
    description:
      "Our ultimate goal is to turn the tide on this epidemic. By empowering individuals and families today, we are working to ensure that future generations of Pakistanis can live longer, stronger, and healthier lives.",
    color: "text-green-500",
  },
];

export default function AboutClient() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="grid grid-cols-2 max-w-7xl mx-auto gap-8 md:gap-24 py-16 md:py-20 px-6">
        {/* Introduction Section */}
        <div className="flex col-span-2 md:col-span-1 justify-center items-center">
          <div>
            <p className="text-lg mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
              Health is your fundamental right
            </h1>
            <p className="text-lg md:text-xl mt-6 max-w-3xl leading-relaxed">
              We are a coalition of doctors, nutritionists, patients, and
              families who believe every Pakistani deserves the knowledge and
              tools to live a life free from the grip of diabesity. This is our
              promise to you and to Pakistan.
            </p>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex col-span-2 md:col-span-1 items-center justify-center">
          <img
            className="relative overflow-hidden bg-cover bg-center"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
          />
          {/* <div className="absolute inset-0 bg-gray-500/60"></div> */}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1 h-full">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070"
                alt="Hands together representing unity"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 py-4">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  This devastating link between diabetes and obesity, is not a
                  statistic. It's our parents, our siblings, our friends.
                </p>
                <p>
                  We saw a nation grappling with the world's highest rate of
                  diabetes, yet facing a wall of misinformation, stigma, and
                  resources that didn't fit our culture or our lives. The advice
                  was generic, the meal plans were foreign, and the conversation
                  was happening in whispers, if at all.
                </p>
                <p>
                  We knew we couldn't stand by while this silent epidemic stole
                  the health and futures of millions.
                </p>
                <p>
                  So, we built the solution we needed.{" "}
                  <strong>
                    Diabesity Pakistan is your clear path forward.
                  </strong>{" "}
                  It was founded to bridge the gaps, to replace confusion with
                  clarity, and to empower you with guidance tailored for the
                  realities of life in Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission in Action Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
              Our Impact & Vision
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
              Our Mission in Action
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {missionCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 border hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <card.icon className={`w-12 h-12 ${card.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
