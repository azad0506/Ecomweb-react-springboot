import React, { useEffect } from 'react'
import HomeCaresol from '../components/HomeCaresol'
import HomeSectionCarelo from '../components/HomeSectionCaresol/HomeSectionCarelo'
import { mens_kurta } from '../../Data/mens_kurta'
import { mens_shoes } from '../../Data/mens_shoes'
import { api } from '../../config/apiconfig'
import { fetchMenProducts, fetchWomenProducts } from '../../stateRedux/Product/productAction'
import { useDispatch, useSelector } from 'react-redux'

const HomePage = () => {
  let {product}=useSelector(store=>store)
  // console.log("store",product)
let dispatch=useDispatch();
  useEffect(() => {
   
   dispatch(fetchWomenProducts())

   dispatch(fetchMenProducts())
   
  }, [dispatch])
  return (
    <div>

      <HomeCaresol />

      <div className='space-y-10 py-20'>
        <HomeSectionCarelo data={product?.womenProducts} sectionName={"Womens's Kurta"} />
        {/* <HomeSectionCarelo data={mens_shoes} sectionName={"Men's Shoes"} /> */}
        {/* <HomeSectionCarelo data={mens_kurta} sectionName={"Men's Shirt"} /> */}
         <HomeSectionCarelo data={product?.mensProducts} sectionName={"Mens's Kurta"} />
        {/* <HomeSectionCarelo data={product?.mensProducts.slice(5)} sectionName={"Mens's Kurta"} /> */}

      </div>
    </div>
  )
}

export default HomePage
