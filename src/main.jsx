import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import Header from './components/layout/Header.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <ThemeProvider>
        <Header />
        <App />
        <ScrollToTop />
      </ThemeProvider>
    </StrictMode>
  </Router>,
)
