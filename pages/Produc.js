import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CSSFILE/Product.css'
import { FaSearch } from "react-icons/fa";
export default function Produc() {
    const location = useLocation();
    const title = location.state ? location.state.title : 'Product';
  return (
    <>
    <div className="product">
    <h2>{title}</h2>
    <div className="productDisplay">
        we Will Add more soon
    </div>
    </div>
    

    </>
  )
}
