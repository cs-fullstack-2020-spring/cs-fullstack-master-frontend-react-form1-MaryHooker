import React,{Component} from 'react';
import PersonStats from './PersonStats';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
  

    render() { 
        return ( 
            <div>
            <div>
                <PersonStats/>
            </div>
            <div>
                
                
                
            </div>
            </div>
         );
    }
}
 
export default AppContainer;