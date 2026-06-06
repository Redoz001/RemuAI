import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "RemuAI",
  description:
    "RemuAI is a technology company building intelligent software, AI systems, and digital infrastructure for the future.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black text-white antialiased">

        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold tracking-widest"
            >
              REMUAI
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/company"
                className="text-gray-400 hover:text-white transition"
              >
                Company
              </Link>

              <Link
                href="/products"
                className="text-gray-400 hover:text-white transition"
              >
                Products
              </Link>

              <Link
                href="/technology"
                className="text-gray-400 hover:text-white transition"
              >
                Technology
              </Link>

              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="/reunexus"
              className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition"
            >
              Launch ReuNexus
            </Link>

          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-24">
          <div className="max-w-7xl mx-auto px-6 py-10">

            <div className="flex flex-col md:flex-row justify-between gap-8">

              <div>
                <h3 className="text-xl font-bold mb-2">
                  REMUAI
                </h3>

                <p className="text-gray-400 max-w-md">
                  Building intelligent software, AI systems,
                  and digital infrastructure for the future.
                </p>
              </div>

              <div className="flex flex-col gap-2 text-gray-400">
                <Link href="/">Home</Link>
                <Link href="/company">Company</Link>
                <Link href="/products">Products</Link>
                <Link href="/technology">Technology</Link>
                <Link href="/contact">Contact</Link>
              </div>

            </div>

            <div className="border-t border-white/10 mt-8 pt-6 text-sm text-gray-500">
              © {new Date().getFullYear()} RemuAI. All rights reserved.
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}