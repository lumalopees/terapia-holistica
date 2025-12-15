import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaCheck } from 'react-icons/fa'
import './Contato.css'

function Contato() {
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
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 30px rgba(37, 211, 102, 0.6)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95,
      y: 0
    }
  }

  const benefitVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section id="contato" className="contato">
      <div className="container">
        <motion.div 
          className="contato-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Vamos Conversar?
          </motion.h2>
          <motion.p 
            className="contato-intro"
            variants={itemVariants}
          >
            Estou aqui para te ajudar. Se você tem dúvidas, quer saber mais sobre 
            os serviços ou está pronto para começar sua jornada de bem-estar, 
            entre em contato. Será um prazer conversar com você!
          </motion.p>
          <div className="contato-cta">
            <motion.button 
              className="btn-whatsapp" 
              onClick={handleWhatsAppClick}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                <FaWhatsapp className="whatsapp-icon" />
              </motion.div>
              Falar no WhatsApp
            </motion.button>
            <motion.p 
              className="contato-info"
              variants={itemVariants}
            >
              Resposta rápida e atendimento personalizado
            </motion.p>
          </div>
          <motion.div 
            className="contato-beneficios"
            variants={containerVariants}
          >
            <motion.div 
              className="beneficio-item"
              variants={benefitVariants}
              whileHover="hover"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 2 
                }}
              >
                <FaCheck className="beneficio-icon" />
              </motion.div>
              <span>Primeira conversa sem compromisso</span>
            </motion.div>
            <motion.div 
              className="beneficio-item"
              variants={benefitVariants}
              whileHover="hover"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 2.5 
                }}
              >
                <FaCheck className="beneficio-icon" />
              </motion.div>
              <span>Horários flexíveis</span>
            </motion.div>
            <motion.div 
              className="beneficio-item"
              variants={benefitVariants}
              whileHover="hover"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 3 
                }}
              >
                <FaCheck className="beneficio-icon" />
              </motion.div>
              <span>Atendimento humanizado</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contato
