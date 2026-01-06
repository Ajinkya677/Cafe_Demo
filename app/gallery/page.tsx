'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    title: 'Espresso Art',
    description: 'Beautiful latte art crafted by our skilled baristas',
    category: 'Coffee',
  },
  {
    id: 2,
    title: 'Modern Interior',
    description: 'Our sleek and contemporary cafe space',
    category: 'Space',
  },
  {
    id: 3,
    title: 'Fresh Beans',
    description: 'Premium coffee beans sourced from around the world',
    category: 'Coffee',
  },
  {
    id: 4,
    title: 'Cozy Corner',
    description: 'A perfect spot to relax and enjoy your coffee',
    category: 'Space',
  },
  {
    id: 5,
    title: 'Brewing Process',
    description: 'Witness the art of perfect coffee brewing',
    category: 'Process',
  },
  {
    id: 6,
    title: 'Pastry Selection',
    description: 'Freshly baked pastries to complement your coffee',
    category: 'Food',
  },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const categories = ['All', 'Coffee', 'Space', 'Process', 'Food']

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-coffee-300 text-xl max-w-2xl mx-auto">
            Explore the visual journey of CafeVerse through our curated collection
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                  : 'glass text-coffee-200 hover:text-amber-300 hover:border-amber-500/30 border border-coffee-800'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-strong rounded-xl overflow-hidden border border-coffee-800 hover:border-amber-500/30 transition-all duration-300 cursor-pointer group"
            >
              {/* Placeholder Image */}
              <div className="relative h-64 bg-gradient-to-br from-coffee-800 to-coffee-900 flex items-center justify-center">
                <div className="text-6xl opacity-50 group-hover:opacity-75 transition-opacity">
                  {item.category === 'Coffee' ? '☕' :
                   item.category === 'Space' ? '🏠' :
                   item.category === 'Process' ? '⚙️' : '🥐'}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className="text-xs px-3 py-1 glass rounded-full text-amber-300">
                    {item.category}
                  </span>
                </div>
                <p className="text-coffee-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-coffee-300 text-xl">No items found in this category</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

