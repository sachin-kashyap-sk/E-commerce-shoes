import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {
  priceFilter,
  selectedFilterTitle,
  selectedPriceRange,
  filterMen,
} from "../ReduxSection/men/MenSlice";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector(selectedPriceRange);
  const titleVal = useSelector(selectedFilterTitle);

  const filterHandler = (e) => {
    dispatch(priceFilter(JSON.parse(e.target.value)));
  };

  const filterMenVal = (e) => {
    dispatch(filterMen(JSON.parse(e.target.value)));
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
              onChange={filterHandler}
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
              onChange={filterMenVal}
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
