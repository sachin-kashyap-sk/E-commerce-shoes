import React, { Suspense, useLayoutEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import DrawerAppBar from "./components/navigation/DrawerAppBar";
import Footer from "./components/footer/Footer";

const Home = React.lazy(() =>
  import("./components/navigation/paginationNav/HomePag/HomePag")
);
const Men = React.lazy(() => import("./components/pages/men/Men"));
const Women = React.lazy(() => import("./components/pages/women/Women"));
const Cart = React.lazy(() => import("./components/pages/cart/Cart"));
const WishList = React.lazy(() =>
  import("./components/pages/wishList/WishList")
);
// const Description = React.lazy(() =>
//   import("./components/pages/description/Description")
// );

function App() {
  const [progress, setProgress] = React.useState(0);
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <DrawerAppBar />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50vh",
            }}
          >
            <CircularProgress variant="determinate" value={progress} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          {/* <Route path="/description/:id" element={<Description />} /> */}
        </Routes>
        <Footer />
      </Suspense>
    </Box>
  );
}

export default App;
