import React from 'react'
import { motion } from 'framer-motion'
import './Sobre.css'

function Sobre() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const highlightVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <motion.div 
          className="sobre-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="sobre-text">
            <motion.h2 
              className="section-title"
              variants={itemVariants}
            >
              Sobre Mim
            </motion.h2>
            <motion.p 
              className="sobre-intro"
              variants={itemVariants}
            >
              Olá! Sou uma terapeuta holística dedicada a ajudar pessoas a encontrarem 
              equilíbrio e bem-estar em suas vidas. Acredito que cada pessoa é única e 
              merece um cuidado personalizado que considere não apenas os sintomas, 
              mas todo o seu ser.
            </motion.p>
            <motion.p
              variants={itemVariants}
            >
              Minha abordagem combina técnicas tradicionais e modernas, sempre com muito 
              respeito, acolhimento e profissionalismo. Trabalho para criar um espaço seguro 
              onde você possa se sentir ouvido, compreendido e apoiado em sua jornada de 
              autoconhecimento e transformação.
            </motion.p>
            <motion.p 
              className="sobre-destaque"
              variants={highlightVariants}
            >
              Meu compromisso é oferecer um atendimento humanizado, onde você se sinta 
              confortável para compartilhar suas necessidades e, juntos, encontrarmos o 
              caminho para o seu bem-estar.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sobre
