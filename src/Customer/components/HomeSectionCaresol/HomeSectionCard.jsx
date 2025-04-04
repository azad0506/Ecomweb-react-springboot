import React from "react";

const HomeSectionCard = (props) => {
    let {product}=props;
    console.log(product)
  return (
    <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-center text-center
    overflow-hidden border border-blue-300 ">

      <div className="h-[13rem] w-[10rem]">
        <img
          src={product.imageUrl}
          alt="Product"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.brand}</h3>
        <p className="text-sm text-gray-600">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
