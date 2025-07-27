import { createSlice } from '@reduxjs/toolkit';

// State initial with current value = 0
const initialState = {
    currentValue: "0", 
}

// Creation Redux slice 
const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    // objects with functions that modify the state
    reducers:{
        setCurrentValue: (state, action) =>{
            state.currentValue = action.payload;
        }
    }
})

// setCurrentValue action is extacted for use in components
export const {setCurrentValue} = calculatorSlice.actions;
// Export reducer for the store
export default calculatorSlice.reducer