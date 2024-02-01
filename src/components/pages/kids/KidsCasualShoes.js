import React from "react";
import { Box, Card, CardContent, Button, Checkbox } from "@mui/material";
import classes from "../../styleContainer/PagesStyles/HomeStyles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../ReduxSection/cart/CartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  checkedKidsVal,
  selectedCasualShoes,
} from "../../ReduxSection/kids/KidsSlice";

import {
  addToWishList,
  removeFromWish,
} from "../../ReduxSection/wishlist/WishlistSlice";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import CardProgress from "../home/CardProgress";

const KidsCasualShoes = () => {
  const casualShoesData = useSelector(selectedCasualShoes);
  const dispatch = useDispatch();

  const addHandler = (item) => {
    dispatch(addToCart({ ...item }));
  };

  return (
    <Box className={classes.mainContainer}>
      {casualShoesData.map((item) => (
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
                    onChange={(e) => {
                      dispatch(checkedKidsVal(item.id));
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
            </Box>
          </CardContent>
        </Card>
      ))}
      {/* <WomenWalkingShoes /> */}
    </Box>
  );
};

export default KidsCasualShoes;
