import React, { FC } from "react";
import { Box, ListItem, Typography } from "@mui/material";
import styled from "styled-components";

interface CatalogProps {
  productName: string;
  productDesc: string;
  isBoldBranchPartNumber: boolean;
  branchPartNumber: string;
}

const CatalogItem: FC<CatalogProps> = ({
  productName,
  productDesc,
  isBoldBranchPartNumber,
  branchPartNumber,
}) => {
  return (
    <ListItem>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
            mt: "33px",
          }}
        >
          {productName}
        </Typography>
        <Typography
          component="p"
          sx={{
            flexGrow: 1,
            fontSize: {
              sm: "0.75rem",
              md: "0.85rem",
              lg: "1rem",
              xl: "1.1rem",
            },
            fontWeight: 300,
            letterSpacing: "0.74px",
            color: "#797777",
            mt: "14px",
          }}
        >
          {productDesc}
        </Typography>
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            mt: "22.5px",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: {
                sm: "0.75rem",
                md: "0.85rem",
                lg: "1rem",
                xl: "1.1rem",
              },
              fontWeight: 300,
              color: "#797777",
            }}
          >
            {"Your catalog Part Number :"}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: {
                sm: "0.75rem",
                md: "0.85rem",
                lg: "1rem",
                xl: "1.1rem",
              },
              fontWeight: `${isBoldBranchPartNumber ? 500 : 300}`,
              color: "#797777",
              ml: "3px",
            }}
          >
            {branchPartNumber}
          </Typography>
        </Box>
        <Typography
          component="p"
          sx={{
            flexGrow: 1,
            fontSize: {
              sm: "0.75rem",
              md: "0.85rem",
              lg: "1rem",
              xl: "1.1rem",
            },
            fontWeight: 300,
            color: "#797777",
          }}
        >
          {"Found in your catalog and 5 others"}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default CatalogItem;
