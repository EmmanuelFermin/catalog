import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk } from "../store";

interface FilterSettings {
  isBranchAll: boolean;
  isBranchCurrent: boolean;
  isBranchSpecific: boolean;
  isBrandAll: boolean;
  isBrandSpecific: boolean;
  isSearchMerchantNum: boolean;
  isSearchBranchNum: boolean;
  isSearchDesignation: boolean;
  isSearchAttributes: boolean;
}

interface FilterSettingsState {
  filterSettings: FilterSettings[];
  isSubmitted: boolean;
  isBranchesFilterEmpty: boolean;
  isBrandFilterEmpty: boolean;
  isSearchInFilterEmpty: boolean;
  query: string;
  voidQuery: boolean;
  filterRequiredInResponsive: boolean;
}

const initialState: FilterSettingsState = {
  filterSettings: [
    {
      isBranchAll: false,
      isBranchCurrent: false,
      isBranchSpecific: false,
      isBrandAll: false,
      isBrandSpecific: false,
      isSearchMerchantNum: false,
      isSearchBranchNum: false,
      isSearchDesignation: false,
      isSearchAttributes: false,
    },
  ],
  isSubmitted: false,
  isBranchesFilterEmpty: true,
  isBrandFilterEmpty: true,
  isSearchInFilterEmpty: true,
  query: "",
  voidQuery: false,
  filterRequiredInResponsive: true,
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    saveFilterSettings(state, action) {
      //Maintain 1 object element and not push new one
      state.filterSettings[0] = action.payload;
    },
    setIsSubmitted(state, action) {
      state.isSubmitted = action.payload;
    },
    setIsBranchesFilterEmpty(state, action) {
      state.isBranchesFilterEmpty = action.payload;
    },
    setIsBrandFilterEmpty(state, action) {
      state.isBrandFilterEmpty = action.payload;
    },
    setIsSearchInFilterEmpty(state, action) {
      state.isSearchInFilterEmpty = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setVoidQuery(state, action) {
      state.voidQuery = action.payload;
    },
    setFilterRequiredInResponsive(state, action) {
      state.filterRequiredInResponsive = action.payload;
    },
  },
});

export const { reducer } = slice;

export const saveFilterSettings =
  (settings: any) =>
  (dispatch: any): void => {
    dispatch(slice.actions.saveFilterSettings(settings));
  };

export const setIsSubmitted =
  (isSubmitted: boolean) =>
  (dispatch: any): void => {
    dispatch(slice.actions.setIsSubmitted(isSubmitted));
  };

export const setIsBranchesFilterEmpty =
  (filterValue: boolean) =>
  (dispatch: any): void => {
    dispatch(slice.actions.setIsBranchesFilterEmpty(filterValue));
  };

export const setIsBrandFilterEmpty =
  (filterValue: boolean) =>
  (dispatch: any): void => {
    dispatch(slice.actions.setIsBrandFilterEmpty(filterValue));
  };

export const setIsSearchInFilterEmpty =
  (filterValue: boolean) =>
  (dispatch: any): void => {
    dispatch(slice.actions.setIsSearchInFilterEmpty(filterValue));
  };

export const setQuery =
  (enteredVal: string) =>
  (dispatch: any): void => {
    dispatch(slice.actions.setQuery(enteredVal));
  };

export const setVoidQuery =
  (isQueryVoid: boolean) =>
  (dispatch: any): void => {
    dispatch(slice.actions.setVoidQuery(isQueryVoid));
  };

export const setFilterRequiredInResponsive =
  (isFilterNotEmpty: boolean) =>
  (dispatch: any): void => {
    dispatch(slice.actions.setFilterRequiredInResponsive(isFilterNotEmpty));
  };

export default slice;
//SLICE COMPONENT FOR MODULARIZE REDUX
