import { MenuItem, Select } from '@headlessui/react';
import { FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { api } from '../../../config/apiconfig';

const CreateProductForm = () => {
  const categories = [{ id: 1, name: "XL" }];

  const initialSize = [
    { name: "S", quantity: 0 },
    { name: "M", quantity: 0 },
    { name: "L", quantity: 0 },
  ]

  const [productData, SetProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountPrice: "",
    description: "",
    price: "",
    discountpresent: "",
    sizes: initialSize,
    quantity: "",
    toplavelCategory: "",
    secondlavelCategory: "",
    thirdelCategory: "",

  })

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleSizeChange = (e, index) => {
    const { name, value } = e.target;
    const fieldName = name === "size_quantity" ? "quantity" : name;

    const size = [...productData.sizes];
    size[index][fieldName] = value;

    SetProductData({ ...productData, sizes: size });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", productData)

    api.post("/api/admin/products/", productData)
      .then(() => {
        toast.success("Product added successfully");
        // Reset form
        // SetProductData({
        //   name: "", price: "", description: "", categoryId: "", brand: "", stock: "", image: null
        // });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        toast.error("Failed to add product");
      });
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    SetProductData({ ...productData, [name]: value });

  }

  return (
    <div>
      <h1>create product form</h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Add Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4  border-cyan-400 border-2">
          {/* 🔴 Fix file input - remove value attribute */}
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL Path (e.g., /image/bed.png)"
            // value={newProduct.imageUrl}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className='w-100% flex gap-5'>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              // value={newProduct.brand}
              onChange={handleChange}
              className="w-1/2 p-2 border "
              required
            />
            <input
              type="text"
              name="title"
              placeholder="title"
              // value={newProduct.brand}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
          </div>

          <div className='w-full flex gap-5'>
            <input
              type="text"
              name="color"
              placeholder="color"
              // value={newProduct.brand}
              onChange={handleChange}
              className="w-1/2 p-2 border "
              required
            />
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              // value={newProduct.brand}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
          </div>
          <div className='w-100% flex gap-5'>
            <input
              type="text"
              name="price"
              placeholder="Price"
              // value={newProduct.brand}
              onChange={handleChange}
              className="w-1/3 p-2 border "
              required
            />
            <input
              type="text"
              name="discountPrice"
              placeholder="DiscountedPrice"
              // value={newProduct.brand}
              onChange={handleChange}
              className="w-1/3 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="discountpresent"
              placeholder="DiscountedPercentage"
              // value={newProduct.brand}
              onChange={handleChange}
              className="w-1/3 p-2 border rounded"
              required
            />
          </div>



          <div className='w-full flex gap-5'>
            <div className='w-1/3'>
              <label className="block text-sm font-medium text-gray-700">Top Level Category</label>
              <select
                name="toplavelCategory"
                value={productData.toplavelCategory}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div className='w-1/3'>
              <label className="block text-sm font-medium text-gray-700">Second Level Category</label>
              <select
                name="secondlavelCategory"
                value={productData.secondlavelCategory}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select</option>
                <option value="clothing">clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Brands">Brands</option>
              </select>

            </div>

            <div className='w-1/3'>
              <label className="block text-sm font-medium text-gray-700">Third Level Category</label>
              <select
                name="thirdelCategory"
                value={productData.thirdelCategory}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select</option>
                <option value="Tops">Tops</option>
                <option value="Dresses">Dresses</option>
                <option value="Mens_Shirt">Mens_Shirt</option>
                <option value="T-Shirts">T-Shirts</option>
              </select>
            </div>
          </div>



          <textarea
            name="description"
            placeholder="Description"
            value={productData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />







          {productData.sizes.map((size, index) => (
            <div key={index} className="flex gap-4">
              <input
                type="text"
                name='name'
                value={size.name}
                onChange={(e) => handleSizeChange(e, index)}
                className="w-1/2 p-2 border rounded bg-gray-100 "
              />
              <input
                type="number"
                name="quantity"
                placeholder={`Enter quantity for ${size.name}`}
                value={size.quantity}
                onChange={(e) => handleSizeChange(e, index)}
                className="w-1/2 p-2 border rounded"
              />
            </div>
          ))}

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProductForm
