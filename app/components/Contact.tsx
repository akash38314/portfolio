'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Moving Dots */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            Get in touch
          </h2>
          <p className="text-lg text-gray-400 font-light">
            I'm currently looking for my first opportunity as a software developer.
            Whether you have a question or just want to say hi, I'll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden group"
          >
            {/* Card Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6 font-light relative z-10">
              Contact Information
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-xs text-gray-600 mb-1 font-light">Email</p>
                <a 
                  href="mailto:pandeyakashkumar191@gmail.com" 
                  className="text-white hover:text-blue-400 transition-colors text-base"
                >
                  pandeyakashkumar191@gmail.com
                </a>
              </div>
              
              <div>
                <p className="text-xs text-gray-600 mb-1 font-light">GitHub</p>
                <a 
                  href="https://github.com/akashpandey191" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors text-base"
                >
                  github.com/akashpandey191
                </a>
              </div>
              
              <div>
                <p className="text-xs text-gray-600 mb-1 font-light">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/akashpandey191" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors text-base"
                >
                  linkedin.com/in/akashpandey191
                </a>
              </div>
              
              <div>
                <p className="text-xs text-gray-600 mb-1 font-light">Location</p>
                <p className="text-white text-base">Kolkata, India</p>
              </div>
            </div>
            
            {/* Availability Status - Fresher */}
            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
              <div className="flex items-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm text-gray-400 font-light ml-2">Fresher · Open to work</span>
              </div>
              <p className="text-xs text-gray-600 mt-3 font-light">
                Response time: within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden group"
          >
            {/* Card Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6 font-light relative z-10">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs text-gray-600 mb-2 font-light">
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white placeholder-gray-600 text-sm transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs text-gray-600 mb-2 font-light">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white placeholder-gray-600 text-sm transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs text-gray-600 mb-2 font-light">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white placeholder-gray-600 text-sm transition-all resize-none"
                  placeholder="Hi Akash, I saw your portfolio and would like to connect..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full px-6 py-3 text-sm font-light tracking-wide text-white rounded-lg transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : status === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {status === 'idle' && 'Send Message'}
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Message sent!'}
                {status === 'error' && 'Try again'}
              </button>
            </form>
            
            <p className="text-xs text-gray-600 mt-6 font-light text-center relative z-10">
              Your information will not be shared with third parties.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}