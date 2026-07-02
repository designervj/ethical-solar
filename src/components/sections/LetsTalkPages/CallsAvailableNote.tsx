import { Headset } from 'lucide-react'
import React from 'react'

const CallsAvailableNote = () => {
  return (
      <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-5 text-text-secondary">
           <img src='./assets/Image/audio.svg' alt='audio Image'/>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-[48px] font-medium text-text-secondary tracking-tight">
            Calls available Mon–Fri.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm md:text-[18px] text-text-secondary">
            Responses usually within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CallsAvailableNote
