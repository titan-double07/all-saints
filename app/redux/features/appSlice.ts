"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
type AppSliceState = {
  isNavOpen: boolean;
  cards: {
    [key: string]: {
      readMore: boolean;
    };
  };
};

const initialState: AppSliceState = {
  isNavOpen: false,
  cards: {
    "sunday service": { readMore: false },
    "bible study": { readMore: false },
    "next sunday": { readMore: false },
  },
};

export const appSlice = createSlice({
  // `createSlice` will infer the state type from the `initialState` argument
  name: "app",
  initialState,
  // Use the PayloadAction type to declare the contents of `action.payload`
  reducers: {
    setIsNavOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isNavOpen = payload;
    },
    setReadMore: (state, { payload }: PayloadAction<{ cardId: string; value: boolean }>) => {
      const { cardId, value } = payload;
      state.cards[cardId].readMore = value;
    },
  },
});

export const { setIsNavOpen, setReadMore } = appSlice.actions;
export default appSlice.reducer;
