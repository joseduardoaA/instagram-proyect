import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import UserItem from '../components/users/UserItem'

export default function AlbumesPage (props) {
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
        <h1>{userId}</h1>
        <div className="row">
          <div className="col-6">
            {user
              ? (
              <UserItem
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
            <div key={album.id} className="col-3">
              <div className="card">
              <img src={`https://picsum.photos/200/300?random=${album.id}`}/>
                <div className="card-body">
                  <p className="card-text">
                  {album.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
