import React from 'react'

const AddressCart = ({address}) => {
  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>{address?.firstName+" "+ address?.lastName} </p>
        <p>{address?.streetAddress},{address?.city},{address?.zipCode} </p>
        <div className='space-y-1'>
          <p className='font-semibold'>phone number</p>
          <p>{address?.mobile}</p>


        </div>
        {/* Phone Number Section */}
        {/* <div>
          <p className="font-semibold text-gray-800">Phone Number:</p>
          <p className="text-gray-600">8746850697</p>
        </div> */}
      </div>
    </div>
  )
}

export default AddressCart
