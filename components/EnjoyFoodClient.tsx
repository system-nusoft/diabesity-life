"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DiabetesUk from "../public/diabetes-uk-logo.svg";
import Image1 from "../public/enjoy-food-image-1.webp";
import Image2 from "../public/enjoy-food-image-2.webp";

const images = [
  {
    id: 1,
    src: Image1.src,
    alt: "Enjoy Food booklet cover",
  },
  {
    id: 2,
    src: Image2.src,
    alt: "Enjoy Food booklet page 1",
  },
];

const downloads = [
  {
    title: "Enjoy Food - African Caribbean",
    urduTitle: "کھانے سے لطف اندوز ہوں - افریقی کیریبین",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/African_Caribbean_Guide_low_res_X_update.pdf?v=1707237840&_gl=1*k5w4h5*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNTkzJGoyOCRsMCRoMA..",
  },
  {
    title: "Enjoy Food - South Asian",
    urduTitle: "کھانے سے لطف اندوز ہوں - جنوبی ایشیائی",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/Asian_food_Guide_low_res_X_update.pdf?v=1707237842&_gl=1*1j4kmzr*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNTk2JGoyNSRsMCRoMA..",
  },
];

export default function EnjoyFoodClient() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"details" | "downloads">(
    "details"
  );
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Lightbox Modal */}
      {showLightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-xl font-bold z-10"
          >
            بند کریں ✕
          </button>
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      {/* Breadcrumb */}
      {/* <section className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/urdu-guides" className="text-primary hover:underline">
              Urdu Guides
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-600">Enjoy Food Guides</span>
          </nav>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="bg-white py-12 md:py-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Right - Image Gallery */}
            <div>
              {/* Main Image */}
              <div
                className="bg-gray-100 border mb-4 aspect-[3/4] flex items-center justify-center cursor-zoom-in"
                onClick={() => setShowLightbox(true)}
              >
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `<div class="text-gray-400 text-center p-8">Image placeholder<br/><span class="text-sm">${images[selectedImage].alt}</span></div>`;
                  }}
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-20 bg-gray-100 border-2 overflow-hidden ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Left - Content */}
            <div className="text-right">
              {/* Credits */}
              <div className="flex flex-col gap-2 mb-4">
                <Image src={DiabetesUk} alt="diabetes-uk" className="w-32" />
                <p className="text-gray-700 italic text-sm">
                  (Content sourced from{" "}
                  <a
                    href="https://www.diabetes.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Diabetes UK
                  </a>
                  )
                </p>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                کھانے سے لطف اندوز ہوں گائیڈز (صرف ڈاؤن لوڈ)
              </h1>

              {/* Price Badge */}
              <div className="inline-block border border-gray-300 px-4 py-2 my-4">
                <span className="text-gray-700 font-medium">مفت</span>
              </div>

              {/* Tabs */}
              <div className="flex">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`px-6 py-2 font-medium ${
                    activeTab === "details"
                      ? "bg-[#DB3B00] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  تفصیلات
                </button>
                <button
                  onClick={() => setActiveTab("downloads")}
                  className={`px-6 py-2 font-medium ${
                    activeTab === "downloads"
                      ? "bg-[#DB3B00] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  ڈاؤن لوڈز
                </button>
              </div>

              {/* Content Box */}
              <div className="border border-gray-200 p-6">
                {activeTab === "details" ? (
                  <div className="space-y-4 text-gray-700">
                    <p>
                      ہمیں افسوس ہے لیکن افریقی کیریبین اور جنوبی ایشیائی گائیڈز
                      ختم ہو گئے ہیں۔ یہ صرف ڈاؤن لوڈ کے لیے دستیاب ہیں، اوپر
                      ڈاؤن لوڈ ٹیب پر کلک کریں۔
                    </p>
                    <p>
                      آپ جو کھاتے ہیں اس سے لطف اندوز ہونا زندگی کی خوشیوں میں
                      سے ایک ہے۔ لیکن اگر آپ، یا آپ کے خاندان میں کوئی، ذیابیطس
                      کا شکار ہے تو آپ جانتے ہیں کہ یہ بعض اوقات مشکل ہو سکتا
                      ہے۔
                    </p>
                    <p>
                      ہم نے کھانے سے لطف اندوز ہوں گائیڈز کو اکٹھا کیا ہے تاکہ
                      ذیابیطس سے متاثر ہر شخص کو کھانا پکانے اور صحت مند غذا سے
                      لطف اندوز ہونے میں مدد ملے۔
                    </p>
                    <p>
                      آپ اوپر ڈاؤن لوڈ ٹیب کا استعمال کرتے ہوئے یہ کاپیاں مفت
                      میں ڈاؤن لوڈ کر سکتے ہیں۔
                    </p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li>کھانے سے لطف اندوز ہوں - افریقی کیریبین غذا</li>
                      <li>
                        کھانے سے لطف اندوز ہوں - جنوبی ایشیائی غذا، بنگالی، اردو
                        اور گجراتی میں متن پینلز کے ساتھ انگریزی میں معلومات
                        شامل ہے
                      </li>
                      <li>
                        انگریزی میں ہماری اچھی طرح کھانے کی گائیڈ آرڈر یا ڈاؤن
                        لوڈ کرنے کے لیے یا صرف ویلش میں ڈاؤن لوڈ کرنے کے لیے{" "}
                        <Link
                          href="https://shop.diabetes.org.uk/products/eating-well-with-diabetes"
                          target="_blank"
                          className="text-primary underline"
                        >
                          یہاں
                        </Link>{" "}
                        کلک کریں۔
                      </li>
                    </ul>
                    <p>
                      مزید الہام اور شروع کرنے کے لیے،{" "}
                      <Link
                        href="https://www.diabetes.org.uk/living-with-diabetes/eating?_gl=1%2Az1frqd%2A_gcl_au%2AOTgwNzUxNTQyLjE3NjAwODE1NzQ.%2A_ga%2AMTc1MTU4ODEwNy4xNzYwMDgxNTc1%2A_ga_J1HFNSGEX6%2AczE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNjA5JGoxMiRsMCRoMA.."
                        target="_blank"
                        className="text-primary underline"
                        dir="ltr"
                      >
                        www.diabetes.org.uk/enjoyfood
                      </Link>{" "}
                      پر جائیں۔
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {downloads.map((download, index) => (
                      <Link
                        key={index}
                        href={download.href}
                        target="_blank"
                        className="block text-primary hover:text-primary/80 text-lg"
                      >
                        {download.urduTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Share */}
              {/* <div className="mt-6 flex items-center gap-4">
                <span className="text-gray-600 text-sm">Share:</span>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
