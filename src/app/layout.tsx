import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "A modern weather application built with Next.js",
  keywords: ["weather", "forecast", "temperature", "climate"],
  authors: [{ name: "Weather App Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="py-6">
            <nav className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Weather App
              </h1>
              {/* Add navigation items here if needed */}
            </nav>
          </header>
          <main className="py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
