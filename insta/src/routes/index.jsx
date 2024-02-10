import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootPage from '../pages/root'
import PruebaPage from '../pages/prueba'

export default function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/prueba" element={<PruebaPage />} />
      </Routes>
    </BrowserRouter>
  )
}
