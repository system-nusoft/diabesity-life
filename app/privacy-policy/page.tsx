"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t("privacyPolicy.hero")}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("privacyPolicy.s1Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacyPolicy.s1Body")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("privacyPolicy.s2Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacyPolicy.s2Body")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("privacyPolicy.s3Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacyPolicy.s3Body")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("privacyPolicy.s4Heading")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacyPolicy.s4Body")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
