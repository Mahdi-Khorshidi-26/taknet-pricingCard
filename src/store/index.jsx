import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  prices: [12, 24, 48, 72],
  durationToggle: false,
  slider: 100,
  options: {
    zeroToFifty: [
      "Limited Websites",
      "50% Data Ownership",
      "Email Reports upto 100",
    ],
    fiftyToHundreds: [
      "Ultimate Websites",
      "100% Data Ownership",
      "Email Reports upto 200",
    ],
    hundredsToHundredFifty: [
      "Ultimate Websites",
      "a free website",
      "100% Data Ownership",
      "50% data editing options",
      "Email Reports upto 500",
    ],
    HundredFiftyToTwoHundreds: [
      "Ultimate Websites",
      "5 free websites",
      "100% Data Ownership",
      "100% data editing options",
      "unlimited Email Reports",
    ],
  },
  offPrice: 0,
};

const priceCardSlice = createSlice({
  name: "priceCardSlice",
  initialState,
  reducers: {
    changeSlider(state, action) {
      state.slider = action.payload;
    },
    changeDurationToggle(state) {
      state.durationToggle = !state.durationToggle;
    },
    offPrice(state, action) {
      state.offPrice = (action.payload * 25) / 100 - action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    priceCard: priceCardSlice.reducer,
  },
});

export const priceActions = priceCardSlice.actions;
