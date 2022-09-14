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
  setFilterRequiredInResponsive,
} from "../../slices/filters";

const filterCriteria = [
  {
    id: 1,
    title: "Branches",
    options: [
      { id: 1, name: "All", value: "branch-all", checked: "isBranchAll" },
      {
        id: 2,
        name: "Current",
        value: "branch-current",
        checked: "isBranchCurrent",
      },
      {
        id: 3,
        name: "Specific selection",
        value: "branch-specific",
        checked: "isBranchSpecific",
      },
    ],
  },
  {
    id: 2,
    title: "Brand",
    options: [
      { id: 1, name: "All", value: "brand-all", checked: "isBrandAll" },
      {
        id: 2,
        name: "Specific selection",
        value: "brand-specific",
        checked: "isBrandSpecific",
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
        checked: "isSearchMerchantNum",
      },
      {
        id: 2,
        name: "Branch Part Number",
        value: "search-branch-num",
        checked: "isSearchBranchNum",
      },
      {
        id: 3,
        name: "Designation",
        value: "search-designation",
        checked: "isSearchDesignation",
      },
      {
        id: 4,
        name: "Attributes",
        value: "search-attributes",
        checked: "isSearchAttributes",
      },
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
        dispatch(setFilterRequiredInResponsive(true));
        break;
      case "branch-current":
        setIsBranchesCurrent((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsBranchesFilterEmpty(false));
        dispatch(setFilterRequiredInResponsive(true));
        break;
      case "branch-specific":
        setIsBranchesSpecific((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsBranchesFilterEmpty(false));
        dispatch(setFilterRequiredInResponsive(true));
        break;
      case "brand-all":
        setIsBrandAll((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsBrandFilterEmpty(false));
        dispatch(setFilterRequiredInResponsive(true));
        break;
      case "brand-specific":
        setIsBrandSpecific((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsBrandFilterEmpty(false));
        dispatch(setFilterRequiredInResponsive(true));
        break;
      case "search-merchant-num":
        setIsSearchInMerchantPartNumber((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsSearchInFilterEmpty(false));
        dispatch(setFilterRequiredInResponsive(true));
        break;
      case "search-branch-num":
        setIsSearchInBranchPartNumber((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsSearchInFilterEmpty(false));
        dispatch(setFilterRequiredInResponsive(true));
        break;
      case "search-designation":
        setIsSearchInDesignation((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsSearchInFilterEmpty(false));
        dispatch(setFilterRequiredInResponsive(true));
        break;
      case "search-attributes":
        setIsSearchInAttributes((prev) => !prev);
        dispatch(setIsSubmitted(false));
        dispatch(setIsSearchInFilterEmpty(false));
        dispatch(setFilterRequiredInResponsive(true));
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

  const checkAnyFilterIsEmpty = useCallback(() => {
    if (
      isSubmitted &&
      isBranchesFilterEmpty &&
      isBrandFilterEmpty &&
      isSearchInFilterEmpty
    ) {
      dispatch(setFilterRequiredInResponsive(false));
    } else if (
      isSubmitted &&
      !isBranchesFilterEmpty &&
      !isBrandFilterEmpty &&
      !isSearchInFilterEmpty
    ) {
      dispatch(setFilterRequiredInResponsive(true));
    }
  }, [
    dispatch,
    isBranchesFilterEmpty,
    isBrandFilterEmpty,
    isSearchInFilterEmpty,
    isSubmitted,
  ]);

  useEffect(() => {
    checkAnyFilterIsEmpty();
  }, [checkAnyFilterIsEmpty]);

  useEffect(() => {
    pushFilterSettings();
  }, [pushFilterSettings]);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          m: "0 0 3px 0",
          p: {
            md: "10px 0 16px 16px",
            lg: "10px 0 16px 16px",
            xl: "19px 0 25px 25px",
          },
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: {
              sm: "0.75rem",
              md: "0.75rem",
              lg: "1rem",
              xl: "1.40625rem",
            },
            fontWeight: 500,
            ml: { md: "6px", lg: "8px", xl: "10px" },
          }}
        >
          Filters
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          m: "0 0 19px 0",
          p: {
            md: "14.5px 0 14.5px 20px",
            lg: "16.5px 0 16.5px 25px",
            xl: "23.5px 0 23.5px 25px",
          },
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
                    md: "0.775rem",
                    lg: "1rem",
                    xl: "1.40625rem",
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
                  ml: "1px",
                }}
              >
                {criterion.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: "7px 0 0 18px",
                }}
              >
                {criterion.options.map((option) => (
                  <FormControlLabel
                    sx={{ mb: { md: "5px", lg: "5px", xl: "15px" } }}
                    key={option.id}
                    control={
                      <Checkbox
                        name={criterion.title}
                        value={option.value}
                        onChange={handleCheckBox}
                        icon={
                          <UncheckedBoxIcon
                            sx={{
                              fontSize: {
                                md: "0.55rem",
                                lg: "0.65rem",
                                xl: "0.75rem",
                              },
                              backgroundColor: "white",
                            }}
                          />
                        }
                        checkedIcon={
                          <CheckedBoxIcon
                            sx={{
                              fontSize: {
                                md: "0.55rem",
                                lg: "0.65rem",
                                xl: "0.75rem",
                              },
                              backgroundColor: "white",
                            }}
                          />
                        }
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontSize: {
                            sm: "0.75rem",
                            md: "0.75rem",
                            lg: "0.875rem",
                            xl: "1.03125rem",
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
