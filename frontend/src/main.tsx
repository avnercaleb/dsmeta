import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BotaoNotificacao from './components/botao-notificacao'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <App />
      <BotaoNotificacao />
      <BotaoNotificacao />
    </>
  </React.StrictMode>
)
