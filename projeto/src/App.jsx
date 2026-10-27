
import './App.css'
import AdicionarUsuario from './pages/adicionarusuario'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
    <main className="main">
      <h2>Bem-vindo ao sistema de cadastro de usuarios</h2>
      <p>Este sistema permite que você cadastre, visualize e gerencie informações de usuários de forma eficiente.</p>
      <br />
      <AdicionarUsuario />
     </main>
    <Footer />
    


    </>
  )
}

export default App
