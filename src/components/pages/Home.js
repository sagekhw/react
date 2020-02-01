import React, {Component} from 'react'
import { InfoConsumer } from '../context';

class Home extends Component {
    state = {
        todos: []
    }
    temp =0;
    
    componentDidMount() {
        console.log("1")
        fetch('http://localhost:8080/api/test')
        .then(res => res.json())
        .then((data) => {
            console.log("2")
            document.getElementById("hello").innerHTML = JSON.stringify(data);
            this.setState({ todos: data })
            console.log(this.state.todos)
            //temp = JSON.stringify(data);
        })
        .catch(console.log)
    }

    render() {
        return (
            <div>
                <h2 id="hello">Home page...</h2>
                
                

            </div>
            // <InfoConsumer>
            //     {value => {
            //         return <h2>{value}</h2>
            //     }}
            // </InfoConsumer>
        )
    }
}

export default Home;

