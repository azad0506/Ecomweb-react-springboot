import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const ProductReviewCard = ({reviewProp}) => {
    console.log("reviewProp", reviewProp)
    let {review}=useSelector(store=>store)
    console.log("store in ProductReviewCard",review)
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={2}  sm={2} md={1}    >
                    <Box>
                        <Avatar className='text-white' sx={{ width: 56, height:56 }}>{reviewProp?.user.firstName[0]}</Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div>
                            <p className='font-semibold text-lg'>{reviewProp?.user?.firstName}</p>
                            {/* <p className='opacity-70'>{reviewProp.createdAt}</p> */}
                               {new Date(reviewProp.createdAt).toLocaleString()}

                        </div>
                    </div>
                     <Rating value={3.5} name='half-rating' readOnly precision={.5} />   {/*//precision is used for half */}
                <p>{reviewProp?.review}</p>
                </Grid>

                
            </Grid>
        </div>
    )
}

export default ProductReviewCard
