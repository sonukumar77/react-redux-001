import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:"Theme",
    initialState:{
        isLight:false
    },
    reducers:{
        setIsLight:(initialState,action) => {
            initialState.isLight = !initialState.isLight;
        }
        
    }
});

export const {setIsLight} = themeSlice.actions;
export default themeSlice.reducer;

