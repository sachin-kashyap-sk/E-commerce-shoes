import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../styleContainer/PagesStyles/cartStyles/Cart.module.css";
import { selectedCart, itemQty } from "../../ReduxSection/cart/CartSlice";
import {
  Box,
  Container,
  Select,
  FormControl,
  MenuItem,
  Button,
} from "@mui/material";
const Cart = () => {
  const cartData = useSelector(selectedCart);
  const dispatch = useDispatch();

  const productQty = (item) => {
    dispatch(itemQty(item));
  };

  const grandTotal = useMemo(() => {
    let temp = 0;
    cartData.forEach((element) => {
      temp += element.price * element.qty;
    });
    return temp;
  }, [cartData]);

  return (
    <Container maxWidth="false">
      <p className={classes.shoppingText}> Shopping Cart</p>
      <Box>
        {cartData.map((item) => (
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
              <p className={classes.colorText}>Size: {item.size}</p>

              <Box className={classes.btnContainer}>
                <Box sx={{ width: "30%" }}>
                  <p>Qty</p>
                  <FormControl className={classes.form}>
                    <Select
                      value={item.qty}
                      onChange={(e) => {
                        productQty({ id: item.id, qty: e.target.value });
                      }}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: "50%", backgroundColor: "pink" }}>
                  <Button
                    className={classes.btn}
                    sx={{
                      backgroundColor: "#212121",
                      ":hover": {
                        backgroundColor: "#212121",
                      },
                    }}
                    variant="contained"
                  >
                    Buy
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
        <Box className={classes.grandTotalContainer}>
          <p className={classes.grandTotalText}>Grand Total : </p>
          <p className={classes.grandTotalText}>{grandTotal}</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
