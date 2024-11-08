import { createAsyncThunk } from "@reduxjs/toolkit"


export const getCharacterListThunk = createAsyncThunk('character/getCharacterList', async () => {

    let url = "https://dragonball-api.com/api/characters?limit=10"
    const req = await fetch(url)
    const json = await req.json()
    return json.items

})