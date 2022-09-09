import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk } from "../store";

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

interface FilterSettingsState {
  filterSettings: FilterSettings[];
}

const initialState: FilterSettingsState = {
  filterSettings: [
    {
      branchAll: false,
      branchCurrent: false,
      branchSpecific: false,
      brandAll: false,
      brandSpecific: false,
      searchMerchant: false,
      searchBranch: false,
      searchDesignation: false,
      searchAttributes: false,
    },
  ],
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    saveFilterSettings(state, action) {
      //Maintain 1 object element and not push new one
      state.filterSettings[0] = action.payload;
    },
  },
});

export const { reducer } = slice;

export const saveFilterSettings =
  (settings: any) =>
  (dispatch: any): void => {
    dispatch(slice.actions.saveFilterSettings(settings));
  };

export default slice;
//SLICE COMPONENT FOR MODULARIZE REDUX
