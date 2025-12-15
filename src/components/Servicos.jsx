import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaHeart, FaUser, FaBalanceScale } from 'react-icons/fa'
import './Servicos.css'
import terapiaHolisticaImg from '../../images/terapia-holistica-rede-ser-pleno.jpg'
import bemEstarImg from '../../images/bem-estar-ganha-mais-relevancia_0.avif'
import autoconhecimentoImg from '../../images/Autoconhecimento.webp'
import equilibrioEnergeticoImg from '../../images/meditacao-equilibrio-energetico-1210x423.jpg'

function Servicos() {
  const servicos = [
    {
      titulo: 'Terapia Holística',
      descricao: 'Uma abordagem integrada que considera você como um todo, trabalhando corpo, mente e emoções de forma harmoniosa.',
      icon: FaLeaf,
      image: terapiaHolisticaImg
    },
    {
      titulo: 'Bem-estar Emocional',
      descricao: 'Acompanhamento para encontrar equilíbrio emocional, reduzir ansiedade e melhorar sua qualidade de vida.',
      icon: FaHeart,
      image: bemEstarImg
    },
    {
      titulo: 'Autoconhecimento',
      descricao: 'Técnicas e ferramentas para você se conhecer melhor, identificar padrões e criar mudanças positivas.',
      icon: FaUser,
      image: autoconhecimentoImg
    },
    {
      titulo: 'Equilíbrio Energético',
      descricao: 'Trabalho com técnicas que ajudam a restaurar o fluxo natural de energia, promovendo sensação de bem-estar.',
      icon: FaBalanceScale,
      image: equilibrioEnergeticoImg
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="servicos" className="servicos">
      <div className="container">
        <motion.h2 
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Como Posso Te Ajudar
        </motion.h2>
        <motion.p 
          className="servicos-intro"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Ofereço diferentes abordagens terapêuticas, sempre adaptadas às suas necessidades. 
          Cada sessão é pensada especialmente para você.
        </motion.p>
        <motion.div 
          className="servicos-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicos.map((servico, index) => {
            const IconComponent = servico.icon
            return (
              <motion.div 
                key={index} 
                className="servico-card"
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="servico-image-container"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img 
                    src={servico.image} 
                    alt={servico.titulo}
                    className="servico-image"
                  />
                </motion.div>
                <div className="servico-icon">
                  <motion.span 
                    className="icon-circle"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <IconComponent className="icon-svg" />
                  </motion.span>
                </div>
                <h3>{servico.titulo}</h3>
                <p>{servico.descricao}</p>
              </motion.div>
            )
          })}
        </motion.div>
        <motion.div 
          className="servicos-nota"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            <strong>Importante:</strong> Todos os serviços são oferecidos de forma personalizada. 
            Durante nossa primeira conversa, vamos identificar juntos qual abordagem faz mais 
            sentido para o seu momento atual.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Servicos
