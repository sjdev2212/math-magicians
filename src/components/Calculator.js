import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (

      <section>
        <div className="container">
          <div className="display">
            <div className="display-2">0</div>
            <div className="temp-result" />
          </div>
          <div className="all-buttons">
            <div className="btn all-clear">AC</div>
            <div className="btn last-clear">+/-</div>
            <div className="btn ">%</div>
            <div className="btn operation">/</div>
            <div className="btn number">7</div>
            <div className="btn number">8</div>
            <div className="btn number">9</div>
            <div className="btn operation">X</div>
            <div className="btn number">4</div>
            <div className="btn number">5</div>
            <div className="btn number">6</div>
            <div className="btn operation">-</div>
            <div className="btn number">1</div>
            <div className="btn number">2</div>
            <div className="btn number">3</div>
            <div className="btn operation">+</div>
            <div className="btn number zero">0</div>
            <div className="btn number">.</div>
            <div className="btn equal operation">=</div>

          </div>
        </div>
      </section>
    );
  }
}
export default Calculator;
