import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentValue, calculateResult, setOperation } from '../features/calculator/calculator.Slice';



const Calculator = () => {
  const dispatch = useDispatch();
  const currentValue = useSelector((state)=> state.calculator.currentValue);
  const handleClick = (value) => {
    if(["+","-", "/", "x"].includes(value)) {
      dispatch(setOperation(value));
    } else if(value === '=') {
      dispatch(calculateResult())
    } else{
      dispatch(setCurrentValue(currentValue + value));
    }
  
};

  return (
    <div className="calculator">
      <div id="display"> {currentValue}   </div>
      <div>
        <button id='clear' className='clear' onClick={() => handleClick("AC")}>AC</button>
        <button id='divide' className='divide' onClick={() => handleClick("/")}  >/</button>
        <button id='multiply' className='multiply' onClick={() => handleClick("x")}>x</button>
        <button id='seven'  className='seven' onClick={() => handleClick("7")} >7</button>
        <button id='eight' className='eight' onClick={() => handleClick("8")}>8</button>
        <button id='nine'  className='nine' onClick={() => handleClick("9")} >9</button>
        <button id='subtract'  className='subtract' onClick={() => handleClick("-")} >-</button>
        <button id='four' className='four' onClick={() => handleClick("4")}  >4</button>
        <button id='five' className='five' onClick={() => handleClick("5")} >5</button>
        <button id='six'  className='six' onClick={() => handleClick("6")} >6</button>
        <button id='add' className='add' onClick={() => handleClick("+")}  >+</button>
        <button id='one' className='one' onClick={() => handleClick("1")} >1</button>
        <button id='two' className='two' onClick={() => handleClick("2")} >2</button>
        <button id='three' className='three' onClick={() => handleClick("3")} >3</button>
        <button id='zero' className='zero' onClick={() => handleClick("0")} >0</button>
        <button id='decimal' className='decimal' onClick={() => handleClick(".")} >.</button>
        <button id='equals' className='equals' onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  )
}

export default Calculator
