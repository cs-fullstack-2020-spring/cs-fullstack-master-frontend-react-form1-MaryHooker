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

    //function that handles the changes of the input fields
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

    //function that handles when the button is clicked
    handleSubmission = (event) =>{
        event.preventDefault();
       //referencing the empty div by id and saving it inside of a variable
        let stats = document.getElementById('stats')
        //using .innerText to display what i want rendered in the empty div
        stats.innerText =  `Hello ${this.state.name}. Your age is ${this.state.age} and you're feeling ${this.state.feelings}.`
            //reset the form
        this.setState(
            {
                name: '',
                age: 0,
                feelings: '',
            }
        )
        //sanity
        console.log(`hello ${this.state.name}`)

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
                {/* created empty div to hold text rendered byt the button */}
                <div>
                <p id='stats'></p>
                </div>
            </div>
         );
    }
}
 
export default PersonStats;