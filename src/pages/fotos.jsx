import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PhotoItem from '../components/fotos/PhotoItem'
export default function FotosPage() {
  const [album, setAlbum] = useState(null)
  const [fotos, setFotos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => res.json())
      .then((newAlbum) => {
        setAlbum(newAlbum)
      })
      .catch(() => {
        console.error('Ha ocurrido un error')
      })
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((res) => res.json())
      .then((newFotos) => {
        console.log(newFotos)
        setFotos(newFotos)
      })
      .catch(() => {
        console.error('Ha ocurrido un error')
      })
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{album?.title}</h1>
          </div>
          {fotos.map((photo) => (
            <PhotoItem
              key={photo.id}
              title={photo.title}
              thumbnailUrl={photo.thumbnailUrl}
              url={photo.url}
            />
          ))}
        </div>
      </div>
    </>
  )
}
