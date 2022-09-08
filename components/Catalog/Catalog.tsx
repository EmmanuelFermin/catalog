import React, { FC } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import GoSearchIcon from "../../icons/GoSearch";
import styled from "styled-components";
import type { Product } from "../../types/product";

interface CatalogProps {
  items: Product[];
}

const Catalog: FC<CatalogProps> = ({ items }) => {
  return (
    <>
      <FlexContainer>
        <Box sx={{ p: "19px 38px 19px 38px", backgroundColor: "#F4F4F4" }}>
          <SearchField placeholder="Search" />
        </Box>
        <Box sx={{ ml: "37px" }}>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            sx={{ borderRadius: "0", width: "113px", height: "85px" }}
          >
            <GoSearchIcon sx={{ fontSize: 36 }} />
          </Button>
        </Box>
      </FlexContainer>

      <Box sx={{ p: "0 0 20px 20px", width: "1009px" }}>
        <List>
          {items.map((item) => (
            <ListItem key={item.productId}>
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
                  {item.productName}
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
                  {item.productDesc}
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
                    color: "#797777",
                    mt: "22.5px",
                  }}
                >
                  {`Your catalog Part Number: ${item.branchPartNumber}`}
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
                    color: "#797777",
                  }}
                >
                  {"Found in your catalog and 5 others"}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Catalog;

const FlexContainer = styled(Box)`
  && {
    display: flex;
  }
`;

const SearchField = styled(TextField)`
  && {
    background-color: #ffffff;
    margin-left: auto;
    box-shadow: 1px -12px 0px -6px #000 inset;
    & fieldset {
      height: 50px;
      border: none;
    }
    & input {
      font-size: 0.9rem;
      color: #000000;
      font-weight: 500;
      padding-left: 19px;
      &::placeholder {
        font-size: 1.2rem;
        font-weight: 300;
        color: #797777;
        opacity: 0.9;

        /* PLACEHOLDER Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          font-size: 1rem;
        }

        /* PLACEHOLDER Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          font-size: 1rem;
        }

        /* PLACEHOLDER Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 900px) {
          font-size: 1rem;
        }

        /* PLACEHOLDER Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          font-size: 1.2187rem;
        }

        /* PLACEHOLDER Extra Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1536px) {
          font-size: 1.2rem;
        }
      }

      /* INPUT Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        /* width: 300px; */
        font-size: 1rem;
        height: 1px;
      }

      /* INPUT Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        /* width: 300px; */
        font-size: 1rem;
        height: 1px;
      }

      /* INPUT Large devices (laptops/desktops, 900px and up) */
      @media only screen and (min-width: 900px) {
        /* width: 250px; */
        font-size: 1rem;
        height: 7px;
      }

      /* INPUT Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        /* width: 400px; */
        font-size: 1.2187rem;
        height: 10px;
      }

      /* INPUT Extra Extra large devices (large laptops and desktops, 1536px and up) */
      @media only screen and (min-width: 1536px) {
        width: 900px;
        font-size: 18px;
        font-weight: 500;
        height: 14px;
      }
    }
  }
`;
