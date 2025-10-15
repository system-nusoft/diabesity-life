"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

  const FORM_FIELDS = {
    fullName: "entry.XXXXXXXXX",
    email: "entry.XXXXXXXXX",
    subject: "entry.XXXXXXXXX",
    message: "entry.XXXXXXXXX",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);

    // Create URL-encoded form data for Google Forms
    const googleFormData = new URLSearchParams();
    googleFormData.append(
      FORM_FIELDS.fullName,
      formData.get("fullName") as string
    );
    googleFormData.append(FORM_FIELDS.email, formData.get("email") as string);
    googleFormData.append(
      FORM_FIELDS.subject,
      formData.get("subject") as string
    );
    googleFormData.append(
      FORM_FIELDS.message,
      formData.get("message") as string
    );

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: googleFormData.toString(),
      });

      setSubmitStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Contact us
          </h1>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                We're here to help
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-12">
                Have questions about diabetes prevention, obesity management, or
                treatments in Pakistan? Please reach out. Your journey to better health
                starts with a conversation.
              </p>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name*"
                    required
                    disabled={isSubmitting}
                    className="w-full px-0 py-3 border-b border-gray-300 focus:border-primary outline-none text-gray-900 placeholder-gray-400 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address*"
                    required
                    disabled={isSubmitting}
                    className="w-full px-0 py-3 border-b border-gray-300 focus:border-primary outline-none text-gray-900 placeholder-gray-400 disabled:opacity-50"
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    disabled={isSubmitting}
                    className="w-full px-0 py-3 border-b border-gray-300 focus:border-primary outline-none text-gray-900 placeholder-gray-400 disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-0 py-3 border-b border-gray-300 focus:border-primary outline-none text-gray-900 placeholder-gray-400 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="text-green-600 font-sm">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-600 font-sm">
                    Sorry, there was an error sending your message. Please try
                    again.
                  </div>
                )}

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    variant="outlined"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
