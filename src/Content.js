import React, { Component } from 'react';

class Content extends Component{
    render(){
      return(
        <div>
                <h3>Facebook Library</h3>
                <p>{this.props.title}</p>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
        </div>
      )
    }
  }

  export default Content;