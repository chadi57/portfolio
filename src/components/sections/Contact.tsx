import { motion } from 'framer-motion'
import { contact } from '../../data'
import { Mail, Linkedin, Github, Download, Send } from 'lucide-react'

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${contact.email}`,
      value: contact.email,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: contact.linkedin,
      value: 'linkedin.com/in/chadielfai',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: contact.github,
      value: 'github.com/chadielfai',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Contact
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités en Data Science et Intelligence Artificielle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-xl p-6 text-center card-hover"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary-600/20 rounded-full">
                      <Icon className="text-primary-400" size={32} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {link.label}
                  </h3>
                  <p className="text-gray-400 text-sm break-all">
                    {link.value}
                  </p>
                </motion.a>
              )
            })}
          </div>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-effect rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Prêt à collaborer ?
            </h3>
            <p className="text-gray-300 mb-6">
              Je suis ouvert aux opportunités en Data Science, Machine Learning et Intelligence Artificielle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={`mailto:${contact.email}?subject=Opportunité Data Science`}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Envoyer un message
              </motion.a>
              {contact.cvUrl && (
                <motion.a
                  href={contact.cvUrl}
                  download
                  className="px-8 py-4 glass-effect text-gray-300 hover:text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Télécharger le CV
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

