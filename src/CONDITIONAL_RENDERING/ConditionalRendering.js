import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

export default class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    
  render() {
   if(this.state.isLoggedIn){
    return (
        <div>
            <HomePage />
        </div>
      )
   }else{
    return(
        <div>
             <LoginPage />
        </div>
    )
   }
  }
}
