import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    data: null,
    error: null,
}

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {

    },
    extraReducers(builder) {

    }
})