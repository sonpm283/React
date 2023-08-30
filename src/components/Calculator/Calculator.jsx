import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoillingVerdict from './BoillingVerdict'

const TEMPERATURE_NAMES = {
  C: 'Celsius',
  F: 'Fahrenheit'
}

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8
}

const toFahrenheit = (celsius) => {
  return (celsius * 1.8) + 32
}

const tryConvert = (temperator, callback) => {
  const input = parseFloat(temperator)

  // if(typeof input !== 'number') return ''
  if(Number.isNaN(input)) return ''

  let output = callback(input)

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
    //Closures
    this.setState({
      temperator: value,
      scale
    })
  }
  
  render() {
    const {scale, temperator} = this.state
    
    const celsius = scale === 'f' ? tryConvert(temperator, toCelsius) : temperator
    const fahrenheit = scale === 'c' ? tryConvert(temperator, toFahrenheit) : temperator

    return (
      <div>
        <h2>Calculator</h2>
        <TemperatureInput 
          title={TEMPERATURE_NAMES.C}
          temperature = {celsius}
          onTemperatureChange={this.handleChange('c')}
        />

        <TemperatureInput 
          title={TEMPERATURE_NAMES.F}
          temperature = {fahrenheit}
          onTemperatureChange={this.handleChange('f')}
        />

        <BoillingVerdict celsius={Number(celsius)} />
      </div>
    )
  }
}

export default Calculator