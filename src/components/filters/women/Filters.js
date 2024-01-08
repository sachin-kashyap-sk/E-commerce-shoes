import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTitle,
  filterPrice,
  selectedPrice,
  selectedTitle,
} from "../../ReduxSection/women/WomenSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector(selectedPrice);
  const titleVal = useSelector(selectedTitle);

  const priceFilterHandler = (e) => {
    dispatch(filterPrice(JSON.parse(e.target.value)));
  };

  const titleFilterHandler = (e) => {
    dispatch(filterTitle(JSON.parse(e.target.value)));
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>Price</p>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl sx={{ display: "flex", flexDirection: "column" }}>
            <RadioGroup
              value={JSON.stringify(priceRange)}
              onChange={priceFilterHandler}
              name="controlled-radio-buttons-group"
            >
              {[
                {
                  id: 1,
                  label: "1000 - 3000",
                  value: [1000, 3000],
                },
                {
                  id: 2,
                  label: "3000 - 5000",
                  value: [3000, 5000],
                },
                {
                  id: 3,
                  label: "5000 - 10000",
                  value: [5000, 10000],
                },
                {
                  id: 4,
                  label: "10000 - 20000",
                  value: [10000, 20000],
                },
              ].map((item) => {
                return (
                  <FormControlLabel
                    key={item.id}
                    value={JSON.stringify(item)}
                    label={item.label}
                    control={<Radio />}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p>Gender</p>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl sx={{ display: "flex", flexDirection: "column" }}>
            <RadioGroup
              value={JSON.stringify(titleVal)}
              onChange={titleFilterHandler}
              name="controlled-radio-buttons-group"
            >
              {[
                {
                  id: 1,
                  label: "Men",
                  value: "Men",
                },
                {
                  id: 2,
                  label: "Women",
                  value: "Women",
                },
                {
                  id: 3,
                  label: "Unisex",
                  value: "Unisex",
                },
              ].map((item) => (
                <FormControlLabel
                  key={item.id}
                  value={JSON.stringify(item)}
                  label={item.label}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filters;
