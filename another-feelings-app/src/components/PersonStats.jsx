import React,{Component} from 'react';

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: 0,
            feeling: '',
         }
    }

    handleInputs = (event) => {
        //change state to updated value
        if(event.target.name==='name'){
            this.setState({name: event.target.value})
        } else if(event.target.name==='age'){
            this.setState({age:event.target.value})
        } else if(event.target.name==='feeling'){
            this.setState({feeling: event.target.value})
        }

        
    }

    handleSubmission = (event) =>{
        event.preventDefault();
       
        this.props.callBack(this.state);

        console.log(this.state)
    }

    render() { 
        return ( 
            <div>
                <form action="">
                    <fieldset>
                        <legend>Feelings</legend>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text" id='name' name='name' value={this.state.name} onChange={this.handleInputs}/>
                        </div>
                        <div>
                            <label htmlFor="age">Age: </label>
                            <input type="text" id='age' name='age' value={this.state.age} onChange={this.handleInputs}/>
                        </div>
                        <div>
                            <label htmlFor="feeling">How do you feel? </label>
                            <input type="text" id='feeling' name='feeling' value={this.state.feeling} onChange={this.handleInputs}/>
                        </div>
                        <button onClick={this.handleSubmission}>Submit</button>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default PersonStats;