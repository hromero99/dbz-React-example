import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import { CharacterPage } from './pages/CharacterPage.jsx'
import { CharacterDetailPage } from './pages/CharacterDetailPage.jsx'
import { LayoutComponent } from './components/LayoutComponent.jsx'


createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutComponent/>}>

        <Route element={<CharacterPage/>} path='' />
        <Route element={<CharacterDetailPage/>} path='/character/:id' />
      </Route>
     

    </Routes>
  </BrowserRouter>
)
