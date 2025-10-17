"use client";

import {
  bookingPlatforms,
  doctors,
  getUniqueCities,
  getUniqueSpecializations,
  type Doctor,
} from "@/lib/doctorsData";
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
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("");

  const cities = useMemo(() => getUniqueCities(), []);
  const specializations = useMemo(() => getUniqueSpecializations(), []);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const platformMatch =
        !selectedPlatform || doctor.bookingPlatform === selectedPlatform;
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
                Contact a Specialist
              </h2>
              <p className="text-gray-600 mt-1 text-sm md:text-base">
                Find and contact qualified doctors based on your preferences.
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
                Booking Platform
              </label>
              <CustomSelect
                value={selectedPlatform}
                onChange={setSelectedPlatform}
                placeholder="All Platforms"
                options={[
                  { value: "", label: "All Platforms" },
                  ...bookingPlatforms.map((p) => ({ value: p, label: p })),
                ]}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">City</label>
              <CustomSelect
                value={selectedCity}
                onChange={setSelectedCity}
                placeholder="All Cities"
                options={[
                  { value: "", label: "All Cities" },
                  ...cities.map((c) => ({ value: c, label: c })),
                ]}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Specialization
              </label>
              <CustomSelect
                value={selectedSpecialization}
                onChange={setSelectedSpecialization}
                placeholder="All Specializations"
                options={[
                  { value: "", label: "All Specializations" },
                  ...specializations.map((s) => ({ value: s, label: s })),
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
              Clear all filters
            </button>
          )}

          {/* Results Count */}
          <div className="text-sm text-gray-600 mt-6 mb-4">
            Showing {filteredDoctors.length}{" "}
            {filteredDoctors.length === 1 ? "doctor" : "doctors"}
          </div>

          {/* Doctors List */}
          <div className="space-y-4">
            {filteredDoctors.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No doctors found matching your criteria.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Try adjusting your filters.
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
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
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
  return (
    <div className="border border-gray-200 p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900">{doctor.name}</h3>
          <p className="text-gray-600 text-sm font-medium">
            {doctor.specialization}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-primary text-white">
              {doctor.city}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium border border-primary text-primary">
              {doctor.bookingPlatform}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href={`tel:${doctor.contactNumber}`}
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">{doctor.contactNumber}</span>
          </a>
          {doctor.pmdcNumber && (
            <div className="inline-flex items-center gap-2 text-sm text-gray-600">
              <FileText className="w-4 h-4" />
              <span>PMDC: {doctor.pmdcNumber}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
