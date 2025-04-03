// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepButton from '@mui/material/StepButton';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { useLocation } from 'react-router-dom';

// const steps = ['Login', ' Delivery Address', 'Order Summary', 'Payment'];

// export default function CheckOut() {
//     const [activeStep, setActiveStep] = React.useState(0);
//     const [completed, setCompleted] = React.useState({});

//     //   navigate one step to another
//     const location = useLocation();
//     const querySearch = new URLSearchParams(location.search);
//     const step = parseInt(querySearch.get("step"))
//     console.log(step)

//     const totalSteps = () => {
//         return steps.length;
//     };

//     const completedSteps = () => {
//         return Object.keys(completed).length;
//     };

//     const isLastStep = () => {
//         return activeStep === totalSteps() - 1;
//     };

//     const allStepsCompleted = () => {
//         return completedSteps() === totalSteps();
//     };

//     const handleNext = () => {
//         const newActiveStep =
//             isLastStep() && !allStepsCompleted()
//                 ? // It's the last step, but not all steps have been completed,
//                 // find the first step that has been completed
//                 steps.findIndex((step, i) => !(i in completed))
//                 : activeStep + 1;
//         setActiveStep(newActiveStep);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleStep = (step) => () => {
//         setActiveStep(step);
//     };

//     const handleComplete = () => {
//         setCompleted({
//             ...completed,
//             [activeStep]: true,
//         });
//         handleNext();
//     };

//     const handleReset = () => {
//         setActiveStep(0);
//         setCompleted({});
//     };

//     return (
//         <div className='px-10 lg:px-20 mt-4'>

//             <Box sx={{ width: '100%' }}>
//                 <Stepper nonLinear activeStep={step}>
//                     {steps.map((label, index) => (
//                         <Step key={label} completed={completed[index]}>
//                             <StepButton color="inherit" onClick={handleStep(index)}>
//                                 {label}
//                             </StepButton>
//                         </Step>
//                     ))}
//                 </Stepper>
//                 <div>
//                     {allStepsCompleted() ? (
//                         <React.Fragment>
//                             <Typography sx={{ mt: 2, mb: 1 }}>
//                                 All steps completed - you&apos;re finished
//                             </Typography>
//                             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                                 <Box sx={{ flex: '1 1 auto' }} />
//                                 <Button onClick={handleReset}>Reset</Button>
//                             </Box>
//                         </React.Fragment>
//                     ) : (

//                         <React.Fragment>
//                             {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
//                                 Step {activeStep + 1}
//                             </Typography> */}
//                             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                                 <Button
//                                     color="inherit"
//                                     disabled={activeStep === 0}
//                                     onClick={handleBack}
//                                     sx={{ mr: 1 }}
//                                 >
//                                     Back
//                                 </Button>
//                                 <Box sx={{ flex: '1 1 auto' }} />
//                                 <Button onClick={handleNext} sx={{ mr: 1 }}>
//                                     Next
//                                 </Button>
//                                 {activeStep !== steps.length &&
//                                     (completed[activeStep] ? (
//                                         <Typography variant="caption" sx={{ display: 'inline-block' }}>
//                                             Step {activeStep + 1} already completed
//                                         </Typography>
//                                     ) : (
//                                         <Button onClick={handleComplete}>
//                                             {completedSteps() === totalSteps() - 1
//                                                 ? 'Finish'
//                                                 : 'Complete Step'}
//                                         </Button>
//                                     ))}
//                             </Box>

//                         </React.Fragment>
//                     )}
//                 </div>
//             </Box>

//         </div>
//     );
// }

import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function CheckOut() {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract step from query params and convert to number (default to 0 if invalid)
    const querySearch = new URLSearchParams(location.search);
    const stepFromQuery = parseInt(querySearch.get("step"), 10);

    const [activeStep, setActiveStep] = React.useState(isNaN(stepFromQuery) ? 1 : stepFromQuery);
    const [completed, setCompleted] = React.useState({});

    // Sync activeStep with URL query param
    useEffect(() => {
        if (!isNaN(stepFromQuery) && stepFromQuery >= 1 && stepFromQuery < steps.length) {
            setActiveStep(stepFromQuery);
        }
    }, [stepFromQuery]);

    const totalSteps = () => steps.length;
    const completedSteps = () => Object.keys(completed).length;
    const isLastStep = () => activeStep === totalSteps() - 1;
    const allStepsCompleted = () => completedSteps() === totalSteps();

    // Navigate to next step
    const handleNext = () => {
        const newActiveStep = isLastStep() && !allStepsCompleted()
            ? steps.findIndex((_, i) => !(i in completed)) // Find first incomplete step
            : activeStep + 1;

        setActiveStep(newActiveStep);
        navigate(`?step=${newActiveStep}`);
    };

    // Navigate to previous step
    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
            navigate(`?step=${activeStep - 1}`);
        }
    };

    // Set active step when clicking a step button
    const handleStep = (step) => () => {
        setActiveStep(step);
        navigate(`?step=${step}`);
    };

    // Mark step as completed and move to next
    const handleComplete = () => {
        setCompleted({ ...completed, [activeStep]: true });
        handleNext();
    };

    // Reset all steps
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        navigate(`?step=0`);
    };

    return (
        <div className='px-10 lg:px-20 mt-4'>
            <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleNext} sx={{ mr: 1 }}>
                                    Next
                                </Button>
                                {activeStep !== steps.length && (
                                    completed[activeStep] ? (
                                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                            Step {activeStep + 1} already completed
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                        </Button>
                                    )
                                )}
                            </Box>

                            {/* important */}
                            <div className='mt-10'>
                                {stepFromQuery == 1 ? <DeliveryAddressForm handleComplete={handleComplete} /> : <OrderSummary />}
                            </div>
                        </>
                    )}
                </div>
            </Box>
        </div>
    );
}
