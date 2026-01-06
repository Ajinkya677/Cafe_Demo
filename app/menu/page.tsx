'use client'

import { motion } from 'framer-motion'

const menuItems = [
  {
    category: 'Espresso',
    items: [
      { name: 'Classic Espresso', price: '$3.50', description: 'Rich and bold, the perfect pick-me-up' },
      { name: 'Americano', price: '$4.00', description: 'Espresso with hot water, smooth and balanced' },
      { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk and foam' },
      { name: 'Latte', price: '$5.00', description: 'Smooth espresso with velvety steamed milk' },
    ],
  },
  {
    category: 'Specialty Coffee',
    items: [
      { name: 'Mocha', price: '$5.50', description: 'Espresso, chocolate, and steamed milk' },
      { name: 'Caramel Macchiato', price: '$5.50', description: 'Vanilla, caramel, and espresso' },
      { name: 'Flat White', price: '$4.75', description: 'Double shot with microfoam' },
      { name: 'Cold Brew', price: '$4.50', description: 'Smooth, refreshing, and full-bodied' },
    ],
  },
  {
    category: 'Pastries & Snacks',
    items: [
      { name: 'Croissant', price: '$3.50', description: 'Buttery and flaky, baked fresh daily' },
      { name: 'Chocolate Chip Cookie', price: '$2.50', description: 'Warm, gooey, and delicious' },
      { name: 'Blueberry Muffin', price: '$3.00', description: 'Moist and packed with berries' },
      { name: 'Bagel with Cream Cheese', price: '$4.00', description: 'Fresh bagel with your choice of spread' },
    ],
  },
]

export default function Menu() {
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
              Our Menu
            </span>
          </h1>
          <p className="text-coffee-300 text-xl max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffee and delicious pastries
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuItems.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-3xl font-bold text-amber-300 mb-8 flex items-center">
                <span className="mr-4">{categoryIndex === 0 ? '☕' : categoryIndex === 1 ? '🌟' : '🥐'}</span>
                {category.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-strong p-6 rounded-xl border border-coffee-800 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                      <span className="text-amber-400 font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-coffee-300 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center glass-strong p-12 rounded-2xl border border-coffee-800"
        >
          <h3 className="text-3xl font-bold text-amber-300 mb-4">
            Ready to Experience CafeVerse?
          </h3>
          <p className="text-coffee-300 mb-6">
            Visit us or contact us to learn more about our offerings
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

