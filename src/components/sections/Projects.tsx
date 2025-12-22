import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../data'
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'
import ScreenshotGallery from '../ScreenshotGallery'

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Projets académiques / POC
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Projets de démonstration réalisés dans le cadre de ma formation et de mon apprentissage continu
          </p>

          <div className="space-y-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden card-hover"
              >
                {/* Cover Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary-600/20 to-gray-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">{project.title}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-600/80 text-white rounded-full text-sm font-medium">
                      {project.type === 'academic' ? 'Projet académique' : 'POC'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-lg text-primary-400 mb-3">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Métriques */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {project.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-800/50 rounded-lg p-3 text-center"
                        >
                          <p className="text-2xl font-bold text-primary-400">
                            {metric.value}
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Liens externes */}
                  <div className="flex items-center gap-4 mb-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm">Code source</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Démo</span>
                      </a>
                    )}
                  </div>

                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-700 mt-4 space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">
                              Problème métier
                            </h4>
                            <p className="text-gray-300">{project.problem}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">
                              Solution
                            </h4>
                            <p className="text-gray-300">{project.solution}</p>
                          </div>

                          <div className="p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
                            <h4 className="text-lg font-semibold text-primary-400 mb-2">
                              Impact métier
                            </h4>
                            <p className="text-gray-300">{project.businessImpact}</p>
                          </div>

                          {project.screenshots && project.screenshots.length > 0 && (
                            <div className="mt-6">
                              <h4 className="text-lg font-semibold text-white mb-4">
                                Captures d'écran
                              </h4>
                              <ScreenshotGallery screenshots={project.screenshots} />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="mt-4 flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    {expandedId === project.id ? (
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

