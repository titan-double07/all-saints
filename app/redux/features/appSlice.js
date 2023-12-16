'use client'

import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    isNavOpen: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsNavOpen:(state,{payload})=>{
            state.isNavOpen = payload
        }
    }
})

export const {setIsNavOpen} = appSlice.actions
export default appSlice.reducer