import React from "react";
import { Container, Box } from "@mui/material";
import classes from "../../styleContainer/PagesStyles/HomeStyles/HomeTop.module.css";
const Home = () => {
  
  return (
    <Container maxWidth="false">

      <Box className={classes.mainContainer}>
        <Box>
          <p className={classes.text}>Choose Your Best Partner with us</p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p className={classes.subTitle}>Sports</p>
            <p className={classes.subTitle}>Running</p>
            <p className={classes.subTitle}>Walking</p>
          </Box>
        </Box>

        <Box className={classes.rangeContainer}>
          <p className={classes.rangeText}>
            Our shop has a wide range of variety of shoes models come and choose
            for yourself a suitable pair to wear anytime and anywhere
          </p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
