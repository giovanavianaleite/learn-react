import {Routes, Route } from 'react-router-dom'
import Filmes from './pages/Filmes'
import LayoutDefault from './pages/LayoutDefault'
import Series from './pages/Series'
import Sobre from './pages/Sobre'
import Home from './pages/Home'
import Filme from './components/Filme'

function App() {
  return (
        <Routes>
          <Route path="/" element={<LayoutDefault />}>
            <Route index element={<Home />} />
            <Route path="/filmes" element={<Filmes />} />
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/series" element={<Series />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>
      </Routes>
  )
}

export default App;