import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

function Hero() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999' // Substitua pelo número real
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de terapia holística.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Bem-estar e Equilíbrio para sua Vida
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Cuidado holístico que acolhe, transforma e renova. 
            Um espaço seguro para você encontrar harmonia entre corpo, mente e espírito.
          </motion.p>
          <motion.button 
            className="btn-primary" 
            onClick={handleWhatsAppClick}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Agende uma Conversa
          </motion.button>
        </motion.div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  )
}

export default Hero
