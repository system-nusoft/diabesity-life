"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BlogArticle } from "@/lib/blogContent";
import { NewsArticle } from "@/lib/newsContent";
import { Category, getCategoryGradient } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import DailyCare from "../public/daily-care.jpg";
import EatHealthy from "../public/eat-healthy-1.jpeg";
import HealthProviders from "../public/find-health-providers.jpg";
import Hero1 from "../public/hero-section-1.webp";
import Hero2 from "../public/hero-section-2.webp";

const heroSlides = [
  {
    image: Hero1.src,
    heading: "Living with diabesity in Pakistan",
    ctaText: "Discover",
    ctaUrl: "/discover",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    image: Hero2.src,
    heading: "Take control of your health today",
    ctaText: "Get Started",
    ctaUrl: "/get-started",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const faqs = [
  {
    question: "I’m at a restaurant — what should I order?",
    answer:
      "Eating out doesn’t have to mean giving up control. In Pakistan, menus are full of tempting carb-heavy dishes, but you can make smart swaps. Choose grilled or baked meats over fried. Ask for roti made from whole wheat instead of naan, and skip the extra oil. Load your plate with salad or sautéed vegetables before touching the rice or bread. If you’re at a dhaba, go for daal with a side of mixed sabzi instead of biryani. And remember — portion size matters. Share a dish with a friend or ask for half to be packed. You’ll leave satisfied, not stuffed, and your blood sugar will thank you.",
    category: "Diet" as Category,
  },
  {
    question: "My doctor mentioned a GLP-1 — what is that?",
    answer:
      "GLP-1 receptor agonists are a newer type of diabetes medicine that work with your body’s natural hormones. They help your pancreas release insulin when needed, slow down digestion so you feel fuller, and can even help with weight loss — which is important since obesity and diabetes often go hand in hand in Pakistan. They usually come as weekly or daily injections, but the needles are tiny and easy to use. They’re not for everyone, and they can be costly, so discuss with your doctor whether they fit your treatment plan. For many, GLP-1s are a game-changer in controlling blood sugar and reducing heart risks.",
    category: "Health" as Category,
  },
  {
    question: "I’ve just been diagnosed — what does this mean?",
    answer:
      "Hearing “You have diabetes” can feel like a punch to the gut. But here’s the truth: diabetes is not the end of your story — it’s a new chapter. In simple terms, your body is struggling to manage sugar (glucose) in your blood, either because it’s not making enough insulin or not using it well. Left unchecked, high sugar can harm your heart, eyes, kidneys, and nerves. But with the right habits, medication, and mindset, you can live a long, healthy life. Many Pakistanis manage their diabetes while running businesses, raising families, and enjoying life — and so can you. The key is to learn, act, and stay consistent.",
    category: "Education" as Category,
  },
  {
    question: "I crave sweets all the time.",
    answer:
      "Sweet cravings are real — and in a culture where mithai, chai, and desserts are part of every celebration, resisting them can feel impossible. Instead of banning sweets completely (which can backfire), learn to manage them. Choose smaller portions — one gulab jamun instead of three. Swap sugary drinks for unsweetened lassi or lemon water. Keep fruit like guava or apple handy for when cravings hit. And remember, cravings often fade after 10–15 minutes — distract yourself with a short walk or a phone call. Over time, your taste buds will adjust, and you’ll find you need less sugar to feel satisfied.",
    category: "Diet" as Category,
  },
  {
    question: "I keep forgetting my medication.",
    answer:
      "Missing doses can quietly undo your progress. In our busy Pakistani routines — juggling work, family, and social commitments — it’s easy to forget. The trick is to link your medication to something you already do daily: after brushing your teeth, before your morning chai, or right after dinner. Use your phone’s alarm, a pillbox with daily compartments, or even a sticky note on the fridge. If you travel often, keep a spare strip in your bag or car. Remember, diabetes medicines work best when taken consistently — skipping “just one day” can cause sugar spikes and long-term harm. Make it part of your routine, not an afterthought.",
    category: "Health" as Category,
  },
  {
    question: "Why did this happen to me?",
    answer:
      "It’s natural to ask “Why me?” Diabetes can be influenced by many factors — family history, weight, diet, stress, and even certain illnesses. In Pakistan, high-carb diets, low physical activity, and rising obesity rates have made type 2 diabetes more common. This isn’t about blame — it’s about awareness. Knowing your risk factors helps you take control. Even if genetics played a role, lifestyle changes can slow or even reverse early damage. Instead of focusing on “why,” focus on “what now” — the steps you can take today to protect your future.",
    category: "Education" as Category,
  },
  {
    question: "I don’t know what I can eat anymore.",
    answer:
      "It can feel like your entire menu has been taken away — but in reality, you still have plenty of delicious options. Think of your plate in three parts: Half vegetables — sabzi, salad, or lightly cooked greens. One-quarter lean protein — chicken, fish, daal, or eggs. One-quarter whole grains or healthy carbs — whole-wheat roti, brown rice, or small portions of boiled potatoes. Avoid sugary drinks like cola or packaged juices; choose water, unsweetened lassi, or green tea instead. In Pakistan, small swaps — like grilled kebab instead of fried samosa, or roti instead of naan — can make a big difference. You’re not giving up flavour; you’re choosing foods that keep your sugar steady and your energy high.",
    category: "Diet" as Category,
  },
  {
    question: "Are GLP-1s safe for me?",
    answer:
      "GLP-1 medicines are generally safe for many people with type 2 diabetes, but they’re not for everyone. They can cause side effects like nausea, stomach upset, or constipation — usually mild and temporary. People with certain thyroid or pancreas conditions may need to avoid them. In Pakistan, where access and cost can be challenges, it’s important to have an honest discussion with your doctor about your health history, budget, and goals. If prescribed, start slowly, follow instructions carefully, and report any unusual symptoms. Safety isn’t just about the medicine — it’s about the right medicine for the right person.",
    category: "Health" as Category,
  },
];

const services = [
  {
    title: "Find health providers",
    image: HealthProviders.src,
    gradient: "from-yellow-500/100 to-yellow-500/0",
    linkText: "Find a specialist",
    linkUrl:
      "https://docs.google.com/spreadsheets/d/1Fa2fmWnn4mJt9LvZVIydERUsX_wN359P/edit?gid=1254477902#gid=1254477902",
    linkTarget: "_blank",
  },
  {
    title: "Understand diabesity",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
    gradient: "from-orange-500/100 to-orange-500/0",
    linkText: "Learn more",
    linkUrl: "/blogs/what-is-diabesity-and-why-does-it-matter",
    linkTarget: "",
  },
  {
    title: "Eat smart and healthy",
    image: EatHealthy.src,
    gradient: "from-blue-500/100 to-blue-500/0",
    linkText: "Get recipes",
    linkUrl: "#",
    linkTarget: "",
  },
  {
    title: "Get custom diet plans",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070",
    gradient: "from-green-500/100 to-green-500/0",
    linkText: "Find a dietician",
    linkUrl:
      "https://docs.google.com/spreadsheets/d/1Fa2fmWnn4mJt9LvZVIydERUsX_wN359P/edit?gid=1254477902#gid=1254477902",
    linkTarget: "_blank",
  },
  {
    title: "Daily care and monitoring",
    image: DailyCare.src,
    gradient: "from-purple-500/100 to-purple-500/0",
    linkText: "View guides",
    linkUrl: "#",
    linkTarget: "",
  },
];

interface HomeClientProps {
  blogs: BlogArticle[];
  news: NewsArticle[];
}

export default function Home({ blogs, news }: HomeClientProps) {
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

  //   const nextSlide = () => {
  //     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  //   };

  //   const prevSlide = () => {
  //     setCurrentSlide(
  //       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
  //     );
  //   };

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
      const maxIndex = news.length - cardsPerView;
      if (prev >= maxIndex) return 0; // Loop back to start
      return prev + 1;
    });
  };

  const prevNewsSlide = () => {
    setNewsCurrentIndex((prev) => {
      const maxIndex = news.length - cardsPerView;
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
                    <Button variant="primary">{slide.ctaText}</Button>
                  </Link>
                  <Button
                    variant="blurry"
                    onClick={() => openVideoModal(slide.videoUrl)}
                  >
                    <Play className="w-5 h-5" />
                    Watch Video
                  </Button>
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
              obesity—&quot;diabesity&quot;—has become one of our most urgent
              health challenges. With <strong>1 in 4 adults</strong> projected
              to face obesity by <strong>2035</strong> and diabetes already
              affecting <strong>26.7%</strong> of our population, the numbers
              are serious. Our modern lives, from the convenience of fast food
              to more sedentary habits, have fueled this rise.
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
              <Button variant="outlined">More news</Button>
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
                {news.map((article, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                  >
                    <Link href={`/news/${article.slug}`}>
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
                          <Button
                            variant="outlined"
                            size="sm"
                            className="w-fit"
                          >
                            Read more
                          </Button>
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
              From finding a specialist to creating healthy meals, here&apos;s
              everything you need to take control
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-80 overflow-hidden group cursor-pointer border"
              >
                <Link
                  href={service.linkUrl}
                  target={service.linkTarget}
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
                    <p className="font-semibold text-xl mb-8">
                      {service.title}
                    </p>
                    <p className="font-semibold text-lg flex items-center underline">
                      {service.linkText}{" "}
                      <span className="ml-1">
                        <ChevronRight size={18} />
                      </span>
                    </p>
                  </div>
                </Link>
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
          <Link href="/faqs" className="flex justify-center mt-12">
            <Button variant="outlined">Read more</Button>
          </Link>
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
              <Button variant="outlined">Find out more</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-lg transition-shadow py-0 rounded-none cursor-pointer"
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <div className="relative h-56 bg-gray-200">
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-semibold">
                      {new Date(blog.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                      })}
                    </div>
                    <img
                      src={blog.image}
                      alt={blog.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-gray-600 text-sm mb-2">Blog</p>
                    <h3 className="font-bold text-gray-900 text-xl mb-4">
                      {blog.title}
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
