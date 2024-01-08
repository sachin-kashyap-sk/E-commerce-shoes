import React from "react";
import { selectedRunningShoes } from "../../ReduxSection/home/HomeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, CardContent, Button, Checkbox } from "@mui/material";
import classes from "../../styleContainer/PagesStyles/HomeStyles/Home.module.css";
import { addToCart } from "../../ReduxSection/cart/CartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { runningShoesCheckedVal } from "../../ReduxSection/home/HomeSlice";
import { addToWishList } from "../../ReduxSection/wishlist/WishlistSlice";
import CardProgress from "./CardProgress";
const RunningShoes = () => {
  const runningShoes = useSelector(selectedRunningShoes);
  const dispatch = useDispatch();

  const addHandler = (item) => {
    dispatch(addToCart({ ...item }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <p className={classes.trendingText}>Trending Running Shoes</p>
      </Box>
      <Box className={classes.mainContainer}>
        {runningShoes.map((item) => (
          <Card className={classes.cardContainer} key={item.id}>
            <CardContent>
              <CardProgress item={item} />
              <Box className={classes.firstInner}>
                <p className={classes.titleText}>{item.title}</p>
                <p className={classes.price}>&#x20B9; {item.price}</p>
              </Box>

              <p className={classes.discount}>{item.offer}</p>
              <Box>
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
                      onChange={() => {
                        dispatch(runningShoesCheckedVal(item.id));
                        dispatch(addToWishList({ ...item }));
                      }}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default RunningShoes;