import React, { Component } from 'react'

export default class ClassCompIndex extends Component {
 
  constructor(props) {
   super(props)
 
   this.state = {
      count : 0
   }
 }
np
 handleIncrement = () => {
    this.setState({
        count : this.state.count + 1
    })
 }

    render() {
        const {count} = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}
