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
        },
        setOperation: (state, action) => {
            state.firstValue = state.currentValue; // keep first value
            state.operation = action.payload; // store operation type
            state.currentValue = ''; // reset for entering second number
        },
        calculateResult: (state) => {
            const num1 = Number(state.firstValue);
            const num2 = Number(state.currentValue)
            switch (state.operation) {
                case '+':
                   state.currentValue = String(num1 + num2);
                    break;
                case '-':
                    state.currentValue = String(num1 - num2);
                    break;
                case 'x':
                    state.currentValue = String(num1 * num2);
                    break;
                case '/':
                   state.currentValue = String(num1 / num2);
                    break;
                default:
                   
        }
         state.firstValue = '';
                    state.operation = '';
            }
    }
})

// setCurrentValue action is extacted for use in components
export const {setCurrentValue, setOperation, calculateResult} = calculatorSlice.actions;
// Export reducer for the store
export default calculatorSlice.reducer