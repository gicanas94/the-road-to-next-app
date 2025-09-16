// @packages
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// @app
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

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
  title: "APP APP APP",
};

// @types
type RootLayoutProps = {
  readonly children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main className="p-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
