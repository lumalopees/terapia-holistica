import React from 'react'
import './Servicos.css'

function Servicos() {
  const servicos = [
    {
      titulo: 'Terapia Holística',
      descricao: 'Uma abordagem integrada que considera você como um todo, trabalhando corpo, mente e emoções de forma harmoniosa.'
    },
    {
      titulo: 'Bem-estar Emocional',
      descricao: 'Acompanhamento para encontrar equilíbrio emocional, reduzir ansiedade e melhorar sua qualidade de vida.'
    },
    {
      titulo: 'Autoconhecimento',
      descricao: 'Técnicas e ferramentas para você se conhecer melhor, identificar padrões e criar mudanças positivas.'
    },
    {
      titulo: 'Equilíbrio Energético',
      descricao: 'Trabalho com técnicas que ajudam a restaurar o fluxo natural de energia, promovendo sensação de bem-estar.'
    }
  ]

  return (
    <section id="servicos" className="servicos">
      <div className="container">
        <h2 className="section-title">Como Posso Te Ajudar</h2>
        <p className="servicos-intro">
          Ofereço diferentes abordagens terapêuticas, sempre adaptadas às suas necessidades. 
          Cada sessão é pensada especialmente para você.
        </p>
        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div key={index} className="servico-card">
              <div className="servico-icon">
                <span className="icon-circle"></span>
              </div>
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>
        <div className="servicos-nota">
          <p>
            <strong>Importante:</strong> Todos os serviços são oferecidos de forma personalizada. 
            Durante nossa primeira conversa, vamos identificar juntos qual abordagem faz mais 
            sentido para o seu momento atual.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Servicos

