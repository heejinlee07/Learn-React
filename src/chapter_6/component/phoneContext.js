import React from "react";
import { initialState } from "../Reducer/bookReducer";

export const PhoneContext = React.createContext({
  state: initialState,
  dispatch: () => {},
});
