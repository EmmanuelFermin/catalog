import React, { FC, useState } from "react";
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
import Fuse from "fuse.js";
import CatalogItem from "./CatalogItem";
import { useSelector } from "../../store";

interface CatalogProps {
  items: Product[];
}

interface FilterSettings {
  branchAll: boolean;
  branchCurrent: boolean;
  branchSpecific: boolean;
  brandAll: boolean;
  brandSpecific: boolean;
  searchMerchant: boolean;
  searchBranch: boolean;
  searchDesignation: boolean;
  searchAttributes: boolean;
}

const Catalog: FC<CatalogProps> = ({ items }) => {
  const { filterSettings } = useSelector((state) => state.filters);
  const [query, setQuery] = useState("");

  const {
    branchAll,
    branchCurrent,
    branchSpecific,
    brandAll,
    brandSpecific,
    searchMerchant,
    searchBranch,
    searchDesignation,
    searchAttributes,
  } = filterSettings[0];

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const options = {
    threshold: 0,
    keys: [
      `${searchMerchant && "merchantPartNumber"}`,
      `${searchBranch && "branchPartNumber"}`,
      "designation",
      "attributes",
    ],
  };

  const fuse = new Fuse(items, options);

  const results: any = fuse.search(query);

  console.log("FUSE RESULT: ", results);

  return (
    <>
      <FlexContainer>
        <Box sx={{ p: "19px 38px 19px 38px", backgroundColor: "#F4F4F4" }}>
          <SearchField
            placeholder="Search"
            value={query}
            onChange={handleOnSearch}
          />
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
          {query
            ? results.map((item: any) => (
                <CatalogItem
                  key={item.item.productId}
                  productName={item.item.productName}
                  productDesc={item.item.productDesc}
                  isBoldBranchPartNumber={
                    query === item.item.branchPartNumber ? true : false
                  }
                  branchPartNumber={item.item.branchPartNumber}
                />
              ))
            : items.map((item: any) => (
                <CatalogItem
                  key={item.productId}
                  productName={item.productName}
                  productDesc={item.productDesc}
                  isBoldBranchPartNumber={false}
                  branchPartNumber={item.branchPartNumber}
                />
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
