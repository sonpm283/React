import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoillingVerdict from './BoillingVerdict'


const tryConvert = (temperator, scaleInput) => {
  const input = parseFloat(temperator)

  // if(typeof input !== 'number') return ''
  if(Number.isNaN(input)) return ''

  let output

  if(scaleInput === 'f') {
    output = (input - 32) / 1.8
  }else {
    output = input * 1.8 + 32
  }

  return Math.round(output * 1000) / 1000
}

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
    const {scale, temperator} = this.state
    
    const celsius = scale === 'f' ? tryConvert(temperator, scale) : temperator
    const fahrenheit = scale === 'c' ? tryConvert(temperator, scale) : temperator

    return (
      <div>
        <h2>Calculator</h2>
        <TemperatureInput 
          title='C'
          temperature = {celsius}
          onTemperatureChange={this.handleChange('c')}
        />

        <TemperatureInput 
          title='F'
          temperature = {fahrenheit}
          onTemperatureChange={this.handleChange('f')}
        />

        <BoillingVerdict celsius={Number(celsius)} />
      </div>
    )
  }
}

export default Calculator