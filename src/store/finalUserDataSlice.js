const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const finalUserDataSlice = createSlice({
    name: 'profile',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        addProfileFinal(state, action) {
            
            console.log("state",state,action.payload)
            state.data["profile"]=action.payload;
        },
    },
   
});

export const { addProfileFinal } = finalUserDataSlice.actions;
export default finalUserDataSlice.reducer;

