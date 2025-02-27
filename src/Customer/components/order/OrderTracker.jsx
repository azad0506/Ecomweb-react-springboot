import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const stepsdata=[
    "placed","order Confirmed", "shipped", "out for Delivey", "Delivered"
]

const OrderTracker = (activeStep) => {
  return (
    <div className='w-full border items-center'>

      <Stepper activeStep={activeStep} alternativeLabel>

        {stepsdata.map( (label)=> <Step>
            <StepLabel sx={{fontSize:"44px",color:"green"}} >{label}</StepLabel>
        </Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTracker
