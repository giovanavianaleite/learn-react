import {Routes, Route } from 'react-router-dom'
import Filmes from './pages/Filmes'
import LayoutDefault from './pages/LayoutDefault'
import Sobre from './pages/Sobre'
import Filme from './components/Filme'
import LayoutAdmin from './pages/LayoutAdmin'
import Login from './components/Login'
import APIIntegration from './components/APIIntegration';
import CadastraFilme from './components/CadastraFilme';
import AuthProvider from './providers/AuthProvider'
import NotFound from './pages/NotFound'
import Admin from './components/Admin'
import EditFilme from './components/EditFilme'


function App() {
  return (
        <Routes>

          <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Filmes />}/>
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>
          
          <Route path='admin' element={<LayoutAdmin />}>
            <Route index element={<Admin />}/>
            <Route path="cadastra-filme" element={<CadastraFilme />} />
            <Route path="edit/:productId" element={<EditFilme />} />
          </Route>


          <Route path="*" element={<NotFound />} />

      </Routes>
  )
}

export default App;