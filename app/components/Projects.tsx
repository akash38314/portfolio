'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { urlFor } from '../lib/sanity'
import Image from 'next/image'

interface Project {
  _id: string
  title: string
  description: string
  technologies: string[]
  image?: any
  github?: string
  liveLink?: string
  featured?: boolean
}

export default function Projects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="relative py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400">Add projects in Sanity Studio to see them here</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="relative py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400">Real-world applications I've built</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <Image
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>
                )}
                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.slice(0, 4).map((tech: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}