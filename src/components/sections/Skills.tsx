import { motion } from 'framer-motion'
import { skills, softSkills } from '../../data'
import { BarChart3 } from 'lucide-react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts' 

export default function Skills() {
  // Préparer les données pour le radar chart
  const skillCategories = {
    'Langages': skills.filter(s => s.category === 'language'),
    'Frameworks': skills.filter(s => s.category === 'framework'),
    'Outils': skills.filter(s => s.category === 'tool'),
    'Méthodologies': skills.filter(s => s.category === 'methodology'),
  }

  const radarData = Object.entries(skillCategories).map(([category, categorySkills]) => {
    const safeSkills = categorySkills || []
    const avgLevel = safeSkills.length > 0 ? Math.round(safeSkills.reduce((sum, s) => sum + s.level, 0) / safeSkills.length) : 0
    const topSkills = safeSkills
      .slice()
      .sort((a, b) => b.level - a.level)
      .slice(0, 3)
      .map(s => `${s.name} (${s.level}%)`)
      .join(', ')
    return {
      category: category.replace('Frameworks', 'Frameworks\n& Libs'),
      level: avgLevel,
      count: safeSkills.length,
      topSkills,
    }
  })

  const radarDataSorted = radarData.slice().sort((a, b) => b.level - a.level)

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Compétences
          </h2>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Radar Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-xl p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="text-primary-400" size={24} />
                <h3 className="text-2xl font-semibold text-white">
                  Vue d'ensemble des compétences
                </h3>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarDataSorted}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis
                    dataKey="category"
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    tickFormatter={(value: string, index: number) => {
                      const item = radarDataSorted[index]
                      const name = value.replace('\n', ' ')
                      return item ? `${name} (${item.count})` : name
                    }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fill: '#9CA3AF', fontSize: 10 }}
                  />
                  <Tooltip
                    content={({ payload, label }) => {
                      if (!payload || !payload.length) return null
                      const item = radarDataSorted.find(d => d.category.replace('\n', ' ') === label || d.category === label)
                      return (
                        <div className="bg-gray-800 border border-gray-700 p-3 text-sm text-gray-200 rounded">
                          <div className="font-medium">{label}</div>
                          <div>Niveau moyen: {payload[0].value}%</div>
                          <div>Compétences: {item?.count ?? 0}</div>
                          <div>Top: {item?.topSkills ?? '—'}</div>
                        </div>
                      )
                    }}
                  />
                  <Radar
                    name="Niveau"
                    dataKey="level"
                    stroke="#0EA5E9"
                    fill="#0EA5E9"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-400 mt-3">
                Le radar montre le niveau moyen par catégorie. Passez la souris sur chaque axe pour voir le nombre de compétences et le top 3.
              </p>
            </motion.div>

            {/* Hard Skills par catégorie */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skillCategories).map(([category, categorySkills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-primary-400 text-sm font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="bg-gradient-to-r from-primary-500 to-primary-400 h-2.5 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 bg-primary-600/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

