import React, { FC, useState, useEffect, useCallback } from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import CheckedBoxIcon from "../../icons/CheckedBox";
import UncheckedBoxIcon from "../../icons/UncheckedBox";
import { useDispatch, useSelector } from "../../store";
import {
  saveFilterSettings,
  setIsSubmitted,
  setIsBranchesFilterEmpty,
  setIsBrandFilterEmpty,
  setIsSearchInFilterEmpty,
} from "../../slices/filters";

const filterCriteria = [
  {
    id: 1,
    title: "Branches",
    options: [
      { id: 1, name: "All", value: "branch-all", checked: false },
      { id: 2, name: "Current", value: "branch-current", checked: false },
      {
        id: 3,
        name: "Specific selection",
        value: "branch-specific",
        checked: false,
      },
    ],
  },
  {
    id: 2,
    title: "Brand",
    options: [
      { id: 1, name: "All", value: "brand-all", checked: false },
      {
        id: 2,
        name: "Specific selection",
        value: "brand-specific",
        checked: false,
      },
    ],
  },
  {
    id: 3,
    title: "Search in",
    options: [
      {
        id: 1,
        name: "Merchant Part Number",
        value: "search-merchant-num",
        checked: false,
      },
      {
        id: 2,
        name: "Branch Part Number",
        value: "search-branch-num",
        checked: false,
      },
      {
        id: 3,
        name: "Designation",
        value: "search-designation",
        checked: false,
      },
      { id: 4, name: "Attributes", value: "search-attributes", checked: false },
    ],
  },
];

const Filters: FC = () => {
  const dispatch = useDispatch();
  const {
    isBranchesFilterEmpty,
    isBrandFilterEmpty,
    isSearchInFilterEmpty,
    isSubmitted,
  } = useSelector((state) => state.filters);

  const [isBranchesAll, setIsBranchesAll] = useState(false);
  const [isBranchesCurrent, setIsBranchesCurrent] = useState(false);
  const [isBranchesSpecific, setIsBranchesSpecific] = useState(false);

  const [isBrandAll, setIsBrandAll] = useState(false);
  const [isBrandSpecific, setIsBrandSpecific] = useState(false);

  const [isSearchInMerchantPartNumber, setIsSearchInMerchantPartNumber] =
    useState(false);
  const [isSearchInBranchPartNumber, setIsSearchInBranchPartNumber] =
    useState(false);
  const [isSearchInDesignation, setIsSearchInDesignation] = useState(false);
  const [isSearchInAttributes, setIsSearchInAttributes] = useState(false);

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // set specified filter and reset prior search, and check filters empty
    switch (value) {
      case "branch-all":
        setIsBranchesAll((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsBranchesFilterEmpty(false));
        break;
      case "branch-current":
        setIsBranchesCurrent((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsBranchesFilterEmpty(false));
        break;
      case "branch-specific":
        setIsBranchesSpecific((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsBranchesFilterEmpty(false));
        break;
      case "brand-all":
        setIsBrandAll((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsBrandFilterEmpty(false));
        break;
      case "brand-specific":
        setIsBrandSpecific((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsBrandFilterEmpty(false));
        break;
      case "search-merchant-num":
        setIsSearchInMerchantPartNumber((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsSearchInFilterEmpty(false));
        break;
      case "search-branch-num":
        setIsSearchInBranchPartNumber((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsSearchInFilterEmpty(false));
        break;
      case "search-designation":
        setIsSearchInDesignation((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsSearchInFilterEmpty(false));
        break;
      case "search-attributes":
        setIsSearchInAttributes((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsSearchInFilterEmpty(false));
        break;
    }
  };

  const pushFilterSettings = useCallback(() => {
    dispatch(
      saveFilterSettings({
        isBranchAll: isBranchesAll,
        isBranchCurrent: isBranchesCurrent,
        isBranchSpecific: isBranchesSpecific,
        isBrandAll: isBrandAll,
        isBrandSpecific: isBrandSpecific,
        isSearchMerchantNum: isSearchInMerchantPartNumber,
        isSearchBranchNum: isSearchInBranchPartNumber,
        isSearchDesignation: isSearchInDesignation,
        isSearchAttributes: isSearchInAttributes,
      })
    );
    if (!isBranchesAll) {
      dispatch(setIsBranchesFilterEmpty(true));
    }
    if (!isBrandAll) {
      dispatch(setIsBrandFilterEmpty(true));
    }
    if (
      !isSearchInAttributes &&
      !isSearchInDesignation &&
      !isSearchInBranchPartNumber &&
      !isSearchInMerchantPartNumber
    ) {
      dispatch(setIsSearchInFilterEmpty(true));
    }
  }, [
    dispatch,
    isBranchesAll,
    isBranchesCurrent,
    isBranchesSpecific,
    isBrandAll,
    isBrandSpecific,
    isSearchInAttributes,
    isSearchInBranchPartNumber,
    isSearchInDesignation,
    isSearchInMerchantPartNumber,
  ]);

  useEffect(() => {
    pushFilterSettings();
  }, [pushFilterSettings]);

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
          boxShadow: `${
            isSubmitted && (isBranchesFilterEmpty || isSearchInFilterEmpty)
              ? "0 0 0 1px #d62d24 inset"
              : ""
          }`,
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
                  color: `${
                    criterion.title === "Branches" &&
                    isBranchesFilterEmpty &&
                    isSubmitted
                      ? "#d62d24"
                      : criterion.title === "Brand" &&
                        isBrandFilterEmpty &&
                        isSubmitted
                      ? "#d62d24"
                      : criterion.title === "Search in" &&
                        isSearchInFilterEmpty &&
                        isSubmitted
                      ? "#d62d24"
                      : ""
                  }`,
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
                    sx={{ mb: "15px" }}
                    key={option.id}
                    control={
                      <Checkbox
                        name={criterion.title}
                        value={option.value}
                        onChange={handleCheckBox}
                        icon={
                          <UncheckedBoxIcon
                            sx={{
                              fontSize: "15px",
                              backgroundColor: "white",
                            }}
                          />
                        }
                        checkedIcon={
                          <CheckedBoxIcon
                            sx={{ fontSize: "15px", backgroundColor: "white" }}
                          />
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
