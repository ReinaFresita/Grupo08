import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import SmallCard from "./SmallCard"

const Users = () => {

  const [allUsers, setAllUsers] = useState([])
  const [allUsersTotal, setAllUsersTotal] = useState()

  const fetchAllUsers = async () => {
    await axios.get("http://localhost:3001/api/users")
      .then(res => {
        setAllUsers(res.data.data)
        setAllUsersTotal(res.data.meta.total)
      })
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  return (
    <div>

      <div className="d-flex justify-content-center py-2">
        <SmallCard
          title="Total Usuarios"
          value={allUsersTotal}
          color="warning"
          icon="user"
        />
      </div>

      <div className="container">
      <div className="row d-flex justify-content-center">
        {allUsers.map((users) => (
            <div className="card col-md-5 m-2">
            <div className="card-body">
              <h5 className="card-title">{users.id} - {users.firstName}, {users.lastName}</h5>
              <p className="card-text">{users.email}</p>
              <Link
                  to={`/users/${users.id}`}
                  className="btn btn-dark"
                >
                  Ver más
                </Link>
            </div>
          </div>
        ))}
    </div>
    </div>
  </div>

  )
}

export default Users