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

// Checkout steps configuration
const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function CheckOut1() {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Get current step from URL query parameter
    const querySearch = new URLSearchParams(location.search);
    const urlStep = parseInt(querySearch.get("step"), 10);
    
    // State management
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    // Synchronize step with URL parameter on component mount
    useEffect(() => {
        if (!isNaN(urlStep) && urlStep >= 0 && urlStep < steps.length) {
            setActiveStep(urlStep);
        }
    }, [urlStep]);

    // Helper functions
    const totalSteps = () => steps.length;
    const completedSteps = () => Object.keys(completed).length;
    const isLastStep = () => activeStep === totalSteps() - 1;
    const allStepsCompleted = () => completedSteps() === totalSteps();

    // Handle navigation to different steps
    const updateStep = (newStep) => {
        if (newStep >= 0 && newStep < steps.length) {
            setActiveStep(newStep);
            navigate(`?step=${newStep}`);
        }
    };

    // Navigate to next step with validation
    const handleNext = () => {
        if (!isLastStep()) {
            updateStep(activeStep + 1);
        }
    };

    // Navigate to previous step
    const handleBack = () => {
        if (activeStep > 0) {
            updateStep(activeStep - 1);
        }
    };

    // Mark step as completed
    const handleComplete = () => {
        if (!completed[activeStep]) {
            setCompleted({ ...completed, [activeStep]: true });
        }
        handleNext();
    };

    // Reset checkout process
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        navigate(`?step=0`);
    };

    // Render current step content
    const renderStepContent = () => {
        switch(activeStep) {
            case 0:
                return <div>Login Form Component</div>;
            case 1:
                return <DeliveryAddressForm onComplete={handleComplete} />;
            case 2:
                return <OrderSummary onConfirm={handleComplete} />;
            case 3:
                return <div>Payment Gateway Component</div>;
            default:
                return null;
        }
    };

    return (
        <div className='px-10 lg:px-20 mt-4'>
            {/* Checkout Progress Stepper */}
            <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton 
                                color="inherit" 
                                onClick={() => updateStep(index)}
                                disabled={!completed[index-1] && index > 0}
                                aria-label={`Go to ${label} step`}
                            >
                                {label}
                                {completed[index] && ' ✓'} {/* Show checkmark for completed steps */}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>

                {/* Step Content Area */}
                <div className="mt-8 p-4 border rounded-lg">
                    {renderStepContent()}
                </div>

                {/* Navigation Controls */}
                {!allStepsCompleted() && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
                        <Button
                            variant="outlined"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            aria-label="Previous step"
                        >
                            Back
                        </Button>
                        
                        {activeStep !== steps.length - 1 ? (
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                aria-label="Next step"
                            >
                                Continue
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleComplete}
                                aria-label="Complete order"
                            >
                                Place Order
                            </Button>
                        )}
                    </Box>
                )}

                {/* Completion Message */}
                {allStepsCompleted() && (
                    <div className="mt-8 text-center">
                        <Typography variant="h5" gutterBottom>
                            Order Placed Successfully!
                        </Typography>
                        <Button 
                            variant="outlined" 
                            onClick={handleReset}
                            aria-label="Start new order"
                        >
                            Start New Order
                        </Button>
                    </div>
                )}
            </Box>
        </div>
    );
}