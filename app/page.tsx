"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070')"}}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Living with diabesity in Pakistan
            </h1>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded text-lg font-medium transition-colors">
              Discover
            </button>
          </div>
          {/* Slider Navigation */}
          <div className="absolute bottom-8 right-8 flex items-center gap-4">
            <span className="text-white text-sm">Recent news</span>
            <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 max-w-7xl mx-auto">
        {/* Left Dark Side */}
        <div className="bg-[#2a2a2a] text-white px-8 md:px-16 py-16 md:py-24">
          <h2 className="text-[#ff9d5c] text-4xl md:text-5xl font-bold mb-8">Mission</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            We believe every person in Pakistan deserves a life free of diabesity, and we are here to be your compassionate partner in making that a reality. We provide access to reliable information from healthcare experts, explaining complex topics in simple English and Urdu, while fostering hope through the real stories of Pakistanis who have transformed their health. To support you at home, we offer a library of practical resources like meal plans and exercise routines designed for your family and lifestyle.
          </p>
        </div>

        {/* Right White Side */}
        <div className="bg-white px-8 md:px-16 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A reality we can face together
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            In Pakistan, the combination of diabetes and obesity—"diabesity"—has become one of our most urgent health challenges. With <strong>1 in 4 adults</strong> projected to face obesity by <strong>2035</strong> and diabetes already affecting <strong>26.7%</strong> of our population, the numbers are serious. Our modern lives, from the convenience of fast food to more sedentary habits, have fueled this rise.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="text-gray-700">
              • Childhood obesity rates have <strong>quadrupled</strong> since 1990, highlighting the need for family-wide changes
            </li>
            <li className="text-gray-700">
              • The good news is that <strong>change is possible</strong>. Simple adjustments, like a daily 30-minute walk or preparing traditional meals with less oil, can reduce your risk by over 30%.
            </li>
            <li className="text-gray-700">
              • With breakthroughs in treatments like GLP-1 agonists and tailored management strategies, you have more tools than ever to fight back.
            </li>
          </ul>
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
            Learn more
          </button>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">News</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Latest insights on diabesity
              </h2>
            </div>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full font-medium transition-colors hidden md:block">
              More news
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Education",
                title: "What is driving Pakistan's alarming diabetes surge?",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
                color: "bg-cyan-400"
              },
              {
                category: "Education",
                title: "PM launches prevention program as over 33 million Pakistanis found to have diabetes",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
                color: "bg-pink-400"
              },
              {
                category: "Education",
                title: "Pakistan Has the World's Highest Diabetes Prevalence—and Lacks Focus on Prevention",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
                color: "bg-cyan-400"
              },
              {
                category: "Education",
                title: "Pakistan has 33m diabetics, 27pc still undiagnosed: PM coordinator",
                image: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?q=80&w=2071",
                color: "bg-yellow-400"
              }
            ].map((article, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="relative h-48 bg-gray-200">
                  <div className={`absolute top-4 left-4 ${article.color} text-white px-3 py-1 text-xs font-semibold rounded`}>
                    {article.category}
                  </div>
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg leading-tight">
                    {article.title}
                  </h3>
                  <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2 rounded-full font-medium transition-colors text-sm">
                    Learn more
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Knowledge is your most powerful tool for managing diabesity
            </h2>
            <p className="text-white/90 mb-4">Understanding your condition is the first step to controlling it. Learning empowers you to:</p>
            <ul className="space-y-2 mb-8">
              <li>• Understand how food, exercise, and medication truly impact your body</li>
              <li>• Prevent or delay the serious long-term complications that cause fear and worry</li>
              <li>• Replace uncertainty with the confidence to manage your health every day</li>
              <li>• Protect your family by becoming a knowledgeable health advocate for them</li>
            </ul>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-medium transition-colors">
              Start your learning path
            </button>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We help you succeed
            </h2>
            <p className="text-gray-600 text-lg">
              From finding a specialist to creating healthy meals, here's everything you need to take control
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1582560469781-1965b9af903d?q=80&w=2070" alt="Find health providers" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/90 to-yellow-500/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">Find health providers</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070" alt="Understand diabesity" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/90 to-orange-500/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">Understand diabesity</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053" alt="Eat smart and healthy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/90 to-blue-500/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">Eat smart and healthy</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070" alt="Get personalized diet plans" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/90 to-green-500/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">Get personalized diet plans</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070" alt="Daily care and monitoring" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/90 to-purple-500/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">Daily care and monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="relative h-[300px] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070')"}}>
        <div className="absolute inset-0 bg-gray-400/60"></div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Be the change against diabesity
          </h2>
          <button className="w-32 h-32 rounded-full border-4 border-[#ff9d5c] flex items-center justify-center text-white hover:bg-[#ff9d5c] transition-colors font-semibold">
            Donate
          </button>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The answers to all your questions
            </h2>
            <p className="text-gray-600 text-lg">
              Expert-verified answers from our team of healthcare professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { question: "Is diabetes a death sentence?", color: "bg-pink-200" },
              { question: "Why did this happen to me?", color: "bg-yellow-200" },
              { question: "Are you at risk?", color: "bg-cyan-200" },
              { question: "My blood sugar numbers confuse me.", color: "bg-teal-200" },
              { question: "Daily habits that protect you", color: "bg-cyan-300" },
              { question: "I'm at a restaurant — what should I order?", color: "bg-blue-200" },
              { question: "I've just been diagnosed — what does this mean?", color: "bg-yellow-200" },
              { question: "My doctor mentioned a GLP-1 — what is that?", color: "bg-pink-200" }
            ].map((item, idx) => (
              <button
                key={idx}
                className={`${item.color} hover:opacity-80 transition-opacity px-6 py-4 rounded-lg text-left font-semibold text-gray-900`}
              >
                {item.question}
              </button>
            ))}
          </div>

          <div className="text-center">
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
              Explore more
            </button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Find the support you need
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=2086",
                category: "Blog",
                title: "How Semaglutide Changes Lives",
                date: "12 May"
              },
              {
                image: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=2128",
                category: "Blog",
                title: "Getting Rid of Obesity: The Real Challenge",
                date: "12 May"
              },
              {
                image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2074",
                category: "Blog",
                title: "Diabetes is a silent epidemic sweeping Pakistan",
                date: "12 May"
              }
            ].map((article, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-56 bg-gray-200">
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-semibold rounded">
                    {article.date}
                  </div>
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-2">{article.category}</p>
                  <h3 className="font-bold text-gray-900 text-xl mb-4">
                    {article.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
              Explore more
            </button>
          </div>
        </div>
      </section>

      {/* Contact Specialist Section */}
      <section className="bg-[#2a2a2a] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h2 className="text-[#ff9d5c] text-4xl md:text-5xl font-bold mb-2">
              Get in touch
            </h2>
            <h2 className="text-[#ff9d5c] text-4xl md:text-5xl font-bold">
              with a specialist
            </h2>
          </div>
          <button className="w-32 h-32 rounded-full border-4 border-[#ff9d5c] flex items-center justify-center text-white hover:bg-[#ff9d5c] transition-colors font-semibold">
            Contact
          </button>
        </div>
      </section>
    </div>
  );
}
