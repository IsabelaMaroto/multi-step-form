import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { plans } from "../step2/step2";
import { Step1 } from "../step1/step1";
import { Step2 } from "../step2/step2";
import { Step3 } from "../step3/step3";
import { Step4 } from "../step4/step4";
import { Step5 } from "../step5/step5";

const steps = ["Your info", "Select plan", " Add-ons", "Summary"];

export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [information, setInformation] = React.useState({
    yearly: false,
    indexPlan: 0,
    plan: plans[0],
    service: [0,1],
  });

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
          <Box>
            <Step5/>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              backgroundColor: "hsl(0, 0%, 100%)",
              position: "absolute",
              bottom: "0px",
              width: "100%",
              padding: "20px",
            }}
          >
            <Button
              onClick={handleReset}
              sx={{
                backgroundColor: `${
                  activeStep === steps.length - 1
                    ? "hsl(243, 100%, 62%) !important"
                    : "hsl(213, 96%, 18%) !important"
                }`,
                color: "hsl(0, 0%, 100%)",
                textTransform: "capitalize",
              }}
            >Start again</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box>
            {activeStep === 0 && (
              <Step1
                setInformation={setInformation}
                information={information}
              />
            )}
            {activeStep === 1 && (
              <Step2
                setInformation={setInformation}
                information={information}
              />
            )}
            {activeStep === 2 && (
              <Step3
                setInformation={setInformation}
                information={information}
              />
            )}
            {activeStep === 3 && (
              <Step4
                setInformation={setInformation}
                information={information}
              />
            )}
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
                  

                  ":hover":{
                    color: "hsl(213, 96%, 18%)",
                  }
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
                backgroundColor: `${
                  activeStep === steps.length - 1
                    ? "hsl(243, 100%, 62%) !important"
                    : "hsl(213, 96%, 18%) !important"
                }`,
                color: "hsl(0, 0%, 100%)",
                textTransform: "capitalize",
                minWidth:"81px"
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
