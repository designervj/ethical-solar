
import React from 'react'
import HomePage from '@/pages/HomePage'
import Header from '@/components/sections/header/Header'
import Footer from "@/components/sections/footer/Footer";

export default function App() {
  return (
    <div className="text-brand-text">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}
