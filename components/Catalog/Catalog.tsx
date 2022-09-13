import React, { FC, useState, useEffect, useCallback } from "react";
import { Box, Button, FormHelperText, List, TextField } from "@mui/material";
import GoSearchIcon from "../../icons/GoSearch";
import styled from "styled-components";
import type { Product } from "../../types/product";
import Fuse from "fuse.js";
import CatalogItem from "./CatalogItem";
import { useDispatch, useSelector } from "../../store";
import { setIsSubmitted, setQuery, setVoidQuery } from "../../slices/filters";
interface CatalogProps {
  items: Product[];
}

const Catalog: FC<CatalogProps> = ({ items }) => {
  const dispatch = useDispatch();
  const {
    filterSettings,
    isSubmitted,
    isSearchInFilterEmpty,
    query,
    voidQuery,
  } = useSelector((state) => state.filters);
  const [searchResults, setSearchResults] = useState<any>([]);

  const {
    isBranchAll,
    isBranchCurrent,
    isBranchSpecific,
    isBrandAll,
    isBrandSpecific,
    isSearchMerchantNum,
    isSearchBranchNum,
    isSearchDesignation,
    isSearchAttributes,
  } = filterSettings[0];

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
    dispatch(setIsSubmitted(false));
    dispatch(setVoidQuery(false));
  };

  // First layer since JavaScript is only 1 dimensional array
  const handleSearch = (event: any) => {
    if (event.key === "Enter" || event.type === "click") {
      setSearchResults([]);
      if (voidQuery === true) {
        return;
      }
      const options = {
        includeScore: true,
        includeMatches: true,
        shouldSort: false,
        useExtendedSearch: true,
        findAllMatches: true,
        keys: [
          `${isSearchMerchantNum && "merchantPartNumber"}`,
          `${isSearchBranchNum && "branchPartNumber"}`,
          `${isSearchDesignation && "designation"}`,
          `${isSearchAttributes && "attributes"}`,
        ],
      };

      const fuse = new Fuse(items, options);
      const results: any = fuse.search(`^"${query}" | "${query}"$`);

      setSearchResults(results);

      console.log("FUSE RESULT: ", results);
      dispatch(setIsSubmitted(true));
    } else {
      return;
    }
  };
  console.log("VOID QUERY", voidQuery);
  return (
    <>
      <FlexContainer>
        <Box
          sx={{
            width: "100%",
            p: { lg: "10px 20px 10px 20px", xl: "19px 38px 19px 38px" },
            backgroundColor: "#F4F4F4",
            position: "relative",
          }}
        >
          <SearchField
            id="search"
            error={query === "" && isSubmitted ? true : false}
            placeholder="Search"
            value={query}
            onChange={handleChangeQuery}
            onKeyDown={handleSearch}
          />
          {query === "" && isSubmitted && (
            <FormHelperText
              sx={{
                position: "absolute",
                bottom: { lg: -2, xl: 0 },
                color: "#d62d24",
                fontSize: { lg: "0.56rem", xl: "0.75rem" },
              }}
              id="search"
            >
              This field is required
            </FormHelperText>
          )}
        </Box>
        <Box
          sx={{
            ml: { lg: "20px", xl: "35px" },
            mr: { lg: "20px", xl: "35px" },
          }}
        >
          <Button
            onClick={handleSearch}
            variant="contained"
            color="secondary"
            disableElevation
            sx={{
              borderRadius: "0",
              width: { lg: "5.0625rem", xl: "7.0625rem" },
              height: { lg: "3.3125rem", xl: "5.3125rem" },
            }}
          >
            <GoSearchIcon
              sx={{ fontSize: { lg: "1.775rem", xl: "2.25rem" } }}
            />
          </Button>
        </Box>
      </FlexContainer>

      <Box sx={{ p: { lg: "0 124px 5px 5px", xl: "0 205px 20px 20px" } }}>
        <List>
          {isSubmitted &&
          searchResults.length > 0 &&
          !voidQuery &&
          isBranchAll &&
          isBrandAll
            ? searchResults.map((item: any) => (
                <CatalogItem
                  key={item.item.productId}
                  productName={item.item.productName}
                  productDesc={item.item.productDesc}
                  merchant={item.item.merchant}
                  merchantPartNumber={item.item.merchantPartNumber}
                  boldExactMerchantPartNumber={
                    query.toLowerCase() ===
                      item.item.merchantPartNumber.toLowerCase() &&
                    isSubmitted &&
                    isSearchMerchantNum
                      ? true
                      : false
                  }
                  boldAllMatchMerchantPartNumber={
                    item.item.merchantPartNumber
                      .toLowerCase()
                      .includes(query.toLowerCase()) &&
                    isSubmitted &&
                    isSearchMerchantNum
                      ? true
                      : false
                  }
                  isFilterSearchMerchantNum={isSearchMerchantNum}
                  branch={item.item.branch}
                  branches={item.item.branches}
                  branchPartNumber={item.item.branchPartNumber}
                  boldExactBranchPartNumber={
                    query.toLowerCase() ===
                      item.item.branchPartNumber.toLowerCase() &&
                    isSubmitted &&
                    isSearchBranchNum
                      ? true
                      : false
                  }
                  boldAllMatchBranchPartNumber={
                    item.item.branchPartNumber
                      .toLowerCase()
                      .includes(query.toLowerCase()) &&
                    isSubmitted &&
                    isSearchBranchNum
                      ? true
                      : false
                  }
                  isFilterSearchBranchNum={isSearchBranchNum}
                  designation={item.matches[0].value}
                  boldExactOrAllMatchDesignation={item.item.designation}
                  designationRefIndex={item.refIndex}
                  designationRelevanceScore={item.score}
                  isFilterSearchDesignation={isSearchDesignation}
                  attributes={item.matches[0].value}
                  boldExactOrAllMatchAttributes={item.item.attributes}
                  attributesRefIndex={item.refIndex}
                  attributesRelevanceScore={item.score}
                  isFilterSearchAttributes={isSearchAttributes}
                  indices={item.matches[0].indices}
                />
              ))
            : items.map((item: any) => (
                <CatalogItem
                  key={item.productId}
                  productName={item.productName}
                  productDesc={item.productDesc}
                  merchant={item.merchant}
                  merchantPartNumber={item.merchantPartNumber}
                  isFilterSearchMerchantNum={isSearchMerchantNum}
                  branch={item.branch}
                  branches={item.branches}
                  branchPartNumber={item.branchPartNumber}
                  isFilterSearchBranchNum={isSearchBranchNum}
                  boldExactOrAllMatchDesignation={item.designation}
                  designationRefIndex={item.refIndex}
                  designationRelevanceScore={item.score}
                  isFilterSearchDesignation={isSearchDesignation}
                  boldExactOrAllMatchAttributes={item.attributes}
                  attributesRefIndex={item.refIndex}
                  attributesRelevanceScore={item.score}
                  isFilterSearchAttributes={isSearchAttributes}
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
    width: 100%;
  }
`;

const SearchField = styled(TextField)`
  && {
    width: 100%;
    background-color: #ffffff;
    margin-left: auto;
    box-shadow: 1px -12px 0px -6px
      ${(props: any) => (props.error ? "#d62d24" : "#000")} inset;
    & fieldset {
      height: 50px;
      border-bottom: none;
      border: ${(props: any) => (props.error ? "" : "none")};

      /* FIELD SET Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        & {
          height: 37px;
        }
      }
      /* FIELD SET Extra Extra large devices (large laptops and desktops, 1536px and up) */
      @media only screen and (min-width: 1536px) {
        & {
          height: 50px;
        }
      }
    }

    & input {
      width: 100%;
      font-size: 1.03125rem;
      font-weight: 500;
      height: 0.875rem;
      color: #000000;
      font-weight: 500;
      padding-left: 19px;
      &::placeholder {
        font-size: 1.03125rem;
        font-weight: 300;
        color: #797777;
        opacity: 0.9;

        /* PLACEHOLDER Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          & {
            font-size: 0.775rem;
          }
        }

        /* PLACEHOLDER Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          & {
            font-size: 0.775rem;
          }
        }

        /* PLACEHOLDER Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 900px) {
          & {
            font-size: 0.775rem;
          }
        }

        /* PLACEHOLDER Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          & {
            font-size: 0.775rem;
          }
        }

        /* PLACEHOLDER Extra Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1536px) {
          & {
            font-size: 1.2rem;
          }
        }
      }

      /* INPUT Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        & {
          font-size: 0.775rem;
          height: 0.175rem;
        }
      }

      /* INPUT Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        & {
          font-size: 0.775rem;
          height: 0.175rem;
        }
      }

      /* INPUT Large devices (laptops/desktops, 900px and up) */
      @media only screen and (min-width: 900px) {
        & {
          font-size: 0.775rem;
          height: 0.175rem;
        }
      }

      /* INPUT Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        & {
          font-size: 0.775rem;
          height: 0.175rem;
        }
      }

      /* INPUT Extra Extra large devices (large laptops and desktops, 1536px and up) */
      @media only screen and (min-width: 1536px) {
        & {
          font-size: 1.03125rem;
          font-weight: 500;
          height: 0.875rem;
        }
      }
    }

    /* SEARCH FIELD Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      & {
        height: 2rem;
        box-shadow: 1px -9px 0px -6px
          ${(props: any) => (props.error ? "#d62d24" : "#000")} inset;
      }
    }

    /* SEARCH FIELD Extra Extra large devices (large laptops and desktops, 1536px and up) */
    @media only screen and (min-width: 1536px) {
      & {
        font-size: 1.03125rem;
        height: 3rem;
      }
    }
  }
`;
