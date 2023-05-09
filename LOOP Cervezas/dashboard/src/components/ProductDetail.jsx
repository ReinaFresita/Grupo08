import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const [allProductsId, setAllProductsId] = useState([])

    const fetchAllProductsId = async () => {
        await axios.get(`http://localhost:3001/api/products/${id}`)
        .then(res => {
            console.log([res.data.data]);
            setAllProductsId([res.data.data])
        })
      }
    
      useEffect(() => {
        fetchAllProductsId()
      }, [])

  return (
    <div className="d-flex justify-content-center w-60%">
        {allProductsId.map((product, i)=>(
          <div key={i} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={product.image} alt={product.name} className="img-fluid" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">Nombre: {product.name}</h3>
                <hr />
                <p className="card-text">
                {product.description ? <>Descripción: <br /></> : ''}
                  {product.description}
                </p>
                {product.description ? <hr /> : ''}
                <h2 className="card-text">Precio: ${product.price}</h2>
              </div>
            </div>
          </div>
        </div>
        
        ))}
    </div>
  )
}

export default ProductDetail