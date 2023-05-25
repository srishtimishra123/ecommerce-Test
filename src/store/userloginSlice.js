const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const userloginSlice = createSlice({
    name: 'profile',
    initialState: {
        login: false,
        status: STATUSES.IDLE,
    },
    reducers: {
        loginTemp(state, action) {
            
            console.log("state",state,action.payload)
            state.login=action.payload
        },
       
    },
   
});

export const { loginTemp } = userloginSlice.actions;
export default userloginSlice.reducer;

