'use client'

import { motion } from 'framer-motion'

const values = [
  {
    icon: '🌱',
    title: 'Sustainability',
    description: 'We source our coffee beans from sustainable farms that prioritize environmental responsibility.',
  },
  {
    icon: '👥',
    title: 'Community',
    description: 'Building connections and bringing people together through the love of great coffee.',
  },
  {
    icon: '✨',
    title: 'Quality',
    description: 'Every cup is crafted with precision, using only the finest ingredients and techniques.',
  },
  {
    icon: '🎯',
    title: 'Innovation',
    description: 'Constantly exploring new flavors and brewing methods to enhance your experience.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Our Story
            </span>
          </h1>
          <p className="text-coffee-300 text-xl max-w-3xl mx-auto leading-relaxed">
            CafeVerse represents the perfect fusion of traditional coffee craftsmanship
            and modern digital innovation. This demo showcases how technology can enhance
            the cafe experience while maintaining the warmth and authenticity that makes
            coffee culture special.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-amber-300 mb-4">The Vision</h2>
            <p className="text-coffee-200 text-lg leading-relaxed">
              At CafeVerse, we believe that a great cafe experience goes beyond just
              excellent coffee. It's about creating an atmosphere that engages all your
              senses, from the rich aroma of freshly brewed beans to the visual beauty
              of modern design.
            </p>
            <p className="text-coffee-200 text-lg leading-relaxed">
              This demo website demonstrates how cutting-edge web technologies can create
              immersive experiences that attract customers and showcase the premium nature
              of your brand. Whether you're a cafe owner looking to modernize your online
              presence or a freelancer seeking to impress clients, CafeVerse serves as a
              testament to what's possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong p-8 rounded-2xl border border-coffee-800"
          >
            <div className="space-y-4">
              <div className="text-6xl mb-4">☕</div>
              <h3 className="text-2xl font-bold text-amber-300 mb-2">Our Mission</h3>
              <p className="text-coffee-200">
                To blend the art of coffee making with innovative digital experiences,
                creating spaces where tradition meets technology and every visit feels
                special.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Our Values
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-strong p-6 rounded-xl border border-coffee-800 hover:border-amber-500/30 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-amber-300 mb-2">{value.title}</h3>
                <p className="text-coffee-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-8 rounded-2xl border border-amber-500/30 text-center"
        >
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-2xl font-bold text-amber-300 mb-4">Demo Project Notice</h3>
          <p className="text-coffee-200 max-w-2xl mx-auto">
            This is a demonstration website created for portfolio and showcase purposes.
            All content, branding, and information are fictional and used solely to
            demonstrate modern web development capabilities. This project showcases
            premium UI/UX design, 3D graphics integration, and responsive web development.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

