'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, School, Award } from 'lucide-react'

export default function College() {
  return (
    <section id="college" className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-2/3 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8 font-light">
            Education
          </h2>
          
          <div className="space-y-6">
            {/* B.Tech - Hooghly Engineering & Technology College */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-1">
                    Hooghly Engineering & Technology College
                  </h3>
                  <p className="text-base text-blue-400 mb-2">
                    Bachelor of Technology - Computer Science and Engineering
                  </p>
                  <p className="text-sm text-gray-400 mb-3">
                    Maulana Abul Kalam Azad University of Technology, West Bengal
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2020 - 2024</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Hooghly, West Bengal</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Class XII - BSEB */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <School className="w-6 h-6 text-purple-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-1">
                    G.M. High School Cum Inter College, Siwan
                  </h3>
                  <p className="text-base text-purple-400 mb-2">
                    Class XII - Science (PCM)
                  </p>
                  <p className="text-sm text-gray-400 mb-3">
                    Bihar School Examination Board (BSEB)
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2018 - 2020</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Siwan, Bihar</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Class X - WBBSE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-1">
                    Vidya Vikash High School
                  </h3>
                  <p className="text-base text-green-400 mb-2">
                    Class X - Secondary Education
                  </p>
                  <p className="text-sm text-gray-400 mb-3">
                    West Bengal Board of Secondary Education (WBBSE)
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2018</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>West Bengal</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Summary - FIXED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10"
          >
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              <span className="text-white font-medium">Education Summary:</span> B.Tech in Computer Science from Hooghly Engineering & Technology College (MAKAUT, 2020-2024), Class XII - Science from G.M. High School Cum Inter College, Siwan (BSEB, 2018-2020), and Class X from Vidya Vikash High School (WBBSE, 2018).
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}