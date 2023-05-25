import React, { Component } from 'react'

export default class EventHandlerClass extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         changeValue : ''
      }
    }
    

    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            changeValue : e.target.value
        },()=>{
            console.log(this.state.changeValue);
        })
    }

    render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange}></input>
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}
