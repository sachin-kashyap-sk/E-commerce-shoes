import React from "react";
import { Box } from "@mui/material";
import classes from "../../styleContainer/PagesStyles/description/description.module.css";
const DescriptionBottom = (props) => {
  return (
    <Box sx={{ paddingTop: "3%", paddingBottom: "3%" }}>
      <Box className={classes.bottomContainer}>
        <p className={classes.productStory}>Product Story</p>
        <p className={classes.productStoryText}>
          {props.productDes.productStory}
        </p>
        <Box className={classes.descriptionBottom}>
          <Box className={classes.detailContainer}>
            <p className={classes.detail}>Detail</p>
            <Box sx={{ width: "100%" }}>
              {props.productDes.detail.map((item) => (
                <ul key={item.id}>
                  <li className={classes.point}>{item.point}</li>
                </ul>
              ))}
            </Box>
          </Box>
          <Box className={classes.detailContainer}>
            <p className={classes.detail}>Manufacturer's Address</p>
            <Box className={classes.manufacturerContainer}>
              {props.productDes.manufacturer.map((item) => (
                <Box key={item.id}>
                  <p className={classes.point}>{item.point}</p>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DescriptionBottom;
