import React, { useState } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumberClick = (number) => {
    if (displayValue === '0' || waitingForSecondOperand) {
      setDisplayValue(number);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorClick = (selectedOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(result);
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(selectedOperator);
  };

  const performCalculation = () => {
    const secondOperand = parseFloat(displayValue);

    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
      setWaitingForSecondOperand(false);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleEqualClick = () => {
    if (operator && !waitingForSecondOperand) {
      const result = performCalculation();
      setDisplayValue(result);
      setFirstOperand(result);
      setOperator(null);
      setWaitingForSecondOperand(true);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__display">{displayValue}</div>
      <div className="calculator__keys">
        <button
          className="key--operator"
          onClick={() => handleOperatorClick('+')}
        >
          +
        </button>
        <button
          className="key--operator"
          onClick={() => handleOperatorClick('-')}
        >
          -
        </button>
        <button
          className="key--operator"
          onClick={() => handleOperatorClick('*')}
        >
          &times;
        </button>
        <button
          className="key--operator"
          onClick={() => handleOperatorClick('/')}
        >
          ÷
        </button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleDecimalClick}>.</button>
        <button onClick={handleClearClick}>AC</button>
        <button className="key--equal" onClick={handleEqualClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
