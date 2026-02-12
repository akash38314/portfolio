'use client'

import { motion } from 'framer-motion'

interface Skill {
  _id: string
  category: string
  skills: {
    name: string
    proficiency: number
  }[]
}

export default function Skills({ skills }: { skills: Skill[] }) {
  if (!skills || skills.length === 0) {
    return (
      <section id="skills" className="relative py-32 bg-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400">Add skills in Sanity Studio to see them here</p>
        </div>
      </section>
    )
  }

  const categories: { [key: string]: string } = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database',
    devops: 'DevOps & Cloud',
    tools: 'Tools & Workflow'
  }

  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400">Technologies I work with daily</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category: Skill, index: number) => (
            <motion.div
              key={category._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {categories[category.category] || category.category}
              </h3>

              <div className="space-y-4">
                {category.skills?.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400 font-mono">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}