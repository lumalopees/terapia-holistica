import React from 'react'
import './Hero.css'

function Hero() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999' // Substitua pelo número real
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de terapia holística.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Bem-estar e Equilíbrio para sua Vida
          </h1>
          <p className="hero-subtitle">
            Cuidado holístico que acolhe, transforma e renova. 
            Um espaço seguro para você encontrar harmonia entre corpo, mente e espírito.
          </p>
          <button className="btn-primary" onClick={handleWhatsAppClick}>
            Agende uma Conversa
          </button>
        </div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  )
}

export default Hero

