'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10 pt-16 pb-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-1/2 right-1/3 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AKP<span className="text-gray-500 text-sm ml-2 font-mono">.dev</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital experiences with modern web technologies. 
              Passionate about creating elegant solutions to complex problems.
            </p>
            <p className="text-xs text-gray-500 font-light">
              Fresher · Open to work
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/akashpandey191" target="_blank" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/akashpandey191" target="_blank" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:pandeyakashkumar191@gmail.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#college" className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind', 'Sanity.io', 'Express'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-xs text-gray-300 border border-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 mt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-gray-500">
              © {currentYear} Akash Kumar Pandey. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse mr-2"></span>
                Kolkata, India
              </span>
              <span>·</span>
              <span>Remote Ready</span>
              <span>·</span>
              <span>Fresher</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}