import React from 'react'
import DisplayBox from './DisplayBox'
import Keypad from './Keypad'
import {BASE_URL} from './../config'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            expression:'0'
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
            const data = {
                name:'UserA',
                email:"usera@gmail.com",
                expression: expression,

            }
            fetch(`${BASE_URL}/calculate`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json,  text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    res.text().then(data => {
                        console.log(data);
                        this.setState({
                            expression: JSON.parse(data).result
                        })
                    })
                } else{
                    this.setState({
                        expression: 'Invalid'
                    })
                }
            });
        }
    }
    
    render(){
        const {expression} = this.state;
        return(
            <div className="calculator">
                <div className="cal-board">
                    <tr><DisplayBox expression = {expression}/></tr>
                    <tr><Keypad onClick = {this.handleClick}/></tr>
                    <tr>
                        <div className="clear-row">
                            <button className="clear">RESET</button>
                        </div>
                    </tr>
                </div>
            </div>
        );
    }
}

export default Calculator;