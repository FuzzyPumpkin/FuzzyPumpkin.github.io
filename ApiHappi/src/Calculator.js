import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            runningTotal: 0,
            lastOperator: "",
            clearDisplay: false,
            resultDisp: ""
        };
        this.calcOperation = this.calcOperation.bind(this);
        this.dispNum = this.dispNum.bind(this);
        this.clearDisp = this.clearDisp.bind(this);
        this.tipCalc = this.tipCalc.bind(this);
    }
   
    dispNum(num){
        if(this.state.clearDisplay === true){
            this.setState({
                clearDisplay: false,
                resultDisp: num
            });
        } else if(this.state.resultDisp.length <= 10){
            let newDisplay = this.state.resultDisp + num;
            this.setState({
                resultDisp: newDisplay
            });
        };
    };
    
    clearDisp(){
        this.setState({
            runningTotal: 0,
            resultDisp: ""
        });
    };
    
    calcOperation(oper){
        if(this.state.lastOperator === "plus"){
            let newVal = this.state.runningTotal + parseFloat(this.state.resultDisp);
            this.setState({
                runningTotal: newVal,
                resultDisp: newVal
            });
        } else if(this.state.lastOperator === "minus"){
            let newVal = this.state.runningTotal - parseFloat(this.state.resultDisp);
            this.setState({
                runningTotal: newVal,
                resultDisp: newVal
            });
        } else if(this.state.lastOperator === "divide"){
            let newVal = this.state.runningTotal / parseFloat(this.state.resultDisp);
            this.setState({
                runningTotal: newVal,
                resultDisp: newVal
            });
        } else if(this.state.lastOperator === "multi"){
            let newVal = this.state.runningTotal * parseFloat(this.state.resultDisp);
            this.setState({
                runningTotal: newVal,
                resultDisp: newVal
            });
        } else{
            let newVal = parseFloat(this.state.resultDisp);
            this.setState({
                runningTotal: newVal,
                resultDisp: newVal
            });
        };
        this.setState({
            lastOperator: oper,
            clearDisplay: true,
        });
    };
    
    tipCalc(num){
        let currDisplay = parseFloat(this.state.resultDisp).toFixed(2);
        let calcTotal = ((currDisplay * num) / 100).toFixed(2);
        this.setState({
            runningTotal: calcTotal,
            resultDisp: calcTotal
        });
    };

    render(){
        return(
            <section className="section-calculator app">
                <div className="calc__container">
                    <div className="calc__row">
                        <div className="calc__window">{this.state.resultDisp}</div>
                        <div className="calc__cell calc__op" onClick={this.clearDisp}>C</div>
                    </div>
                    <div className="calc__row">
                        <div className="calc__cell calc__num" onClick={() => {this.dispNum(1)}}>1</div>
                        <div className="calc__cell calc__num" onClick={() => {this.dispNum(2)}}>2</div>
                        <div className="calc__cell calc__num" onClick={() => {this.dispNum(3)}}>3</div>
                        <div className="calc__cell calc__op" onClick={() => {this.calcOperation("plus")}}>+</div>
                    </div>
                    <div className="calc__row">
                        <div className="calc__cell calc__num" onClick={() => {this.dispNum(4)}}>4</div>
                        <div className="calc__cell calc__num" onClick={() => {this.dispNum(5)}}>5</div>
                        <div className="calc__cell calc__num" onClick={() => {this.dispNum(6)}}>6</div>
                        <div className="calc__cell calc__op" onClick={() => {this.calcOperation("minus")}}>-</div>
                    </div>
                    <div className="calc__row">
                        <div className="calc__cell calc__num" onClick={() => {this.dispNum(7)}}>7</div>
                        <div className="calc__cell calc__num" onClick={() => {this.dispNum(8)}}>8</div>
                        <div className="calc__cell calc__num" onClick={() => {this.dispNum(9)}}>9</div>
                        <div className="calc__cell calc__op" onClick={() => {this.calcOperation("divide")}}>&divide;</div>
                    </div>
                    <div className="calc__row">
                        <div className="calc__cell calc__op"  onClick={() => {this.dispNum(".")}}>.</div>
                        <div className="calc__cell calc__num" onClick={() => {this.dispNum(0)}}>0</div>
                        <div className="calc__cell calc__op" onClick={() => {this.calcOperation("equal")}}>=</div>
                        <div className="calc__cell calc__op" onClick={() => {this.calcOperation("multi")}}>x</div>
                    </div>
                    <div className="calc__row">
                        <div className="calc__tip" onClick={() => {this.tipCalc(15)}}>15%</div>
                        <div className="calc__tip" onClick={() => {this.tipCalc(20)}}>20%</div>
                    </div>
                </div>
            </section>
        )
    };
};

export default Calculator;