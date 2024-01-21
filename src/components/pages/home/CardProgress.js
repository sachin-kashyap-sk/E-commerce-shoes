import { Box, Button } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardProgress = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const navigation = useNavigate();

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const backStep = () => {
    setActiveStep((prev) => prev - 1);
  };


  
  return (
    <Box>
      <Box
        onClick={() => {
          navigation(`/description/${props.item.id}`);
        }}
        sx={{
          maxWidth: 600,
          height: 400,
          overflow: "hidden",
        }}
      >
        {props.item.cardImages.map((step, index) => (
          <Box key={step.id}>
            {Math.abs(activeStep - index) <= 0 ? (
              <Box>
                <img
                  width="100%"
                  height="auto"
                  src={step.imgCard}
                  alt="pictures"
                />
              </Box>
            ) : null}
          </Box>
        ))}
      </Box>

      <MobileStepper
        label="progress Bar"
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 600 }}
        nextButton={
          <Button size="small" onClick={nextStep} disabled={activeStep === 3}>
            Next
          </Button>
        }
        backButton={
          <Button size="small" onClick={backStep} disabled={activeStep === 0}>
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default CardProgress;
