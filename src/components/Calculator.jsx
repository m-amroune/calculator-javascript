import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentValue, calculateResult, setOperation, clearAll } from '../features/calculator/calculator.Slice';




const Calculator = () => {
  
  const dispatch = useDispatch(); // function that sends an action to the store
  const currentValue = useSelector((state)=> state.calculator.currentValue); 
  const handleClick = (value) => {
    if(["+","-", "/", "x"].includes(value)) {
      dispatch(setOperation(value));
    } else if(value === '=') {
      dispatch(calculateResult())
    }else if(value === "AC"){
       dispatch(clearAll());
    } else if(currentValue === "0" && value === "0"){ // multuple zeros ignored at the beginning
      return; 
    }
     else{
      dispatch(setCurrentValue(value));
    }
  
};

  return (
    <div className="calculator">
      <div id="display"> {currentValue}   </div>
      <div className='keypad'>
        <button id='clear' className='clear' onClick={() => handleClick("AC")}>AC</button>
        <button id='divide' className='divide operator' onClick={() => handleClick("/")}  >/</button>
        <button id='multiply' className='multiply operator' onClick={() => handleClick("x")}>x</button>
        <button id='seven'  className='seven digit' onClick={() => handleClick("7")} >7</button>
        <button id='eight' className='eight digit' onClick={() => handleClick("8")}>8</button>
        <button id='nine'  className='nine digit' onClick={() => handleClick("9")} >9</button>
        <button id='subtract'  className='subtract operator' onClick={() => handleClick("-")} >-</button>
        <button id='four' className='four digit' onClick={() => handleClick("4")}  >4</button>
        <button id='five' className='five digit' onClick={() => handleClick("5")} >5</button>
        <button id='six'  className='six digit' onClick={() => handleClick("6")} >6</button>
        <button id='add' className='add operator' onClick={() => handleClick("+")}  >+</button>
        <button id='one' className='one digit' onClick={() => handleClick("1")} >1</button>
        <button id='two' className='two digit' onClick={() => handleClick("2")} >2</button>
        <button id='three' className='three digit' onClick={() => handleClick("3")} >3</button>
        <button id='zero' className='zero digit' onClick={() => handleClick("0")} >0</button>
        <button id='decimal' className='decimal digit' onClick={() => handleClick(".")} >.</button>
        <button id='equals' className='equals' onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  )
}

export default Calculator
