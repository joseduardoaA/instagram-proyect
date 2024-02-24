// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
export default function FotosPage () {
  // const [fotos, setFotos] = useState([])
  const { id } = useParams()
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/photos?albumId${id}`)
  //     .then((res) => res.json())
  //     .then((newFotos) => {
  //       setFotos(newFotos)
  //     })
  //     .catch(() => {
  //       console.error('Ha ocurrido un error')
  //     })
  // }, [])
  return (
    <>
      <Navbar />
      <h1>{id}</h1>
    </>
  )
}
