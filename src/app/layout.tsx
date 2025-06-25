// @packages
import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// @app
import { homePath, ticketsPath } from "@/paths";

// @own
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  description: "Welcome to my app",
  title: "The Road to Next app",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 w-full">
          <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
            <ul className="flex space-x-4">
              <li>
                <Link className="hover:underline" href={homePath()}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={ticketsPath()}>
                  Tickets
                </Link>
              </li>
            </ul>
            <div className="text-lg font-bold">The Road to Next app</div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
