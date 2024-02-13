import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import md5 from 'md5'
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
        <form className="row g-10">
        <div className="col-9">
        <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="Buscar por nombre o usuario"/>
        </div>
        <div className="col-1">
        <button className="btn btn-primary mb-3" type="submit">Buscar</button>
        </div>
        </form>
        {users.map((user) => (
          <div key={user.id} className="mb-3 card" role='button'>
            <div className="card-body row">
              <div className="col-1">
                <img
                  className="rounded-circle"
                  src={`https://www.gravatar.com/avatar/${md5(
                    user.email
                  )}?d=identicon`}
                />
              </div>
              <div className="col-9" key={user.id}>
                <div className="h3">{user.name}</div>
                <div className="h4">@{user.username}</div>
              </div>
              <div className='my-auto text-end col-2 h5'>Ver álbumes</div>
            </div>
          </div>
        ))}
      </main>
    </>
  )
}
