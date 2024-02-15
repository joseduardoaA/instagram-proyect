import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import UsuariosPage from '../pages/usuarios'
import AlbumesPage from '../pages/albumes'

export default function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/usuarios" replace />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path='/albumes/:userId' element={<AlbumesPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
