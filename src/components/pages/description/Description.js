import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { descriptionById } from "../../ReduxSection/home/HomeSlice";
import { Box, Container } from "@mui/material";
import DesRightSection from "./DesRightSection";
import classes from "../../styleContainer/PagesStyles/description/description.module.css";
import DescriptionBottom from "./DescriptionBottom";
const Description = () => {
  const { id } = useParams();
  const productDes = useSelector((state) => state.Home.productDes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(descriptionById(id));
  }, [id, dispatch]);

  return !!productDes ? (
    <Container maxWidth="false">
      <div className={classes.mainContainer}>
        <Box className={classes.imgContainer}>
          {productDes.cardImages.map((item) => (
            <img
              key={item.id}
              width="50%"
              height="auto"
              src={item.imgCard}
              alt="photos"
            />
          ))}
        </Box>

        <Box className={classes.firstContainer}>
          <DesRightSection productDes={productDes} />
        </Box>
      </div>
      <DescriptionBottom productDes={productDes} />
    </Container>
  ) : null;
};

export default Description;
