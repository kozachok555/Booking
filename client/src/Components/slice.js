import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: [],
  hotels: [],
};

const destinationSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    fetchDestinations: (state, action) => {
      return { destinations: action.payload };
    },
    fetchDestinationsRequest: (state) => {
      return state;
    },
    fetchHotels: (state, action) => {
      return { hotels: action.payload };
    },
    fetchHotelsRequest: (state) => {
      return state;
    },
    fetchHotelsRequest: () => {},
    fetchFormInfo: () => {},
  },
});
export const {
  fetchDestinationsRequest,
  fetchDestinations,
  fetchHotels,
  fetchHotelsRequest,
  fetchFormInfo,
} = destinationSlice.actions;
export default destinationSlice.reducer;
