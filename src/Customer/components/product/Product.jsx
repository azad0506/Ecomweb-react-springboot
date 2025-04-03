'use client'

import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductCard from './ProductCard'
import { mens_kurta } from '../../../Data/mens_kurta'
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Category } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../../stateRedux/Product/productAction'
import { Pagination } from '@mui/material'
const sortOptions = [

    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const filters = [
    // color
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
   
    //   size
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: false },
        ],
    },
    //   price
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '999-1999', label: '₹999 to ₹1999', checked: false },
            { value: '2000-4999', label: '₹2000 to ₹4999', checked: false },
            { value: '5000-9999', label: '₹5000 to ₹9999', checked: false },
            { value: '10000-19999', label: '₹10,000 to ₹19,999', checked: false },
            { value: '20000-49999', label: '₹20,000 to ₹49,999', checked: false },
        ],
    },
    //discount range
    {
        id: 'discount',
        name: 'Discount Range',
        options: [
            { value: '10', label: '10% And Above', checked: false },
            { value: '20', label: '20% And Above', checked: false },
            { value: '30', label: '30% And Above', checked: false },
            { value: '40', label: '40% And Above', checked: false },
            { value: '50', label: '50% And Above', checked: false },
        ],
    },
    {
        id: 'stock',
        name: 'stock',
        options: [
            { value: 'instock', label: 'in stock', checked: false },
            { value: 'outofstock', label: 'out of stock', checked: false },
            
        ],
    }

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Product() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
   let location= useLocation();
   let navigate=useNavigate();
   let param=useParams();
//    console.log(location)
   console.log(param)

   let dispatch=useDispatch();
let store=useSelector(store=>store)
console.log("store", store)
console.log(store.product.products.content)

   let decodedQueryString=decodeURIComponent(location.search);
   const searchParam= new URLSearchParams(decodedQueryString);
   const colorValue=searchParam.get("color");//color key which available in url
   const sizeValue=searchParam.get("size");
   const priceValue=searchParam.get("price");
   const discountValue=searchParam.get("discount");
   const sortValue=searchParam.get("sort");
   const pageNumber=searchParam.get("page")|| 1;
   const stock=searchParam.get("stock");

   const handlePage=(event,value)=>{
    console.log("Arguments value:", value);
     // Create a URLSearchParams instance from the current location.search
     const searchparam = new URLSearchParams(location.search);
     // Update the 'page' parameter with the new value
     searchparam.set("page", value);
     // Convert the search params to a query string
     const query = searchparam.toString();
    
     // Navigate to the updated query string
    navigate({search:`?${query}`})
   }
useEffect( ()=>{

    const [minPrice,maxPrice]=priceValue===null?[0,10000]:priceValue.split("-").map(Number);

      // ✅ Backend ke hisaab se sahi format me data banao
    const data={
        category:param.labelThree || "",
        colors:colorValue ||[],
        size:sizeValue || [],
        minPrice,
        maxPrice,
        minDiscount:discountValue ||0,
        sort:sortValue || "price_asc",
        pageNumber:pageNumber-1,
        pageSize:2 ,
        stock:stock || ""
    }
    console.log("data",data)
   dispatch(findProducts(data)) 
   console.log("products")
},[param.labelThree,
    colorValue,sizeValue,priceValue,discountValue,
    sortValue,pageNumber,stock
])




//  function for  multiple filter 
   const handleFilter=(value,sectionId)=>{
    const searchParam= new URLSearchParams(location.search);
    console.log("searchParam"+ searchParam)
    let filterValue=searchParam.getAll(sectionId)
    console.log("filterValue"+ filterValue)

    if(filterValue.length>0 && filterValue[0].split(",").includes(value)){
        filterValue=filterValue[0].split(",").filter( (item)=> item!==value);

        if(filterValue.length===0){
            searchParam.delete(sectionId)
        }
    }
    else{
        filterValue.push(value)
    }
    if(filterValue.length>0){
        searchParam.set(sectionId,filterValue.join(","));
       
    }
    const query=searchParam.toString();
    console.log("query"+ query)
    navigate({search:`?${query}`})
   }

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>

                            {/* SIDEBAR Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Categories</h3>


                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                                                    <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex gap-3">
                                                        <div className="flex h-5 shrink-0 items-center">
                                                            <div className="group grid size-4 grid-cols-1">
                                                                <input
                                                                 onClick={() => handleFilter(option.value, section.id)} // ✅ Added event handler
                                                                    defaultValue={option.value}
                                                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    type="checkbox"
                                                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    fill="none"
                                                                    viewBox="0 0 14 14"
                                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                >
                                                                    <path
                                                                        d="M3 8L6 11L11 3.5"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-checked:opacity-100"
                                                                    />
                                                                    <path
                                                                        d="M3 7H11"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                            className="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto  px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900" onClick={handleFilter}>Our Product</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <MenuItem key={option.name}>
                                                <a
                                                    href={option.href}
                                                    className={classNames(
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                                                    )}
                                                >
                                                    {option.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Menu>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon aria-hidden="true" className="size-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon aria-hidden="true" className="size-5" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* SIDEBAR Filters */}

                            <form className="hidden lg:block">
                                {/* Filter Heading with Icon */}
                                <div className="flex group items-center justify-between lg:col-span-4   rounded-md w-full py-10 border border-green-600">
                                    <h1 className="text-lg font-semibold text-gray-900" >Filters</h1>
                                    <button className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-200">
                                        <FilterListIcon className="w-6 h-6 text-gray-600" aria-hidden="true" />
                                    </button>
                                </div>
                             
                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-b  py-6 border border-green-600">
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                                                    <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex gap-3">
                                                        <div className="flex h-5 shrink-0 items-center">
                                                            <div className="group grid size-4 grid-cols-1">
                                                                <input
                                                              
                                                                onClick={()=>handleFilter(option.value,section.id)}
                                                                    defaultValue={option.value}
                                                                    defaultChecked={option.checked}
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    type="checkbox"
                                                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    fill="none"
                                                                    viewBox="0 0 14 14"
                                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                >
                                                                    <path
                                                                        d="M3 8L6 11L11 3.5"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-checked:opacity-100"
                                                                    />
                                                                    <path
                                                                        d="M3 7H11"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>





                            {/*  Your content Product grid */}
                            <div className="lg:col-span-3 w-full">
                                <div className='flex flex-wrap justify-center bg-white py-5'>
                                    {/* {mens_kurta.map((item) => <ProductCard product={item} />)} */}
                                    {store.product.products?.content?.map( (item)=>(
                                        <ProductCard key={item.id} product={item} />
                                    ))}

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* for pagination component */}
                    <section className='w-full px=[3.6rem] mb-2 border border-gray-800'>
                        <div className='px-4 py-5 flex justify-center'>
                        <Pagination count={store.product.products?.totalPages} color="secondary"  onChange={handlePage}/>

                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
