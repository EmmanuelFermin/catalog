import React, { FC } from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import CheckedBoxIcon from "../../icons/CheckedBox";
import UncheckedBoxIcon from "../../icons/UncheckedBox";

const filterCriteria = [
  {
    id: 1,
    title: "Branches",
    options: [
      { id: 1, name: "All", value: "branch-all" },
      { id: 2, name: "Current", value: "branch-current" },
      { id: 3, name: "Specific selection", value: "branch-specific" },
    ],
  },
  {
    id: 2,
    title: "Brand",
    options: [
      { id: 1, name: "All", value: "brand-all" },
      { id: 2, name: "Specific selection", value: "brand-specific" },
    ],
  },
  {
    id: 3,
    title: "Search in",
    options: [
      { id: 1, name: "Merchant Part Number", value: "search-merchant-num" },
      { id: 2, name: "Branch Part Number", value: "serach-branch-num" },
      { id: 3, name: "Designation", value: "search-designation" },
      { id: 4, name: "Attributes", value: "search-attributes" },
    ],
  },
];

const Filters: FC = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          m: "0 0 3px 0",
          p: "19px 0 25px 25px",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: {
              sm: "0.75rem",
              md: "0.85rem",
              lg: "1rem",
              xl: "1.47rem",
            },
            fontWeight: 500,
            ml: "10px",
          }}
        >
          Filters
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          m: "0 0 19px 0",
          p: "23.5px 0 23.5px 25px",
        }}
      >
        {filterCriteria.map(
          (criterion): JSX.Element => (
            <Box key={criterion.id}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: {
                    sm: "0.75rem",
                    md: "0.85rem",
                    lg: "1rem",
                    xl: "1.47rem",
                  },
                  fontWeight: 300,
                  ml: "10px",
                }}
              >
                {criterion.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: "7px 0 0 38px",
                }}
              >
                {criterion.options.map((option) => (
                  <FormControlLabel
                  sx={{mb: "15px"}}
                    key={option.id}
                    control={
                      <Checkbox
                        icon={<UncheckedBoxIcon sx={{ fontSize: "15px", backgroundColor: "white" }} />}
                        checkedIcon={
                          <CheckedBoxIcon sx={{ fontSize: "15px", backgroundColor: "white" }} />
                        }
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          flexGrow: 1,
                          fontSize: {
                            sm: "0.75rem",
                            md: "0.85rem",
                            lg: "1rem",
                            xl: "1.1rem",
                          },
                          fontWeight: 300,
                        }}
                      >
                        {option.name}
                      </Typography>
                    }
                  />
                ))}
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default Filters;
