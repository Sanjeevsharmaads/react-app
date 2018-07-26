import React, { Component } from 'react';
import Welcome from './component/Welcome.js';

class App extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        user: '',
        password:''
      };
    this.handleSubmit = this.handleSubmit.bind(this);
      }

  handleSubmit(event){
    if((this.state.user === 'admin')  && (this.state.password === 'admin')){
      <Welcome />
    }
    else {
      alert('error:Wrong Credentials');
      }
    }

  render() {
    return (
       <form onSubmit={this.handleSubmit}>
         <label>
           Username:
           <input type="text"    name="user" /><br/><br/>
           Password:
           <input type="password"   name="password" /><br/><br/>
         </label>
           <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;


