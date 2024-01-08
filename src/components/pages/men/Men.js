import React from "react";
import { Box, Button, Container } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { openDrawer, selectedDrawer } from "../../ReduxSection/men/MenSlice";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import Filters from "../../filters/Filters";
import MenProducts from "./MenProducts";
import classes from "../../styleContainer/PagesStyles/HomeStyles/Home.module.css";
const Men = () => {
  const dispatch = useDispatch();
  const drawerOpen = useSelector(selectedDrawer);

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
            Filter
          </Button>
          <Drawer open={drawerOpen} anchor={"left"} onClose={closeHandler}>
            <Box className={classes.filter}>
              <Filters />
            </Box>
          </Drawer>
        </Box>
      </Box>
      <Box>
        <MenProducts />
      </Box>
    </Container>
  );
};

export default Men;
