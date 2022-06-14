import {Routes, Route } from 'react-router-dom'
import Filmes from './pages/Filmes'
import LayoutDefault from './pages/LayoutDefault'
import Sobre from './pages/Sobre'
import Filme from './components/Filme'
import LayoutAdmin from './pages/LayoutAdmin'
import APIIntegration from './components/APIIntegration';
import CadastraFilme from './components/CadastraFilme';
import AuthProvider from './providers/AuthProvider'

function App() {
  return (
        <Routes>

          <Route path="/" element={<LayoutDefault />}>
            
            <Route path="/filmes" element={<Filmes />} />
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>

          <AuthProvider>
          <Route>
          <Route path='admin/' element={<LayoutAdmin />} />
            <Route index element={<APIIntegration />}/>
            <Route path="cadastra-filme/" element={<CadastraFilme />} />
          </Route>
          </AuthProvider>

      </Routes>
  )
}

export default App;