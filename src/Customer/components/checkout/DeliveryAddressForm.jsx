import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCart from '../AddressCart/AddressCart'

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);// Captures form data
    console.log(data.get("firstName")); // Retrieves value of input with name="firstName"

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipcode: data.get("zipcode"),
      phoneNumber: data.get("phoneNumber"),
    }
    console.log("address", address)
  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>

          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCart />

            <button className="bg-blue-600  hover:bg-blue-700 text-white font-semibold py-3 px-4 mt-1 rounded-lg shadow-md transition duration-300">
              Deliver Here
            </button>

          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form action="" onSubmit={handleSubmit}>
              <Grid container spacing={3}>

                <Grid item xs={12} sm={6} >
                  <TextField
                    required
                    id='firstName'
                    name='firstName'
                    label="first Name"
                    fullWidth
                    autoComplete='' >
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    required
                    id='lastName'
                    name='lastName'
                    label="Last Name"
                    fullWidth
                    autoComplete='' >
                  </TextField>
                </Grid>

                <Grid item xs={12}  >
                  <TextField
                    required
                    id='address'
                    name='address'
                    label="Address"
                    fullWidth
                    autoComplete=''
                    rows={4} >
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6} >
                  <TextField
                    required
                    id='city'
                    name='city'
                    label="city"
                    fullWidth
                    autoComplete='given-name' >
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    required
                    id='state'
                    name='state'
                    label="state/Region"
                    fullWidth
                    autoComplete='given-name' >
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6} >
                  <TextField
                    required
                    id='zip'
                    name='zipcode'
                    label="zip/postal code"
                    fullWidth
                    autoComplete='shipping postal-code' >
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    required
                    id='phoneNumber'
                    name='phoneNumber'
                    label="phoneNumber"
                    fullWidth
                    autoComplete='given-name' >
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300"
                    type='submit'>
                    Deliver Here
                  </button>
                </Grid>

              </Grid>
            </form>
          </Box>
        </Grid>

      </Grid>
    </div>
  )
}

export default DeliveryAddressForm
