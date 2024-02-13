import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import UserItem from '../components/users/UserItem'

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
        <form className="row mb-5">
          <div className="col-11">
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Buscar por nombre o usuario"
            />
          </div>
          <div className="col-1 d-grid">
            <button className="btn btn-primary btn-lg" type="submit">
              Buscar
            </button>
          </div>
        </form>
        {users.map((user) => (
          <UserItem key={user.id} email={user.email} username={user.username} name={user.name}/>
        ))}
      </main>
    </>
  )
}
