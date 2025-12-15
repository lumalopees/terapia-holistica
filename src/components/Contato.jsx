import React from 'react'
import './Contato.css'

function Contato() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999' // Substitua pelo número real
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de terapia holística.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="contato" className="contato">
      <div className="container">
        <div className="contato-content">
          <h2 className="section-title">Vamos Conversar?</h2>
          <p className="contato-intro">
            Estou aqui para te ajudar. Se você tem dúvidas, quer saber mais sobre 
            os serviços ou está pronto para começar sua jornada de bem-estar, 
            entre em contato. Será um prazer conversar com você!
          </p>
          <div className="contato-cta">
            <button className="btn-whatsapp" onClick={handleWhatsAppClick}>
              <span className="whatsapp-icon">💬</span>
              Falar no WhatsApp
            </button>
            <p className="contato-info">
              Resposta rápida e atendimento personalizado
            </p>
          </div>
          <div className="contato-beneficios">
            <div className="beneficio-item">
              <span className="beneficio-icon">✓</span>
              <span>Primeira conversa sem compromisso</span>
            </div>
            <div className="beneficio-item">
              <span className="beneficio-icon">✓</span>
              <span>Horários flexíveis</span>
            </div>
            <div className="beneficio-item">
              <span className="beneficio-icon">✓</span>
              <span>Atendimento humanizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato

