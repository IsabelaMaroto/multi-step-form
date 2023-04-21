import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Step1 } from "../step1/step1";
import { Step2 } from "../step2/step2";
import { Step3 } from "../step3/step3";

const steps = ["Your info", "Select plan", " Add-ons", "Summary"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [period, setPeriod] = React.useState(false);

  const isStepOptional = (step) => {};

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

 /*  const typePlan = (data) => {
    let planPeriod = data
    console.log(planPeriod)
  } */

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "absolute",
          top: "3%",
          left: "50%",
          transform: "translate(-50%, -3%)",
        }}
      >
        <Stepper
          activeStep={activeStep}
          sx={{
            height: "60px",
            div: {
              paddingRight: "unset",
            },

            svg: {
              color: "rgba(0, 0, 0, 0)",
              border: "2px solid hsl(0, 0%, 100%)",
              borderRadius: "50%",
              fontSize: "2rem",
            },
            ".css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
              color: "hsl(228, 100%, 84%)",
              border: "unset",

              ".css-117w1su-MuiStepIcon-text": {
                fill: "hsl(0, 0%, 0%)",
              },
            },
            ".css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
              path: {},
            },
          }}
          connector={false}
        >
          {steps.map((label, index) => {
            const stepProps = { completed: false };
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}></StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box
           
          >
            {activeStep === 0 && 
              <Step1 />}
            {activeStep === 1 && 
              <Step2 setPeriod={setPeriod}/>}
            {activeStep === 2 && 
              <Step3 period={period}/>
            }
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "hsl(0, 0%, 100%)",
              position: "absolute",
              bottom: "0px",
              width: "100%",
              padding: "20px",
            }}
          >
            {activeStep != 0 ? (
              <Button
                color="inherit"
                onClick={handleBack}
                sx={{
                  mr: 1,
                  textTransform: "capitalize",
                  color: "hsl(231, 11%, 63%)",
                }}
              >
                Go Back
              </Button>
            ) : null}

            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              onClick={handleNext}
             sx={{
                backgroundColor: `${activeStep === steps.length - 1 ? "hsl(243, 100%, 62%) !important" : "hsl(213, 96%, 18%) !important"}` ,
                color: "hsl(0, 0%, 100%)", 
                textTransform: "capitalize",
              }} 
            >
              {activeStep === steps.length - 1 ? "Confirm" : "Next Step"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
