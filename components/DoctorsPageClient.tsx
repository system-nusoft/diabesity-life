"use client";

import {
  cityTranslations,
  specializationTranslations,
  doctors,
  getUniqueCities,
  getUniqueSpecializations,
  type Doctor,
} from "@/lib/doctorsData";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, ExternalLink, FileText, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "./ui/button";

export default function DoctorsPageClient() {
  const { t, locale } = useLanguage();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("");
  const [visibleCount, setVisibleCount] = useState(10);

  const cities = useMemo(() => getUniqueCities(), []);
  const specializations = useMemo(() => getUniqueSpecializations(), []);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const platformMatch =
        !selectedPlatform ||
        doctor.bookingPlatforms.some((p) => p.platform === selectedPlatform);
      const cityMatch =
        !selectedCity ||
        doctor.city.toLowerCase().includes(selectedCity.toLowerCase());
      const specializationMatch =
        !selectedSpecialization ||
        doctor.specialization.toLowerCase() ===
          selectedSpecialization.toLowerCase();

      return platformMatch && cityMatch && specializationMatch;
    });
  }, [selectedPlatform, selectedCity, selectedSpecialization]);

  const visibleDoctors = useMemo(() => {
    return filteredDoctors.slice(0, visibleCount);
  }, [filteredDoctors, visibleCount]);

  const hasMore = filteredDoctors.length > visibleCount;

  const handleReset = () => {
    setSelectedPlatform("");
    setSelectedCity("");
    setSelectedSpecialization("");
    setVisibleCount(10);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const resetVisibleCount = () => {
    setVisibleCount(10);
  };

  const docWord =
    filteredDoctors.length === 1 ? t("doctors.doctor") : t("doctors.doctors");
  const countText =
    locale === "ur"
      ? `${filteredDoctors.length} ${t("doctors.of")} ${visibleDoctors.length} ${docWord} ${t("doctors.showing")}`
      : `${t("doctors.showing")} ${visibleDoctors.length} ${t("doctors.of")} ${filteredDoctors.length} ${docWord}`;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20 px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("doctors.heading")}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            {t("doctors.description")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t("doctors.cityLabel")}
              </label>
              <CustomSelect
                value={selectedCity}
                onChange={(value) => {
                  setSelectedCity(value);
                  resetVisibleCount();
                }}
                placeholder={t("doctors.allCities")}
                options={[
                  { value: "", label: t("doctors.allCities") },
                  ...cities.map((c) => ({
                    value: c,
                    label: locale === "ur" ? (cityTranslations[c] ?? c) : c,
                  })),
                ]}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t("doctors.specializationLabel")}
              </label>
              <CustomSelect
                value={selectedSpecialization}
                onChange={(value) => {
                  setSelectedSpecialization(value);
                  resetVisibleCount();
                }}
                placeholder={t("doctors.allSpecializations")}
                options={[
                  { value: "", label: t("doctors.allSpecializations") },
                  ...specializations.map((s) => ({
                    value: s,
                    label: locale === "ur" ? (specializationTranslations[s] ?? s) : s,
                  })),
                ]}
              />
            </div>
          </div>

          {/* Reset Button */}
          {(selectedPlatform || selectedCity || selectedSpecialization) && (
            <button
              onClick={handleReset}
              className="text-sm text-primary hover:underline mb-6"
            >
              {t("doctors.clearFilters")}
            </button>
          )}

          {/* Results Count */}
          <div className="text-sm text-gray-600 mb-6">{countText}</div>

          {/* Doctors List */}
          <div className="space-y-4">
            {filteredDoctors.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {t("doctors.noDoctorsFound")}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {t("doctors.tryAdjusting")}
                </p>
              </div>
            ) : (
              visibleDoctors.map((doctor, index) => (
                <DoctorCard key={`${doctor.name}-${index}`} doctor={doctor} />
              ))
            )}
          </div>

          {/* Show More Button */}
          {hasMore && (
            <div className="flex justify-center mt-8">
              <Button onClick={handleShowMore} variant="outlined">
                {t("doctors.showMore")}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function CustomSelect({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-full items-center justify-between border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
        <span className={value ? "text-gray-900" : "text-gray-500"}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left rtl:text-right px-3 py-2 text-sm hover:bg-gray-100 ${
                  value === option.value
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-900"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const { t, locale } = useLanguage();
  const displayName = locale === "ur" ? doctor.nameUr : doctor.name;
  const displayCity =
    locale === "ur" ? (cityTranslations[doctor.city] ?? doctor.city) : doctor.city;
  const displaySpecialization =
    locale === "ur"
      ? (specializationTranslations[doctor.specialization] ?? doctor.specialization)
      : doctor.specialization;
  return (
    <div className="border border-gray-200 p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900">{displayName}</h3>
          <p className="text-gray-600 text-sm font-medium">
            {displaySpecialization}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-primary text-white">
              {displayCity}
            </span>
            {doctor.bookingPlatforms.map((platformInfo, index) => {
              if (platformInfo.link) {
                return (
                  <a
                    key={index}
                    href={platformInfo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {platformInfo.platform}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href={`tel:${doctor.contactNumber}`}
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors"
            dir="ltr"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">{doctor.contactNumber}</span>
          </a>
          {doctor.pmdcNumber && (
            <div className="inline-flex items-center gap-2 text-sm text-gray-600" dir="ltr">
              <FileText className="w-4 h-4" />
              <span>{t("doctors.pmdc")}: {doctor.pmdcNumber}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
