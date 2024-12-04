import React, { Fragment,useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function Product() {
  const params = useParams()
  const productId = params.id
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then(res => setProduct(res.data)).catch(err => console.log(err))
  })
  return (
    <Fragment>
      <div className='main-product'>
        <div className='container'>
        {
          product && (
            <div className='product-details'>
              <div className='product-img'>
                <img src={product.image} alt="photo" />
              </div>
              <div className='product-detail'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h3>${product.price}</h3>
                <Link>Add To Cart</Link>
              </div>
            </div>
          )
        }
        </div>
      </div>
    </Fragment>
  )
}

export default Product