import React from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Button,
  Checkbox,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import classes from "../../styleContainer/PagesStyles/HomeStyles/Home.module.css";
import Home from "./Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { selectedProduct } from "../../ReduxSection/home/HomeSlice";
import { useDispatch, useSelector } from "react-redux";
import RunningShoes from "./RunningShoes";
import { addToCart } from "../../ReduxSection/cart/CartSlice";
import { checkedVal } from "../../ReduxSection/home/HomeSlice";
import {
  addToWishList,
  removeFromWish,
} from "../../ReduxSection/wishlist/WishlistSlice";
import CardProgress from "./CardProgress";
const HomeProducts = () => {
  const productsData = useSelector(selectedProduct);
  const dispatch = useDispatch();
 
  const addHandler = (item) => {
    dispatch(addToCart({ ...item }));
  };

  return (
    <>
      <Home />
      <Container maxWidth="false">
        <Box className={classes.mainContainer}>
          {productsData.map((item) => (
            <Card
              className={classes.cardContainer}
              key={item.id}
            >
              <CardContent>
                <CardProgress item={item} />
                <Box className={classes.firstInner}>
                  <p className={classes.titleText}>{item.title}</p>
                  <p className={classes.price}>&#x20B9; {item.price}</p>
                </Box>
                <p className={classes.discount}>{item.offer}</p>
                <Box className={classes.cardLastBtn}>
                  <Box>
                    <Button
                      onClick={() => addHandler(item)}
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
                      {item.button}
                    </Button>
                  </Box>
                  <Box>
                    <Checkbox
                      size="medium"
                      sx={{
                        color: "#b80000",
                        "&.Mui-checked": {
                          color: "#b80000",
                        },
                      }}
                      checked={!!item.checked}
                      id={item.id}
                      onChange={(e) => {
                        dispatch(checkedVal(item.id));
                        if (e.target.checked) {
                          dispatch(addToWishList({ ...item }));
                        } else {
                          dispatch(removeFromWish(item.id));
                        }
                      }}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
          <RunningShoes />
        </Box>
      </Container>
    </>
  );
};
export default HomeProducts;
