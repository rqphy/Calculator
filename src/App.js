import './style.css'
import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

export const ACTIONS = {
  ADD_DIGIT: "add_digit",
  CHOOSE_OPERATION: "choose_operation",
  CLEAR: "clear",
  DELETE_DIGIT: 'delete_digit',
  EVALUATE: "evaluate"
}

function reducer(state, { type, payload })
{
  switch(type)
  {
    case ACTIONS.ADD_DIGIT:
      if(payload.digit === "0" && state.currentOperand === "0") return state
      if(payload.digit === "." && state.currentOperand.includes(".")) return state
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
  }
}

const App = () =>
{
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )
  return (
    <div className="calculator_grid">
      <div className="output">
        <div className="previous_operand">{currentOperand} {operation}</div>
        <div className="current_operand">{previousOperand}</div>
      </div>
      <button className="span_two">AC</button>
      <button>DEL</button>
      <OperationButton operation={"÷"} dispatch={dispatch} />
      <DigitButton digit={"1"} dispatch={dispatch} />
      <DigitButton digit={"2"} dispatch={dispatch} />
      <DigitButton digit={"3"} dispatch={dispatch} />
      <OperationButton operation={"x"} dispatch={dispatch} />
      <DigitButton digit={"4"} dispatch={dispatch} />
      <DigitButton digit={"5"} dispatch={dispatch} />
      <DigitButton digit={"6"} dispatch={dispatch} />
      <OperationButton operation={"+"} dispatch={dispatch} />
      <DigitButton digit={"7"} dispatch={dispatch} />
      <DigitButton digit={"8"} dispatch={dispatch} />
      <DigitButton digit={"9"} dispatch={dispatch} />
      <OperationButton operation={"-"} dispatch={dispatch} />
      <DigitButton digit={"."} dispatch={dispatch} />
      <DigitButton digit={"0"} dispatch={dispatch} />
      <button className="span_two">=</button>
    </div>
  );
}

export default App;
