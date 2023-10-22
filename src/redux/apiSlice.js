import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useContext } from "react";
// import React, { useState } from "react";
export let getUserData = createAsyncThunk(`api/getUser`, async function (id) {
    let res = await axios.get(`https://trelloapp.onrender.com/getUser/${id}`)
    // console.log("data", res.data.user)
    return res.data.user
})
let initialState = { userData: [] }
let apiSlice = createSlice({
    name: "api",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.userData = action.payload
        })
    }
})
export let apiReducer = apiSlice.reducer