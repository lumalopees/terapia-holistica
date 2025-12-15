import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} Terapias Holísticas. Todos os direitos reservados.
          </p>
          <p className="footer-subtext">
            Feito com cuidado e dedicação
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

