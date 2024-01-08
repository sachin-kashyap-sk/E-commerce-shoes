import React, { useState } from "react";
import { Box, Container, Pagination } from "@mui/material";
import HomeProducts from "../../../pages/home/HomeProducts";

const HomePag = () => {
  const [activeStep, setActiveStep] = useState(1);
  const pagNav = [
    {
      id: 1,
      navLink: <HomeProducts />,
    },
  ];

  return (
    <Box>
      {pagNav.map((step, index) => (
        <Box key={step.id}>
          {Math.abs(activeStep - index) <= 1 ? <Box>{step.navLink}</Box> : null}
        </Box>
      ))}
      <Container
        maxWidth="false"
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "2%",
        }}
      >
        <Pagination
          defaultPage={1}
          count={4}
          onChange={(event, value) => setActiveStep(value)}
        />
      </Container>
    </Box>
  );
};

export default HomePag;
