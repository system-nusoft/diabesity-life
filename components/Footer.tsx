import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Contact Specialist Section */}
      <section className="py-16 md:py-16">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h2 className="text-[#ff9d5c] text-4xl md:text-5xl font-medium mb-2">
              Get in touch
            </h2>
            <h2 className="text-[#ff9d5c] text-4xl md:text-5xl font-medium">
              with a specialist
            </h2>
          </div>
          <button className="w-36 h-16 border-2 border-[#ff9d5c] flex items-center justify-center text-white hover:bg-[#ff9d5c] transition-colors font-semibold">
            Contact
          </button>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">
          {/* Diabesity Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Diabesity</h4>
            <p className="text-gray-400 mb-2">Islamabad, Pakistan</p>
          </div>

          {/* Phone */}
          <div>
            <h4 className="text-white font-semibold mb-4">Phone</h4>
            <p className="text-gray-400 mb-2">+92 000 000000</p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-white font-semibold mb-4">Email</h4>
            <a
              href="mailto:abc@diabesity.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              abc@diabesity.com
            </a>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © <span className="text-primary">Diabesity</span> 2025. All Rights
            Reserved
          </p>
          <div className="flex space-x-6">
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of use
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
