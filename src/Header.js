import React, { Component } from 'react';

class Header extends Component{
    constructor(){
      super();
      this.state={
        name:"Unlike",
        count:0
      };
    }
    render(){
      return(
        <div>
                <h1>Sopon Niyomwan Studio Tutorial</h1>
                <h2>{this.state.name}</h2>
                <h2>{this.state.count}</h2>
        </div>
      )
    }
  }

  export default Header;