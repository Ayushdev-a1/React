import React from 'react';
import Body from './Body'
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
import { useGlobalContext } from '../Context';
import { Link } from 'react-router-dom';
import '../CSSFILE/Men.css'

const Men = () => {
  const products = useGlobalContext();
  const openProductPage = ()=>{
    console.log('logg')
  }
  return (
    <>
    <Body/>
    <div className="productSection">
        <div className="title">
          <h2 >Categories</h2>
        </div>
        <div className="wcategories">
          <div className="win1">
          <Link to={'/product'} state={{title: 'Sweatshirts'}}> <img src={swetshirt}/> </Link>
          <Link to={'/product'} state={{title: 'Hoodies'}}><img src={hoodies}/> </Link>
          <Link to={'/product'} state={{title: 'jackets'}}><img src={jackets}/> </Link>
          <Link to={'/product'} state={{title: 'Oversized'}}> <img src={Oversized}/>  </Link>
          </div>
          <div className="win2">
          <Link to={'/product'} state={{title: 'Sneakers'}} > <img src={sneekers}/>  </Link>
          <Link to={'/product'} state={{title: 'Jeans'}}><img src={jeans}/> </Link>
          <Link to={'/product'} state={{title: 'Cargos'}}> <img src={cargos}/> </Link>
          </div>
          <div className="win3">
          <Link  to={'/product'} state={{title: 'Shirts'}}> <img src={shirts}/> </Link>
          <Link  to={'/product'} state={{title: 'T-shirts'}}> <img src={tshirts}/> </Link>
          <Link  to={'/product'} state={{title: 'Shorts'}}> <img src={shorts}/> </Link>
          <Link  to={'/product'} state={{title: 'Oversized Half T-shirt'}}> <img src={ohalftshirt}/> </Link>
          </div>
        </div>
        </div>
    </>
  );
};

export default Men;
