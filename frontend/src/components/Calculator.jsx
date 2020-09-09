import React from 'react'
import DisplayBox from './DisplayBox'
import Keypad from './Keypad'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            expression:''
        }
    }

    handleClick = (input) => {
        console.log(input)
        var regex = /^[+*-/=]/g
        if(!(regex.test(input) && !this.state.expression)){
                let expression = this.state.expression;
                expression += input;
                this.setState({
                    expression:expression
                });
        }

        if(input==='=' && this.state.expression){
            let expression = this.state.expression
            let res = eval(expression)
            this.setState({expression:res})
        }
    }

    render(){
        const {expression} = this.state;
        return(
            <div className="calculator">
                <div className="cal-board">
                    <tr><DisplayBox expression = {expression}/></tr>
                    <tr><Keypad onClick = {this.handleClick}/></tr>
                </div>
            </div>
        );
    }
}

export default Calculator;