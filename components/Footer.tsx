import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Contact Specialist Section */}
      <section className="pt-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 flex justify-between flex-col md:flex-row gap-8">
          <div>
            <h2 className="text-secondary text-3xl md:text-4xl font-medium mb-2">
              Get in touch
            </h2>
          </div>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button variant="secondary">Contact</Button>
            </Link>
            <Link
              href="http://www.dap.org.pk/Donations.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gray">
                Donate
                <ExternalLinkIcon className="ml-1 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6 lg:px-0 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-4">
          {/* Diabesity Info */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Diabesity</h4>
            <p className="text-gray-400 mb-2">Islamabad, Pakistan</p>
          </div> */}

          {/* Phone */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Phone</h4>
            <p className="text-gray-400 mb-2">+92 000 000000</p>
          </div> */}

          {/* Email */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Email</h4>
            <a
              href="mailto:abc@diabesity.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              abc@diabesity.com
            </a>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © <span className="text-primary">Diabesity</span> {new Date().getFullYear()}. All Rights
            Reserved
          </p>
          {/* Socials */}
          <div>
            <div className="flex space-x-4 mb-4 lg:mb-0">
              <a
                href="https://www.facebook.com/diabesitylifepk"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/diabesitylifepk"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/diabesitylifepk"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@diabesitylifepk"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/terms-of-use"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of use
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
