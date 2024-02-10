import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

export default function PruebaPage () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((newUsers) => {
        setUsers(newUsers)
      })
      .catch(() => {
        console.error('Ha ocurrido un error')
      })
  }, [])

  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Prueba</h1>
        {users.map((user) => (
        <div key={user.id}>{user.name}</div>
        ))}
      <img src="https://www.gravatar.com/avatar/1576eaf1007c92a24426163a18e99ccc?d=identicon" />
      </main>
    </>
  )
}
