import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentValue } from '../features/calculator/calculator.Slice';



const Calculator = () => {
  const dispatch = useDispatch();
  const currentValue = useSelector((state)=> state.calculator.currentValue)
  return (
    <div className="calculator">
      <div id="display"> {currentValue}   </div>
      <div>
        <button id='clear' className='clear'>AC</button>
        <button id='divide' className='divide'  >/</button>
        <button id='multiply' className='multiply'>x</button>
        <button id='seven'  className='seven' >7</button>
        <button id='eight' className='eight'>8</button>
        <button id='nine'  className='nine' >9</button>
        <button id='subtract'  className='subtract' >-</button>
        <button id='four' className='four'  >4</button>
        <button id='five' className='five' >5</button>
        <button id='six'  className='six' >6</button>
        <button id='add' className='add'  >+</button>
        <button id='one' className='one' >1</button>
        <button id='two' className='two' >2</button>
        <button id='three' className='three' >3</button>
        <button id='zero' className='zero' >0</button>
        <button id='decimal' className='decimal' >.</button>
        <button id='equals' className='equals'>=</button>
      </div>
    </div>
  )
}

export default Calculator
