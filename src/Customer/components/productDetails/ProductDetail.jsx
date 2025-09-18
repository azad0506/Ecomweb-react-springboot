
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Button, Radio, RadioGroup } from '@headlessui/react'
import { Box, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { mens_kurta } from '../../../Data/mens_kurta'
import HomeSectionCard from '../HomeSectionCaresol/HomeSectionCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductByid } from '../../../stateRedux/Product/productAction'
import { addItemToCart } from '../../../stateRedux/Cart/cartAction'
import { getAllReview } from '../../../stateRedux/Review/ReviewAction'
import PostReviewForm from './PostReviewForm '

const product = {
    name: 'universaloutfit',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [

        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XLmn', inStock: true },

    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetail() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState("")
    console.log("selectedsize", selectedSize)


    const navigate = useNavigate();
    const param = useParams();
    // console.log("param", param)
    const dispatch = useDispatch();
    let store = useSelector(store => store)
    console.log("store productDetails", store)

    useEffect(() => {
        let data = { productId: param.productId }
        dispatch(findProductByid(data))
    }, [param.productId])

    const handleAddTocart = () => {
       // let data = { productId: param.productId, size: selectedSize.name }
       let data = { productId: param.productId, size: selectedSize.name,quantity: 1, price: store.product.product?.price }
        console.log("data handleAddTocart ", data)
        dispatch(addItemToCart(data))

        // Delay navigation slightly to allow console.log to appear
        // setTimeout(() => {
        //     navigate("/cart");
        // }, 100);
        navigate("/cart")
    }

    // Review
    useEffect( ()=>{
    //   let data = { productId: param.productId }
    const productId= param.productId;
    console.log("productId", productId)
        dispatch(getAllReview(productId))
    },[param])
    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* left side image and right side info */}
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 m-3   border border-green-600'>


                    {/* Image gallery */}
                    <div className="flex flex-col items-center border border-blue-800">
                        {/* main image */}
                        <div className='overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]'>
                            <img
                                alt={product.images[0].alt}
                                src={store.product.product?.imageUrl}
                                className="h-full w-full object-cover object-center "
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex flex-wrap space-x-5 justify-center">
                            {product.images.map((item, index) => (
                                <div key={index} className=' aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4'>
                                    <img
                                        alt={item.alt}
                                        src={item.src}
                                        className="h-full w-full object-cover object-center"
                                    />

                                </div>))
                            }
                        </div>

                    </div>


                    {/* Product info */}
                    {/* <div className="lg:col-span-1 max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24
                     border border-yellow-500"> */}
                    <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 border border-yellow-500">

                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{store.product.product?.brand}</h1>
                            <h1 className='text-lg lg:text-xl  text-gray-900 opacity-60 pt-1'>
                                {store.product.product?.title}

                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6 ">
                                <p className='font-semibold'>₹{store.product.product?.discountPrice}</p>
                                <p className='opacity-50 line-through'>₹{store.product.product?.price}</p>
                                <p className='text-green-600 font-semibold'>₹{store.product.product?.discountPrsent} % off</p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>

                                <div className="flex items-center space-x-3">
                                    <Rating name='read-only' value={3.5} readOnly />
                                    <p className='opacity-50 text-sm' > 575 Rating</p>
                                    <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>8753 Review</p>
                                </div>
                            </div>

                            <form className="mt-10">


                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        {/* ✅ Added: Show selected size */}
                                        <h3 className="text-sm font-medium text-gray-900">
                                            Size
                                            {selectedSize && (
                                                <spa className="mt-2 text-sm text-gray-950">
                                                    <strong>: {selectedSize.name}</strong>
                                                </spa>
                                            )}
                                        </h3>

                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                        >
                                            {product.sizes.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ checked, active }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            checked ? 'ring-2 ring-indigo-500 border-indigo-400' : 'border-gray-300',
                                                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase sm:flex-1 sm:py-6'
                                                        )
                                                    }
                                                >
                                                    <span >{size.name}</span>
                                                    {size.inStock ? (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                                                        />
                                                    ) : (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                        >
                                                            {/* <svg
                                                                stroke="currentColor"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                                                            >
                                                                <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                            </svg> */}
                                                        </span>
                                                    )}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                <Button
                                    // type="submit"
                                    // onClick={() => handleAddTocart()}
                                    onClick={handleAddTocart}
                                    className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                                >
                                    Add to Cart
                                </Button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* rating and review */}
                <section>
                    <h1>Recent Review & Rating</h1>
                   
                    <div className="border p-5">
                         {/* POST NEW REVIEW */}
                    <PostReviewForm productId={param.productId}/>
                        <Grid container>
                            <Grid item xs={7}>
                                <div className="space-y-5">
                                    {store?.review.reviews?.map((item, index) =>
                                        <div key={index}>
                                            <ProductReviewCard reviewProp={item}/>
                                        </div>
                                    )}
                                </div>
                            </Grid>

                            <Grid item xs={5} className='border space-x-2'>
                                <h1 className='text-xl font-semibold pb-1'>product Rating</h1>

                                <div className='flex items-center space-x-3'>
                                    <Rating value={3.6} precision={.5} readOnly />
                                    <p className='opacity-60'>587732 rating</p>
                                </div>


                                {/* Rating Distribution */}
                                <Box className="mt-5 space-y-3">
                                    {[
                                        { label: "Excellent", value: 80, color: "success" },
                                        { label: "Very Good", value: 60, color: "primary" },
                                        { label: "Average", value: 40, color: "warning" },
                                        { label: "Poor", value: 10, color: "error" },
                                    ].map((rating, index) => (
                                        <Grid container alignItems="center" key={index} spacing={1}>
                                            <Grid item xs={3}>
                                                <p className="text-sm font-medium">{rating.label}</p>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={rating.value}
                                                    sx={{ height: 8, borderRadius: 5 }}
                                                    color={rating.color}
                                                />
                                            </Grid>
                                            <Grid item xs={2}>
                                                <p className="text-sm opacity-70">{rating.value}%</p>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </section>

                {/* similar product */}
                <section className='pt-10 border-2 border-red-700' >
                    <h1 className='py-5 text-xl font-bold'>Similar Product</h1>


                    <Grid container spacing={3} justifyContent="center">
                        {mens_kurta.map((item, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <div className="transition-transform transform hover:scale-105 shadow-md hover:shadow-lg rounded-lg p-3 bg-white">
                                    <HomeSectionCard product={item} />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </section>
            </div>
        </div>
    )
}
