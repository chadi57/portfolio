import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Screenshot } from '../data'

interface ScreenshotGalleryProps {
  screenshots: Screenshot[]
}

export default function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setSelectedIndex(null)
  }

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % screenshots.length)
    }
  }

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + screenshots.length) % screenshots.length)
    }
  }

  return (
    <>
      {/* Grid de screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={screenshot.id}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => openModal(index)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
              {/* Placeholder pour l'image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
                <span className="text-gray-500 text-sm">Image: {screenshot.title}</span>
              </div>
              
              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Cliquer pour agrandir
                </span>
              </div>
            </div>
            
            <div className="mt-2">
              <h5 className="text-white font-semibold text-sm">{screenshot.title}</h5>
              <p className="text-gray-400 text-xs mt-1 line-clamp-2">{screenshot.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal plein écran */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermer */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="w-full h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
                  <span className="text-gray-400 text-lg">
                    {screenshots[selectedIndex].title}
                  </span>
                </div>
                
                <div className="p-6 bg-gray-900">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {screenshots[selectedIndex].title}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {screenshots[selectedIndex].description}
                  </p>
                  {screenshots[selectedIndex].businessImpact && (
                    <div className="mt-4 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
                      <p className="text-primary-400 font-semibold mb-1">Impact métier</p>
                      <p className="text-gray-300">{screenshots[selectedIndex].businessImpact}</p>
                    </div>
                  )}
                  <p className="text-gray-500 text-sm mt-4 text-center">
                    {selectedIndex + 1} / {screenshots.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

