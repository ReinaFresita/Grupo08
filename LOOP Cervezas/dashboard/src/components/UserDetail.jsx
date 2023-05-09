import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";

const UserDetail = () => {
    const { id } = useParams();
    const [allUsersId, setAllUsersId] = useState([])

    const fetchAllUsersId = async () => {
        await axios.get(`http://localhost:3001/api/users/${id}`)
        .then(res => {
            console.log([res.data.data]);
            setAllUsersId([res.data.data])
        })
      }
    
      useEffect(() => {
        fetchAllUsersId()
      }, [])

  return (
    <div className="d-flex justify-content-center w-60%">
        {allUsersId.map((user, i)=>(
          <div key={i} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={user.image} alt={user.firstName} className="img-fluid" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                  <h4 className="">Nombre y apellido: <span className="font-weight-light" style={{fontSize:'20px'}}> {user.firstName}, {user.lastName}</span></h4>
                <hr />
                <p className="card-text">
                <h4 className="">Email: <span className="font-weight-light" style={{fontSize:'20px'}}>{user.email}</span></h4>
                </p>
                <hr />
                <h4>Usuario N°: <span className="font-weight-light">{user.id}</span></h4>
              </div>
            </div>
          </div>
        </div>
        
        ))}
    </div>
  )
}

export default UserDetail