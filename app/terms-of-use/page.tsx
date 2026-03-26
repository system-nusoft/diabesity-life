"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsOfUsePage() {
  const { t } = useLanguage();

  const conductItems = [0, 1, 2, 3, 4, 5].map((i) => t(`termsOfUse.s4li${i}`));

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t("termsOfUse.hero")}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("termsOfUse.s1Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("termsOfUse.s1Body")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("termsOfUse.s2Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("termsOfUse.s2Body1")}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t("termsOfUse.s2Body2")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("termsOfUse.s3Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("termsOfUse.s3Body1")}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t("termsOfUse.s3Body2")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("termsOfUse.s4Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("termsOfUse.s4Intro")}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {conductItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("termsOfUse.s5Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("termsOfUse.s5Body")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("termsOfUse.s6Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("termsOfUse.s6Body")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("termsOfUse.s7Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("termsOfUse.s7Body")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("termsOfUse.s8Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("termsOfUse.s8Body")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("termsOfUse.s9Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("termsOfUse.s9Body")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("termsOfUse.s10Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("termsOfUse.s10Body")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
