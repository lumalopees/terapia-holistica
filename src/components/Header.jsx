import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Fecha o menu ao rolar a página
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  useEffect(() => {
    // Fecha o menu ao clicar fora
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      // Previne scroll do body quando menu está aberto
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <span className="logo-text">Terapias Holísticas</span>
            </div>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
              <li><a href="#servicos" onClick={closeMenu}>Serviços</a></li>
              <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  )
}

export default Header

