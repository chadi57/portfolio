import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '../../data'
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import ScreenshotGallery from '../ScreenshotGallery'

export default function Experiences() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experiences" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Expériences professionnelles
          </h2>

          <div className="space-y-6 max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden card-hover"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-xl text-primary-400 font-medium mb-2">
                            {exp.company}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium">
                          {exp.type === 'internship' ? 'Stage' : exp.type === 'freelance' ? 'Freelance' : 'CDI'}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-700 mt-4">
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Réalisations principales
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <span className="text-primary-400 mt-1">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>

                          {exp.screenshots && exp.screenshots.length > 0 && (
                            <div className="mt-6">
                              <h4 className="text-lg font-semibold text-white mb-4">
                                Captures d'écran
                              </h4>
                              <ScreenshotGallery screenshots={exp.screenshots} />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="mt-4 flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    {expandedId === exp.id ? (
                      <>
                        <ChevronUp size={20} />
                        Voir moins
                      </>
                    ) : (
                      <>
                        <ChevronDown size={20} />
                        Voir plus de détails
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

