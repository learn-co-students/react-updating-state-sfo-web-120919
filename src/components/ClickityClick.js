// Code ClickityClick Component Here
import React, {Component} from 'react'

export default class ClickityClick extends Component {

      state = {
      hasBeenClicked: false
    }

    handleClick = () => {
      //update state
      this.setState(previousState => {
        return {
          hasBeenClicked: !previousState.hasBeenClicked
        }
      })
    }
  
    render() {
      return(
        <div>
          <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      )
    }

}