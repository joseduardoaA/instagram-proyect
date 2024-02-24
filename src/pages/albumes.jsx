import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import UserItem from '../components/users/UserItem'
import AlbumItem from '../components/albums/AlbumItem'

export default function AlbumesPage () {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((newUser) => {
        setUser(newUser)
      })
      .catch(() => {
        console.error('Ha ocurrido un error')
      })
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((res) => res.json())
      .then((newAlbums) => {
        setAlbums(newAlbums)
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
          <div className="col-6">
            {user
              ? (
              <UserItem className
                userId={user.id}
                username={user.username}
                name={user.name}
                email={user.email}
              />
                )
              : null}
          </div>
        </div>
        <div className="row">
          {albums.map((album) => (
            <AlbumItem key={album.id} id={album.id} title={album.title} />
          ))}
        </div>
      </div>
    </>
  )
}
