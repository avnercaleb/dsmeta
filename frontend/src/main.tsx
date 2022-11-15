import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BotaoNotificacao from './components/botao-notificacao'
import Header from './components/header'
import SalesCard from './components/sales-card'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>      
    </>
  </React.StrictMode>
)
