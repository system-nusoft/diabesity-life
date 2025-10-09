import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Diabesity Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Diabesity</h4>
            <p className="text-gray-400 mb-2">Islamabad</p>
            <p className="text-gray-400">Pakistan</p>

            <h4 className="text-white font-semibold mt-8 mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Phone */}
          <div>
            <h4 className="text-white font-semibold mb-4">Phone</h4>
            <p className="text-gray-400 mb-2">-92 000 000000</p>
            <p className="text-gray-400">-92 000 000000</p>

            <h4 className="text-white font-semibold mt-8 mb-4">Email</h4>
            <a href="mailto:abc@diabesity.com" className="text-primary hover:text-primary/80 transition-colors">
              abc@diabesity.com
            </a>
          </div>

          {/* Main Menu */}
          <div>
            <h4 className="text-white font-semibold mb-4">Main Menu</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent border-b border-gray-600 px-2 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="text-primary hover:text-primary/80 transition-colors font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © <span className="text-primary">Diabesity</span> 2025. All Rights Reserved
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of use
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
