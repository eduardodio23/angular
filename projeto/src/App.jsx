import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Cabecalho from './components/cabecalho/index.jsx'
import Rodape from './components/rodape/index.jsx'
import CadastroPage from './pages/CadastroPage/index.jsx'
import HomePage from './pages/HomePage/index.jsx'
import UsuariosPage from './pages/UsuariosPage/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listar-usuarios" element={<UsuariosPage />} />
          <Route path="/cadastrar-usuario" element={<CadastroPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
