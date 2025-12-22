import { motion } from 'framer-motion'
import { profile, education } from '../../data'
import { GraduationCap, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            À propos
          </h2>

          <div className="glass-effect rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {profile.bio}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mon objectif est de continuer à développer mon expertise en data science et intelligence artificielle, 
              en contribuant à des projets innovants qui transforment les données en valeur business.
            </p>
          </div>

          {/* Timeline académique */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
              Parcours académique
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 pb-8 border-l-2 border-primary-500"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-500 rounded-full border-4 border-gray-900" />
                
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <GraduationCap className="text-primary-400 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </span>
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-gray-300 mt-3">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

