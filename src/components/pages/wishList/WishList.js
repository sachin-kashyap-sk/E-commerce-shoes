import React from "react";
import {
  removeFromWish,
  selectedWishList,
} from "./../../ReduxSection/wishlist/WishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container } from "@mui/material";
import classes from "../../styleContainer/PagesStyles/wishStyles/WishList.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { checkedVal } from "../../ReduxSection/home/HomeSlice";
const WishList = () => {
  const wishData = useSelector(selectedWishList);
  const dispatch = useDispatch();
  return (
    <Container maxWidth="false">
      <Box>
        <p className={classes.wishText}>WISHING-LIST </p>
      </Box>
      <Box>
        {wishData.map((item) => (
          <Box className={classes.mainContainer} key={item.id}>
            <Box className={classes.imgContainer}>
              <img width="100%" height="auto" src={item.image} alt="shoes" />
            </Box>
            <Box className={classes.innerFirst}>
              <Box className={classes.innerSec}>
                <p className={classes.titleText}>{item.title}</p>
                <p className={classes.price}>&#x20B9; {item.price}</p>
              </Box>
              <p className={classes.colorText}>Color: {item.color} </p>

              <Box className={classes.binContainer}>
                <p className={classes.colorText}>Size: {item.size}</p>
                <Button
                  onClick={() => {
                    dispatch(checkedVal(item.id));
                    dispatch(removeFromWish(item.id));
                  }}
                >
                  <DeleteOutlineIcon
                    sx={{
                      color: "#212121",
                      ":hover": {
                        color: "#212121",
                      },
                    }}
                  />
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default WishList;
