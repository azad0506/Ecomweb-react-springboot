import { Avatar, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductByid, findProducts, getAllProduct } from '../../../stateRedux/Product/productAction';
import { data, useNavigate } from 'react-router-dom';
import { api } from '../../../config/apiconfig';
import { findProductsSuccess } from '../../../stateRedux/Product/ProductSlice';

const ProductTable = () => {

  const navigate = useNavigate();
  let dispatch = useDispatch();
  let { product,deleteProductslice } = useSelector(store => store)
  console.log("store product", product)
  // console.log(product.products.content);



  //find page number from url
  const searchparam = new URLSearchParams(location.search);
  // console.log("searchparam", searchparam)
  const pageNumber = searchparam.get("page") || 1;
  // console.log("pageNumber", pageNumber)

  

  useEffect(() => {

    // ✅ Backend ke hisaab se sahi format me data banao
    const data = {
      category: "Tops",
      colors: [],
      size: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_asc",
      pageNumber: pageNumber-1,
      pageSize: 10,
      stock: ""
    }
  
    // dispatch(findProducts(data))
      dispatch(getAllProduct(data))

    console.log("products useeffect")
  }, [pageNumber,deleteProductslice])

  const handlePage = (event, value) => {
    console.log("Arguments value:", value);
    //set the value page=pageNumber in url
    const searchparam = new URLSearchParams(location.search);
    searchparam.set("page", value);
    // Convert the search params to a query string
    const query = searchparam.toString();

    // Navigate to the updated query string
    navigate({ search: `?${query}` })
  }

  const deleteProduct=(id)=>{
    console.log("id",id)
    dispatch(deleteProductByid(id));

    // dispatch(findProducts(data))
    console.log("after delete")


  }
  return (
    <div>
      {/*  Product List */}

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Product Details</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.products?.content?.map((item) => (
              <tr key={item.id} className="text-center border-b">
                <td className="border p-2">
                  {/* <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-16 w-16 object-cover mx-auto"
                  /> */}
                  <Avatar src={item.imageUrl}></Avatar>
                </td>
                <td className="border p-2">{item.title}</td>
                <td className="border p-2">{item.category.name}</td>
                <td className="border p-2">${item.price}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {product.products?.content?.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-2 text-gray-500">
                  No products added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* for pagination component */}
      <section className='w-full px=[3.6rem] mb-2 border border-gray-800'>
        <div className='px-4 py-5 flex justify-center'>
          <Pagination count={product.products?.totalPages} color="secondary" onChange={handlePage} />

        </div>
      </section>

    </div >
  )
}

export default ProductTable

