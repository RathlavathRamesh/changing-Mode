// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isdark: true}

  changelight = () => {
    this.setState(prev => ({isdark: false}))
  }

  changedark = () => {
    this.setState(prev => ({isdark: true}))
  }

  render() {
    const {isdark} = this.state

    let cardItem
    if (isdark === true) {
      cardItem = (
        <div className="darkModeCard">
          <h1 className="heading1">Click To Change Mode</h1>
          <button
            className="light-btn"
            type="button"
            onClick={this.changelight}
          >
            Light Mode
          </button>
        </div>
      )
    } else {
      cardItem = (
        <div className="darkModeCard2">
          <h1 className="heading2">Click To Change Mode</h1>
          <button className="dark-btn" type="button" onClick={this.changedark}>
            dark Mode
          </button>
        </div>
      )
    }
    return cardItem
  }
}

export default LightDarkMode
