import { Linkedin, Github, Mail, Download } from 'lucide-react'
import { contact } from '../data'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
    { icon: Github, href: contact.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Chadi El Fai. Tous droits réservés.
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
            
            {contact.cvUrl && (
              <motion.a
                href={contact.cvUrl}
                download
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                <span>CV</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

