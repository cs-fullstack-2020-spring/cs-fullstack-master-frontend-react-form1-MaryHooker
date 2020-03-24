import React,{Component} from 'react';
import PersonStats from './PersonStats';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           person:[],
         }
    }

    callBack = (person) =>{
        this.setState(
            {
                person: person,
            }
        )
    }

    render() { 
        return ( 
            <div>
            <div>
                <PersonStats callBack={this.callBack}/>
            </div>
            <div>
                {
                    <p>Hello {this.state.person.name}. You are {this.state.person.age} years old and you feel {this.state.person.feeling}.</p>
                    }
            </div>
            </div>
         );
    }
}
 
export default AppContainer;