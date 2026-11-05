import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SobreNos } from './pages/SobreNos'
import { FaleConosco } from './pages/FaleConosco'
import { Servicos } from './pages/Servicos'
import { TrabalheConosco } from './pages/TrabalheConosco'

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>

        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
