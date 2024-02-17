import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import UserItem from '../components/users/UserItem'

export default function AlbumesPage () {
  const { userId } = useParams()
  return (
    <>
    <Navbar />
    <UserItem/>
      <h1>{userId}</h1>
      <h2>Albumes</h2>
    </>
  )
}
