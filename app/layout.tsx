import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { BreadcrumbProvider } from "@/contexts/BreadcrumbContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-ibm-plex-sans-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Diabesity - Living with diabesity in Pakistan",
  description:
    "We believe every person in Pakistan deserves a life free of diabesity, and we are here to be your compassionate partner in making that a reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J2BBGRF7WQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J2BBGRF7WQ');
        `}
      </Script>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexSansCondensed.variable} antialiased`}
      >
        <LanguageProvider>
          <AuthProvider>
            <BreadcrumbProvider>
            <SidebarProvider>
              <Header />
              <Breadcrumbs />
              <div className="lg:flex">
                <Suspense fallback={<div />}>
                  <Sidebar />
                </Suspense>
                <main className="w-full lg:flex-1">{children}</main>
              </div>
              <Footer />
            </SidebarProvider>
            </BreadcrumbProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
