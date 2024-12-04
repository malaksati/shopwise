import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ServicesTest from './ServicesTest'
import { CartContext } from './Context/Context'
//import './js/script'
//import 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'
//import './js/swiper.js'
//import 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css'
function HomePage() {
  const [product, setProduct] = useState([])
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProduct(response.data);
    console.log(product);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const GlobalState = useContext(CartContext)
  const dispatch = GlobalState.dispatch;
  console.log(GlobalState)
  return (
    <Fragment>
      <div className='home-container'>
        <div className='main-home'>
          <div className='home-products container'>
            <h1>Women's Clothing</h1>
            <div className='product'>{product?.map((el,index) => (
              
              (el.category == "women's clothing") && (
                <div>
                  <div key={el.id} className='card'>
                    <div className='image'>
                      <img src={el.image} alt='photo' />
                    </div>
                    <h2>{el.title}</h2>
                    <h4>${el.price}</h4>
                    <Link to={`/product/${el.id}`}>Read More</Link>
                    <button onClick={()=>dispatch({type:'ADD',pauload:{el}})}>Add To Cart</button>
                  </div>
                </div>)))
            }</div>
            <h1>Men's Clothing</h1>
            <div className='product'>{product?.map((el,index) => (
              
              (el.category == "men's clothing") && (
                <div>
                  <div key={index} className='card'>
                    <div className='image'>
                      <img src={el.image} alt='photo' />
                    </div>
                    <h2>{el.title}</h2>
                    <h4>${el.price}</h4>
                    <Link to={`/product/${el.id}`}>Read More</Link>
                    <button onClick={()=>dispatch({type:'ADD',pauload:el})}>Add To Cart</button>
                  </div>
                </div>)))
            }</div>
            <ServicesTest/>
            <h1>Jewelery</h1>
            <div className='product'>{product?.map((el,index) => (
              
              (el.category == "jewelery") && (
                <div>
                  <div key={index} className='card'>
                    <div className='image'>
                      <img src={el.image} alt='photo' />
                    </div>
                    <h2>{el.title}</h2>
                    <h4>${el.price}</h4>
                    <Link to={`/product/${el.id}`}>Read More</Link>
                    <button onClick={()=>dispatch({type:'ADD',pauload:el})}>Add To Cart</button>
                  </div>
                </div>)))
            }</div>
            <h1>Electronics</h1>
            <div className='product'>{product?.map((el,index) => (
              (el.category == "electronics") && (
                <div>
                  <div key={index} className='card'>
                    <div className='image'>
                      <img src={el.image} alt='photo' />
                    </div>
                    <h2>{el.title}</h2>
                    <h4>${el.price}</h4>
                    <Link to={`/product/${el.id}`}>Read More</Link>
                    <button onClick={()=>dispatch({type:'ADD',payload:el})}>Add To Cart</button>
                  </div>
                </div>)))
            }</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HomePage