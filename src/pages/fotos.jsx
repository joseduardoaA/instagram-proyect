import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PhotoItem from '../components/fotos/PhotoItem'
// const navigate = useNavigate()

export default function FotosPage() {
  const [album, setAlbum] = useState(null)
  const [fotos, setFotos] = useState([])
  const { id } = useParams()
  // const handleAlbumClick = () => {
  //   navigate(`/fotos/${props.id}`)
  // }
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                return `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
              }}
            >
              Primary
            </button>
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
