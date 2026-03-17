import type { Metadata } from "next";
import Header from "@/components/sections/header/Header";
import Footer from "@/components/sections/footer/Footer";
import ReduxProvider from "@/components/providers/ReduxProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethical Solar",
  description: "Ethical Solar marketing site built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-brand-text">
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
