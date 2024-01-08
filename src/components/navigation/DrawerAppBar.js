import * as React from "react";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import {
  TextField,
  Button,
  Toolbar,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  IconButton,
  Drawer,
  Divider,
  CssBaseline,
  Box,
  AppBar,
} from "@mui/material";
import cart from "../../assets/cart.png";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "../styleContainer/navStyles/Nav.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { navItems } from "./NavData";
import Badge from "@mui/material/Badge";
import { selectedCart } from "../ReduxSection/cart/CartSlice";
import { selectedWishList } from "../ReduxSection/wishlist/WishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchByTitle } from "../ReduxSection/home/HomeSlice";
import { searchWomenByTitle } from "../ReduxSection/women/WomenSlice";
const drawerWidth = 240;

const DrawerAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigation = useNavigate();
  const quantity = useSelector(selectedCart);
  const wishQuantity = useSelector(selectedWishList);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const totalItem = () => {
    let temp = 0;
    quantity.forEach((item) => {
      temp += item.qty;
    });
    return temp;
  };

  const totalWish = () => {
    let temp = 0;
    wishQuantity.forEach((item) => {
      temp += item.qty;
    });
    return temp;
  };

  const location = useLocation();
  const path = location.pathname;
  const [query, setQuery] = React.useState("");
  const [timeOutId, setTimeOutId] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (query.trim().length && path === "/") {
      dispatch(searchByTitle({ title: query }));
    } else if (query.trim().length && path === "/women") {
      dispatch(searchWomenByTitle({ title: query }));
    }
  }, [dispatch, query, path]);

  const changeHandler = (e) => {
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => {
      setQuery(e.target.value);
    }, 500);
    setTimeOutId(timeOut);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <p style={{ my: 2, padding: "5%" }}>E- commerce</p>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigation(item.linkTo)}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#ffffff" }}>
        <Toolbar>
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.mainToolbar}>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              {navItems.map((item) => (
                <Button
                  onClick={() => navigation(item.linkTo)}
                  key={item.id}
                  sx={{ color: "#000" }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            <TextField
              placeholder="search"
              size="small"
              sx={{ width: "30%" }}
              onChange={changeHandler}
            />
            <Box className={classes.lastContainer}>
              <Badge color="error" badgeContent={totalWish()}>
                <FavoriteBorderOutlinedIcon
                  onClick={() => {
                    navigation("/wishlist");
                  }}
                  sx={{
                    color: "#000",
                  }}
                />
              </Badge>
              <Badge color="error" badgeContent={totalItem()}>
                <img
                  onClick={() => navigation("/cart")}
                  width="25px"
                  height="25px"
                  src={cart}
                  alt="cart"
                />
              </Badge>
              <Button style={{ color: "#000" }}>Logout</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};
export default DrawerAppBar;
