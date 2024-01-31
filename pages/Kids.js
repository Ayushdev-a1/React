import React from 'react'
import { Link } from 'react-router-dom'
import cl1 from '../kids/cl1.webp'
import cl2 from '../kids/cl2.webp'
import cl3 from '../kids/cl3.webp'
import cl4 from '../kids/cl4.webp'
import cl5 from '../kids/cl5.webp'
import swetshirt from '../men/swetshirt.webp'
import hoodies from '../men/hoodies.webp'
import jackets from '../men/jackets.webp'
import Oversized from '../men/Oversized.webp'
import sneekers from '../men/sneekers.webp'
import jeans from '../men/jeans.webp'
import cargos from '../men/cargos.webp'
import shirts from '../men/shirts.webp'
import tshirts from '../men/tshirts.webp'
import ohalftshirt from '../men/ohalftshirt.webp'
import shorts from '../men/Shorts.webp'
const Kids = () => {
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cl1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <img src={cl2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cl3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cl4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cl5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="productSection">
        <div className="title">
          <h2 >Categories</h2>
        </div>
        <div className="wcategories">
          <div className="win1">
          <Link to={'/swetshirt'}> <img src={swetshirt}/> </Link>
          <Link to={'/top'}><img src={hoodies}/> </Link>
          <Link to={'/jeans'}><img src={jackets}/> </Link>
          <Link to={'/dress'}> <img src={Oversized}/>  </Link>
          </div>
          <div className="win2">
          <Link to={'/coord'}> <img src={sneekers}/>  </Link>
          <Link to={'/cargos'}><img src={jeans}/> </Link>
          <Link to={'/shoes'}> <img src={cargos}/> </Link>
          </div>
          <div className="win3">
          <Link to={'/Shirts'}> <img src={shirts}/> </Link>
          <Link to={'/Shackets'}> <img src={tshirts}/> </Link>
          <Link to={'/Hoodies'}> <img src={shorts}/> </Link>
          <Link to={'/Sweters'}> <img src={ohalftshirt}/> </Link>
          </div>
        </div>
        </div>
    </>
  )
}

export default Kids
