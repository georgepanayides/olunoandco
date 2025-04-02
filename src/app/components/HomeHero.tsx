'use client'

import { motion } from "framer-motion"

const box = {
  width: 150,
  height: 150,
  background: "linear-gradient(135deg, #1E0F47, #3C1E78)",
  borderRadius: 5,
}

export default function HomeHero() {
  return (
    <section className="w-full h-screen bg-[#1A1A1A] text-white flex items-center justify-center relative overflow-hidden">
      {/* Morphing blob */}
      <div className="w-[600px] h-[600px] block">
      <div className="relative flex justify-center items-center m-[120px] opacity-100">
      <motion.div
        animate={{
            scale: [1, 1.5, 1.5, 1, 1, 1.5, 1.5, 1],
            rotate: [0, 0, 180, 180, 0, -180, -180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%", "0%", "50%", "0%"],
        }}
        transition={{
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
        }}
        style={box}
        />

      </div>

      {/* Hero Text */}
      <div className="text-center z-10">
        <h1 className="font-aeonik font- text-4xl font-bold tracking-tight">
        Your logo isn’t the problem.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
        But it might be holding you back.
        </p>
      </div>
      </div>
    </section>
  )
} 