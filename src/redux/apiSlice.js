import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const token = localStorage.getItem('userToken');
export let getUserData = createAsyncThunk("api/getUser", async function () {
    let res = await axios.get("https://trelloapp.onrender.com/getUser", {
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    console.log("data",res.data.user)
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