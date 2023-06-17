import React, { Component } from 'react'

export default class LifeCycle extends Component {

    constructor(props) {
      super(props)
        console.log("constructor")
      this.state = {
         count : 0
      }
    }

    componentDidMount(){
        console.log("DidMount")
    }
    
    handleIncrement = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidUpdate(){
        console.log("DidUpdate")

    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
    }

  render() {
    console.log("render")
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

