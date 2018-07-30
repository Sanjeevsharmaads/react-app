import React, { Component } from 'react';
import Welcome from './component/Welcome.js';

class App extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        user: '',
        password:'',
        errorMessage:''
      };
       this.handleUserIdInput=(event) => {
        this.setState({user:event.target.value});
      }

       this.handlePasswordInput=(event) => {
        this.setState({password:event.target.value});
      }
       this.handleSubmit=(event) =>{
         if((this.state.user === 'admin')  && (this.state.password === 'admin')){
          
         
    }
       else {
         this.setState({errorMessage:'Wrong Credentials'});
      }
    }
  }     
  render() {
    return (
          <div>
            <p>{this.state.errorMessage}</p>
            Username:
            <input type="text"    value={this.state.user} onChange={this.handleUserIdInput}/><br/><br/>
            Password:
            <input type="password"   value={this.state.password} onChange={this.handlePasswordInput}/><br/><br/>
            <button onClick={this.handleSubmit}>Login</button>

          </div>
    );
  }
}
export default App;


