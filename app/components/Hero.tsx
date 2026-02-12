'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { urlFor } from '../lib/sanity'
import { useState, useEffect } from 'react'

interface HeroProps {
  personalInfo: {
    name?: string
    title?: string
    bio?: string
    avatar?: any
    resume?: string
  }
}

export default function Hero({ personalInfo }: HeroProps) {
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [mounted, setMounted] = useState(false)
  const [dots, setDots] = useState<Array<{top: string, left: string, duration: string, delay: string}>>([])

  useEffect(() => {
    setMounted(true)
    
    const generateDots = () => {
      return [...Array(30)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${5 + Math.random() * 10}s`,
        delay: `${Math.random() * 5}s`
      }))
    }
    
    setDots(generateDots())

    const timer = setInterval(() => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      const dateStr = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\//g, '.')
      
      setCurrentTime(timeStr)
      setCurrentDate(dateStr)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // ✅ FIXED: Resume download handler
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Create resume content
    const resumeContent = `AKASH KUMAR PANDEY
================================
📍 Kolkata, India | 📧 pandeyakashkumar191@gmail.com
🔗 github.com/akashpandey191 | linkedin.com/in/akashpandey191

🎯 SUMMARY
================================
Self-taught software developer with a B.Tech in Computer Science. 
Passionate about building full-stack web applications with modern technologies. 
Fresher looking for my first opportunity in software development.

🎓 EDUCATION
================================
• B.Tech in Computer Science & Engineering
  Hooghly Engineering & Technology College (MAKAUT)
  2020 - 2024

• Class XII - Science (PCM)
  G.M. High School Cum Inter College, Siwan (BSEB)
  2018 - 2020

• Class X
  Vidya Vikash High School (WBBSE)
  2018

🚀 PROJECTS
================================
1. AI Site Builder (GenAI)
   • AI platform generating websites from text prompts using Google Gemini API
   • Tech: React, Node.js, Prisma, PostgreSQL, Google Gemini API

2. QuickChat - Real-time Chat
   • Real-time chat app with Socket.io, JWT authentication, MongoDB Atlas
   • Tech: React, Node.js, MongoDB, Socket.io, Tailwind CSS

3. Developer Portfolio
   • Modern portfolio with Sanity.io CMS, optimized for Core Web Vitals
   • Tech: Next.js 14, Sanity.io, Tailwind CSS, Framer Motion

4. Secure Information Hiding
   • Audio steganography with AES-256 encryption
   • Tech: MATLAB, Signal Processing, Cryptography

💻 TECHNICAL SKILLS
================================
• Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3
• Backend: Node.js, Express, MongoDB, PostgreSQL, Prisma, REST APIs
• Tools: Git, VS Code, Postman, Sanity.io, Vercel
• Other: Socket.io, JWT, Google Gemini API, MATLAB

📫 CONTACT
================================
Email: pandeyakashkumar191@gmail.com
GitHub: github.com/akashpandey191
LinkedIn: linkedin.com/in/akashpandey191

⚡ Fresher · Open to work · Remote Ready`
    
    // Create blob and download
    const blob = new Blob([resumeContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Akash_Kumar_Pandey_Resume.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="text-center">
            <div className="h-8 w-48 mx-auto mb-8 bg-white/5 animate-pulse rounded-full"></div>
            <div className="h-20 w-3/4 mx-auto mb-6 bg-white/5 animate-pulse rounded-lg"></div>
            <div className="h-8 w-64 mx-auto mb-12 bg-white/5 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtb5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute top-0 left-0 w-full h-full">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                top: dot.top,
                left: dot.left,
                animation: `float ${dot.duration} linear infinite`,
                animationDelay: dot.delay
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Digital Watch */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 font-mono">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-green-400">LIVE</span>
              </div>
              <span className="text-sm text-gray-300">{currentDate || '2026.02.12'}</span>
              <span className="text-sm text-gray-300">{currentTime || '13:48:01'}</span>
              <span className="text-xs text-gray-500 border-l border-white/10 pl-3">IST</span>
            </div>
          </div>

          {/* Fresher Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-sm font-mono text-gray-300">Fresher · Open to work</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {personalInfo?.name || 'Akash Kumar Pandey'}
            </span>
          </h1>
          
          {/* Title */}
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-400 mb-6 font-mono">
            <span className="text-green-400">{'>'}</span> {personalInfo?.title || 'Software Developer'}
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {personalInfo?.bio || 'Building digital experiences with modern web technologies. Passionate about creating elegant solutions to complex problems. Fresher looking for my first opportunity.'}
          </p>

          {/* CTA Buttons - FIXED RESUME BUTTON */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 backdrop-blur-sm"
            >
              View Projects
              <ArrowDown className="inline ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>
            <a
              href="#"
              onClick={handleResumeClick}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-all border border-white/20 backdrop-blur-sm cursor-pointer hover:scale-105 transform duration-200"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/akashpandey191" target="_blank" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/akashpandey191" target="_blank" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:pandeyakashkumar191@gmail.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}