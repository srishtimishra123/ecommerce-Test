const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        addProfile(state, action) {
            debugger
            console.log("state",state,action.payload)
            state.data["profile"]=action.payload;
        },
    },
   
});

export const { addProfile } = profileSlice.actions;
export default profileSlice.reducer;

