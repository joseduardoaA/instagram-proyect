import { useParams } from 'react-router-dom'

export default function AlbumesPage () {
  const { userId } = useParams()
  return (
    <>
      <h1>{userId}</h1>
      <h2>Albumes</h2>
    </>
  )
}
