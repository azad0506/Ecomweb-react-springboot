import { Step, StepConnector, stepConnectorClasses, StepLabel, Stepper, styled } from '@mui/material'
import React from 'react'

const stepsdata=[
    "placed","order Confirmed", "shipped", "Delivered"
]

// // for blue line
const ColorConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.grey[300],
    borderRadius: 1,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
     backgroundColor: '#9FE2BF', // Blue color for active connector
   // backgroundColor:"yellow"
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundColor: '#1976d2', // Blue for completed steps
   
  },
}));
const OrderTracker = ({activeStep}) => {
  console.log("activeStep",activeStep)
  return (
    <div className='w-full border items-center'>

      {/* <Stepper activeStep={activeStep} alternativeLabel> */}
       <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<ColorConnector />}
      sx={{ mb: 5 }}
    >

        {stepsdata.map( (label,index)=> <Step key={index}>
            <StepLabel sx={{fontSize:"44px",color:"red"}} >{label}</StepLabel>
        </Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTracker
