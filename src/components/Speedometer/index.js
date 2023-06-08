// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  brake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="speed-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="img"
          />
          <h1 className="speed">Speed is {speed}mph</h1>
          <p className="limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="btn-container">
            <button className="btn1" type="button" onClick={this.accelerate}>
              Accelerate
            </button>
            <button className="btn2" type="button" onClick={this.brake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
