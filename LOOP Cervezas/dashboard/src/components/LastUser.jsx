import { useEffect, useState } from 'react'
import axios from 'axios'
import BigCard from "./BigCard"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const LastUser = () => {

    const [lastUser, setLastUser] = useState([])

    const fetchUsers = async () => {
        let response = await axios.get("http://localhost:3001/api/users/last")
        setLastUser(response.data.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <BigCard title="Último usuario creado">
            <div className="text-center">
                {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "40rem"}} src="assets/images/mandalorian.jpg" alt=" Ultimo Producto " /> */}
            </div>
            <h3 className='text-center p-2'>{lastUser.lastName}, {lastUser.firstName}</h3>
            <div className='d-flex justify-content-center'>
                <img
                    src={lastUser.image}
                    alt={lastUser.firstName}
                    className='w-75 rounded img-fluid'
                />
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <Link to={`/users/${lastUser.id}`} className="btn btn-danger">
                    Ver más
                </Link>
            </div>
        </BigCard>
    )
}

export default LastUser