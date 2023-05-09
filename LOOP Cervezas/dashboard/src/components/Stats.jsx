import { useEffect, useState } from 'react'
import axios from 'axios'
import SmallCard from './SmallCard'

const Stats = () => {

    const [productLength, setProductLength] = useState()
    const [categoryLength, setCategoryLength] = useState()
    const [userLength, setUserLength] = useState()
    
    const fetchProducts = async () => {
        let response = await axios.get("http://localhost:3001/api/products")
        setProductLength(response.data.meta.total)
    }

    const fetchCategories = async () => {
        let response = await axios.get("http://localhost:3001/api/categories")
        setCategoryLength(response.data.meta.total)
    }
    
    const fetchUsers = async () => {
        let response = await axios.get("http://localhost:3001/api/users")
        setUserLength(response.data.meta.total)
    }

    useEffect(() => {
        fetchProducts()
        fetchCategories()
        fetchUsers()
    }, [])

    return (
        <div className="row">
            <SmallCard title="Total Productos" value={productLength} color="primary" icon="box"/>
            <SmallCard title="Total Categorias" value={categoryLength} color="success" icon="tag"/>
            <SmallCard title="Total Usuarios" value={userLength} color="warning" icon="user"/>
        </div>
    )
}

export default Stats