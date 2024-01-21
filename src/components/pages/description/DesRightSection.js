import React from "react";
import { Box, Button } from "@mui/material";
import classes from "../../styleContainer/PagesStyles/description/description.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../ReduxSection/cart/CartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { addToWishList } from "../../ReduxSection/wishlist/WishlistSlice";
import { checkedVal } from "../../ReduxSection/home/HomeSlice";
const DesRightSection = (props) => {
  const dispatch = useDispatch();
  const addHandler = (props) => {
    dispatch(addToCart({ ...props.productDes }));
  };

  return (
    // <>
    <Box className={classes.secContainer}>
      <p className={classes.title}>{props.productDes.title}</p>
      <p className={classes.price}>&#x20B9;{props.productDes.price}</p>
      <p className={classes.text}>Color : {props.productDes.color}</p>
      <p className={classes.text}>Size: {props.productDes.size}</p>
    
      <Box className={classes.btnContainer}>
        <Button
          onClick={() => addHandler({ ...props })}
          endIcon={<ShoppingCartIcon />}
          variant="outlined"
          sx={{
            borderColor: "#161a30",
            color: "#161a30",
            ":hover": {
              borderColor: "#161a30",
            },
          }}
        >
          {props.productDes.button}
        </Button>
        <Button
          variant="outlined"
          sx={{
            marginLeft: "5%",
            borderColor: "#161a30",
            color: "#161a30",
            ":hover": {
              borderColor: "#161a30",
            },
          }}
          checked={!!props.productDes.checked}
          onClick={() => {
            dispatch(checkedVal(props.productDes.id));
            dispatch(addToWishList({ ...props.productDes }));
          }}
        >
          Add To Wish List
        </Button>
      </Box>

      <Box className={classes.desContainers}>
        <p className={classes.text}>Description</p>
        <p className={classes.desText}>{props.productDes.description}</p>
      </Box>

      <Box className={classes.desContainers}>
        <p className={classes.text}>Shipping and Returns</p>
        <p className={classes.desText}>{props.productDes.returns}</p>
      </Box>

          
    </Box>
    // </>
  );
};

export default DesRightSection;
