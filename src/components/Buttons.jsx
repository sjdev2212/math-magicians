
import React, { useState } from 'react';
import calculate from './logic/calculate';

const start = {
  total: '0',
};
const Buttons = () => {
  const [obj, setObj] = useState(start);

  const pressedButton = (obj, btn) => {
    const newCalc = calculate(obj, btn);
    if (!newCalc.next && !newCalc.total) {
      newCalc.next = 0;
    }
    setObj(newCalc);
  };

  return (
    <section>
      <div className="container">
        <div className="display">
          <p className="display-2">
            {obj.total}
            {obj.operation}
            {obj.next}
          </p>
        </div>
        <div className="all-buttons">
          <button
            type="button"
            className="btn all-clear"
            onClick={() => pressedButton(obj, 'AC')}
          >
            AC
          </button>
          <button
            type="button"
            className="btn last-clear"
            onClick={() => pressedButton(obj, '+/-')}
          >
            +/-
          </button>
          <button
            type="button"
            className="btn "
            onClick={() => pressedButton(obj, '%')}
          >
            %
          </button>
          <button
            type="button"
            className="btn operation"
            onClick={() => pressedButton(obj, '÷')}
          >
            /
          </button>
          <button
            type="button"
            className="btn number"
            onClick={() => pressedButton(obj, '7')}
          >
            7
          </button>
          <button
            type="button"
            className="btn number"
            onClick={() => pressedButton(obj, '8')}
          >
            8
          </button>
          <button
            type="button"
            className="btn number"
            onClick={() => pressedButton(obj, '9')}
          >
            9
          </button>
          <button
            type="button"
            className="btn operation"
            onClick={() => pressedButton(obj, 'x')}
          >
            X
          </button>
          <button
            type="button"
            className="btn number"
            onClick={() => pressedButton(obj, '4')}
          >
            4
          </button>
          <button
            type="button"
            className="btn number"
            onClick={() => pressedButton(obj, '5')}
          >
            5
          </button>
          <button
            type="button"
            className="btn number"
            onClick={() => pressedButton(obj, '6')}
          >
            6
          </button>
          <button
            type="button"
            className="btn operation"
            onClick={() => pressedButton(obj, '-')}
          >
            -
          </button>
          <button
            type="button"
            className="btn number"
            onClick={() => pressedButton(obj, '1')}
          >
            1
          </button>
          <button
            type="button"
            className="btn number"
            onClick={() => pressedButton(obj, '2')}
          >
            2
          </button>
          <button
            type="button"
            className="btn number"
            onClick={() => pressedButton(obj, '3')}
          >
            3
          </button>
          <button
            type="button"
            className="btn operation"
            onClick={() => pressedButton(obj, '+')}
          >
            +
          </button>
          <button
            type="button"
            className="btn number zero"
            onClick={() => pressedButton(obj, '0')}
          >
            0
          </button>
          <button
            type="button"
            className="btn number"
            onClick={() => pressedButton(obj, '.')}
          >
            .
          </button>
          <button
            type="button"
            className="btn equal operation"
            onClick={() => pressedButton(obj, '=')}
          >
            =
          </button>
        </div>
      </div>
    </section>
  );
};
export default Buttons;
