import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import AdminBar from "@/components/sections/AdminBar";

export const metadata: Metadata = {
  title: "Ethical Solar",
  description:
    "We install the highest-quality solar panel systems and back them up with a 30-year warranty.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter text-brand-text">
        {/* <AdminBar /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
