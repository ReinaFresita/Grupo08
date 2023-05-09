import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import SmallCard from "./SmallCard"

const Products = () => {

  const [allProducts, setAllProducts] = useState([])
  const [allProductsTotal, setAllProductsTotal] = useState()


  const fetchAllProducts = async () => {
    await axios.get("http://localhost:3001/api/products")
    .then(res => {
      setAllProducts(res.data.data)
      setAllProductsTotal(res.data.meta.total)
    })
  }

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <div className="container">

      <div className="d-flex justify-content-center py-2">
        <SmallCard
          title="Total Productos"
          value={allProductsTotal}
          color="primary"
          icon="box"
        />
      </div>

      <div className="row d-flex justify-content-center">
        {allProducts.map((product, i)=>(
          <div key={i} className="card col-md-5 m-2" >
            <div className="p-3 my-3 rounded">
              <h4 className="bg-warning text-dark p-2 text-center rounded">{product.name}</h4>
              <p>{product.description}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-dark w-100"
                >
                  Ver más
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Products