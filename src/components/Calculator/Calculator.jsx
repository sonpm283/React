import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoillingVerdict from './BoillingVerdict'

export class Calculator extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      temperator: '',
      scale: 'c'
    }
  }

  handleChange = (scale) => (value) => {
    this.setState({
      temperator: value,
      scale
    })
  }
  
  render() {
    return (
      <div>
        <h2>Calculator</h2>
        <TemperatureInput 
          title='Celsius'
          temperature = {this.state.temperator}
          onTemperatureChange={this.handleChange('c')}
        />

        <TemperatureInput 
          title='Fahrenheit'
          temperature = {this.state.temperator}
          onTemperatureChange={this.handleChange('f')}
        />

        <BoillingVerdict celsius={100} />
      </div>
    )
  }
}

export default Calculator