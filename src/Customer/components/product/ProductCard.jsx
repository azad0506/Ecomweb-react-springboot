

import React from 'react';
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';
const ProductCard = ({product}) => {
  const navigate=useNavigate();
    // console.log(product)
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className="productcard w-[15rem] m-3 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform  ">
      
      <div className="image h-[20rem] relative overflow-hidden">
        <img 
          className="h-full w-full object-cover object-center"
          src={product.imageUrl}
          alt="Product" 
        />
      </div>

      <div className="content p-3 bg-white transition-transform duration-300 ">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p className="text-gray-700">{product.title}</p>
        </div>

        {/* <div className="price flex items-center space-x-2 mt-2">
          <p className="text-lg font-semibold">{product.discountedPrice}</p>
          <p className="line-through text-gray-500">{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPersent}% off</p>
        </div> */}

        {/* for backend key */}
         <div className="price flex items-center space-x-2 mt-2">
          <p className="text-lg font-semibold">{product.discountPrice}</p>
          <p className="line-through text-gray-500">{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPrsent}% off</p>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;

