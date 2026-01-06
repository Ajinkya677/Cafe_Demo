'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative mt-20 glass-strong border-t border-coffee-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent mb-4">
              CafeVerse
            </h3>
            <p className="text-coffee-300 text-sm">
              A premium 3D cafe website demo showcasing modern web capabilities.
              Perfect for attracting cafe owners and freelance clients.
            </p>
            <p className="text-coffee-500 text-xs mt-4">
              ⚠️ This is a demo project for portfolio purposes only.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-amber-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-coffee-300 hover:text-amber-300 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-amber-300 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-coffee-300">
              <li>📧 demo@cafeverse.com</li>
              <li>📱 +1 (555) 123-4567</li>
              <li>📍 123 Coffee Street, Demo City</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-coffee-800 text-center">
          <p className="text-coffee-500 text-sm">
            © {new Date().getFullYear()} CafeVerse Demo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

