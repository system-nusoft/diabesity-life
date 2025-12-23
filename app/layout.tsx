import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Epilogue, Sora } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={`${epilogue.variable} ${sora.variable} antialiased`}>
        <Header />
        <Breadcrumbs />
        <div className="lg:flex">
          <Sidebar />
          <main className="w-full lg:flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
