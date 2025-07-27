// import tool that alows Redux store creation
import { configureStore } from "@reduxjs/toolkit";
// Import reducer
import calculatorReducer from './features/calculator/calculator.Slice';

// Creation store : calculatorReducer manages calculator part of the global state
const store = configureStore({
    reducer: {
        calculator: calculatorReducer
    }
})

export default store;