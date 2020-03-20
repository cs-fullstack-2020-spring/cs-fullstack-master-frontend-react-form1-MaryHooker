import React,{Component} from 'react';

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: 0,
            feelings: '',
         }
    }

    changeInputs = (event) =>{
        if(event.target.name==='name'){
            this.setState(
                {
                    name: event.target.value
                }
            )
        } else if(event.target.name==='age'){
            this.setState(
                {
                    age: event.target.value
                }
            )
        } else if(event.target.name==='feelings'){
            this.setState(
                {
                    feelings:event.target.value
                }
            )
        }
    }

    handleSubmission = (event) =>{
        event.preventDefault();

        this.props.callBackName(this.state.name)
        this.props.callBackAge(this.state.age)
        this.props.callBackFeelings(this.state.feelings)
    }

    render() { 
        return ( 
            <div>
                <form action="">
                    <fieldset>
                        <legend>Feelings</legend>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id='name' name='name' value={this.state.name} onChange={this.changeInputs}/>
                        </div>
                        <div>
                            <label htmlFor="age">Age:</label>
                            <input type="text" id='age' name='age' value={this.state.age} onChange={this.changeInputs}/>
                        </div>
                        <div>
                            <label htmlFor="feelings">How do you feel?</label>
                            <input type="text" id='feelings' name='feelings' value={this.state.feelings} onChange={this.changeInputs}/>
                        </div>

                        <button onClick={this.handleSubmission}>Submit</button>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default PersonStats;