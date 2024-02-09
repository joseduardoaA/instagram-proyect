import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Root</h1>
              <Link to='/prueba' >Prueba </Link>
            </div>}/>
        <Route path="/prueba" element={<h1>Prueba</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
