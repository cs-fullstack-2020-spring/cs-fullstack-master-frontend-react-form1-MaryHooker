import React,{Component} from 'react';
import PersonStats from './PersonStats';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: 0,
            feelings: '',
         }
    }

    callBackName = (name) =>{
        this.setState(
            {
                name: name
            }
        )
        
       
    }
    callBackAge = (age) =>{
        this.setState(
            {
                age: age
            }
        )
    }

    callBackFeelings = (feelings) =>{
        this.setState(
            {
                feelings:feelings
            }
        )
    }

    render() { 
        return ( 
            <div>
            <div>
                <PersonStats callBackName={this.callBackName} callBackAge={this.callBackAge} callBackFeelings={this.callBackFeelings}/>
            </div>
            <div>
                
                <p>{`Hello ${this.state.name}. Your age is ${this.state.age} and you're feeling ${this.state.feelings}.`}</p>
                
            </div>
            </div>
         );
    }
}
 
export default AppContainer;