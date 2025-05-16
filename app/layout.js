import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Omer Faruk Gungor's Portfolio and Blog",
  description: "A clean, modern blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#e5e7eb]`}>
        <div className="relative z-10">
          {/* Header */}
          <div className="w-full text-center py-10">
            <h1 className="text-4xl font-bold tracking-wide text-gray-900">
              Omer Faruk Gungor
            </h1>
            <p className="text-gray-700 text-sm mb-4 font-mono">
              Portfolio & Blog
            </p>

            {/* Navigation */}
            <nav className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg bg-sky-500 text-white font-semibold shadow-md hover:bg-sky-600 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow-md hover:bg-indigo-600 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold shadow-md hover:bg-gray-900 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg bg-red-400 text-white font-semibold shadow-md hover:bg-red-500 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Content Card */}
          <div className="flex justify-center px-4 mt-12 pb-16">
            <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
