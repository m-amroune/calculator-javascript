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
              const val = action.payload;

  // Empêche d’ajouter plusieurs zéros initiaux
  if (state.currentValue === "0" && val === "0") return;

  // Empêche plusieurs décimales
  if (val === "." && state.currentValue.includes(".")) return;

  // Si "0" au départ, on remplace
  if (state.currentValue === "0") {
    state.currentValue = val === "." ? "0." : val;
  } else {
    state.currentValue += val;
  }

        },
        setOperation: (state, action) => {
            const newOperation = action.payload;

            // ignore redundant operator after "-"
            if (state.currentValue === "-" && newOperation !== "-") {
                return; // keep the "-" as a negative sign
            }

            // multiple operators detected
            if (state.operation && state.currentValue === "") {
                if (newOperation === "-") {
                    // if "-" begin negatif number
                    state.currentValue = "-";
                } else {
                    // with other operator => replace the last one
                    state.operation = newOperation;
                }
                return;
            }

            state.firstValue = state.currentValue; // keep first value
            state.operation = newOperation; // store operation type
            state.currentValue = ''; // reset for entering second number
        },
        calculateResult: (state) => {
            const num1 = Number(state.firstValue);
            const num2 = Number(state.currentValue);
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
                    // no valid operation
            }
            state.firstValue = '';
            state.operation = '';
        },
        // reset value with AC button
        clearAll: (state) => {
            state.currentValue = "0"; // reset to "0"
            state.firstValue = ""; // delete last operation
            state.operation = ""; // delete current operation
        }
    }
})

// setCurrentValue action is extacted for use in components
export const { setCurrentValue, setOperation, calculateResult, clearAll } = calculatorSlice.actions;
// Export reducer for the store
export default calculatorSlice.reducer;
