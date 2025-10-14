"use client";

import { Card } from "@/components/ui/card";
import { Post } from "@/lib/wordpress";
import { ChevronDown, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070",
    heading: "Living with diabesity in Pakistan",
    ctaText: "Discover",
    ctaUrl: "/discover",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    heading: "Take control of your health today",
    ctaText: "Get Started",
    ctaUrl: "/get-started",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2074",
    heading: "Expert guidance for your journey",
    ctaText: "Find Specialists",
    ctaUrl: "/find-specialist",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const newsArticles = [
  {
    category: "Education",
    title: "What is driving Pakistan's alarming diabetes surge?",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    color: "bg-orange-500",
    slug: "pakistan-diabetes-surge",
  },
  {
    category: "Health",
    title:
      "PM launches prevention program as over 33 million Pakistanis found to have diabetes",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
    color: "bg-yellow-500",
    slug: "pm-launches-prevention-program",
  },
  {
    category: "Diet",
    title:
      "Pakistan Has the World's Highest Diabetes Prevalence—and Lacks Focus on Prevention",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
    color: "bg-green-500",
  },
  {
    category: "Recipes",
    title: "Pakistan has 33m diabetics, 27pc still undiagnosed: PM coordinator",
    image:
      "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?q=80&w=2071",
    color: "bg-blue-500",
  },
  {
    category: "Education",
    title: "New study reveals lifestyle changes can reverse prediabetes",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
    color: "bg-orange-500",
  },
  {
    category: "Health",
    title: "Breakthrough in diabetes medication shows promising results",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2074",
    color: "bg-yellow-500",
  },
  {
    category: "Diet",
    title: "Traditional Pakistani foods that help manage blood sugar",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053",
    color: "bg-green-500",
  },
  {
    category: "Recipes",
    title: "Support groups helping thousands cope with diabesity",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070",
    color: "bg-blue-500",
  },
];

const faqs = [
  {
    question: "Is diabetes a death sentence?",
    answer:
      "No, diabetes is not a death sentence. With proper management, including medication, diet, exercise, and regular monitoring, people with diabetes can live long, healthy, and fulfilling lives. The key is early detection and consistent care.",
    gradient: "bg-yellow-500",
  },
  {
    question: "Why did this happen to me?",
    answer:
      "Diabesity can develop due to a combination of genetic factors, lifestyle choices, diet, and environmental factors. It's not your fault—it's a complex condition that affects millions. What matters now is taking positive steps forward to manage your health.",
    gradient: "bg-orange-500",
  },
  {
    question: "Are you at risk?",
    answer:
      "Risk factors include family history of diabetes, being overweight, physical inactivity, age over 45, high blood pressure, and certain ethnic backgrounds. If you have multiple risk factors, it's important to get screened and take preventive measures.",
    gradient: "bg-blue-500",
  },
  {
    question: "My blood sugar numbers confuse me.",
    answer:
      "Normal fasting blood sugar is below 100 mg/dL. Prediabetes is 100-125 mg/dL, and diabetes is 126 mg/dL or higher. Your doctor can help you understand your specific targets and what your numbers mean for your health journey.",
    gradient: "bg-green-500",
  },
  {
    question: "Daily habits that protect you",
    answer:
      "Key protective habits include: eating a balanced diet rich in vegetables and whole grains, exercising for 30 minutes daily, maintaining a healthy weight, managing stress, getting adequate sleep, staying hydrated, and monitoring your blood sugar regularly.",
    gradient: "bg-green-500",
  },
  {
    question: "I'm at a restaurant — what should I order?",
    answer:
      "Choose grilled or baked proteins instead of fried, opt for vegetables or salad as sides, avoid sugary drinks and desserts, control portion sizes, and ask for dressings and sauces on the side. Don't hesitate to ask how food is prepared.",
    gradient: "bg-blue-500",
  },
  {
    question: "I've just been diagnosed — what does this mean?",
    answer:
      "A diagnosis means it's time to take action, but you're not alone. Work with your healthcare team to create a management plan, learn about your condition, make lifestyle adjustments, and connect with support groups. Many people successfully manage diabesity.",
    gradient: "bg-orange-500",
  },
  {
    question: "My doctor mentioned a GLP-1 — what is that?",
    answer:
      "GLP-1 agonists are medications that help control blood sugar by mimicking a hormone that stimulates insulin release, slows digestion, and reduces appetite. They've shown promising results for both diabetes management and weight loss. Discuss with your doctor if they're right for you.",
    gradient: "bg-yellow-500",
  },
];

const services = [
  {
    title: "Find health providers",
    image:
      "https://images.unsplash.com/photo-1582560469781-1965b9af903d?q=80&w=2070",
    gradient: "from-yellow-500/100 to-yellow-500/0",
    linkText: "Find a specialist",
    linkUrl: "/find-specialist",
  },
  {
    title: "Understand diabesity",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
    gradient: "from-orange-500/100 to-orange-500/0",
    linkText: "Learn more",
    linkUrl: "/learn-more",
  },
  {
    title: "Eat smart and healthy",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053",
    gradient: "from-blue-500/100 to-blue-500/0",
    linkText: "Get recipes",
    linkUrl: "/recipes",
  },
  {
    title: "Get custom diet plans",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070",
    gradient: "from-green-500/100 to-green-500/0",
    linkText: "See diet plans",
    linkUrl: "/diet-plans",
  },
  {
    title: "Daily care and monitoring",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070",
    gradient: "from-purple-500/100 to-purple-500/0",
    linkText: "View guides",
    linkUrl: "/devices",
  },
];

interface HomeClientProps {
  posts: Post[];
}

export default function Home({ posts }: HomeClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [newsCurrentIndex, setNewsCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(4);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideoUrl("");
  };

  const nextNewsSlide = () => {
    setNewsCurrentIndex((prev) => {
      const maxIndex = newsArticles.length - cardsPerView;
      if (prev >= maxIndex) return 0; // Loop back to start
      return prev + 1;
    });
  };

  const prevNewsSlide = () => {
    setNewsCurrentIndex((prev) => {
      const maxIndex = newsArticles.length - cardsPerView;
      if (prev <= 0) return maxIndex; // Loop to end
      return prev - 1;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextNewsSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevNewsSlide();
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[550px] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {slide.heading}
                </h1>
                <div className="flex gap-4">
                  <Link href={slide.ctaUrl}>
                    <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-sm md:text-lg font-medium transition-colors">
                      {slide.ctaText}
                    </button>
                  </Link>
                  <button
                    onClick={() => openVideoModal(slide.videoUrl)}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 text-sm md:text-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button> */}

        {/* Right Arrow */}
        {/* <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button> */}

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
            >
              Close ✕
            </button>
            <iframe
              src={currentVideoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Mission Section */}
      <section className="relative overflow-hidden">
        {/* Background halves */}
        <div className="absolute inset-0 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
          <div className="bg-[#2a2a2a]" />
          <div className="bg-white" />
        </div>

        {/* Foreground content */}
        <div className="relative max-w-7xl mx-auto grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
          {/* Left Dark Side */}
          <div className="text-white px-8 md:px-16 py-16 md:py-24">
            <h2 className="text-[#ff9d5c] text-3xl md:text-4xl font-medium mb-8">
              Mission
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              We believe every person in Pakistan deserves a life free of
              diabesity, and we are here to be your compassionate partner in
              making that a reality. We provide access to reliable information
              from healthcare experts, explaining complex topics in simple
              English and Urdu, while fostering hope through the real stories of
              Pakistanis who have transformed their health. To support you at
              home, we offer a library of practical resources like meal plans
              and exercise routines designed for your family and lifestyle.
            </p>
          </div>

          {/* Right White Side */}
          <div className="px-8 md:px-16 py-16 md:py-24 text-gray-900">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              A reality we can face together
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              In Pakistan, the combination of diabetes and
              obesity—"diabesity"—has become one of our most urgent health
              challenges. With <strong>1 in 4 adults</strong> projected to face
              obesity by <strong>2035</strong> and diabetes already affecting{" "}
              <strong>26.7%</strong> of our population, the numbers are serious.
              Our modern lives, from the convenience of fast food to more
              sedentary habits, have fueled this rise.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-50 py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
                News
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
                Latest insights on diabesity
              </h2>
            </div>
            <Link href="/news">
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-medium transition-colors h-fit">
                More news
              </button>
            </Link>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    (newsCurrentIndex * 100) / cardsPerView
                  }%)`,
                }}
              >
                {newsArticles.map((article, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                  >
                    <Link href={article.slug ? `/news/${article.slug}` : "#"}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white py-0 pb-6 rounded-none h-full cursor-pointer">
                        <div className="relative bg-gray-200">
                          <div
                            className={`absolute top-0 left-0 ${article.color} text-white px-3 py-1 text-xs font-semibold`}
                          >
                            {article.category}
                          </div>
                        </div>
                        <div className="p-4 flex flex-col justify-between h-full gap-4">
                          <h3 className="font-medium text-gray-900 mb-4 text-lg leading-snug line-clamp-3 min-h-[4.5rem]">
                            {article.title}
                          </h3>
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover mb-4"
                          />
                          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 font-medium transition-colors w-fit">
                            Learn more
                          </button>
                        </div>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevNewsSlide}
              className="hidden md:flex absolute left-[-10] top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full items-center justify-center text-gray-600 hover:border-primary hover:text-primary hover:bg-white transition-colors z-10 "
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextNewsSlide}
              className="hidden md:flex absolute right-[-10] top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full items-center justify-center text-gray-600 hover:border-primary hover:text-primary hover:bg-white transition-colors z-10 "
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevNewsSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextNewsSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section>
        {/* CTAs Section */}
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-4 px-6">
          {/* Left Section */}
          <section
            className="relative h-auto bg-cover bg-center w-auto md:w-[50%] shadow-sm hover:shadow-lg transition-shadow border"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative h-full max-w-7xl mx-auto px-6 py-10 flex items-center">
              <div className="text-white max-w-2xl flex flex-col gap-6 justify-center">
                <h2 className="text-2xl md:text-3xl font-medium">
                  Knowledge is your most powerful tool for managing diabesity
                </h2>
                <button className="border-2 border-[#fcaf58] text-white hover:bg-[#fcaf58] hover:text-white px-8 py-3 font-medium transition-colors w-fit">
                  Start your learning path
                </button>
              </div>
            </div>
          </section>
          {/* Right Section */}
          <section
            className="relative py-10 bg-cover bg-center w-auto md:w-[50%] shadow-sm hover:shadow-lg transition-shadow border"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative flex flex-col h-full max-w-7xl mx-auto px-6 gap-6 justify-center">
              <h2 className="text-white text-2xl md:text-3xl font-medium">
                Be the change against diabesity
              </h2>
              <div className="flex flex-col gap-2">
                <Link
                  href="http://www.dap.org.pk/Donations.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-2 border-[#fcaf58] text-white hover:bg-[#fcaf58] hover:text-white px-8 py-3 font-medium transition-colors w-fit">
                    Donate*
                  </button>
                </Link>
                <small className="text-white italic">
                  *This button will take you to an external link
                </small>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
              SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              We help you succeed
            </h2>
            <p className="text-gray-600 text-lg">
              From finding a specialist to creating healthy meals, here's
              everything you need to take control
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-80 overflow-hidden group cursor-pointer border"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`}
                ></div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-4 left-3 text-white px-1">
                  <p className="font-semibold text-xl mb-8">{service.title}</p>
                  <a href={service.linkUrl} className="underline">
                    <p className="font-semibold text-lg flex items-center">
                      {service.linkText}{" "}
                      <span className="ml-1">
                        <ChevronRight size={18} />
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              The answers to all your questions
            </h2>
            <p className="text-gray-600 text-lg">
              Expert-verified answers from our team of healthcare professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Left Column - First 4 FAQs */}
            <div className="flex flex-col gap-4">
              {faqs.slice(0, 4).map((faq, idx) => (
                <div key={idx} className="flex flex-col">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className={`${faq.gradient} px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center transition-all hover:opacity-90`}
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

            {/* Right Column - Last 4 FAQs */}
            <div className="flex flex-col gap-4">
              {faqs.slice(4, 8).map((faq, idx) => (
                <div key={idx + 4} className="flex flex-col">
                  <button
                    onClick={() => toggleFaq(idx + 4)}
                    className={`${faq.gradient} px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center transition-all hover:opacity-90`}
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

          <div className="text-center">
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-medium transition-colors">
              Explore more
            </button>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
            <div className="text-left">
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
                BLOGS
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 text-left">
                Find the support you need
              </h2>
            </div>
            <Link href="/blogs">
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-medium transition-colors h-fit">
                Explore more
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-lg transition-shadow py-0 rounded-none cursor-pointer"
              >
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-56 bg-gray-200">
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-semibold">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                      })}
                    </div>
                    <img
                      src={post.featuredImage?.node.sourceUrl || ""}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-gray-600 text-sm mb-2">Blog</p>
                    <h3 className="font-bold text-gray-900 text-xl mb-4">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12"></div>
        </div>
      </section>
    </div>
  );
}
