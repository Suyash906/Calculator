import React , {Component} from 'react';



class History extends Component{
    constructor(props){

        super(props);
        this.calculations = [{"_id":"5f5d5cdeec636ba40ee36ed8","expression":"3+3","name":"UserA","email":"usera@gmail.com","result":"6.00","date":"2020-09-12T23:42:22.031Z","__v":0},{"_id":"5f5d567cec636ba40ee36ed7","expression":"32-5","name":"UserA","email":"usera@gmail.com","result":"27.00","date":"2020-09-12T23:15:08.596Z","__v":0},{"_id":"5f59c912494f64958d399d78","expression":"36-89","name":"UserA","email":"usera@gmail.com","result":"-53.00","date":"2020-09-10T06:34:58.393Z","__v":0},{"_id":"5f59c884494f64958d399d77","expression":"36-5","name":"UserA","email":"usera@gmail.com","result":"31.00","date":"2020-09-10T06:32:36.226Z","__v":0},{"_id":"5f59c82b494f64958d399d76","expression":"3069.989900*0","name":"UserA","email":"usera@gmail.com","result":"0.00","date":"2020-09-10T06:31:07.865Z","__v":0},{"_id":"5f59c823494f64958d399d75","expression":"31.0099*99","name":"UserA","email":"usera@gmail.com","result":"3069.98","date":"2020-09-10T06:30:59.263Z","__v":0},{"_id":"5f59c80c494f64958d399d74","expression":"36-5","name":"UserA","email":"usera@gmail.com","result":"31.00","date":"2020-09-10T06:30:36.523Z","__v":0},{"_id":"5f59c71615793d94fccf0a28","expression":"36-","name":"UserA","email":"usera@gmail.com","result":"Invalid","date":"2020-09-10T06:26:30.240Z","__v":0},{"_id":"5f59c6cf15793d94fccf0a27","expression":"23-5","name":"UserA","email":"usera@gmail.com","result":"18.00","date":"2020-09-10T06:25:19.721Z","__v":0},{"_id":"5f59c6bc15793d94fccf0a26","expression":"23+5","name":"UserA","email":"usera@gmail.com","result":"28.00","date":"2020-09-10T06:25:00.374Z","__v":0}]
        this.state = {
            records: []
        }
    }

    componentDidMount(){
        this.setState({
            records: [...this.calculations]
        })
    }

    render(){
        return (
            <table className="table">
            <tbody>
                <tr>
                    <th style={{textAlign:'left'}}>Expression</th>
                    <th style={{textAlign:'left'}}>Result</th>
                </tr>
                {this.state.records.map(record => (
                    <tr>
                    <td>{record.expression}</td>
                    <td>{record.result}</td>
                </tr>
                ))}
            </tbody>
        </table>
        )
    }
}

export default History;