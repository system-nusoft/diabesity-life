"use client";

import {
  bookingPlatforms,
  cityTranslations,
  specializationTranslations,
  doctors,
  getUniqueCities,
  getUniqueSpecializations,
  type Doctor,
} from "@/lib/doctorsData";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, FileText, Phone, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface DoctorBookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DoctorBookingModal({
  open,
  onOpenChange,
}: DoctorBookingModalProps) {
  const { t, locale } = useLanguage();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("");

  const cities = useMemo(() => getUniqueCities(), []);
  const specializations = useMemo(() => getUniqueSpecializations(), []);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const platformMatch =
        !selectedPlatform || doctor.bookingPlatforms[0].platform === selectedPlatform;
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

  const handleReset = () => {
    setSelectedPlatform("");
    setSelectedCity("");
    setSelectedSpecialization("");
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  const docWord =
    filteredDoctors.length === 1 ? t("doctors.doctor") : t("doctors.doctors");
  const countText =
    locale === "ur"
      ? `${filteredDoctors.length} ${docWord} ${t("doctors.showing")}`
      : `${t("doctors.showing")} ${filteredDoctors.length} ${docWord}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {t("doctors.modalHeading")}
              </h2>
              <p className="text-gray-600 mt-1 text-sm md:text-base">
                {t("doctors.modalDescription")}
              </p>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t("doctors.platformLabel")}
              </label>
              <CustomSelect
                value={selectedPlatform}
                onChange={setSelectedPlatform}
                placeholder={t("doctors.allPlatforms")}
                options={[
                  { value: "", label: t("doctors.allPlatforms") },
                  ...bookingPlatforms.map((p) => ({ value: p, label: p })),
                ]}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t("doctors.cityLabel")}
              </label>
              <CustomSelect
                value={selectedCity}
                onChange={setSelectedCity}
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
                onChange={setSelectedSpecialization}
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
              className="text-sm text-primary hover:underline mt-4"
            >
              {t("doctors.clearFilters")}
            </button>
          )}

          {/* Results Count */}
          <div className="text-sm text-gray-600 mt-6 mb-4">{countText}</div>

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
              filteredDoctors.map((doctor, index) => (
                <DoctorCard key={`${doctor.name}-${index}`} doctor={doctor} />
              ))
            )}
          </div>
        </div>
      </div>
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
  return (
    <div className="border border-gray-200 p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900">{displayName}</h3>
          <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium border border-primary text-primary">
            {doctor.bookingPlatforms[0].platform}
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-primary text-white">
              {displayCity}
            </span>
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
