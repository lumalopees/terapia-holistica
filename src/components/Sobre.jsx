import React from 'react'
import './Sobre.css'

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <div className="sobre-content">
          <div className="sobre-text">
            <h2 className="section-title">Sobre Mim</h2>
            <p className="sobre-intro">
              Olá! Sou uma terapeuta holística dedicada a ajudar pessoas a encontrarem 
              equilíbrio e bem-estar em suas vidas. Acredito que cada pessoa é única e 
              merece um cuidado personalizado que considere não apenas os sintomas, 
              mas todo o seu ser.
            </p>
            <p>
              Minha abordagem combina técnicas tradicionais e modernas, sempre com muito 
              respeito, acolhimento e profissionalismo. Trabalho para criar um espaço seguro 
              onde você possa se sentir ouvido, compreendido e apoiado em sua jornada de 
              autoconhecimento e transformação.
            </p>
            <p className="sobre-destaque">
              Meu compromisso é oferecer um atendimento humanizado, onde você se sinta 
              confortável para compartilhar suas necessidades e, juntos, encontrarmos o 
              caminho para o seu bem-estar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre

