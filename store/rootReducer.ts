import { combineReducers } from "@reduxjs/toolkit";
import { reducer as filtersReducer } from "../slices/filters";

const rootReducer = combineReducers({
  filters: filtersReducer,
  // Just insert more reducers/slices here
});

export default rootReducer;
// THIS IS A CENTRALIZE REDUCER FN FOR COMPACT MAINTAINANCE
