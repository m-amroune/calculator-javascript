import { createSlice } from '@reduxjs/toolkit';

// Initial state with current value and full calculation chain
const initialState = {
  currentValue: "0",
  calculationChain: "",
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    // add a digit or decimal to the current input and chain
    setCurrentValue: (state, action) => {
      const value = action.payload;

      // Ignore multiple leading zeros
      if (state.currentValue === "0" && value === "0") return;

      // Block multiple decimal points in the same number
      if (value === "." && state.currentValue.includes(".")) return;

      // If the current value is 0, replace it
      if (state.currentValue === "0") {
        state.currentValue = value === "." ? "0." : value;
        state.calculationChain = value === "." ? "0." : value;
      } else {
        // Otherwise, append the new value
        state.currentValue += value;
        state.calculationChain += value;
      }
    },
    // Add or replace an operator in the calculation chain
    setOperation: (state, action) => {
      const newOperator = action.payload;
      const operatorSymbol = newOperator === "x" ? "*" : newOperator;
      const operatorList = ["+", "-", "*", "/"];
      const lastCharacter = state.calculationChain.slice(-1);
      const secondLastCharacter = state.calculationChain.slice(-2, -1);

      // If the chain is empty, only allow a starting negative sign
      if (state.calculationChain.length === 0) {
        if (operatorSymbol === "-") {
          state.calculationChain = "-";
          state.currentValue = "-";
        }
        return;
      }

      // If the last character is an operator
      if (operatorList.includes(lastCharacter)) {
        // If the new operator is "-" and not preceded by another operator, treat it as a negative sign
        if (operatorSymbol === "-" && !operatorList.includes(secondLastCharacter)) {
          state.calculationChain += "-";
          state.currentValue = "-";
          return;
        }

        // Replace multiple consecutive operators with the last one
        let position = state.calculationChain.length - 1;
        while (position >= 0 && operatorList.includes(state.calculationChain[position])) {
          position--;
        }
        state.calculationChain = state.calculationChain.slice(0, position + 1) + operatorSymbol;
        state.currentValue = "";
        return;
      }

      //  Default case: add the operator normally 
      state.calculationChain += operatorSymbol;
      state.currentValue = "";
    },
    // Evaluate the full expression and updates the result
    calculateResult: (state) => {
      const tokenList = state.calculationChain.match(/(\d+\.?\d*|[+\-*/])/g);

      if (!tokenList || tokenList.length < 3) {
        state.currentValue = "Error";
        return;
      }

      // Detect and combine negative numbers that appear after an operator
    // For example, convert the sequence "*", "-", "5" into "*", "-5" 
      for (let i = 0; i < tokenList.length - 2; i++) {
        const [operator, sign, number] = [tokenList[i], tokenList[i + 1], tokenList[i + 2]];
        const isMathOperator = ["*", "/", "+"].includes(operator);
        if (isMathOperator && sign === "-" && !isNaN(number)) {
          tokenList.splice(i + 1, 2, "-" + number);
        }
      }

      const applyOperation = (leftOperand, rightOperand, operator) => {
        const a = parseFloat(leftOperand);
        const b = parseFloat(rightOperand);
        if (isNaN(a) || isNaN(b)) return "Error";

        switch (operator) {
          case "+": return a + b;
          case "-": return a - b;
          case "*": return a * b;
          case "/": return b !== 0 ? a / b : "Error";
          default: return "Error";
        }
      };

      // Respect operator precedence :  first "*/"" and then "+-""
      const operatorPrecedenceGroups = [["*", "/"], ["+", "-"]];

      for (const operators of operatorPrecedenceGroups) {
        let index = 0;
        while (index < tokenList.length) {
          const currentOperator = tokenList[index];
          if (operators.includes(currentOperator)) {
            const result = applyOperation(tokenList[index - 1], tokenList[index + 1], currentOperator);
            if (result === "Error") {
              state.currentValue = "Error";
              return;
            }
            //  Replace the pattern [left Operand, operator, right Operand] with the result
            tokenList.splice(index - 1, 3, result.toString());
            index--; // adjust index after splice
          } else {
            index++;
          }
        }
      }

      // Final result rounded to 4 decimal places
      const finalResult = parseFloat(tokenList[0]);
      state.currentValue = (Math.round(finalResult * 10000) / 10000).toString();
      state.calculationChain = state.currentValue;
    },
    // Resets the calculator to its initial state
    clearAll: (state) => {
      state.currentValue = "0";
      state.calculationChain = "";
    }
  }
});

export const { setCurrentValue, setOperation, calculateResult, clearAll } = calculatorSlice.actions;
export default calculatorSlice.reducer;


