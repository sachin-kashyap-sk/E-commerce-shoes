import React from "react";
import { Box, Container } from "@mui/material";
import classes from "../styleContainer/footer/Footer.module.css";
const Footer = () => {
  const footerData = [
    {
      id: 1,
      title: "Support",
      subTitle1: "Contact Us",
      subTitle2: "Promotions & Sale",
      subTitle3: "Track Order",
      subTitle4: "Privacy Policy",
      subTitle5: "Terms & Conditions",
      subTitle6: "Cookie Settings",
    },
    {
      id: 2,
      subTitle1: "FAQs",
      subTitle2: "My Account",
      subTitle3: "Press Center",
      subTitle4: "Return Policy",
      subTitle5: "Tech Glossary",
      subTitle6: "Initiate Return",
    },
    {
      id: 3,
      title: "Contact",
      subTitle1: "Company",
      subTitle2: "Corporate News",
      subTitle3: "Press Center",
      subTitle4: "Investors",
      subTitle5: "Sustainability",
      subTitle6: "Careers",
      subTitle7: "Store Finder",
    },
  ];

  return (
    <Container maxWidth="false">
      <Box className={classes.mainContainer}>
        <Box className={classes.inner}>
          {footerData.map((item) => (
            <Box className={classes.firstInner} key={item.id}>
              <p className={classes.title}>{item.title}</p>
              <p className={classes.subTitle}>{item.subTitle1}</p>
              <p className={classes.subTitle}>{item.subTitle2}</p>
              <p className={classes.subTitle}>{item.subTitle3}</p>
              <p className={classes.subTitle}>{item.subTitle4}</p>
              <p className={classes.subTitle}>{item.subTitle5}</p>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
