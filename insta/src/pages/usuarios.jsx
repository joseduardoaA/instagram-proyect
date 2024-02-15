import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import UserItem from '../components/users/UserItem'
import SearchForm from '../components/users/SerchForm'

export default function UsuariosPage () {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const handleSearchSubmit = (value) => {
    const newFilterUsers = users.filter((user) =>
      `${user.name}${user.username}`.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredUsers(newFilterUsers)
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((newUsers) => {
        setUsers(newUsers)
        setFilteredUsers(newUsers)
      })
      .catch(() => {
        console.error('Ha ocurrido un error')
      })
  }, [])
  return (
    <>
      <Navbar />
      <main className="container">
        <SearchForm onSubmit={handleSearchSubmit} />
        {filteredUsers.map((user) => (
          <UserItem
            key={user.id}
            email={user.email}
            username={user.username}
            name={user.name}
            userId={user.id}
          />
        ))}
      </main>
    </>
  )
}
