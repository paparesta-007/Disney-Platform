import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import DisneyPage from './pages/Disney.jsx'
import MarvelPage from './pages/Marvel.jsx'
import PixarPage from './pages/Pixar.jsx'
import StarWarsPage from './pages/StarWars.jsx'
import NationalGeographicPage from './pages/NationalGeographic.jsx'
import StarPage from './pages/Star.jsx'
// import PixarPage from './pages/Pixar.jsx'
// import MarvelPage from './pages/Marvel.jsx'
// import StarWarsPage from './pages/StarWars.jsx'
// import NationalGeographicPage from './pages/NationalGeographic.jsx'
// import StarPage from './pages/Star.jsx'
import Home from './Home.jsx'
import Page404 from './404.jsx' 
import { Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={ <Navigate to="/it-it/home" />} />
        <Route path="/it-it/home" element={<Home />} />
        <Route path="/it-it/browse/disney" element={<DisneyPage />} />
        <Route path="/it-it/browse/pixar" element={<PixarPage />} />
        <Route path="/it-it/browse/marvel" element={<MarvelPage />} />
        <Route path="/it-it/browse/starwars" element={<StarWarsPage />} />
        <Route path="/it-it/browse/national-geographic" element={<NationalGeographicPage />} />
        <Route path="/it-it/browse/star" element={<StarPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
