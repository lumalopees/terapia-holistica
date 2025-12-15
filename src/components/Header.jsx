import React, { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import './Header.css'

function Header() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Verifica se há preferência salva ou usa a preferência do sistema
    const savedTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-logo">Terapias Holísticas</h1>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Alternar modo escuro"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
