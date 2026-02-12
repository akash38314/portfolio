'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8 font-light">
            About Me
          </h2>
          
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
              I'm a self-taught software developer based in Kolkata, India. 
              A fresher passionate about building web applications that solve real-world problems.
            </p>
            
            <p className="text-base text-gray-400 font-light leading-relaxed">
              My journey into programming started during the pandemic. 
              What began as curiosity quickly turned into passion. 
              I've since built multiple full-stack applications, 
              contributed to open source, and never stopped learning.
            </p>
            
            <p className="text-base text-gray-400 font-light leading-relaxed">
              I believe in clean code, continuous improvement, and 
              creating meaningful digital experiences. 
              Currently looking for my first opportunity as a software developer.
            </p>

            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 inline-block">
              <span className="text-sm text-gray-300">
                🟢 Fresher · Open to work
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}