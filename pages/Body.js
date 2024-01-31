import React from 'react'
import clouser1 from '../assets/clouser1.webp';
import clouser2 from '../assets/clouser2.webp';
import clouser3 from '../assets/clouser3.webp';
import clouser4 from '../assets/Clouser4.webp';
import clouser5 from '../assets/clousers5.webp';

const Body = () => {
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={clouser1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src={clouser2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={clouser4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={clouser5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src={clouser3} className="d-block w-100" alt="..."/>
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

    </>
  )
}

export default Body
