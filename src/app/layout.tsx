// @packages
import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// @app
import { buttonVariants } from "@/components/ui/button";
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

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-background/95 sticky top-0 flex w-full items-center justify-between border-b p-4">
          <span className="text-lg font-bold">The Road to Next app</span>
          <nav className="flex gap-4">
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href={homePath()}
            >
              Home
            </Link>
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href={ticketsPath()}
            >
              Tickets
            </Link>
          </nav>
        </header>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
