import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './page/Accueil'
import Galerie from './page/Galerie'

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/galerie' element={<Galerie />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}