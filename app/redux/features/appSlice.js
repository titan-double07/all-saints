'use client'

import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    isNavOpen: false,
    cards: {
        'sunday service': { readMore: false },
        'bible study': { readMore: false },
        'next sunday': { readMore: false },
    }
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsNavOpen: (state, { payload }) => {
            state.isNavOpen = payload
        },
        setReadMore: (state, { payload }) => {
            const { cardId, value } = payload;
            state.cards[cardId].readMore = value;
        },
    }
})

export const { setIsNavOpen, setReadMore } = appSlice.actions
export default appSlice.reducer