import React from "react";
import { Box, Button, Container } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  selectedSwipeDrawer,
  openDrawer,
} from "../../ReduxSection/kids/KidsSlice";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import Filters from "../../filters/kids/Filters";
import classes from "../../styleContainer/PagesStyles/HomeStyles/Home.module.css";
import KidsCasualShoes from "./KidsCasualShoes";
const Kids = () => {
  const openSideDrawer = useSelector(selectedSwipeDrawer);
  const dispatch = useDispatch();

  const openHandler = () => {
    dispatch(openDrawer(true));
  };

  const closeHandler = () => {
    dispatch(openDrawer(false));
  };

  return (
    <Container maxWidth="false">
      <Box sx={{ paddingTop: "4%" }}>
        <Box>
          <Button
            onClick={openHandler}
            variant="outlined"
            endIcon={<FilterAltIcon />}
            sx={{
              borderColor: "#161a30",
              color: "#161a30",
              ":hover": {
                borderColor: "#161a30",
              },
            }}
          >
            Filters
          </Button>
          <Drawer open={openSideDrawer} anchor={"left"} onClose={closeHandler}>
            <Box className={classes.filter}>
              <Filters />
            </Box>
          </Drawer>
        </Box>
      </Box>
      <Box>
        <KidsCasualShoes />
      </Box>
    </Container>
  );
};

export default Kids;
