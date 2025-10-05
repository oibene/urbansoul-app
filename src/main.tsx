import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from "./pages/header"
import Footer from "./pages/footer"
import Index from './pages'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header></Header>
    <Index></Index>
    <Footer></Footer>
  </StrictMode>,
)
