const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        removeAll(state,action){
            while(state.length > 0) {
                state.pop();
            }
            
        }
    },
});

export const { add, remove,removeAll } = cartSlice.actions;
export default cartSlice.reducer;