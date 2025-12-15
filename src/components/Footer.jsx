import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="footer-content">
          <motion.p 
            className="footer-text"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} Terapias Holísticas. Todos os direitos reservados.
          </motion.p>
          <motion.p 
            className="footer-subtext"
            variants={itemVariants}
          >
            Feito com cuidado e dedicação
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
