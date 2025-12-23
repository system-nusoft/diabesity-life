"use client";

import Image from "next/image";
import Link from "next/link";
import DiabetesUk from "../public/diabetes-uk-logo.svg";

const resources = [
  {
    title: "What is diabetes? video (Urdu)",
    urduTitle: "ذیابیطس کیا ہے؟ (ویڈیو) ",
    href: "https://www.youtube.com/watch?v=CyVTZC1Gz6w&feature=youtu.be",
    type: "video",
  },
  {
    title: "What is type 1 diabetes? video (Urdu)",
    urduTitle: "ٹائپ 1 ذیابیطس کیا ہے؟ (ویڈیو) ",
    href: "https://www.youtube.com/watch?v=D1NR3RxLqBw&feature=youtu.be",
    type: "video",
  },
  {
    title: "What is type 2 diabetes? video (Urdu)",
    urduTitle: "ٹائپ 2 ذیابیطس کیا ہے؟ (ویڈیو) ",
    href: "https://www.youtube.com/watch?v=oVDRg4h62ro&feature=youtu.be",
    type: "video",
  },
  {
    title: "What is type 2 diabetes remission? video (Urdu)",
    urduTitle: "ٹائپ 2 ذیابیطس کی معافی کیا ہے؟ (ویڈیو) ",
    href: "https://www.youtube.com/watch?v=ADTN1IQn9JQ&feature=youtu.be",
    type: "video",
  },
  {
    title: "Newly diagnosed with diabetes (Urdu)",
    urduTitle: "ذیابیطس کی پہلی مرتبہ تشخیص آگے کیا ہے؟",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/Newly_diagnosed_with_diabetes_Urdu.pdf?_gl=1*xy86p4*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzMTU3JGo2MCRsMCRoMA..",
    type: "pdf",
    size: "2.5MB",
  },
  {
    title: "Ramadan and diabetes (Urdu)",
    urduTitle: "رمضان اور ذیابیطس ",
    href: "https://www.diabetes.org.uk/sites/default/files/2017-09/Ramadan%20Factsheet_to%20send%20-%20Urdu.pdf",
    type: "pdf",
    size: "91KB",
  },
  {
    title: "Sick Day Rules (Urdu)",
    urduTitle: "بیماری کے دن کے اصول ",
    href: "https://www.diabetes.org.uk/sites/default/files/2020-07/Sick%20day%20rules%20URDU.pdf",
    type: "pdf",
    size: "249KB",
  },
  {
    title: "Diabetes and looking after your feet (Urdu)",
    urduTitle: "ذیابیطس اور اپنے پاؤں کی دیکھ بھال ",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/2023_Foot_Leaflet_-_Urdu.pdf?_gl=1*14nvea6*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzMjA2JGoxMSRsMCRoMA..",
    type: "pdf",
    size: "839KB",
  },
  {
    title: "Diabetes symptoms video (Urdu)",
    urduTitle: "ذیابیطس کی علامات (ویڈیو) ",
    description: "click the subtitles button to change the language",
    urduDescription: "زبان تبدیل کرنے کے لیے سب ٹائٹلز بٹن پر کلک کریں",
    href: "https://www.youtube.com/watch?v=bIhy-Rb2xp4&t=4s",
    type: "video",
  },
  {
    title: "Exercise videos (Urdu)",
    urduTitle: "ورزش کی (ویڈیوز) ",
    description: "click the subtitles button to change the language",
    urduDescription: "زبان تبدیل کرنے کے لیے سب ٹائٹلز بٹن پر کلک کریں",
    href: "https://www.youtube.com/watch?v=MK4nyI70WcY&list=PLQDlTVSOXD9G7lcLj3KJC2SH5WAT_bPmO",
    type: "video",
  },
  {
    title: "How to measure your waist video (Urdu)",
    urduTitle: "کمر کی پیمائش کیسے کریں (ویڈیو) ",
    description: "click the subtitles button to change the language",
    urduDescription: "زبان تبدیل کرنے کے لیے سب ٹائٹلز بٹن پر کلک کریں",
    href: "https://www.youtube.com/watch?v=e4cUSNq_OY8",
    type: "video",
  },
  {
    title: "How to test your blood sugars video (Urdu)",
    urduTitle: "بلڈ شوگر کی جانچ کیسے کریں (ویڈیو) ",
    description: "click the subtitles button to change the language",
    urduDescription: "زبان تبدیل کرنے کے لیے سب ٹائٹلز بٹن پر کلک کریں",
    href: "https://www.youtube.com/watch?v=e4cUSNq_OY8",
    type: "video",
  },
  {
    title: "Five Ways to Move More exercise posters (Urdu)",
    urduTitle: "مزید حرکت کے پانچ طریقے/ ورزش کے پوسٹرز ",
    href: "/urdu-guides/five-ways-to-move-more",
    type: "page",
  },
  {
    title: "Enjoy Food booklet for a South Asian diet",
    urduTitle: "جنوبی ایشیائی کھانے سے لطف اندوز ہوں (کتابچہ)",
    href: "/urdu-guides/enjoy-food",
    type: "page",
  },
];

export default function UrduGuidesClient() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="bg-white py-16 md:py-20 border-b-6 border-[#DB3B00]"
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            ذیابیطس اردو میں معلومات
          </h1>
          <div className="flex flex-col gap-4 mt-6">
            <Image src={DiabetesUk} alt="diabetes-uk" />
            <p className="text-gray-700 italic text-sm">
              (This content is provided by Diabetes UK and is used with their
              permission. For more information,{" "}
              <a
                href="https://www.diabetes.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                click here)
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Resources List Section */}
      <section className="bg-gray-50 py-12 md:py-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="space-y-4">
            {resources.map((resource, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary ml-3 mt-1.5 text-xl">
                  &#8226;
                </span>
                <div className="text-right">
                  <div>
                    <Link
                      href={resource.href}
                      target={resource.type !== "page" ? "_blank" : undefined}
                      className="text-primary hover:text-primary/80 font-medium text-xl md:text-2xl"
                    >
                      {resource.urduTitle}
                    </Link>
                    {/* <span className="text-gray-700 mr-2 text-lg md:text-xl">
                      / {resource.title}
                    </span> */}
                  </div>
                  {resource.type === "pdf" && resource.size && (
                    <div className="text-gray-600 text-md mt-1">
                      (PDF, {resource.size})
                    </div>
                  )}
                  {resource.urduDescription && (
                    <div className="text-gray-600 text-md mt-1">
                      ({resource.urduDescription})
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
