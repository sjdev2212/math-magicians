import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      obj: {
        total: '541',
        next: '',
        operation: '',
      },
    };
  }

  pressedButton = (obj, btn) => {
    const newCalc = calculate(obj, btn);
    if (!newCalc.next && !newCalc.total) {
      newCalc.next = 0;
    }
    this.setState({ obj: newCalc });
  };

  render() {
    const { obj } = this.state;
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
            <button type="button" className="btn all-clear" onClick={() => this.pressedButton(obj, 'AC')}>AC</button>
            <button type="button" className="btn last-clear" onClick={() => this.pressedButton(obj, '+/-')}>+/-</button>
            <button type="button" className="btn " onClick={() => this.pressedButton(obj, '%')}>%</button>
            <button type="button" className="btn operation" onClick={() => this.pressedButton(obj, '÷')}>/</button>
            <button type="button" className="btn number" onClick={() => this.pressedButton(obj, '7')}>7</button>
            <button type="button" className="btn number" onClick={() => this.pressedButton(obj, '8')}>8</button>
            <button type="button" className="btn number" onClick={() => this.pressedButton(obj, '9')}>9</button>
            <button type="button" className="btn operation" onClick={() => this.pressedButton(obj, 'x')}>X</button>
            <button type="button" className="btn number" onClick={() => this.pressedButton(obj, '4')}>4</button>
            <button type="button" className="btn number" onClick={() => this.pressedButton(obj, '5')}>5</button>
            <button type="button" className="btn number" onClick={() => this.pressedButton(obj, '6')}>6</button>
            <button type="button" className="btn operation" onClick={() => this.pressedButton(obj, '-')}>-</button>
            <button type="button" className="btn number" onClick={() => this.pressedButton(obj, '1')}>1</button>
            <button type="button" className="btn number" onClick={() => this.pressedButton(obj, '2')}>2</button>
            <button type="button" className="btn number" onClick={() => this.pressedButton(obj, '3')}>3</button>
            <button type="button" className="btn operation" onClick={() => this.pressedButton(obj, '+')}>+</button>
            <button type="button" className="btn number zero" onClick={() => this.pressedButton(obj, '0')}>0</button>
            <button type="button" className="btn number" onClick={() => this.pressedButton(obj, '.')}>.</button>
            <button type="button" className="btn equal operation" onClick={() => this.pressedButton(obj, '=')}>=</button>

          </div>
        </div>
      </section>
    );
  }
}
export default Calculator;
