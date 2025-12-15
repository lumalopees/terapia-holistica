import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}

export default App


