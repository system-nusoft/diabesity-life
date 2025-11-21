"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import HealthcareProfessionalModal from "./HealthcareProfessionalModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Diabesity" className="h-[50px] w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {/* <div className="relative group">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1 text-base">
                Home
              </Link>
            </div> */}
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors text-base"
            >
              About
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-primary transition-colors text-base"
            >
              Resources
            </Link>
            <Link
              href="/faqs"
              className="text-gray-700 hover:text-primary transition-colors text-base"
            >
              FAQs
            </Link>
            <Link
              href="/doctors"
              className="text-gray-700 hover:text-primary transition-colors text-base"
            >
              Contact a specialist
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* <button className="text-gray-700 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button> */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              For healthcare professionals
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 flex flex-col space-y-4 border-t border-gray-200 pt-4">
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/resources"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/faqs"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="bg-primary text-white px-6 py-2.5 rounded hover:bg-primary/90 transition-colors text-center"
            >
              For Healthcare Professionals
            </button>
          </nav>
        )}
      </div>

      {/* Healthcare Professional Modal */}
      <HealthcareProfessionalModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </header>
  );
}
