import { createSlice } from "@reduxjs/toolkit";
import { getCharacterListThunk } from "./characterThunk";


export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        status: 'idle', // 'idle' | 'pending' | 'fulfilled' | 'rejected'
        error: null,
        data: []
    },
    reducers: {
        deleteCharacter: (state,action) => {
            state.data = state.data.filter(character => character.name !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCharacterListThunk.pending, (state,action) => {
            state.status = "pending"
        }).addCase(getCharacterListThunk.rejected,(state,action) => {
            state.status  = "rejected"
            state.error = action.error
        }).addCase(getCharacterListThunk.fulfilled,(state,action) => {
            state.status="fulfilled"
            state.data = action.payload
        })
    }
})

export const characterSelector = (state) => state.character.data
export const characterStatusSelector = (state) => state.character.status
